"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthForm() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response= await supabase.auth.getUser();

    console.log(response);
    // if (data?.user) {
    //   router.push("/account");
    // }
    return null;
  };

  return (
    <Auth
      supabaseClient={supabase}
      view="sign_in"
      appearance={{
        theme: ThemeSupa,
        variables: {
          default: {
            colors: {
              brand: "blue",
              brandAccent: "darkblue",
            },
          },
        },
      }}
      theme="dark"
      providers={[]}
      redirectTo="http://localhost:3000/auth/callback"
    />
  );
}
