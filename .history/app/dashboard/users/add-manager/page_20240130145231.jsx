import React from "react";
import BreadCrumb from "../../../../components/breadcrumb";
import AddManager from "../../../../components/forms/add-manager";
const page = () => {
  const breadcrumbItems = [
    { title: "User", link: "/dashboard/user" },
    { title: "Create", link: "/dashboard/user/create" },
  ];
  return (
    <div className="flex-1 space-y-4 p-8">
          <BreadCrumb items={breadcrumbItems} />
          <AddManager />
    </div>
  );
};

export default page;
