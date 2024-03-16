import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import createSupabaseServerClient from "../../../lib/supabase-server";


export default async function AuthForm() {
  const supabase = createSupabaseServerClient();
  const router = useRouter();

  const { data, error } = await supabase.auth.getUser();

  if (data?.user) {
    router.push("/account");
  }
  if (error) {
    toast.error("Details not saved. Please try again");
  }

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
