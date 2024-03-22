import React from "react";
import SubscriptionCards from "./SubscriptionCards";
import SideInfo from "./SideInfo";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const OnboardingSlider = ({ darkMode }) => {
  return (
    <div
      className={`flex w-screen flex-wrap text-${
        darkMode ? "white" : "slate-800"
      } mt-6 bg-${darkMode ? "gray-900" : "white"}`}
    >
      <div
        className={`flex w-full flex-col md:w-1/2 ${
          darkMode ? "text-white" : ""
        }`}
      >
        <div
          className={`flex justify-center pt-12 md:justify-start md:pl-12 ${
            darkMode ? "text-white" : ""
          }`}
        >
          <a
            href="#"
            className={`text-2xl font-bold ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Welcome to P.O.E.M.S
          </a>
        </div>

        <div
          className={`my-auto mx-auto flex flex-col justify-center pt-8 md:justify-start lg:w-[34rem] ${
            darkMode ? "text-white" : ""
          }`}
        >
          <div
            className={`flex w-full flex-col  px-2 sm:px-14 ${
              darkMode ? "text-white" : ""
            }`}
          >
            <div className="mx-auto w-full max-w-md pb-12 px-8 sm:px-0">
              <div className={`relative ${darkMode ? "text-white" : ""}`}>
                <div
                  className={`absolute left-0 top-2 h-0.5 w-full ${
                    darkMode ? "bg-white" : "bg-gray-900"
                  }`}
                  aria-hidden="true"
                >
                  <div
                    className={`absolute h-full w-1/3 ${
                      darkMode ? "bg-gray-900" : "bg-gray-900"
                    }`}
                  ></div>
                  <div
                    className={`left absolute left-1/3 h-full w-1/3 ${
                      darkMode
                        ? "bg-gray-900"
                        : "bg-gradient-to-r from-gray-900"
                    }`}
                  ></div>
                </div>
                <ul
                  className={`relative flex w-full justify-between ${
                    darkMode ? "text-white" : ""
                  }`}
                >
                  <li className={`text-left ${darkMode ? "text-white" : ""}`}>
                    <a
                      className={`flex h-5 w-5 items-center justify-center rounded-full ${
                        darkMode ? "bg-gray-900" : "bg-gray-600"
                      } text-xs font-semibold ${
                        darkMode ? "text-white" : "text-white"
                      } ring ring-gray-600 ring-offset-2`}
                      href="/onboarding"
                    >
                      1
                    </a>
                  </li>
                  <li className={`text-left ${darkMode ? "text-white" : ""}`}>
                    <a
                      className={`flex h-5 w-5 items-center justify-center rounded-full ${
                        darkMode ? "bg-gray-900" : "bg-gray-600"
                      } text-xs font-semibold ${
                        darkMode ? "text-white" : "text-white"
                      }`}
                      href="/onboarding/email-step"
                    >
                      2
                    </a>
                  </li>
                  <li className={`text-left ${darkMode ? "text-white" : ""}`}>
                    <a
                      className={`flex h-5 w-5 items-center justify-center rounded-full ${
                        darkMode ? "bg-gray-900" : "bg-gray-300"
                      } text-xs font-semibold ${
                        darkMode ? "text-white" : "text-white"
                      }`}
                    >
                      3
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <SubscriptionCards />
          </div>
        </div>
      </div>
      <SideInfo />
    </div>
  );
};

export default OnboardingSlider;
