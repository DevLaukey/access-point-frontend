"use client";
import React, { useEffect, useState } from "react";
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
  const [adminId, setAdminId] = useState("");
  const { id } = useParams();

  const supabase = createClientComponentClient();

  const validateForm = () => {
    const newErrors = {};

    if (!managerEmail.trim()) {
      newErrors.managerEmail = "Email is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    const { data } = await supabase.auth.getUser();

    console.log(data.user.id);
    setAdminId(data.user.id);
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
            admin_id: adminId,
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
    <div className="flex flex-col justify-center items-center mt-2">
      <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-50">
        Add Entry Manager
      </h1>
      <p className="text-slate-800 dark:text-slate-50 mt-2 text-wrap">
        Add the email addresses of the people who will be responsible for
        managing the entries.
      </p>
      <form onSubmit={addEntryManagerEmail} className="mt-6 w-full max-w-md ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="font-semibold text-slate-800 dark:text-slate-50 text-lg"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="font-semibold text-slate-800 dark:text-slate-50 text-lg"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label
            htmlFor="email"
            className="font-semibold text-slate-800 dark:text-slate-50 text-lg"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={managerEmail}
            onChange={(e) => setManagerEmail(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
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
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <Button
          type="submit"
          className="w-full justify-center bg-gray-300 hover:bg-gray-400 text-gray-800  dark:text-slate-50 font-bold py-2 px-4 rounded inline-flex items-center mt-6"
        >
          <span>Continue</span>
          <ChevronRight className="h-4 w-4 mx-2" />
        </Button>
      </form>
    </div>
  );
};

export default EntryManagerEmailAdd;
