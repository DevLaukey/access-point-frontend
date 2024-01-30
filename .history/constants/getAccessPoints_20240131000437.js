import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function getAccessPoints() {
  const supabase = createClientComponentClient();

  const user = await supabase.auth.getUser();

  console.log(user);
  const id = user.data.user?.id;

  try {
    const { data, error } = await supabase
      .from("access-point")
      .select("*")
      .eq("admin_id", id);

    if (error) {
      throw new Error(error.message);
    }

    console
    return data;
  } catch (error) {
    console.error("Error fetching access points:", error);
    return [];
  }
}
