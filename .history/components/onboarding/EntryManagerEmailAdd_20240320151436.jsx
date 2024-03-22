import React from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

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
        <div className="flex flex-col mt-2">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-slate-800"
          >
            Email
          </label>
          <div className="flex">
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 border border-gray-300 rounded-md p-2"
            />
            <button
              Name="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Submit
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <ArrowRightIcon />
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EntryManagerEmailAdd;
