import React from 'react'

const page = () => {
  return (
    <div className="flex-1 space-y-4 p-8">
      <BreadCrumb items={breadcrumbItems} />
    </div>
  );
}

export default page