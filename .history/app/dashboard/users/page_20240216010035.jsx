"use client";
import { useEffect, useState } from "react";
import BreadCrumb from "../../../components/breadcrumb";
import UserClient from "../../../components/tables/user-tables/client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const breadcrumbItems = [{ title: "Visitors", link: "/dashboard/visitors" }];
export default function page() {
  const supabase = createClientComponentClient();
  const [processedData, setProcessedData] = useState([]);
  const [accessPoints, setAccessPoints] = useState([]);
  useEffect(() => {
    getUserData();
  }, [processedData, setProcessedData]);

  async function getUserData() {
    const user = await supabase.auth.getUser();

    const id = user.data.user?.id;
    let { data: userDetails, error: userError } = await supabase
      .from("users")
      .select(
        `
    *,
    access_point_id: access-point(*)
    `
      )
      .eq("admin_user", id);

    if (userError) {
      console.log(userError);
    }

    const points = userDetails.map((obj) => ({
      id: obj.access_point_id.id,
      name: obj.access_point_id.name,
    }));

    setAccessPoints(points);

    setProcessedData(
      userDetails.map((visitor) => {
        const arrivalTime = new Date(visitor.arrival_time);
        const formattedArrivalTime = extractDateOnly(visitor.arrival_time).toLocaleString();

        const status = visitor.departure_time ? "Out of premise" : "In premise";
        const departureTime = visitor.departure_time
          ? new Date(visitor.departure_time).toLocaleString()
          : "-";

        return {
          id: visitor.id,
          full_name: visitor.full_name,
          arrival_time: formattedArrivalTime,
          access_point_name: visitor.access_point_id.name,
          status: status,
          departure_time: departureTime,
        };
      })
    );
  }
function extractDateOnly(dateTimeString) {
  const [datePart] = dateTimeString.split(","); // Split at the comma
  return datePart.trim(); // Remove leading/trailing whitespaces
}
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={processedData} accessPoints={accessPoints} />
      </div>
    </>
  );
}
