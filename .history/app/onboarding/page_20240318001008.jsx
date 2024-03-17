"use client";
import React, { useState } from "react";

function Page() {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {   
    setEmail(e.target.value);
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="flex w-screen flex-wrap text-slate-800 mt-6">
      {/* Content for each step */}
      {currentStep === 1 && (
        <div className="flex w-full flex-col md:w-1/2">
          {/* Step 1: Ask for email */}
          <div className="my-auto mx-auto flex flex-col justify-center pt-8 md:justify-start lg:w-[34rem]">
            <h2 className="font-serif text-2xl font-semibold text-gray-700">
              What's your email address?
            </h2>
            <div className="mt-4">
              <input
                type="email"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div className="flex w-full flex-col md:w-1/2">
          {/* Content for step 2 */}
        </div>
      )}
      {currentStep === 3 && (
        <div className="flex w-full flex-col md:w-1/2">
          {/* Content for step 3 */}
        </div>
      )}
      {currentStep === 4 && (
        <div className="flex w-full flex-col md:w-1/2">
          {/* Content for step 4 */}
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex justify-between w-full mt-4 px-4">
        {currentStep !== 1 && (
          <button
            className="flex items-center justify-center rounded-md bg-gray-900 py-3 font-medium text-white"
            onClick={handlePreviousStep}
          >
            Previous
          </button>
        )}
        {currentStep !== 4 && (
          <button
            className="flex items-center justify-center rounded-md bg-gray-900 py-3 font-medium text-white"
            onClick={handleNextStep}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Page;
