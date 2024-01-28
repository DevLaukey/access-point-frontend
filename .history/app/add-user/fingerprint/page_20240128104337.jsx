"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../../../components/ui/button";
import Skeleton from "../../../components/ui/skeleton";
import ScannerResult from "../../../components/fingerprint/Scanner";

const Page = () => {
  const router = useRouter();

  const [fingerprintTemplate1, setFingerprintTemplate1] = useState({
    template: "",
    imageQuality: 0,
  });
  const [fingerprintTemplate2, setFingerprintTemplate2] = useState({
    template: "",
    imageQuality: 0,
  });
  const [firstFingerPrintCaptured, setFirstFingerprintCaptured] =
    useState(false);
  const [secondFingerprintCaptured, setSecondFingerprintCaptured] =
    useState(false);
  const [fingerprintCapturedError, setfingerprintCapturedError] =
    useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (firstFingerPrintCaptured && secondFingerprintCaptured) {
      compareFingerPrints(
        fingerprintTemplate1.template,
        fingerprintTemplate2.template
      );
    }
  }, [secondFingerprintCaptured, fingerprintTemplate2]);

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
          redoCapture();
        }
      })
      .catch((error) => console.log("error", error));
  };

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
      setData(data);
      setIsLoading(true);

      data && setIsLoading(false);
      if (response.status !== 200) {
        setfingerprintCapturedError(true);
        throw new Error(data.message);
      }
      setFingerprintTemplate1({
        template: data.bmpBase64,
        imageQuality: data.imageQuality,
      });
      setFirstFingerprintCaptured(true);

      toast.success("First Fingerprint captured successfully!");
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

      setFingerprintTemplate2({
        template: data.bmpBase64,
        imageQuality: data.imageQuality,
      });

      // Code to capture the second fingerprint goes here
      setSecondFingerprintCaptured(true);

      toast.success("Second fingerprint captured successfully!");
    } catch (error) {
      console.log(error.message);
    }
  };

  const redoCapture = () => {
    setFirstFingerprintCaptured(false);
    setSecondFingerprintCaptured(false);
    setfingerprintCapturedError(false);
    setFingerprintTemplate1(null);
    setFingerprintTemplate2(null);
    setData([]);
  };

  const saveFingerPrint = async () => {
    try {
      let template;
      if (
        fingerprintTemplate1.imageQuality > fingerprintTemplate2.imageQuality
      ) {
        template = fingerprintTemplate1.template;
      } else {
        template = fingerprintTemplate2.template;
      }

      const { data, error } = await supabase
        .from("fingerprints")
        .insert([{ fingerprint_template: template }])
        .select();

      if (error) {
        throw new Error(error.message);
      }
      console.log(data);

      // router.push("/add-user/capture");
    } catch (e) {
      toast.error("Details not saved. Please try again");
    }
  };

  if (isloading) {
    return <Skeleton color="#202020" highlightColor="#444" />;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center justify-center h-screen px-2 text-center">
        <ToastContainer />

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
        {firstFingerPrintCaptured || secondFingerprintCaptured ? (
          <ScannerResult
            imgSrc={data.bmpBase64}
            serialNumber={data.serialNumber}
            imageQuality={data.imageQuality}
          />
        ) : (
          <iframe
            width={100}
            height={100}
            className="mb-4"
            src="https://lottie.host/embed/ac8bbada-080e-4a95-aae1-bfd6de061909/ckE2mUdqg5.json"
          ></iframe>
        )}

        {/* First fingerprint captured */}
        {!firstFingerPrintCaptured && !secondFingerprintCaptured && (
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

        {/* Second fingerprint captured */}
        {firstFingerPrintCaptured && !secondFingerprintCaptured && (
          <div className="flex w-full justify-center items-center mt-3">
            <Button
              onClick={() => redoCapture()}
              className="mr-2"
              variant="outline"
            >
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

        {secondFingerprintCaptured && (
          <div className="flex w-full justify-center items-center mt-3">
            <Button
              onClick={() => redoCapture()}
              className="mr-2"
              variant="outline"
            >
              Repeat
            </Button>
            <Button onClick={saveFingerPrint}>Continue</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
