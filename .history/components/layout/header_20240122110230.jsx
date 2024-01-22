"use client";
import { cn } from "../../lib/utils";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";
import { DM_Serif_Display } from "next/font/google";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { ModeToggle } from "../toggle-component";
import { Button } from "../ui/button";

export const dm_serif_display = DM_Serif_Display({
  subsets: ["latin"],
  family: "DM Serif Display",
  weight: "400",
});

export default function Header() {
  const supabase = createClientComponentClient();

  const [loggedInUser, setLoggedInUser] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUser();
  }, [loggedInUser, setLoggedInUser, email, setEmail]);

  const getUser = async () => {
    const { data } = await supabase.auth.getUser();
    if (data.user !== null) {
      setEmail(data.user?.email);
      setLoggedInUser(true);
    }
  };

  const logoutUser = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      setLoggedInUser(false);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        <div className="hidden md:flex justify-center items-center ml-2">
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
        </div>
        <div className={cn("block sm:!hidden")}>
          <MobileSidebar />
        </div>
        <div className="flex space-x-4">
          <Button onClick={()=>router.push('/add-user/fingerprint')}>
            Add User
          </Button>
          <UserNav />
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
}
