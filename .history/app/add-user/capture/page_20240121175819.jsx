"use client";

import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";

const Page = () => {
  const [uniqueId, setUniqueId] = useState("");

  useEffect(() => {
    // Generate a unique ID here
    const generatedId = generateUniqueId();
    setUniqueId(generatedId);
  }, []);

  const generateUniqueId = () => {
    // Generate a unique ID logic here
    // ...
    return "uniqueId123";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">StackFinder Search</h1>

      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Form</TabsTrigger>
          <TabsTrigger value="qr-code">Use Mobile App</TabsTrigger>
        </TabsList>
        <TabsContent value="form">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="qr-conde">
          <div className="flex flex-col items-center justify-center bg-white p-4 rounded-md shadow-md">
            <QRCode
              size={200}
              style={{ height: "250", maxWidth: "100%", width: "100%" }}
              value={uniqueId}
              viewBox={`500 500 500 500`}
            />{" "}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
