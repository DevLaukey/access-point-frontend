"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AuthForm() {
  const supabase = createClientComponentClient();

  React.useEffect(() => {
    supabase.auth.getSession().then(function (session) {
      console.log("Session ", session);
      if (session) {
        window.location.href = "/dashboard";
      }
    });
  }, []);

  return (
    <Auth
      supabaseClient={supabase}
      view="sign_in"
      appearance={{ theme: ThemeSupa }}
      theme="dark"
      providers={["google"]}
      redirectTo="http://localhost:3000/auth/callback"
    />
  );
}
