import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function saveAccessPoint({ name }) {
  const supabase = createClientComponentClient();
  const user = await supabase.auth.getUser();

  const id = user.data.user.id;
  console.log(id);
  try {
    const { data, error } = await supabase
      .from("access-point")
      .insert([{ name: name ? name : "No Access Point", admin_id: id }])
      .select();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Error Adding Access Points: ", error);
    return [];
  }
}
