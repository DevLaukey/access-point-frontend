import React from "react";

function page() {
  return (
    <div className="flex w-screen flex-wrap text-slate-800 mt-6">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center py-12 md:justify-start md:pl-12">
          <a href="#" className="text-2xl font-bold text-blue-600">
            Welcome to P.O.E.M.S
                  </a>
                  <p>
                    <span className="text-gray-600">Step 1 of 4</span>
                  </p>
        </div>
        <div className="my-auto mx-auto flex flex-col justify-center pt-8 md:justify-start lg:w-[34rem]">
          <div className="flex w-full flex-col  px-2 sm:px-14">
            <div className="mx-auto w-full max-w-md pb-20 px-8 sm:px-0">
              <div className="relative">
                <div
                  className="absolute left-0 top-2 h-0.5 w-full"
                  aria-hidden="true"
                >
                  <div className="absolute h-full w-1/3 bg-gray-900"></div>
                  <div className="left absolute left-1/3 h-full w-1/3 bg-gradient-to-r from-gray-900"></div>
                </div>
                <ul className="relative flex w-full justify-between">
                  <li className="text-left">
                    <a
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white"
                      href="#"
                    >
                      1
                    </a>
                  </li>
                  <li className="text-left">
                    <a
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                      href="#"
                    >
                      2
                    </a>
                  </li>
                  <li className="text-left">
                    <a
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs font-semibold text-white"
                      href="#"
                    >
                      3
                    </a>
                  </li>
                  <li className="text-left">
                    <a
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs font-semibold text-white"
                      href="#"
                    >
                      4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h2 className="font-serif text-2xl font-semibold text-gray-700">
              How big is your company
            </h2>
            <div className="mt-8 flex w-full flex-col pb-8">
              <div className="relative mb-4">
                <input
                  className="peer hidden"
                  id="radio_1"
                  type="radio"
                  name="radio"
                  checked
                />
                <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-900"></span>
                <label
                  className="flex cursor-pointer flex-col rounded-2xl border border-gray-300 bg-slate-100/80 p-4 pr-8 sm:pr-16"
                  for="radio_1"
                >
                  <span className="mb-2 text-lg font-semibold">Small Team</span>
                  <p className="text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    mollitia corporis non fugiat ratione.
                  </p>
                </label>
              </div>
              <div className="relative mb-4">
                <input
                  className="peer hidden"
                  id="radio_2"
                  type="radio"
                  name="radio"
                />
                <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-900"></span>
                <label
                  className="flex cursor-pointer flex-col rounded-2xl border border-gray-300 bg-slate-100/80 p-4 pr-8 sm:pr-16"
                  for="radio_2"
                >
                  <span className="mb-2 text-lg font-semibold">Large Team</span>
                  <p className="text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    mollitia corporis non fugiat ratione.
                  </p>
                </label>
              </div>
              <div className="my-4 space-y-3">
                <label for="terms" className="flex space-x-4">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-6 w-6 shrink-0 accent-gray-900"
                    checked
                  />
                  <span
                    id="terms-description"
                    className="text-sm text-gray-600"
                  >
                    I agree to the
                    <a className="underline" href="#">
                      Terms and Conditions
                    </a>
                    . Learn about our Privacy Policy and our measures to keep
                    your data safe and secure.
                  </span>
                </label>
              </div>

              <button className="my-2 flex items-center justify-center rounded-md bg-gray-900 py-3 font-medium text-white">
                Continue
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-4 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden h-screen select-none flex-col justify-center bg-blue-600 bg-gradient-to-br md:flex md:w-1/2">
        <div className="py-16 px-8 text-white xl:w-[40rem]">
          <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
            New Feature
          </span>
          <p className="my-6 text-3xl font-semibold leading-10">
            Create animations with
            <span className="whitespace-nowrap py-2 text-cyan-300">
              drag and drop
            </span>
            .
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            necessitatibus nostrum repellendus ab totam.
          </p>
          <a
            href="#"
            className="font-semibold tracking-wide text-white underline underline-offset-4"
          >
            Learn More
          </a>
        </div>
        <img
          className="ml-8 w-11/12 max-w-lg rounded-lg object-cover"
          src="/images/SoOmmtD2P6rjV76JvJTc6.png"
        />
      </div>
    </div>
  );
}

export default page;
