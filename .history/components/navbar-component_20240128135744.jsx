"use client";
import React from "react";
import { ModeToggle } from "./toggle-component";
import { usePathname, useRouter } from "next/navigation";

function NavbarComponent() {
  const pathname = usePathname();
  const router = useRouter();
  const[inAuth, setInAuth] = React.useState(false);

 
  const redirectToLogin = () => {
    router.push("/auth/login");
  };



  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex md:flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="hidden md:flex justify-center items-center ml-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white dm_serif_display-500">
            ACCESS IT.
          </span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          {!inAuth && (
            <button
              type="button"
              onClick={redirectToLogin}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2"
            >
              Get started
            </button>
          )}

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
