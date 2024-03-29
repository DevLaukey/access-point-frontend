"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Overview } from "./overview";
import { RecentSales } from "./recent-sales";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function DashboardTabs() {
  const [data, setData] = useState([]);
  const [accessPoint, setAccessPoint] = useState([]);
  const [accessManagers, setAccessManagers] = useState([]);
  const [chartDetails, setChartDetails] = useState([]);
  const supabase = createClientComponentClient();

  useEffect(() => {
    fetchData();
  }, [data, accessManagers, accessPoint]);

  const fetchData = async () => {
    try {
      const userObj = await supabase.auth.getUser();
      const user = userObj?.data.user;
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
      const { data: accessManagers, error: accessManagersError } =
        await supabase
          .from("entry_manager")
          .select("*")
          .eq("admin_id", user?.id);
      if (error || accessPointError || accessManagersError) {
        console.log(error);
        console.log(accessPointError);
        console.log(accessManagersError);
      }

      setChartDetails(generateWeeklyData(data));
      setData(data);
      setAccessManagers(accessManagers);
      setAccessPoint(accessPoint);
    } catch (error) {
      console.log(error.message);
    }
  };

  
function generateWeeklyData(arrivalData) {
  // Create an array with days of the week
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Initialize an object to store the count for each day
  const dayCounts = {};

  // Process each arrival record
  arrivalData.forEach((record) => {
    const arrivalDate = new Date(record.arrival_time);
    const dayOfWeek = daysOfWeek[arrivalDate.getDay()];

    // Increment the count for the specific day
    if (dayCounts[dayOfWeek]) {
      dayCounts[dayOfWeek]++;
    } else {
      dayCounts[dayOfWeek] = 1;
    }
  });

  // Convert the object to the desired array format
  const resultArray = daysOfWeek.map((day) => ({
    name: day,
    total: dayCounts[day] || 0,
  }));

  return resultArray;
}

  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data ? data.length : 0}</div>
              <p className="text-xs text-muted-foreground">
                The total number of people who visited the premises
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Number of Entry Points
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{accessPoint.length}</div>
              <p className="text-xs text-muted-foreground">
                The number of places with the access system
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Number of Entry Managers
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{accessManagers.length}</div>
              <p className="text-xs text-muted-foreground">
                The number of people who manage the access system.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview chartDetails={chartDetails} />
            </CardContent>
          </Card>
          <Card className="col-span-4 md:col-span-3">
            <CardHeader>
              <CardTitle>Top Access Points</CardTitle>
              <CardDescription>
                These are the access points registered.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentSales
                users={data}
                entryPoint={accessPoint}
                entryManager={accessManagers}
              />
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
}
