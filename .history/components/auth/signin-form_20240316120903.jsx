"use client"
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const SignIn = () => {
  const supabase = createClientComponentClient();
  const [errorMsg, setErrorMsg] = useState(null);

  async function signIn(formData) {
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setErrorMsg(error.message);
    }
  }

  return (
    <div>
      <h2>Sign In</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={signIn}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}

            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}

            <Link href="/reset-password">
              <p>Forgot your password?</p>
            </Link>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      {errorMsg && <div>{errorMsg}</div>}
      <Link href="/sign-up">
        <p>Don't have an account? Sign Up.</p>
      </Link>
    </div>
  );
};

export default SignIn;
