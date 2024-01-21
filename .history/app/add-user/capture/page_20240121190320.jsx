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
  };
  const generateUniqueId = () => {
    // Generate a unique ID logic here
    // ...
    return "uniqueId123";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full mt-4">
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
                                          if (e.target.value.length > 0) {
                            
                                              setFirstName(e.target.value);
                                          } else {
                                              <p className="text-red-500">Please enter a valid name</p>
                        }
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="lname">Last Name</Label>
                  <Input id="lname" placeholder=" Doe" />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="id_number">ID number</Label>
                <Input type="number" id="id_number" placeholder="12345678" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Confirm</Button>
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
