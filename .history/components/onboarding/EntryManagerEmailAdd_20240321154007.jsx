import React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";


const EntryManagerEmailAdd = ({
  managerEmail,
  setManagerEmail,
  addEntryManagerEmail,

}) => {

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-50 mt-10">
        Add Entry Manager Emails
      </h1>
      <p className="text-slate-800 dark:text-slate-50 mt-2 text-wrap">
        Add the email addresses of the people who will be responsible for
        managing the entries.
      </p>
      <form>
        <div className="flex flex-col sm:flex-row  px-2 justify-center items-center gap-2 my-2">
          <div className="flex justify-center items-center gap-2 my-2">
            
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
          </div>
          <Button onClick={addEntryManagerEmail} className="w-full justify-center bg-gray-300 hover:bg-gray-400 text-gray-800  dark:text-slate-50 font-bold py-2 px-4 rounded inline-flex items-center">
            <span>Continue</span>
            <ChevronRight className="h-4 w-4 mx-2" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EntryManagerEmailAdd;
