import BreadCrumb from "../../../../components/breadcrumb";

import React from "react";
import { ProductForm } from "../../../../components/forms/product-form";

export default function Page() {
  const breadcrumbItems = [
    { title: "User", link: "/dashboard/user" },
    { title: "Create", link: "/dashboard/user/create" },
  ];
  return (
    <div className="flex-1 space-y-4 p-8">
      <BreadCrumb items={breadcrumbItems} />
      {/* <ProductForm
        categories={[
          { _id: "shirts", name: "shirts" },
          { _id: "pants", name: "pants" },
        ]}
        initialData={null}
        key={null}
      /> */}
    </div>
  );
}
