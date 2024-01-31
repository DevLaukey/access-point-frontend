import React from "react";
import BreadCrumb from "../../../../components/breadcrumb";
import AddManager, { ProductForm } from "../../../../components/forms/add-manager";
const page = () => {
  const breadcrumbItems = [
    { title: "User", link: "/dashboard/user" },
    { title: "Add Manager", link: "/dashboard/user/add-manager" },
  ];
  return (
    <div className="flex-1 space-y-4 p-8">
      <BreadCrumb items={breadcrumbItems} />
      <ProductForm
        title="Add Entry Manager"
        description="Add a new manager to the system"
        categories={[
          { _id: "GATE_A", name: "GATE A" },
          { _id: "GATE_B", name: "GATE B" },
        ]}
        initialData={null}
      />
    </div>
  );
};

export default page;