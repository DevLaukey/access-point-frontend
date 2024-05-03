"use client";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { DashboardNav } from "../dashboard-nav";
import { navItems } from "../../constants/data";


export function MobileSidebar({ className }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="!px-0">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Overview
              </h2>
              <div className="space-y-1">
                <DashboardNav items={navItems} setOpen={setOpen} />
                <Button
                  onClick={() => router.push("/existing-user/fingerprint")}
                >
                  Existing Users
                </Button>
                <Button onClick={() => router.push("/add-user/fingerprint")}>
                  <Plus className="mr-2 h-4 w-4" /> Add New Visitor
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
