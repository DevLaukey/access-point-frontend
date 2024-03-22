"use client";
import { cn } from "../../lib/utils";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";
import { DM_Serif_Display } from "next/font/google";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { ModeToggle } from "../toggle-component";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import Logo from "../../assets/adaptive-icon.png";
import Link from "next/link"
export const dm_serif_display = DM_Serif_Display({
  subsets: ["latin"],
  family: "DM Serif Display",
  weight: "400",
});

export default function Header() {
  const supabase = createClientComponentClient();
  const router = useRouter();

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
        <a
          href="/dashboard"
          className="hidden md:flex justify-center items-center ml-2"
        >
          <Image
            src={Logo}
            alt="POEMS Logo"
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white dm_serif_display-500">
            ACCESS IT.
          </span>
        </a>
        <div className={cn("block sm:!hidden")}>
          <MobileSidebar />
        </div>
        <div className="flex space-x-4">
          <Button onClick={() => router.push("/existing-user/fingerprint")}>
            Existing Users
          </Button>
          <Button onClick={() => router.push("/add-user/fingerprint")}>
            <Plus className="mr-2 h-4 w-4" /> Add New Visitor
          </Button>
          <UserNav />
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
}
