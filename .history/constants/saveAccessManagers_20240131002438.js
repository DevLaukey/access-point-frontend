import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function saveAccessManagers({
  first_name,
  last_name,
  phone_number,
  entry_point_id,
}) {
  const supabase = createClientComponentClient();
  const user = await supabase.auth.getUser();

  const id = user.data.user.id;
  console.log(id);
  try {
    const { data, error } = await supabase
      .from("entry_manager")
      .insert([
        {
          first_name: first_name ? first_name : "No Entry Manager",
          last_name: last_name ? last_name : "No Entry Manager",
          phone_number: phone_number ? phone_number : "No Entry Manager",
          entry_point_id: entry_point_id ? entry_point_id : "No Entry Manager",
          admin_id: id,
        },
      ])
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
