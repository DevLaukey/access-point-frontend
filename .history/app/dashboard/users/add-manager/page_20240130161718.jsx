import React from "react";
import BreadCrumb from "../../../../components/breadcrumb";
import AddManager from "../../../../components/forms/add-manager";
const page = () => {
  const breadcrumbItems = [
    { title: "User", link: "/dashboard/user" },
    { title: "Add Manager", link: "/dashboard/user/add-manager" },
  ];
  return (
    <div className="flex-1 space-y-4 p-8">
      <BreadCrumb items={breadcrumbItems} />
      <AddManager
        title="Add Entry Manager"
        description="Add a new manager to the system"
        categories={[
          { _id: "GATE_A", name: "GATE A" },
          { _id: "GATE_B", name: "GATE B" },
          { _id: "GATE_C", name: "GATE C" },
        ]}
        initialData={
          ({ _id: "GATE_A", name: "GATE A" },
          { _id: "GATE_B", name: "GATE B" },
          { _id: "GATE_C", name: "GATE C" })
        }
      />
    </div>
  );
};

export default page;
