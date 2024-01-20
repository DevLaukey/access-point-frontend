"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation"; // Import the useRouter hook from Next.js

export default function AuthForm() {
  const supabase = createClientComponentClient();
  const router = useRouter(); // Initialize the router

  const handleLogin = () => {
    // Redirect to the "/dashboard" route upon successful login
    router.push("/dashboard");
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
      onAuthStateChange={(event, session) => {
        console.log("Auth state changed");
        // Check if the user is authenticated and call handleLogin
        if (event === "SIGNED_IN" && session) {
          handleLogin();
        }
      }}
    />
  );
}
