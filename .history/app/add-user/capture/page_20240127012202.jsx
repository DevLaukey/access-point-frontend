"use client";

import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const Page = () => {
  const [uniqueId, setUniqueId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [user, setUser] = useState([]);
  const supabase = createClientComponentClient();
  const [fingerprintTemplate, setFingerprintTemplate] = useState("");
  const [confirmEntryValues, setConfirmEntryValues] = useState(false);

  const router = useRouter();

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const userObj = await supabase.auth.getUser();
      const user = userObj?.data.user;
      const fingerprint = localStorage.getItem("capture") || "";
      setFingerprintTemplate(fingerprint);

      setUser(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Function to generate a unique file name based on user_id and timestamp
  const generateFileName = async (user_id) => {
    const timestamp = Date.now();
    return `${user_id}_${timestamp}`;
  };

  // Function to upload a file in Base64 format to Supabase storage
  const uploadFileToSupabase = async (user_id, base64Data) => {
    try {
      const fileName = generateFileName(user_id);

      // Convert the Base64 string to Uint8Array
      const uint8Array = new Uint8Array(
        atob(base64Data)
          .split("")
          .map((char) => char.charCodeAt(0))
      );

      // Create a Blob from the Uint8Array
      const blob = new Blob([uint8Array]);

      // Upload the file to Supabase storage
      const { data, error } = await supabase.storage
        .from("fingerprints") // Replace "your-bucket-name" with your actual bucket name
        .upload(fileName, blob);

      if (error) {
        console.error("Error uploading file:", error.message);
      } else {
        console.log("File uploaded successfully:", data);
        router.push("/dashboard");
        // The 'data' object will contain information about the uploaded file
      }
    } catch (error) {
      console.error("Error processing file:", error.message);
    }
  };

  async function saveUserDetails() {
    try {
      const user_id = user.id;
      const { data, error } = await supabase
        .from("users")
        .insert([
          {
            first_name: firstName,
            last_name: lastName,
            fingerprint_template: fingerprintTemplate,
            admin_user: user_id,
            arrival_time: new Date().toISOString(),
          },
        ])
        .select();

      if (error) {
        throw new Error(error.message);
      }
      uploadFileToSupabase(user_id, fingerprintTemplate);

      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    // Generate a unique ID here
    const generatedId = generateUniqueId();
    setUniqueId(generatedId);
  }, []);

  const confirmEntry = () => {
    setConfirmEntryValues(true);
  };

  const submitUserDetails = async () => {
    //   input validation
    if (firstName === "" || lastName === "" || idNumber === "") {
      toast.error("Please fill in all fields");
      return;
    }

    //   save user details
    await saveUserDetails();
  };
  const generateUniqueId = () => {
    // Generate a unique ID logic here
    // ...
    return "uniqueId123";
  };

  if (confirmEntryValues) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-full mt-4">
        <ToastContainer />
        <Header />

        <Card>
          <CardHeader>
            <CardTitle>Confirm User Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <form
              onSubmit={handleSubmit}
              className="flex items-center justify-center flex-col"
            >
              <div className="mb-4">
                <Label htmlFor="firstName" className="block font-bold mb-2">
                  First Name
                </Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  className="border border-gray-300 px-4 py-2 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="lastName" className="block font-bold mb-2">
                  Last Name
                </Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  className="border border-gray-300 px-4 py-2 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="idNumber" className="block font-bold mb-2">
                  ID Number
                </Label>
                <Input
                  type="number"
                  id="idNumber"
                  name="idNumber"
                  value={idNumber}
                  onChange={(e) => {
                    setIdNumber(e.target.value);
                  }}
                  className="border border-gray-300 px-4 py-2 rounded-md w-full"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="items-center justify-center w-full">
            <Button
              type="submit"
              onClick={submitUserDetails}
              className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
            >
              Confirm
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full mt-4">
      <ToastContainer />

      <h1 className="text-2xl font-bold m-4">Add User Details</h1>

      <Tabs defaultValue="form" className="w-[full]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="form">Use Form</TabsTrigger>
          <TabsTrigger value="qr-code">Use QR-CODE</TabsTrigger>
        </TabsList>
        <TabsContent value="form">
          <Card>
            <CardHeader>
              <CardTitle>Add User Details</CardTitle>
              <CardDescription>
                Kindly input the data as they appear on the national ID.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex space-x-2">
                <div className="space-y-1">
                  <Label htmlFor="fname">First Name</Label>
                  <Input
                    id="fname"
                    placeholder="John"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="lname">Last Name</Label>
                  <Input
                    id="lname"
                    placeholder="Doe"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="id_number">ID number</Label>
                <Input
                  type="number"
                  id="id_number"
                  placeholder="12345678"
                  onChange={(e) => {
                    setIdNumber(e.target.value);
                  }}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={submitUserDetails}>Confirm</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="qr-code">
          <Card>
            <CardHeader>
              <CardTitle>qr-code</CardTitle>
              <CardDescription>
                Open the mobile app and scan the QR-CODE to capture the data
                from the national ID.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex flex-col items-center justify-center bg-white p-4 rounded-md shadow-md">
                <QRCode
                  size={150}
                  style={{ height: "200", maxWidth: "100%", width: "100%" }}
                  value={uniqueId}
                  viewBox={`500 500 500 500`}
                />{" "}
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={confirmEntry}>Confirm Entry</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
