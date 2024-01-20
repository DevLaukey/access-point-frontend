"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthForm() {
  const supabase = createClientComponentClient();
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    getSession();
  }, [session, setSession]);

  const getSession = async () => {
    const { data } = await supabase.auth.getSession();

    console.log(data);
    if (data?.session !==null) {
      setSession(data.session);
      router.push("/account");
    }
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
      providers={["google"]}
      redirectTo="http://localhost:3000/auth/callback"
    />
  );
}
