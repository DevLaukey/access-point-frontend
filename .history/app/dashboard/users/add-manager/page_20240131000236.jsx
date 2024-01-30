import React from "react";
import BreadCrumb from "../../../../components/breadcrumb";
import AddManager from "../../../../components/forms/add-manager";
import getAccessPoints from "../../../../constants/getAccessPoints";
const page = async() => {
  const breadcrumbItems = [
    { title: "Users", link: "/dashboard/users" },
    { title: "Add Manager", link: "/dashboard/users/add-manager" },
  ];
  const accessPoints = await getAccessPoints();
  return (
    <div className="flex-1 space-y-4 p-8">
      <BreadCrumb items={breadcrumbItems} />
      <AddManager
        title="Add Entry Manager"
        description="Add a new manager to the system"
        accessPoints={accessPoints}
       
      />
    </div>
  );
};

export default page;
