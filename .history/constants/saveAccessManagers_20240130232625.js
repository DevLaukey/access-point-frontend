import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function saveAccessManagers({ name }) {
  const supabase = createClientComponentClient();
  const user = await supabase.auth.getUser();

  const id = user.data.user.id;
  console.log(id);
  try {
    const { data, error } = await supabase
      .from("entry_manager")
      .insert([{ name: name ? name : "No Point", admin_id: id }])
      .select();

    if (error) {
      throw new Error(error.message);
    }

    const result = [{ id: 0, name: "None" }, ...data];
    return result;
  } catch (error) {
    console.error("Error Adding Access Points: ", error);
    return [];
  }
}
