"use client"
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { toast } from "sonner";

const EntryManagerEmailAdd = () => {
  const [managerEmail, setManagerEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { id } = useParams();

  const supabase = createClientComponentClient();

  const validateForm = () => {
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!managerEmail.trim()) {
      newErrors.managerEmail = "Email is required";
    } else if (!isValidEmail(managerEmail)) {
      newErrors.managerEmail = "Invalid email address";
    }

    if (phoneNumber.trim() && !isValidPhoneNumber(phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Basic phone number validation
    return /^\d{10}$/.test(phoneNumber);
  };

  const addEntryManagerEmail = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // supabase
        const { data, error } = await supabase.from("entry_manager").insert([
          {
            email: managerEmail,
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            entry_point_id: id,
          },
        ]);

        if (error) throw error;

        console.log(data);
        toast("Added Entry Manager Email", {
          description: "The email has been added successfully",
        });
        // Clear input fields after submission
        setManagerEmail("");
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
      } catch (error) {
        console.log(error);
        // Display error notification
        toast("Failed to add entry manager email", {
          description: error,
          status: "error",
        });
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-50 mt-10">
        Add Entry Manager
      </h1>
      <p className="text-slate-800 dark:text-slate-50 mt-2 text-wrap">
        Add the email addresses of the people who will be responsible for
        managing the entries.
      </p>
      <form onSubmit={addEntryManagerEmail} className="mt-6 w-full max-w-md h-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="font-semibold text-slate-800 dark:text-slate-50 text-lg"
            >
              First Name{" "}
              {errors.firstName && <span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={`border border-gray-300 rounded-md p-2 ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="font-semibold text-slate-800 dark:text-slate-50 text-lg"
            >
              Last Name{" "}
              {errors.lastName && <span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={`border border-gray-300 rounded-md p-2 ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label
            htmlFor="email"
            className="font-semibold text-slate-800 dark:text-slate-50 text-lg"
          >
            Email{" "}
            {errors.managerEmail && <span className="text-red-500">*</span>}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={managerEmail}
            onChange={(e) => setManagerEmail(e.target.value)}
            className={`border border-gray-300 rounded-md p-2 ${
              errors.managerEmail ? "border-red-500" : ""
            }`}
          />
          {errors.managerEmail && (
            <p className="text-red-500 text-sm mt-1">{errors.managerEmail}</p>
          )}
        </div>
        <div className="flex flex-col mt-4">
          <label
            htmlFor="phoneNumber"
            className="font-semibold text-slate-800 dark:text-slate-50 text-lg"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={`border border-gray-300 rounded-md p-2 ${
              errors.phoneNumber ? "border-red-500" : ""
            }`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
          )}
        </div>
        <Button
          type="submit"
          className="mt-6 w-full justify-center bg-gray-300 hover:bg-gray-400 text-gray-800 dark:text-slate-50 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <span>Continue</span>
          <ChevronRight className="h-4 w-4 mx-2" />
        </Button>
      </form>
    </div>
  );
};

export default EntryManagerEmailAdd;
