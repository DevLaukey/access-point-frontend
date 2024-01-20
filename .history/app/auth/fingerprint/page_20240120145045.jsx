"use client"
import React, { useState } from 'react';
import {Button} from '../../../components/ui/button';
import NavbarComponent from '../../../components/navbar-component';
import fingerprint from './fingerprint.json'
const Page = () => {
    const [fingerprintCaptured, setFingerprintCaptured] = useState(false);

    const handleCaptureFingerprint = () => {
        // Code to capture fingerprint goes here
        setFingerprintCaptured(true);
    };

    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <NavbarComponent />
        <h1 className="text-4xl font-bold mb-4">Fingerprint Capture</h1>
        <iframe src="https://lottie.host/embed/ac8bbada-080e-4a95-aae1-bfd6de061909/ckE2mUdqg5.json"></iframe>
        <img
          src="https://app.lottiefiles.com/animation/e50f4940-c97e-48e8-af27-fa2959487c70"
          alt="Fingerprint"
          width={200}
          height={200}
          className="mb-4"
        />
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
