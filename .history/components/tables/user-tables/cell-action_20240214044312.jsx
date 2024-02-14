"use client";
import { AlertModal } from "../../modal/alert-modal";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { LogOut, MoreHorizontal, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CellAction = ({ data }) => {
  const id = data.id;
  const departure_time = data.departure_time;
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
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();

  const onConfirm = async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase
        .from("users")
        .update({ departure_time: new Date().toISOString() })
        .eq("id", id)
        .select();

      if (error) {
        throw new Error(error.message);
      }

      setLoading(false);
      setOpen(false);
      data && toast.sucess("User updated successfully");
      router.push("/dashboard/users");
    } catch (err) {
      console.log(err.message);
    }
  };


  return departure_time == "-" ? (
    <>
      <ToastContainer />

      <AlertModal
        data={data}
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          <DropdownMenuItem onClick={() => setOpen(true)}>
            <LogOut className="mr-2 h-4 w-4" /> Exit Premise
          </DropdownMenuItem>
          {/* <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  ) : null;
};
