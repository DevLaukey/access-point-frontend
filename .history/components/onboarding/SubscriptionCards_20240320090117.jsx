"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import RadioSelector from "./RadioSelector";

function SubscriptionCards() {
  const tiers = [
    {
      tier: "Basic",
      description:
        "Get access to all the features and tools that you need to get your business off the ground. We will send you a free book as a welcome gift.",
    },
    {
      tier: "Pro",
      description:
        "Get access to all the features and tools that you need to get your business off the ground. We will send you a free book as a welcome gift.",
    },
    {
      tier: "Business",
      description:
        "Get access to all the features and tools that you need to get your business off the ground. We will send you a free book as a welcome gift.",
    },
  ];

  const [selectedTier, setSelectedTier] = useState(null);
  const router = useRouter();

  const handleRadioChange = (tier) => {
    setSelectedTier(tier);
  };

  const handleContinue = () => {
    if (selectedTier) {
      // Redirect to /onboarding/email-step route with selectedTier as query parameter
      router.push("/onboarding/email-step", { params: { tier: selectedTier } });
     
    } else {
      // Handle case where no tier is selected
      alert("Please select a subscription tier.");
    }
  };

  return (
    <>
      <h2 className="font-serif text-2xl font-semibold text-gray-700 ">
        Choose Subscription Plan
      </h2>
      <div className="mt-4 flex w-full flex-col pb-8">
        <div className="flex flex-col space-y-4 h-64 overflow-y-auto">
          {tiers.map((tier, index) => (
            <RadioSelector
              key={index}
              tier={tier.tier}
              description={tier.description}
              isSelected={selectedTier === tier.tier}
              onRadioChange={() => handleRadioChange(tier.tier)}
            />
          ))}
        </div>

        <div className="my-4 space-y-3">
          <label htmlFor="terms" className="flex space-x-4">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-6 w-6 shrink-0 accent-gray-900"
              checked
            />
            <span id="terms-description" className="text-sm text-gray-600">
              I agree to the
              <a className="underline" href="#">
                Terms and Conditions
              </a>
              . Learn about our Privacy Policy and our measures to keep your
              data safe and secure.
            </span>
          </label>
        </div>

        <button
          onClick={handleContinue}
          className="my-2 flex items-center justify-center rounded-md bg-gray-900 py-3 font-medium text-white"
        >
          Continue
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-4 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default SubscriptionCards;
