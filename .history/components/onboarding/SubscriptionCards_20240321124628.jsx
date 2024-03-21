"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import RadioSelector from "./RadioSelector";
import Link from "next/link";
import pricingList from "../../lib/pricinglist";

function SubscriptionCards() {
  const [selectedTier, setSelectedTier] = useState(null);
  const [termsChecked, setTermsChecked] = useState(true); // State to manage checkbox

  const router = useRouter();
  const tiers = pricingList;

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
              isSelected={selectedTier === tier.title}
              onRadioChange={() => handleRadioChange(tier.title)}
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
            <span
              id="terms-description"
              className="text-sm text-gray-600 dark:text-gray-50"
            >
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
          disabled={!termsChecked} // Disable the button if terms are not checked
          className={`my-2 flex items-center justify-center rounded-md ${
            !termsChecked ? "bg-gray-400 cursor-not-allowed" : "bg-gray-900"
          } py-3 font-medium text-white`}
        >
          Continue
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="h-6 w-6 shrink-0 accent-gray-900"
            checked={termsChecked}
            onChange={() => setTermsChecked(!termsChecked)}
          />
        </button>
      </div>
    </>
  );
}

export default SubscriptionCards;
