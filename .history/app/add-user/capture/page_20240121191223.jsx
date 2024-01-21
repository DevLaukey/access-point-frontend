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

const Page = () => {
  const [uniqueId, setUniqueId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idNumber, setIdNumber] = useState("");

  useEffect(() => {
    // Generate a unique ID here
    const generatedId = generateUniqueId();
    setUniqueId(generatedId);
  }, []);

  const confirmEntry = async () => {
      console.log("Confirm entry");
      router.push("/add-user/confirm-entry")
  };
  const submitUserDetails = async () => {
    //   input validation
    if (firstName === "" || lastName === "" || idNumber === "") {
      toast.error("Please fill in all fields");
      return;
    }
  };
  const generateUniqueId = () => {
    // Generate a unique ID logic here
    // ...
    return "uniqueId123";
  };

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
