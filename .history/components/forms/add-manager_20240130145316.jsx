import React from 'react'
import { Heading } from '../ui/heading';
import { Button } from '../ui/button';

const AddManger = () => {
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

export default AddManger