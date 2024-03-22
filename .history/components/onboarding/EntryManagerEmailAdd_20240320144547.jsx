import React from "react";

const EntryManagerEmailAdd = () => {
  return (
    <div>
      <form>
        <div className="flex flex-col">
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
