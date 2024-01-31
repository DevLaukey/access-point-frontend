"use client";
import React, { useEffect, useState } from "react";
import { Heading } from "../ui/heading";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { Separator } from "../ui/separator";
import saveAccessManager from "../../constants/saveAccessManagers";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

function AddManager({ title, description }) {
  const supabase = createClientComponentClient();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [accessPoints, setAccessPoints] = useState([]);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [entry_point_id, setEntryPointId] = useState("");

  useEffect(() => {
    getAccessPoints();
  }, []);

  const getAccessPoints = async () => {
    try {
      const user = await supabase.auth.getUser();

      const id = user.data.user?.id;
      const { data, error } = await supabase
        .from("access-point")
        .select("*")
        .eq("admin_id", id);

      if (error) {
        throw new Error(error.message);
      }

      setAccessPoints(data);
    } catch (error) {
      console.error("Error fetching access points:", error);
    }
  };
  const addManager = async () => {
    setLoading(true);
    const result = await saveAccessManager({
      first_name,
      last_name,
      phone_number,
      entry_point_id,
    });
    if (result.length !== 0) {
      setData(result.data);
    } else {
      setError(true);
    }
    setLoading(false);
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {data.length !== 0 && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <div className="flex mt-8 justify-center items-center">
        <form className="w-full max-w-lg ">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 dark:text-gray-300 border border-red-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                id="grid-first-name"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Jane"
              />
              {error && (
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 dark:text-gray-300 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                id="grid-last-name"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2"
                for="grid-phone_number"
              >
                Phone Number
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 dark:text-gray-300 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500"
                id="grid-phone_number"
                type="text"
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="0707070707"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2"
                for="grid-state"
              >
                Entry Point
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full  border border-gray-200 text-gray-700 dark:text-gray-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none  focus:border-gray-500"
                  id="grid-state"
                  onChange={(e) => { console.log(e.target.id, setEntryPointId(e.target.value)) }}
                >
                  {accessPoints.map((category) => (
                    <option
                      className="w-3/4"
                      value={category._id}
                     
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Button onClick={addManager}>Add Manager</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddManager;