"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect } from "react";

export default function AuthForm() {
  const supabase = createClientComponentClient();

  // useEffect(() => {
  //   supabase.auth.getSession().then(function (session) {
  //     console.log("Session ", session);
  //     if (session) {
  //       window.location.href = "/auth/fingerprint";
  //     }
  //   });
  // }, []);

  return (
    <Auth
      supabaseClient={supabase}
      view="sign_in"
      appearance={{ theme: ThemeSupa }}
      theme="dark",
      variables: {
        default: {
          colors: {
            brand: 'red',
            brandAccent: 'darkred',
          },
        },
      providers={["google"]}
      redirectTo="http://localhost:3000/auth/callback"
    />
  );
}
