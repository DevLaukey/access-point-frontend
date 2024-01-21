"use client"

import { useEffect, useState } from 'react';
import QRCode from "react-qr-code";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

const Page = () => {
    const [uniqueId, setUniqueId] = useState('');

    useEffect(() => {
        // Generate a unique ID here
        const generatedId = generateUniqueId();
        setUniqueId(generatedId);
    }, []);

    const generateUniqueId = () => {
        // Generate a unique ID logic here
        // ...
        return 'uniqueId123';
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <Tabs className="w-full">
          <TabsList className="flex justify-center">
            <TabsTrigger className="px-4 py-2">QR Code</TabsTrigger>
          </TabsList>
          <TabsContent className="w-full">
            <div className="flex flex-col items-center justify-center bg-white p-4 rounded-md shadow-md">
              <QRCode
                size={200}
                style={{ height: "250", maxWidth: "100%", width: "100%" }}
                value={uniqueId}
                viewBox={`500 500 500 500`}
              />
            </div>
                </TabsContent>

                </Tabs>
        <h1 className="text-2xl font-bold mb-4">StackFinder Search</h1>
        <div
            className="flex flex-col items-center justify-center bg-white p-4 rounded-md shadow-md" 
        >
          <QRCode
            size={200}
            style={{ height: "250", maxWidth: "100%", width: "100%" }}
            value={uniqueId}
            viewBox={`500 500 500 500`}
          />
        </div>
      </div>
    );
};

export default Page;
