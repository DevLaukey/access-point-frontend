import React from "react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Scanner = ({ imgSrc, serialNumber, imageQuality }) => {
 
  return (
    <>
      <Image
        src={`data:image/bmp;base64,${imgSrc}`}
        alt="WSQ Image"
        height="300"
        width="300"
      />
      <div className="flex flex-col space-y-2 mt-2 items-start">
        <p className="font-bold">Serial Number : {serialNumber}</p>
        <p className="font-bold">Image Quality : {imageQuality}</p>
      </div>
    </>
  );
};

export default Scanner;
