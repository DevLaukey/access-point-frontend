"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Mon",
    total: 20,
  },
  {
    name: "Tue",
    total: 20,
  },
  {
    name: "Wed",
    total: 20,
  },
  {
    name: "Thur",
    total: 20,
  },
  {
    name: "Fri",
    total: 20,
  },
  {
    name: "Sat",
    total: 20,
  },
  {
    name: "Fri",
    total: 10,
  }
];

export function Overview({users}) {
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
