import React from "react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Scanner = ({ imgSrc }) => {
  const [fingerprintTemplate1, setFingerprintTemplate1] = useState("");
  const [fingerprintTemplate2, setFingerprintTemplate2] = useState("");
  const [fingerprintCaptured, setFingerprintCaptured] = useState(false);

  const Fingerprint1Captured = () => {};

  return (
    <>
      <ToastContainer />
      <Image
        src={`data:image/bmp;base64,${imgSrc}`}
        alt="WSQ Image"
        height="300"
        width="300"
      />
    </>
  );
};

export default Scanner;
