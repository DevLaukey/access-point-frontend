"use client"
import React from "react";
import { ChevronRight } from "lucide-react";

const EntryManagerEmailAdd = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800">
        Add Entry Manager Emails
      </h1>
      <p className="text-slate-800 mt-2">
        Add the email addresses of the people who will be responsible for
        managing the entries.
      </p>
      <form>
        <div className="flex justify-center items-center gap-2 my-2">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-slate-800"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 rounded-md p-2"
          />
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <span>Continue</span>
            <ChevronRight className="h-4 w-4 mx-2" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default EntryManagerEmailAdd;
