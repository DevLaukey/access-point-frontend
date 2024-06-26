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
import { Toaster } from "../../ui/sonner";
import { toast } from "sonner";

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
import saveAccessPoint from "../../../constants/saveAccessPoint";

const UserClient = ({ data, accessPoints }) => {
  const router = useRouter();

  const [entryPoint, setEntryPoint] = useState("");
  const [entryPointDescription, setEntryPointDescription] = useState("");
  const [saving, setSaving] = useState(false); // State to manage saving state

  const saveEntryPoint = async () => {
    if (!entryPoint) {
      toast("Entry Point is required.");
      return;
    }

    setSaving(true); // Set saving state to true when saving starts

    const response = await saveAccessPoint(entryPoint, entryPointDescription);
    if (response.length > 0) {
      toast("Access Point has been created.");

      setEntryPoint("");
      setEntryPointDescription("");
    }

    // close the dialog

    setSaving(false); // Set saving state to false after saving completes
  };

  return (
    <>
      <Toaster />

      <div className="flex items-start justify-between">
        <Heading
          title={`Existing Visitors (${data.length})`}
          description="Manage the visitors from all the access points"
        />
      
      </div>
      <Separator />
      <DataTable
        searchKey="full_name"
        columns={columns}
        data={data}
        accessPoints={accessPoints}
      />
    </>
  );
};

export default UserClient;
