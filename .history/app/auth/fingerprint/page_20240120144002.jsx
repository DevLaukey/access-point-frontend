"use client"
import React, { useState } from 'react';
import {Button} from '../../../components/ui/button';
import NavbarComponent from '../../../components/navbar-component';
import { Image } from 'next/image';
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
            <Image
                src="/images/fingerprint.png"
                alt="Fingerprint"
                width={200}
                height={200}
                className="mb-4"
            />
            <p className="text-lg mb-8">
                Please place your finger on the fingerprint scanner to capture your fingerprint.
            </p>
            {fingerprintCaptured ? (
                <p className="text-green-500 mb-4">Fingerprint captured successfully!</p>
            ) : (
                <p className="text-red-500 mb-4">Fingerprint capture failed. Please try again.</p>
            )}
            <Button onClick={handleCaptureFingerprint}>Capture Fingerprint</Button>
        </div>
    );
};



export default Page;
