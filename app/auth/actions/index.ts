"use server";

import createSupabaseServerClient from "../../../lib/supabase.server";

export async function signUpWithEmailAndPassword(data: {
  email: string;
  password: string;
  confirm: string;
}) {
  const supabase = await createSupabaseServerClient();

  const result = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });
}

export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {}
