import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function getEntryManagers() {
  const supabase = createClientComponentClient();
  const user = await supabase.auth.getUser();

  const id = user.data.user.id;
  console.log(id);
  try {
    const { data, error } = await supabase
      .from("access-manager")
      .eq("admin_id", id)
      .select("*");
    if (error) {
      throw new Error(error.message);
    }

    const result = [{ id: 0, name: "None" }, ...data];
    return result;
  } catch (error) {
    console.error("Error fetching access managers:", error);
    return [];
  }
}