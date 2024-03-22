import React from "react";
import { Button } from "../ui/button";

const EntryPointAdd = ({
  entryPoint,
  setEntryPoint,
  addEntryPoint,
  entryPointDescription,
  setEntryPointDescription,
}) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-50 mt-10">
        Add Entry Points
      </h1>
      <p className="text-slate-800 dark:text-slate-50 my-2 text-wrap">
        Add the entry points which will be assigned an entry manager.
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-50 mt-2 text-wrap">
        You can add upto 3 entry points for the free tier.
      </p>
      <form>
        <div className="">
          <div className="flex justify-between items-center gap-2 my-2">
            <label
              htmlFor="point"
              className="font-semibold text-slate-800 dark:text-slate-50 text-lg"
            >
              Name
            </label>
            <input
              type="text"
              id="point"
              name="point"
              value={entryPoint}
              onChange={(e) => setEntryPoint(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex justify-center items-center gap-2 my-2">
            <label
              htmlFor="description"
              className="font-semibold text-slate-800 dark:text-slate-50 text-lg"
            >
              Description
            </label>
            <input
              type="text-area"
              id="description"
              name="description"
              value={entryPointDescription}
              onChange={(e) => setEntryPointDescription(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <Button
            onClick={addEntryPoint}
            className="w-full justify-center bg-gray-300 hover:bg-gray-400 text-gray-800  dark:text-slate-50 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <span>Save</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EntryPointAdd;
