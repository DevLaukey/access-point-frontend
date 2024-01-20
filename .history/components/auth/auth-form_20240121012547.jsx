"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function AuthForm() {
  const [session, setSession] = useState(null);
  
  useEffect(() => {
    getSession();
  }, [session, setSession]);
  const supabase = createClientComponentClient();

  const getSession = async () => {
    const { data } = await supabase.auth.getSession();

    console.log(data);
    if (data?.session) {
      setSession(data.session);
      redirect("/");
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
