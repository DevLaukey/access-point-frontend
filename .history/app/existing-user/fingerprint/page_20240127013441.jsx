"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import { Skeleton } from "../../../components/ui/skeleton";
import NavbarComponent from "../../../components/navbar-component";
import ResponseMessage from "../../../components/fingerprint/response-component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const Page = () => {
  const [fingerprintCaptured, setFingerprintCaptured] = useState(false);
  const [fingerprintCapturedError, setfingerprintCapturedError] =
    useState(false);
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const router = useRouter();

  const compareFingerPrints = async (template1, template2) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      template1,
      template2,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: body,
      redirect: "follow",
    };
    fetch("https://localhost:7030/api/Fingerprint/match", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result?.isMatch === true) {
          toast.success("Fingerprints matched successfully!");
        } else {
          toast.error("Fingerprints do not match!");
          setFailure(true);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const handleCaptureFingerprint = async () => {
    try {
      const body = JSON.stringify(
        {
          template1: "casdcas",
          template2: "casdcas",
        },
        true
      );

      const response = await fetch(
        "https://localhost:7030/api/Fingerprint/match",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: body,
        }
      );

      setIsLoading(true);
      const data = await response.json();

      data && setIsLoading(false);
      if (response.status !== 200) {
        setfingerprintCapturedError(true);
        throw new Error(data.message);
      }
      console.log("Response:", data);
      // Code to capture fingerprint goes here
      setFingerprintCaptured(true);

      toast.success("Fingerprint captured successfully!");
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const captureName = () => {
    router.push("/dashboard   ");
  };

  if (isloading) {
    return <Skeleton color="#202020" highlightColor="#444" />;
  }

  const LoginResponse = () => {
    if (isloading) {
      return <Skeleton color="#202020" highlightColor="#444" />;
    }
    if (success) {
      return <ResponseMessage status={"success"} />;
    }
    if (failure) {
      return <ResponseMessage status={"failure"} />;
    }
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center justify-center h-screen px-2 text-center">
        <ToastContainer />

        <NavbarComponent />
        <h1 className="text-4xl font-bold mb-4">Fingerprint Capture</h1>
        <h5 className="font-bold mb-4">Login an existing visitor</h5>
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
        {fingerprintCaptured ? (
          <LoginResponse />
        ) : (
          <iframe
            width={100}
            height={100}
            className="mb-4"
            src="https://lottie.host/embed/ac8bbada-080e-4a95-aae1-bfd6de061909/ckE2mUdqg5.json"
          ></iframe>
        )}

        {!fingerprintCaptured && (
          <p className="text-lg mb-8">
            Please place your finger on the fingerprint scanner to capture your
            fingerprint.
          </p>
        )}
        {fingerprintCaptured ? (
          <Button onClick={captureName}>Continue</Button>
        ) : (
          <Button onClick={handleCaptureFingerprint}>
            Capture Fingerprint
          </Button>
        )}
      </div>
    </div>
  );
};

export default Page;
