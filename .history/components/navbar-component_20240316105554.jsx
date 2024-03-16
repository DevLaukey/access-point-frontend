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
        <a href="/" className="hidden md:flex justify-center items-center ml-2">
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
          <button
            type="button"
            class="flex items-center justify-center w-48 h-14 text-white bg-black rounded-lg "
          >
            <div class="mr-3">
              <svg viewBox="30 336.7 120.9 129.2" width="30">
                <path
                  fill="#FFD400"
                  d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                ></path>
                <path
                  fill="#FF3333"
                  d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                ></path>
                <path
                  fill="#48FF48"
                  d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                ></path>
                <path
                  fill="#3BCCFF"
                  d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                ></path>
              </svg>
            </div>
            <div>
              <div class="text-xs">GET IT ON</div>
              <div class="-mt-1 font-sans text-xl font-semibold">
                Google Play
              </div>
            </div>
          </button>
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
