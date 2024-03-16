import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Icons } from "../../../components/icons";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import SignInForm from "../../../components/auth/signin-form";


export const metadata = {
  title: "Sign in to your account",
  description: "Sign in to your account to continue",
};


export default async function LoginPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data?.session) {
    redirect("/dashboard");
  }
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>
        <SignInForm />
      </div>
    </div>
  );
}
