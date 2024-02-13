import BreadCrumb from "../../../components/breadcrumb";
import UserClient from "../../../components/tables/user-tables/client";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const breadcrumbItems = [{ title: "Visitors", link: "/dashboard/visitors" }];
export default async function page() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  });

  try {
    let { data: users, error } = await supabase.from("users").select("*");
    if (error) throw error;

    console.log("users", users);
    // setUsers(users);
  } catch (error) {
    console.error(error);
  }

  // const users = [
  //   {
  //     id: 1,
  //     name: "Professor Joseph",
  //     company: "Dell",
  //     role: "5 Feb 2023",
  //     verified: false,
  //     status: "Logged out",
  //   },
  //   {
  //     id: 2,
  //     name: "Professor Joseph",
  //     company: "Dell",
  //     role: "5 Feb 2023",
  //     verified: false,
  //     status: "Logged out",
  //   },
  //   {
  //     id: 3,
  //     name: "Professor Joseph",
  //     company: "Dell",
  //     role: "5 Feb 2023",
  //     verified: false,
  //     status: "Logged out",
  //   },
  //   {
  //     id: 4,
  //     name: "Professor Joseph",
  //     company: "Dell",
  //     role: "5 Feb 2023",
  //     verified: false,
  //     status: "Logged out",
  //   },
  //   {
  //     id: 5,
  //     name: "Professor Joseph",
  //     company: "Dell",
  //     role: "5 Feb 2023",
  //     verified: false,
  //     status: "Logged out",
  //   },
  // ];

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={users} />
      </div>
    </>
  );
}