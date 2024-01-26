"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import ResponseMessage from "../../../components/fingerprint/response-component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Header from "../../../components/layout/header";
import ScannerResult from "../../../components/fingerprint/Scanner";

const Page = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const [fingerprintCaptured, setFingerprintCaptured] = useState(false);
  const [user, setUser] = useState([]);

  const [fingerprintCapturedError, setfingerprintCapturedError] =
    useState(false);
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [isMatch, setIsMatch] = useState(null);
  const [fingerprintTemplate1, setFingerprintTemplate1] = useState("");
  const [fingerprintTemplate2, setFingerprintTemplate2] = useState("");

  useEffect(() => {
    getFingerprints();
  }, []);

  useEffect(() => {
    user.forEach((user) => {
      if (user.fingerprint_template !== null && fingerprintTemplate1) {
        compareFingerPrints(fingerprintTemplate1, user.fingerprint_template);
      }
    });
  }, [user, fingerprintTemplate2]);

  const getFingerprints = async () => {
    try {
      const userObj = await supabase.auth.getUser();
      const id = userObj?.data.user.id;

      console.log(id);
      let { data: users, error } = await supabase
        .from("users")
        .select("*")
        .eq("admin_user", id);

      if (error) {
        throw new Error(error.message);
      }
      console.log(users);
      setUser(users);
    } catch (error) {}
  };

  const compareFingerPrints = async (template1, template2) => {
    console.log("comparing fingerprints");
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

    setIsLoading(true);
    fetch("https://localhost:7030/api/Fingerprint/match", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setIsLoading(false);

        if (result?.isMatch === true) {
          setIsMatch(true);
          toast.success("Success, user found");
          setSuccess(true);
        } else {
          setIsMatch(false);
          toast.error("Error, user not found");
          setFailure(true);
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

      if (response.status !== 200) {
        setfingerprintCapturedError(true);
        throw new Error(data.message);
      }
      setFingerprintTemplate1(data.bmpBase64);
      setFingerprintCaptured(true);

      toast.success("Fingerprint captured successfully!");
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

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex flex-col items-center justify-center h-screen px-2 text-center">
          <ToastContainer />

          <h1 className="text-4xl font-bold mb-4">Fingerprint Capture</h1>
          <h5 className="font-bold mb-4">Login an existing visitor</h5>

          {isMatch !== null && <ResponseMessage status={isMatch} />}
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

          {!fingerprintCaptured && (
            <p className="text-lg mb-8">
              Please place your finger on the fingerprint scanner to capture
              your fingerprint.
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
    </>
  );
};

export default Page;
