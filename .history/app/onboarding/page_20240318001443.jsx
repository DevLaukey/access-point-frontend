"use client"
import React, { useState } from "react";
import UserEmailForm from "./UserEmailForm";

function Page() {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");

  const handleNextStep = (email) => {
    setEmail(email);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="flex w-screen flex-wrap text-slate-800 mt-6">
      {/* Content for each step */}
      {currentStep === 1 && (
        <div className="flex w-full flex-col md:w-1/2">
          {/* Step 1: Ask for email */}
          <UserEmailForm onNextStep={handleNextStep} />
        </div>
      )}

      {/* Add more steps as needed */}

      {/* Navigation buttons */}
      {/* Navigation buttons */}
      <div className="flex justify-between w-full mt-4 px-4">
        {currentStep !== 1 && (
          <button
            className="flex items-center justify-center rounded-md bg-gray-900 py-3 px-6 font-medium text-white"
            onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
          >
            Previous
          </button>
        )}
        {currentStep !== 4 && (
          <button
            className="flex items-center justify-center rounded-md bg-gray-900 py-3 px-6 font-medium text-white"
            onClick={() => setCurrentStep((prevStep) => prevStep + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Page;
