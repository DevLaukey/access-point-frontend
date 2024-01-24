"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import { Skeleton } from "../../../components/ui/skeleton";
import Image from "next/image";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../../components/layout/header";
import { setFirstFingerprintCaptured } from "../../../lib/users/userReducer";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { firstFingerprintCaptured, fingerprintTemplate } = useSelector(
    (state) => state.user
  );

  const [fingerprintCaptured, setFingerprintCaptured] = useState(false);
  const [fingerprintCapturedError, setfingerprintCapturedError] =
    useState(false);
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [secondFingerprintCaptured, setSecondFingerprintCaptured] =
    useState(false);

  useEffect(() => {
    if (firstFingerprintCaptured.isCapture) {
      setFingerprintCaptured(false);
      setData([]);
    }
  }, [firstFingerprintCaptured]);

  useEffect(() => {
    if (secondFingerprintCaptured) {
      // Logic to handle the second fingerprint capture
      // For example, you can dispatch an action or perform an API call
      console.log("Second fingerprint captured:", fingerprintTemplate);
    }
  }, [secondFingerprintCaptured, fingerprintTemplate]);

  const handleCaptureFingerprint = async () => {
    try {
      const response = await fetch(
        "https://localhost:7030/api/Fingerprint/capture",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      setIsLoading(true);

      data && setIsLoading(false);
      if (response.status !== 200) {
        setfingerprintCapturedError(true);
        throw new Error(data.message);
      }

      // Code to capture the first fingerprint goes here
      setFingerprintCaptured(true);

      toast.success("Fingerprint captured successfully!");
      setData(data);
      dispatch(
        setFirstFingerprintCaptured({
          isCapture: true,
          fingerprintTemplate: data.bmpBase64,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCaptureSecondFingerprint = async () => {
    try {
      const response = await fetch(
        "https://localhost:7030/api/Fingerprint/capture",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status !== 200) {
        setfingerprintCapturedError(true);
        throw new Error(data.message);
      }
      const data = await response.json();

      setIsLoading(true);
      setData(data);

      data && setIsLoading(false);

      // Code to capture the second fingerprint goes here
      setFingerprintCaptured(false); // Reset the first fingerprint capture state
      setSecondFingerprintCaptured(true);

      toast.success("Second fingerprint captured successfully!");
    } catch (error) {
      console.log(error.message);
    }
  };

  const redoCapture = () => {
    setFingerprintCaptured(false);
    setSecondFingerprintCaptured(false);
    setfingerprintCapturedError(false);
    setData([]);
  };

  const captureName = () => {
    router.push("/add-user/capture");
  };

  if (isloading) {
    return <Skeleton color="#202020" highlightColor="#444" />;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center justify-center h-screen px-2 text-center">
        <ToastContainer />

        <Header />
        <h1 className="text-4xl font-bold mb-4">Fingerprint Capture</h1>
        <h5 className="font-bold mb-4">Add a new visitor</h5>
        {data.length !== 0 &&
          (!fingerprintCapturedError ? (
            <p className="text-green-500 mb-4">
              Fingerprint captured successfully!
            </p>
          ) : (
            <p className="text-red-500 mb-4">
              Fingerprint capture failed. Please try again.
            </p>
          ))}
        {fingerprintCaptured || secondFingerprintCaptured ? (
          <>
            <Image
              src={`data:image/bmp;base64,${data.bmpBase64}`}
              alt="WSQ Image"
              height="300"
              width="300"
            />
            <div className="flex flex-col space-y-2 mt-2 items-start">
              <p className="font-bold">Serial Number : {data.serialNumber}</p>
              <p className="font-bold">Image Quality : {data.imageQuality}</p>
            </div>
          </>
        ) : (
          <iframe
            width={100}
            height={100}
            className="mb-4"
            src="https://lottie.host/embed/ac8bbada-080e-4a95-aae1-bfd6de061909/ckE2mUdqg5.json"
          ></iframe>
        )}

        {!fingerprintCaptured && !secondFingerprintCaptured && (
          <>
            <p className="text-lg mb-8">
              Please place your finger on the fingerprint scanner to capture
              your fingerprint.
            </p>

            <Button onClick={handleCaptureFingerprint} className="mr-2" variant="outline">
              Capture
            </Button>
          </>
        )}

        {fingerprintCaptured && !secondFingerprintCaptured && (
          <div className="flex w-full justify-center items-center mt-3">
            <Button onClick={redoCapture} className="mr-2" variant="outline">
              Repeat
            </Button>
            <Button onClick={handleCaptureSecondFingerprint}>
              Capture Second Fingerprint
            </Button>
          </div>
        )}

        {secondFingerprintCaptured && (
          <div className="flex w-full justify-center items-center mt-3">
            <Button onClick={redoCapture} className="mr-2" variant="outline">
              Repeat
            </Button>
            <Button onClick={captureName}>Continue</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
