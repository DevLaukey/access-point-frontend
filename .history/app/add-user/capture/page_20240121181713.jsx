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

  useEffect(() => {
    // Generate a unique ID here
    const generatedId = generateUniqueId();
    setUniqueId(generatedId);
  }, []);

    const confirmEntry = async () => {
        console.log("Confirm entry");
    }
  const generateUniqueId = () => {
    // Generate a unique ID logic here
    // ...
    return "uniqueId123";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold m-4">Add User Details</h1>

      <Tabs defaultValue="form" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="form">Use Form</TabsTrigger>
          <TabsTrigger value="qr-code">Use QR-CODE</TabsTrigger>
        </TabsList>
        <TabsContent value="form">
          <Card>
            <CardHeader>
              <CardTitle>form</CardTitle>
              <CardDescription>
                Make changes to your form here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
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
                  style={{ height: "200", maxWidth: "100%", width: "60%" }}
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
          