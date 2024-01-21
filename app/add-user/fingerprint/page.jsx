"use client";
import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import NavbarComponent from "../../../components/navbar-component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const Page = () => {
  const [fingerprintCaptured, setFingerprintCaptured] = useState(false);

  const router = useRouter();
  const handleCaptureFingerprint = () => {
    // Code to capture fingerprint goes here
    setFingerprintCaptured(true);

    toast.success("Fingerprint captured successfully!");
  };

  const captureName = () => {
    router.push("/add-user/capture");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-center">
      <ToastContainer />

      <NavbarComponent />
      <h1 className="text-4xl font-bold mb-4">Fingerprint Capture</h1>
      <h5 className="font-bold mb-4">Add a new visitor</h5>
      {fingerprintCaptured ? (
        <>
          {/* <Image
                src={`data:image/bmp;base64,${data.bmpBase64}`}
                alt="WSQ Image"
                height="300"
                width="300"
                    /> */}
          <img
            src="https://i.ibb.co/0jZQY5Z/fingerprint.png"
            alt="fingerprint"
          />
        </>
      ) : (
        <iframe
          width={100}
          height={100}
          className="mb-4"
          src="https://lottie.host/embed/ac8bbada-080e-4a95-aae1-bfd6de061909/ckE2mUdqg5.json"
        ></iframe>
      )}

     { !fingerprintCaptured && <p className="text-lg mb-8">
        Please place your finger on the fingerprint scanner to capture your
        fingerprint.
      </p>}
      {fingerprintCaptured ? (
        <p className="text-green-500 mb-4">
          Fingerprint captured successfully!
        </p>
      ) : (
        <p className="text-red-500 mb-4">
          Fingerprint capture failed. Please try again.
        </p>
      )}
      {fingerprintCaptured ? (
        <Button onClick={captureName}>Continue</Button>
      ) : (
        <Button onClick={handleCaptureFingerprint}>Capture Fingerprint</Button>
      )}
    </div>
  );
};

export default Page;
