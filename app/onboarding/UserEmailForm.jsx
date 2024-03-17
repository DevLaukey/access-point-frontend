import React, { useState } from "react";

const UserEmailForm = ({ onNextStep }) => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any validation on the email address if needed
    // For simplicity, we assume the email is valid
    onNextStep(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-serif text-2xl font-semibold text-gray-700">
        What's your email address?
      </h2>
      <div className="mt-4">
        <input
          type="email"
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
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
    </form>
  );
};

export default UserEmailForm;
