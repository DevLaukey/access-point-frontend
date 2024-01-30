import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function getAccessPoints() {
  const supabase = createClientComponentClient();
  const user = supabase.getUser();

  console.log(user);
  try {
    const { data, error } = await supabase
      .from("access-manager")
      .eq("admin_id", user.id)
      .select("*");
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    console.error("Error fetching access managers:", error);
    return [];
  }
}
