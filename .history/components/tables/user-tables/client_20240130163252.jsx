"use client";

import React from "react";
import { Heading } from "../../ui/heading";
import { useRouter } from "next/navigation";
import { Separator } from "../../ui/separator";
import { DataTable } from "../../ui/data-table";
import { Plus } from "lucide-react";
import { columns } from "./columns";
import { Button } from "../../ui/button";

const UserClient = ({ data }) => {
  const router =useRouter();
  const User = [
    {
      id: 1,
      name: "Candice Schiner",
      company: "Dell",
      role: "Frontend Developer",
      verified: false,
      status: "Active",
    },
    {
      id: 2,
      name: "John Doe",
      company: "TechCorp",
      role: "Backend Developer",
      verified: true,
      status: "Active",
    },
    {
      id: 3,
      name: "Alice Johnson",
      company: "WebTech",
      role: "UI Designer",
      verified: true,
      status: "Active",
    },
    {
      id: 4,
      name: "David Smith",
      company: "Innovate Inc.",
      role: "Fullstack Developer",
      verified: false,
      status: "Inactive",
    },
    {
      id: 5,
      name: "Emma Wilson",
      company: "TechGuru",
      role: "Product Manager",
      verified: true,
      status: "Active",
    },
  ];
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Users (${data.length})`}
          description="Manage users from all the access points"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/users/add-manager`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add Entry Manager 
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};

export default UserClient;
