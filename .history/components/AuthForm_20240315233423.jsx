"use client";

import SignInForm from "./auth/signin-form";
import RegisterForm from "./auth/register-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function AuthForm() {
  return (
    <div className="w-full space-y-5">
      <Tabs defaultValue="signin" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">SignIn</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <SignInForm />
        </TabsContent>
        <TabsContent value="register">
          <RegisterForm />
        </TabsContent>
      </Tabs>
      <OAuthForm />
    </div>
  );
}
