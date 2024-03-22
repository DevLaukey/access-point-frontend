"use client";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "@radix-ui/react-icons";

const registrationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required Field"),
  password: Yup.string().required("Required Field"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required Field"),
});

const Register = () => {
  const supabase = createClientComponentClient();
  const [errorMsg, setErrorMsg] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  async function register(formData) {
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,

      options: {
        redirectTo: "/dashboard",
      },
    });

    if (error) {
      setErrorMsg(error.message);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={registrationSchema}
        onSubmit={register}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <Label htmlFor="email" className="block text-sm font-medium">
                Email
              </Label>
              <Field
                id="email"
                name="email"
                placeholder="jane@doe.com"
                type="email"
                className="border-gray-800 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm p-3"
              />
              {errors.email && touched.email ? (
                <div className="text-red-600 text-sm">{errors.email}</div>
              ) : null}
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <Label className="block text-sm font-medium">Password</Label>
                <div className="relative">
                  <Field
                    id="password"
                    name="password"
                    placeholder="******"
                    type="password"
                    className="border-gray-800 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm p-3"
                  />
                
                  {showPassword ? (
                    <EyeOff
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <Eye
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
                {errors.password && touched.password ? (
                  <div className="text-red-600 text-sm">{errors.password}</div>
                ) : null}
              </div>
              <div>
                <Label className="block text-sm font-medium">
                  Confirm Password
                </Label>
                <Field
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="******"
                  type="password"
                  className="border-gray-800 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm p-3"
                />
                {errors.confirmPassword && touched.password ? (
                  <div className="text-red-600 text-sm">{errors.password}</div>
                ) : null}
              </div>
            </div>

            <Link href="/reset-password">
              <p className="text-sm text-blue-500 hover:underline">
                Forgot your password?
              </p>
            </Link>

            <Button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      {errorMsg && <div className="text-red-600 mt-2">{errorMsg}</div>}
      <Link href="/auth/login">
        <p className="text-sm text-gray-600 mt-2 block">
          Already have an account? Sign In.
        </p>
      </Link>
    </div>
  );
};

export default Register;
