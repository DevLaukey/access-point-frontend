import React, { useState } from "react";

function Page() {
  const [currentStep, setCurrentStep] = useState(1);

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
          {/* Content for step 1 */}
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
