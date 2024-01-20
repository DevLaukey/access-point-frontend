import React from "react";
import AuthForm from "../../../components/auth/auth-form";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 border-spacing-2 border">
      <h3 className="text-md ">
        Welcome to the <span className="font-bold">Access IT</span> platform.

      </h3>
      <AuthForm />
    </div>
  );
};

export default page;
