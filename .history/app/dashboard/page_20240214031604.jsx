"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import React from "react";

import { redirect } from "next/navigation";
import { ScrollArea } from "../../components/ui/scroll-area";

import { DashboardTabs } from "../../components/dashboardtabs";

const DashboardPage = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/sign-in");
  }

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("admin_user", user?.id);
  // get access point
  const { data: accessPoint, error: accessPointError } = await supabase
    .from("access-point")
    .select("*")
    .eq("admin_id", user?.id);

  // get access managers
  const { data: accessManagers, error: accessManagersError } = await supabase
    .from("entry_manager")
    .select("*")
    .eq("admin_id", user?.id);
  
  if (error || accessPointError || accessManagersError) {
    console.log(error);
    console.log(accessPointError);
    console.log(accessManagersError);
    }

  return (
    <ScrollArea className="h-full mt-8">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Hi, Welcome back 👋
          </h2>
          <div className="hidden md:flex items-center space-x-2">
            {/* <CalendarDateRangePicker /> */}
            {/* <Button >Add new user</Button> */}
          </div>
        </div>
<DashboardTabs/>
      </div>
    </ScrollArea>
  );
};

export default DashboardPage;
