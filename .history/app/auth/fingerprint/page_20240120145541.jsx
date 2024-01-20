"use client";
import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import NavbarComponent from "../../../components/navbar-component";
const Page = () => {
  const [fingerprintCaptured, setFingerprintCaptured] = useState(false);

  const handleCaptureFingerprint = () => {
    // Code to capture fingerprint goes here
    setFingerprintCaptured(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-2">
      <NavbarComponent />
      <h1 className="text-4xl font-bold mb-4">Fingerprint Capture</h1>
      <iframe
        width={100}
        height={100}
        className="mb-4"
        src="https://lottie.host/embed/ac8bbada-080e-4a95-aae1-bfd6de061909/ckE2mUdqg5.json"
      ></iframe>

      <p className="text-lg mb-8">
        Please place your finger on the fingerprint scanner to capture your
        fingerprint.
      </p>
      {fingerprintCaptured ? (
        <p className="text-green-500 mb-4">
          Fingerprint captured successfully!
        </p>
      ) : (
        <p className="text-red-500 mb-4">
          Fingerprint capture failed. Please try again.
        </p>
      )}
      <Button onClick={handleCaptureFingerprint}>Capture Fingerprint</Button>
    </div>
  );
};

export default Page;
