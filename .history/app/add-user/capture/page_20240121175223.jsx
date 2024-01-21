"use client"

import { useEffect, useState } from 'react';
import QRCode from "react-qr-code";

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
        <h1 className="text-2xl font-bold mb-4">StackFinder Search</h1>
        <div
          style={{
            height: "auto",
            margin: "0 auto",
            maxWidth: 64,
            width: "100%",
          }}
        >
          <QRCode
            size={500}
            style={{ height: "500", maxWidth: "100%", width: "100%" }}
            value={uniqueId}
            viewBox={`0 0 500 500`}
          />
        </div>
      </div>
    );
};

export default Page;
