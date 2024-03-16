import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

export default async function AuthForm() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const { data, error } = await supabase.auth.getUser();

  if (data?.user) {
    router.push("/account");
  }
  if (error) {
    toast.error("Details not saved. Please try again");
  }
  return null;

  return (
    <>
      <ToastContainer />

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
    </>
  );
}
