"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    total: 20,
  },
  {
    name: "Feb",
    total: 20,
  },
  {
    name: "Mar",
    total: 20,
  },
  {
    name: "Apr",
    total: 20,
  },
  {
    name: "May",
    total: 20,
  },
  {
    name: "Jun",
    total: 20,
  },
  {
    name: "Jul",
    total: 20,
  },
  {
    name: "Aug",
    total: 20,
  },
  {
    name: "Sep",
    total: 20,
  },
  {
    name: "Oct",
    total: 20,
  },
  {
    name: "Nov",
    total: 20,
  },
  {
    name: "Dec",
    total: 20,
  },
];

export function Overview() {
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
