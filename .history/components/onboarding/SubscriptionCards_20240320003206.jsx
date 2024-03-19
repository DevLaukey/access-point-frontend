import React from "react";
import RadioSelector from "./RadioSelector";
function SubscriptionCards() {
  return (
    <>
      <h2 className="font-serif text-2xl font-semibold text-gray-700 ">
        Choose Subscription Plan
      </h2>
      <div className="mt-8 flex w-full flex-col pb-8">
      <RadioSelector/>
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

        <button className="my-2 flex items-center justify-center rounded-md bg-gray-900 py-3 font-medium text-white">
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
