"use client";
import React, { useEffect, useState } from "react";
import SideInfo from "./SideInfo";
import EntryPointAdd from "./EntryPointAdd";
import EntryManagersTable from "./EntryManagersTable";
import { toast } from "sonner";
import { useParams } from "next/navigation";

const OnboardingEntryPoint = () => {
  const [managerEmail, setManagerEmail] = useState();
  const [managerEmails, setManagerEmails] = useState([]);
  const id = useParams().id;

  console.log("id", id);

  const addEntryManagerEmail = async () => {
    try {
      // supabase
      const { data, error } = await supabase
        .from("entry_manager")
        .insert([{ email: managerEmail }]);

      if (error) throw error;

      toast("Added Entry Manager Email", {
        description: "The email has been added successfully",
      });

      getEntryManagerEmails();
    } catch (error) {
      console.log(error);
    }
  };

  const getEntryManagerEmails = async () => {
    try {
      const { data, error } = await supabase.from("entry_manager").select("*");

      if (error) throw error;

      setManagerEmails(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-screen flex-wrap text-slate-800 mt-6">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12">
          <a href="#" className="text-2xl font-bold text-blue-600">
            Welcome to P.O.E.M.S
          </a>
        </div>

        <div className="my-auto mx-auto flex flex-col justify-center pt-8 md:justify-start lg:w-[34rem]">
          <div className="flex w-full flex-col  px-2 sm:px-14">
            <div className="mx-auto w-full max-w-md pb-12 px-8 sm:px-0">
              <div className="relative">
                <div
                  className="absolute left-0 top-2 h-0.5 w-full"
                  aria-hidden="true"
                >
                  <div className="absolute h-full w-1/3 bg-gray-900"></div>
                  <div className="left absolute left-1/3 h-full w-1/3 bg-gradient-to-r from-gray-900"></div>
                </div>
                <ul className="relative flex w-full justify-between ">
                  <li className="text-left">
                    <a
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white"
                      href="/onboarding"
                    >
                      1
                    </a>
                  </li>
                  <li className="text-left">
                    <a
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white"
                      href="/onboarding/email-step"
                    >
                      2
                    </a>
                  </li>
                  <li className="text-left">
                    <a className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2">
                      3
                    </a>
                  </li>
                  <li className="text-left">
                    <a
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white"
                      href="/onboarding/email-step"
                    >
                      2
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <EntryPointAdd
              addEntryManagerEmail={addEntryManagerEmail}
              managerEmail={managerEmail}
              setManagerEmail={managerEmail}
            />
          </div>

          <div className="mx-auto w-full max-w-md pb-12 px-8 sm:px-0">
            <EntryManagersTable managerEmails={managerEmails} />
          </div>
        </div>
      </div>
      <SideInfo />
    </div>
  );
};

export default OnboardingEntryPoint;
