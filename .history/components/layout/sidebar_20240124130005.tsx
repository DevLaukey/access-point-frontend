import { navItems } from "../../constants/data";
import { cn } from "../../lib/utils";
import { DashboardNav } from "../dashboard-nav";

export default function Sidebar() {
  return (
    // to add hidden
    <nav
      className="hidden sm:block md:block relative h-screen border-r mt-20 lg:block w-72">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Overview
            </h2>
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </nav>
  );
}
