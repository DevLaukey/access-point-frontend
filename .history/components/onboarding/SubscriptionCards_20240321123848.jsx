"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import RadioSelector from "./RadioSelector";
import Link from "next/link";
import pricingList from "../../lib/pricinglist";
function SubscriptionCards() {


  const [selectedTier, setSelectedTier] = useState(null);
  const router = useRouter();
  const tiers = pricingList

  const handleRadioChange = (tier) => {
    setSelectedTier(tier);
  };

  const handleContinue = () => {
    if (selectedTier) {
      // Redirect to /onboarding/email-step route with selectedTier as query parameter
      localStorage.setItem("tier", selectedTier);
      router.push("/onboarding/email-step");
    } else {
      // Handle case where no tier is selected
      alert("Please select a subscription tier.");
    }
  };

  return (
    <>
      <h2 className="font-serif text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Choose Subscription Plan
      </h2>
      <div className="mt-4 flex w-full flex-col pb-4">
        <div className="flex flex-col space-y-4 h-80 overflow-y-auto">
          {tiers.map((tier, index) => (
            <RadioSelector
              key={index}
              title={tier.title}
              description={tier.description}
              price={tier.price}
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
            <span id="terms-description" className="text-sm text-gray-600 dark:text-gray-50">
              I agree to the
              <Link
                className="underline"
                href="https://www.poems.starjabu.co.ke/poems-privacy-policy/"
                target="_blank"
              >
                Terms and Conditions
              </Link>
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
