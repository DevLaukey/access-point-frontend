"use client";
import React from "react";
import { ModeToggle } from "./toggle-component";
import { DM_Serif_Display } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const dm_serif_display = DM_Serif_Display({
  subsets: ["latin"],
  family: "DM Serif Display",
  weight: "400",
});

function NavbarComponent() {
  const pathname = usePathname();
  const[inAuth, setInAuth] = React.useState(false);

 
  const redirectToLogin = () => {
    router.push("/auth/login");
  };



  if (pathname === "/auth") {
    
  }
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex md:flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
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
