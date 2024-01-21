"use client";
import React from "react";
import { ModeToggle } from "./toggle-component";
import { DM_Serif_Display } from "next/font/google";
import { useRouter } from "next/navigation";

export const dm_serif_display = DM_Serif_Display({
  subsets: ["latin"],
  family: "DM Serif Display",
  weight: "400",
});

function NavbarComponent() {
  const [loggedInUser, setLoggedInUser] = React.useState(false);
  const router = useRouter();
  const redirectToLogin = () => {
    console.log("redirecting to login");
    router.push("/auth/login");
  };

  const logoutUser = async() => {
    
    try {
      const { error } = await supabase.auth.signOut()
      
      if (error) { 
        throw error
      }

      router.push("/");
    } catch (error) {
      console.log(error)
    }
    
  };
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white dm_serif_display-500">
            ACCESS IT.
          </span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          {loggedInUser && (
            <p className="text-sm  text-gray-500 dark:text-white hover:underline">
              UserName
            </p>
          )}
          <button
            type="button"
            onClick={redirectToLogin}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2"
          >
            Get started
          </button>
          <button
            type="button"
            onClick={logoutUser}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2"
          >
            Get started
          </button>

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;