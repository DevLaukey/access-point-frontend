import React from 'react'
import BreadCrumb from "../../../../components/breadcrumb"
const page = () => {
  return (
    <div className="flex-1 space-y-4 p-8">
      <BreadCrumb items={breadcrumbItems} />
    </div>
  );
}

export default page