import SideInfo from "./SideInfo";
import EntryPointAdd from "./EntryPointAdd";
import {  redirect, useRouter } from "next/navigation";
import { Button } from "../ui/button";

const OnboardingEntryPoint = () => {

  const router = useRouter();

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
                    <a className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white">
                      4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <EntryPointAdd
             
            />
            <div className="flex flex-col justify-center items-center gap-2">
              <Button
                type="button" // Specify type as "button" to prevent form submission
                onClick={() => {
                  redirect('/')
                }}
                className="text-white dark:text-gray-400 text-md w-full"
              >
                Add Details Later
              </Button>
             
            </div>
          </div>

          {/* <div className="mx-auto w-full max-w-md pb-12 px-8 sm:px-0">
            <EntryPointTable entryPoints={entryPoints} />
          </div> */}
        </div>
      </div>
      <SideInfo />
    </div>
  );
};

export default OnboardingEntryPoint;
