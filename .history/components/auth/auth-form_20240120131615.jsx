"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AuthForm() {
  const supabase = createClientComponentClient();

  return (
    <Auth
      supabaseClient={supabase}
      view="sign_in"
      appearance={{ theme: ThemeSupa }}
      theme="defualt"
      showLinks={false}
      providers={[]}
      redirectTo="http://localhost:3000/auth/callback"
    />
  );
}