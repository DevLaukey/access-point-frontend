"use client";
import { useEffect, useState } from "react";
import BreadCrumb from "../../../components/breadcrumb";
import UserClient from "../../../components/tables/user-tables/client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const breadcrumbItems = [{ title: "Visitors", link: "/dashboard/visitors" }];
export default  function page() {
  const supabase = createClientComponentClient();
  const [processedData, setProcessedData] = useState({});

  useEffect(() => {
    getUserData()
   }, [ ]);

  async function getUserData() {
    let { data: userDetails, error: userError } = await supabase.from("users")
      .select(`
    *,
    access_point_id: access-point(*)
    `);

    if (userError) {
      console.log(userError);
    }
  
     userDetails.map((visitor) => {
      const arrivalTime = new Date(visitor.arrival_time);
      const formattedArrivalTime = arrivalTime.toLocaleString();

      const status = visitor.departure_time ? "Out of premise" : "In premise";
      const departureTime = visitor.departure_time
        ? new Date(visitor.departure_time).toLocaleString()
        : "-";

       setProcessedData({
         id: visitor.id,
         full_name: visitor.full_name,
         arrival_time: formattedArrivalTime,
         access_point_name: visitor.access_point_id.name,
         status: status,
         departure_time: departureTime,
       });
    });
  };

  console.log(processedData);
  const users = [
    {
      id: 1,
      name: "Professor Joseph",
      company: "Dell",
      role: "5 Feb 2023",
      verified: false,
      status: "Logged out",
    },
    {
      id: 2,
      name: "Professor Joseph",
      company: "Dell",
      role: "5 Feb 2023",
      verified: false,
      status: "Logged out",
    },
    {
      id: 3,
      name: "Professor Joseph",
      company: "Dell",
      role: "5 Feb 2023",
      verified: false,
      status: "Logged out",
    },
    {
      id: 4,
      name: "Professor Joseph",
      company: "Dell",
      role: "5 Feb 2023",
      verified: false,
      status: "Logged out",
    },
    {
      id: 5,
      name: "Professor Joseph",
      company: "Dell",
      role: "5 Feb 2023",
      verified: false,
      status: "Logged out",
    },
  ];

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={processedData} />
      </div>
    </>
  );
}
