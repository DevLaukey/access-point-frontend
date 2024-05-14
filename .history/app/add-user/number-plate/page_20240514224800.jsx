import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function page() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center justify-center h-screen px-2 text-center">
        <ToastContainer />

        <h1 className="text-4xl font-bold mb-4">Number Plate Capture</h1>
        <h5 className="font-bold mb-4">Add a car</h5>
      </div>
    </div>
  );
}

export default page