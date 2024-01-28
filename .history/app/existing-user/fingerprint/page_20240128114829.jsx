"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import ResponseMessage from "../../../components/fingerprint/response-component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Header from "../../../components/layout/header";
import UserResult from "../../../components/fingerprint/user-result";
import Skeleton from "../../../components/ui/skeleton";
import ScannerResult from "../../../components/fingerprint/Scanner";
import { get } from "http";

const Page = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const [adminID, setAdminID] = useState(null);
  const [fingerprintCaptured, setFingerprintCaptured] = useState(false);
  const [fingerprints, setFingerPrints] = useState([]);
  const [fingerprintCapturedError, setfingerprintCapturedError] =
    useState(false);
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [isMatch, setIsMatch] = useState(null);
  const [fingerprintTemplate1, setFingerprintTemplate1] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    getFingerprints();
  }, []);

  useEffect(() => {
    fingerprints.forEach((fingerprint) => {
      if (fingerprint.fingerprint_template !== null && fingerprintTemplate1) {
        compareFingerPrints(fingerprintTemplate1, fingerprint);
      }
    });
  }, [fingerprints, fingerprintTemplate1]);

  const getUser = async (fingerprint_id) => {
    try {
      let { data: users, error } = await supabase
        .from("users")
        .select("*")
        .eq("fingerprint_id", fingerprint_id)
        .single ();

      if (error) {
        throw new Error(error.message);
      }

      console.log(users);
      setSelectedUser(users);
    } catch (error) {
      console.log(error);
    }
  };

  const getFingerprints = async () => {
    try {
      const userObj = await supabase.auth.getUser();
      const id = userObj?.data.user.id;
      setAdminID(id);

      let { data: fingerprints, error } = await supabase
        .from("fingerprints")
        .select("*")
        .eq("admin_id", id);

      if (error) {
        throw new Error(error.message);
      }
      setFingerPrints(fingerprints);
    } catch (error) {
      console.log(error);
    }
  };

  const compareFingerPrints = async (template1, fingerprint) => {
    const template2 = fingerprint?.fingerprint_template;
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
          setIsMatch("success");
          console.log(user);
          getUser(fingerprint.id);
        } else {
          setIsMatch("failure");
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

  function redoCapture() {
    setData([]);
    setFingerprintCaptured(false);
    setFingerprintTemplate1(null);
    setfingerprintCapturedError(false);
    setIsMatch(null);
    setSelectedUser(null);
  }
  if (isloading) {
    return <Skeleton color="#202020" highlightColor="#444" />;
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-col items-center justify-center h-screen px-2 text-center">
          <ToastContainer />

          <h1 className="text-4xl font-bold mb-4">Fingerprint Capture</h1>
          <h5 className="font-bold mb-4">Login an existing visitor</h5>

          {fingerprintTemplate1 != null && isMatch && (
            <ResponseMessage status={isMatch} />
          )}
          {data.length !== 0 && fingerprintCapturedError && (
            <p className="text-red-500 mb-4">
              Fingerprint capture failed. Please try again.
            </p>
          )}

          {fingerprintCaptured ? (
            selectedUser && (
              <UserResult
                first_name={selectedUser.first_name}
                last_name={selectedUser.last_name}
                arrival_time={selectedUser.arrival_time}
                departure_time={selectedUser.departure_time}
              />
            )
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
            <div className="flex w-full justify-center items-center mt-3">
              {isMatch === "success" ? (
                <Button
                  onClick={() => {
                    router.push("/dashboard");
                  }}
                >
                  Continue
                </Button>
              ) : (
                <Button
                  onClick={() => redoCapture()}
                  className="mr-2"
                  variant="outline"
                >
                  Repeat
                </Button>
              )}
            </div>
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
