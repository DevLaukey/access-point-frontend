import React from "react";
import { Button } from "../ui/button";

const EntryPointAdd = ({
  entryPoint,
  setEntryPoint,
  entryPointDescription,
  setEntryPointDescription,
  addEntryPoint,
  errors, // Receive errors from the parent component
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Your existing JSX */}
      <form>
        <div className="my-4 gap-2">
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
            {errors.entryPoint && (
              <p className="text-red-500 text-sm">{errors.entryPoint}</p>
            )}
          </div>
          <div className="flex justify-center items-center gap-2 my-2">
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
