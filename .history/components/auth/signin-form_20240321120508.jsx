"use client";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required Field"),
  password: Yup.string().required("Required Field"),
});

const SignIn = () => {
  const supabase = createClientComponentClient();
  const [errorMsg, setErrorMsg] = useState(null);
  const router = useRouter()

  async function signIn(formData) {
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
     
    });

    router.refresh()

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
        validationSchema={SignInSchema}
        onSubmit={signIn}
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

            <div>
              <Label htmlFor="password" className="block text-sm font-medium">
                Password
              </Label>
              <Field
                id="password"
                name="password"
                placeholder="******"
                type="password"
                className="border-gray-800 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm p-3"
              />
              {errors.password && touched.password ? (
                <div className="text-red-600 text-sm">{errors.password}</div>
              ) : null}
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
      <Link href="/auth/register">
        <p className="text-sm text-gray-600 mt-2 block">
          Don't have an account? Sign Up.
        </p>
      </Link>
    </div>
  );
};

export default SignIn;
