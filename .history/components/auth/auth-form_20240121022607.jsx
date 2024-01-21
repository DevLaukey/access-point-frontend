"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function AuthForm() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  supabase.auth.onAuthStateChange((session) => {
    if (session == "SIGNED_IN") {
      router.push("/account");
    }
  });

  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
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
