import React from "react";

const EntryManagerEmailAdd = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800">Add Entry Manager Emails</h1>
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
          <input
            type="email"
            id="email"
            name="email"
            className="mt-2 border border-gray-300 rounded-md p-2"
          />
        </div>
      </form>
    </div>
  );
};

export default EntryManagerEmailAdd;
