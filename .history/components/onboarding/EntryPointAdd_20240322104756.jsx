"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const EntryPointAdd = () => {
  const [entryPoint, setEntryPoint] = useState("");
  const [entryPointDescription, setEntryPointDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [adminId, setAdminId] = useState("");
  const supabase = createClientComponentClient();

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    const { data } = await supabase.auth.getUser();

    setAdminId(data.user.id);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!entryPoint.trim()) {
      newErrors.entryPoint = "Entry point name is required";
    }

    if (!entryPointDescription.trim()) {
      newErrors.entryPointDescription = "Entry point description is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const addEntryPoint = async () => {
    try {
      const { data, error } = await supabase.from("access-point").insert([
        {
          name: entryPoint,
          description: entryPointDescription,
          admin_id: adminId,
        },
      ]);

      if (error) throw error;

      toast("Added Entry Point ✅", {
        description: "The entry point has been added successfully",
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      addEntryPoint();
      // Clear input fields after submission
      setEntryPoint("");
      setEntryPointDescription("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-50 mt-6">
        Add Entry Points
      </h1>
      <p className="text-slate-800 dark:text-slate-50 my-2 text-wrap">
        Add the entry points which will be assigned an entry manager.
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-50 mt-2 text-wrap">
        You can add up to 3 entry points for the free tier.
      </p>
      <form
        onSubmit={handleSubmit}
        className=" gap-4 flex flex-col sm:flex-row w-full justify-center items-center"
      >
        <div className="flex flex-col justify-between items-center gap-2 my-2">
          <label
            htmlFor="point"
            className="font-semibold text-slate-800 dark:text-slate-50 text-lg"
          >
            Name
          </label>
          <input
            type="text"
            id="point"
            placeholder="MAIN GATE"
            name="point"
            value={entryPoint}
            onChange={(e) => setEntryPoint(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
          {errors.entryPoint && (
            <p className="text-red-500 text-sm">{errors.entryPoint}</p>
          )}
        </div>
        <div className="flex flex-col justify-between items-center gap-2 my-2">
          <label
            htmlFor="description"
            className="font-semibold text-slate-800 dark:text-slate-50 text-lg"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Main gate for the school"
            value={entryPointDescription}
            onChange={(e) => setEntryPointDescription(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
          {errors.entryPointDescription && (
            <p className="text-red-500 text-sm">
              {errors.entryPointDescription}
            </p>
          )}
        </div>
      </form>
      <Button
        onClick={handleSubmit}
        className="w-full justify-center my-4 bg-blue-300 hover:bg-gray-400 text-gray-800  dark:text-slate-50 font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <span>Continue</span>
        <ChevronRight className="h-4 w-4 mx-2" />
      </Button>
    </div>
  );
};

export default EntryPointAdd;
