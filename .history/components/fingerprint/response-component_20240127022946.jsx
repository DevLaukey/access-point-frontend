import React from 'react'
import { CheckCircled, CrossCircled } from "@radix-ui/react-icons";

const ResponseMessage = ({status}) => {
  return (
    <div className="flex items-center justify-center">
      {status === "success" ? (
        <>
          <CheckCircled className="w-6 h-6 text-green-500 mr-2" />
          <span className="text-green-500">Success!</span>
        </>
      ) : (
        <>
          <CrossCircled className="w-6 h-6 text-red-500 mr-2" />
          <span className="text-red-500">Failure!</span>
        </>
      )}
    </div>
  );
}

export default ResponseMessage


