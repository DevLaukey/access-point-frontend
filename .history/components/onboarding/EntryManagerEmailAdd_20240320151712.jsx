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
        <div className="flex justify-center items-center gap-2 ">
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
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <span>Submit</span>
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EntryManagerEmailAdd;
