"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthForm() {
  const supabase = createClientComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data?.session) {
    redirect('/');
  }

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
      providers={["google"]}
      redirectTo="http://localhost:3000/auth/callback"
      
    />
  );
}
