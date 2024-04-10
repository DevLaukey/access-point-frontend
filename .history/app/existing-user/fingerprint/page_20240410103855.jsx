"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import Skeleton from "../../../components/ui/skeleton";

const Page = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [fingerprints, setFingerprints] = useState([]);
  const [fingerprintCaptured, setFingerprintCaptured] = useState(false);
  const [fingerprintCapturedError, setFingerprintCapturedError] =
    useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    getFingerprints();
  }, [fingerprintCaptured]);

  const checkIfUserExistsForTheDay = () => {
    const today = new Date().toISOString().slice(0, 10);
    const arrival_time = selectedUser?.arrival_time;
    const arrivalDate = new Date(arrival_time).toISOString().slice(0, 10);

    return today === arrivalDate;
  };

  const updateUser = async () => {
    try {
      if (checkIfUserExistsForTheDay()) {
        toast.error("User already logged in for today");
        return;
      }
      const { data, error } = await supabase
        .from("users")
        .update({ arrival_time: new Date().toISOString() })
        .eq("id", selectedUser.id);

      if (error) {
        throw new Error(error.message);
      }

      if (!data) {
        toast.error("User not updated successfully");
        return;
      }

      setSelectedUser(data);
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const getFingerprints = async () => {
    try {
      const userObj = await supabase.auth.getUser();
      const id = userObj.data.user.id;

      let { data: fingerprints, error } = await supabase
        .from("fingerprints")
        .select("*")
        .eq("admin_id", id);

      console.log(fingerprints);
      if (error) {
        throw new Error(error.message);
      }

      setFingerprints(fingerprints);
    } catch (error) {
      console.log(error);
    }
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

      if (response.status !== 200) {
        setFingerprintCapturedError(true);
        throw new Error(data.message);
      }

      setFingerprintCaptured(true);

      // Compare captured fingerprint with stored fingerprints
      fingerprints.forEach((fingerprint) => {
        if (fingerprint.fingerprint_template !== null && data.templateBase64) {
          compareFingerPrints(data.templateBase64, fingerprint);
        }
      });
    } catch (error) {
      console.log(error.message);
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
      .then((response) => console.log("response: " + response))
      .then((result) => {
        console.log(result);
        setIsLoading(false);

        if (result?.isMatch === true) {
          setIsMatch("success");
          getUser(fingerprint.id);
        } else {
          setIsMatch("failure");
        }
      })
      .catch((error) => console.log("error", error));
  };

  function redoCapture() {
    setFingerprintCaptured(false);
    setFingerprintCapturedError(false);
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

          {fingerprintCaptured && (
            <p className="text-lg mb-8">
              Please place your finger on the fingerprint scanner to capture
              your fingerprint.
            </p>
          )}

          {fingerprintCapturedError && (
            <p className="text-red-500 mb-4">
              Fingerprint capture failed. Please try again.
            </p>
          )}

          {fingerprintCaptured && (
            <div className="flex w-full justify-center items-center mt-3">
              <Button onClick={redoCapture} className="mr-2" variant="outline">
                Repeat
              </Button>
            </div>
          )}

          {!fingerprintCaptured && (
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
