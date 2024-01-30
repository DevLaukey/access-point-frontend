import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function getEntryManagers() {
  const supabase = createClientComponentClient();
  const user = await supabase.auth.getUser();

  const id = user.data.user.id;
  try {
    const { data, error } = await supabase
      .from("entry_manager")
      .select("*")
      .eq("admin_id", id);

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
