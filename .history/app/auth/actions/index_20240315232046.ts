"use server"

import createSupabaseServerClient from "../../../lib/supabase.server";

export async function signUpWithEmailAndPassword(data: {
  email: string;
  password: string;
  confirm: string;
}) {
    const supabase = await createSupabaseServerClient()
}

export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {}
