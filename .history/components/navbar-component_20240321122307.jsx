"use client";
import React from "react";
import { ModeToggle } from "./toggle-component";
import { usePathname, useRouter } from "next/navigation";
import Logo from "../assets/adaptive-icon.png"
import Image from "next/image";

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
          <Image src={Logo} alt="logo"height={50} width={50} />
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white dm_serif_display-500">
            P.O.E.M.S
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
