"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../../../components/ui/button";
import { Skeleton } from "../../../components/ui/skeleton";
import Header from "../../../components/layout/header";
import {
  clearTemplate,
  setFingerprintCaptureComplete,
  setFirstFingerprintCaptured,
} from "../../../lib/users/userReducer";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    fingerprintTemplate: { template1: "", template2: "" },
    captureState: {
      fingerprintCaptured: false,
      secondFingerprintCaptured: false,
      isLoading: false,
    },
    errorState: { fingerprintCapturedError: false },
    comparisonResult: false,
    data: [],
  });

  const {
    fingerprintTemplate,
    captureState,
    errorState,
    comparisonResult,
    data,
  } = state;

  const compareFingerPrints = useCallback(async (template1, template2) => {
    console.log(template1);
    console.log(template2);
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
        console.log(result?.isMatch, result);
        setState((prev) => ({ ...prev, comparisonResult: result?.isMatch }));
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handleCaptureFingerprint = useCallback(async () => {
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

      setState((prev) => ({
        ...prev,
        captureState: { ...prev.captureState, isLoading: true },
      }));

      if (response.status !== 200) {
        setState((prev) => ({
          ...prev,
          errorState: { fingerprintCapturedError: true },
        }));
        throw new Error(data.message);
      }

      setState((prev) => ({
        ...prev,
        fingerprintTemplate: {
          ...prev.fingerprintTemplate,
          template1: data.bmpBase64,
        },
        captureState: { ...prev.captureState, fingerprintCaptured: true },
        data: data,
      }));

      toast.success("Fingerprint captured successfully!");
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const handleCaptureSecondFingerprint = useCallback(async () => {
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
        setState((prev) => ({
          ...prev,
          errorState: { fingerprintCapturedError: true },
        }));
        throw new Error(data.message);
      }

      const data = await response.json();

      setState((prev) => ({
        ...prev,
        captureState: { ...prev.captureState, isLoading: true },
        data: data,
      }));

      setState((prev) => ({
        ...prev,
        fingerprintTemplate: {
          ...prev.fingerprintTemplate,
          template2: data.bmpBase64,
        },
        captureState: { ...prev.captureState, secondFingerprintCaptured: true },
      }));

      compareFingerPrints(fingerprintTemplate.template1, data.bmpBase64);

      toast.success("Second fingerprint captured successfully!");
    } catch (error) {
      console.log(error.message);
    }
  }, [compareFingerPrints, fingerprintTemplate]);

 const redoCapture = useCallback(() => {
   setState((prev) => ({
     ...prev,
     captureState: {
       fingerprintCaptured: false,
       secondFingerprintCaptured: false,
       isLoading: false,
     },
     errorState: { fingerprintCapturedError: false },
     data: [],
   }));

   // Ensure that the Redux action does not interfere with the component's state.
   try {
     dispatch(clearTemplate());
   } catch (error) {
     console.error("Error in clearTemplate:", error);
   }
 }, [dispatch]);


  const captureName = () => {
    router.push("/add-user/capture");
  };

  if (captureState.isLoading) {
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
          (!errorState.fingerprintCapturedError ? (
            <p className="text-green-500 mb-4">
              Fingerprint captured successfully!
            </p>
          ) : (
            <p className="text-red-500 mb-4">
              Fingerprint capture failed. Please try again.
            </p>
          ))}
        {captureState.fingerprintCaptured ||
        captureState.secondFingerprintCaptured ? (
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

        {!captureState.fingerprintCaptured &&
          !captureState.secondFingerprintCaptured && (
            <>
              <p className="text-lg mb-8">
                Please place your finger on the fingerprint scanner to capture
                your fingerprint.
              </p>

              <Button
                onClick={(e) => {
                  e.preventDefault();
                  handleCaptureFingerprint();
                }}
                className="mr-2"
                variant="outline"
              >
                Capture
              </Button>
            </>
          )}

        {captureState.fingerprintCaptured &&
          !captureState.secondFingerprintCaptured && (
            <div className="flex w-full justify-center items-center mt-3">
              <Button onClick={redoCapture} className="mr-2" variant="outline">
                Repeat
              </Button>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  handleCaptureSecondFingerprint();
                }}
              >
                Capture Second Fingerprint
              </Button>
            </div>
          )}

        {captureState.secondFingerprintCaptured && (
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
