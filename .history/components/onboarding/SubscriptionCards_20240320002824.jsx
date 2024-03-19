import React from "react";

function SubscriptionCards() {
  return (
    <>
      <h2 className="font-serif text-2xl font-semibold text-gray-700 ">
        Choose Subscription Plan
      </h2>
      <div className="mt-8 flex w-full flex-col pb-8 overflow-scroll">
        <div className="relative mb-4">
          <input
            className="peer hidden"
            id="radio_1"
            type="radio"
            name="radio"
            checked
          />
          <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-900"></span>
          <label
            className="flex cursor-pointer flex-col rounded-2xl border border-gray-300 bg-slate-100/80 p-4 pr-8 sm:pr-16"
            htmlFor="radio_1"
          >
            <span className="mb-2 text-lg font-semibold">Small Team</span>
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              mollitia corporis non fugiat ratione.
            </p>
          </label>
        </div>
        <div className="relative mb-4">
          <input
            className="peer hidden"
            id="radio_2"
            type="radio"
            name="radio"
          />
          <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-900"></span>
          <label
            className="flex cursor-pointer flex-col rounded-2xl border border-gray-300 bg-slate-100/80 p-4 pr-8 sm:pr-16"
            htmlFor="radio_2"
          >
            <span className="mb-2 text-lg font-semibold">Large Team</span>
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              mollitia corporis non fugiat ratione.
            </p>
          </label>
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
