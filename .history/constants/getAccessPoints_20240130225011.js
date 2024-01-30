import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function getAccessPoints() {
  const supabase = createClientComponentClient();

  try {
    const { data, error } = await supabase.from("access_points").select("*");
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    console.error("Error fetching access points:", error);
    return [];
  }
}
