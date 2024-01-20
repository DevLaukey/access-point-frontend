import React from "react";
import AuthForm from "../../../components/auth/auth-form";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const page = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data?.session) {
    redirect("/");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mt-8 ">
      <h3 className="text-md ">
        Welcome to the <span className="font-bold">Access IT</span> platform.
      </h3>

      <AuthForm />
    </div>
  );
};

export default page;
