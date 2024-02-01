"use client";

import { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export function Overview({ users }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(countPeopleByDay());
  }, [users]);

  function countPeopleByDay() {
    // Initialize an object to store counts for each day
    const dayCounts = {
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      Saturday: 0,
      Sunday: 0,
    };

    // Iterate through the users and update the counts based on the day of the week
    users.forEach((user) => {
      const arrivalDate = new Date(user.arrival_time);
      const dayOfWeek = arrivalDate.toLocaleDateString("en-US", {
        weekday: "short",
      });

      // Increment the count for the corresponding day
      dayCounts[dayOfWeek]++;
    });

    // Convert the counts object to the desired format
    const result = Object.entries(dayCounts).map(([name, total]) => ({
      name: name.substring(0, 3), // Take the first three characters for short names like "Mon"
      total,
    }));

    console.log(result)

    return result;
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
