"use client";

import React, { useEffect, useState } from "react";
import { Heading } from "../../ui/heading";
import { useRouter } from "next/navigation";
import { Separator } from "../../ui/separator";
import { DataTable } from "../../ui/data-table";
import { Plus } from "lucide-react";
import { columns } from "./columns";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";

const UserClient = ({ data }) => {
  const router = useRouter();
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
  const [entryPoint, setEntryPoint] = useState("");
  
  const saveEntryPoint = async () => {
    const response = await saveAccessPoint(entryPoint);
    console.log(response);
  };

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Users (${data.length})`}
          description="Manage users from all the access points"
        />
        <div className="flex justify-center items-center space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-xs md:text-sm">
                <Plus className="mr-2 h-4 w-4" /> Add Entry Point
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add Entry Point</DialogTitle>
                <DialogDescription>
                  This is an access point to the premises
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    Link
                  </Label>

                  <Input
                    id="link"
                    value={entryPoint}
                    onChange={(e) => setEntryPoint(e.target.value)}
                  />
                </div>
                <Button type="submit" size="sm" className="px-3">
                  <span className="sr-only">Add </span>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={saveEntryPoint}
                  >
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button
            className="text-xs md:text-sm"
            onClick={() => router.push(`/dashboard/users/add-manager`)}
          >
            <Plus className="mr-2 h-4 w-4" /> Add Entry Manager
          </Button>
        </div>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};

export default UserClient;
