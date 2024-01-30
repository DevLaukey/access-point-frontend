"use client"
import React, { useState } from 'react'
import { Heading } from '../ui/heading';
import { Button } from '../ui/button';
import { Trash } from "lucide-react";

const AddManager = ({ title, description, initialData }) => {
      const [loading, setLoading] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <Heading title={title} description={description} />
      {initialData && (
        <Button
          disabled={loading}
          variant="destructive"
          size="sm"
          onClick={() => setOpen(true)}
        >
          <Trash className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}

export default AddManager