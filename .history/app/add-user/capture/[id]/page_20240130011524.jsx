"use client";

import { useEffect, useState } from "react";
// import QRCode from "react-qr-code";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams, useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Header from "../../../../components/layout/header";

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
  const { id } = useParams();

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const userObj = await supabase.auth.getUser();
      const user = userObj?.data.user;
      setUser(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  async function saveUserDetails() {
    try {
      const admin_user_id = user.id;
      const { data, error } = await supabase
        .from("users")
        .insert([
          {
            id_number: idNumber,
            first_name: firstName,
            last_name: lastName,
            fingerprint_id: id,
            admin_user: admin_user_id,
            arrival_time: new Date().toISOString(),
          },
        ])
        .select();

      if (error) {
        throw new Error(error.message);
      }
      confirmEntry();

      toast.success("User details saved successfully");
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
  const updateUserDetails = async () => {
    //   save user details
    try {
      //   input validation
      if (firstName === "" || lastName === "" || idNumber === "") {
        toast.error("Please fill in all fields");
        return;
      }
      const { data, error } = await supabase
        .from("users")
        .update({
          first_name: firstName,
          last_name: lastName,
          id_number: idNumber,
        })
        .eq("fingerprint_id", id)
        .select();

      if (error) {
        throw new Error(error.message);
      }

      console.log(data);
      toast.success("User details updated successfully");

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  const generateUniqueId = (id) => {
    const route = `/add-user/capture/:${id}`;

    return id;
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
              onSubmit={updateUserDetails}
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
          <CardFooter className="items-center justify-center w-full space-x-2">
            <Button
              type="submit"
              onClick={updateUserDetails}
              className="bg-gray-500 text-white px-4 py-2 rounded-md w-full"
            >
              Update
            </Button>
            <Button
              type="submit"
              onClick={() => router.push("/dashboard")}
              className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
            >
              Confirm
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <>
      <Header />

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
                <CardTitle>QR-CODE</CardTitle>
                <CardDescription>
                  Open the mobile app and scan the QR-CODE to capture the data
                  from the national ID.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-col items-center justify-center bg-white p-4 rounded-md shadow-md">
                  {/* <QRCode
                    size={150}
                    style={{ height: "200", maxWidth: "100%", width: "100%" }}
                    value={uniqueId}
                    viewBox={`500 500 500 500`}
                  /> */}
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={confirmEntry}>Confirm Entry</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Page;
