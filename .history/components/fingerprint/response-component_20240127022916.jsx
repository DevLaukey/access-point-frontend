import React from 'react'
import { CheckCircled, CrossCircled } from "@radix-ui/react-icons";

const ResponseMessage = ({status}) => {
  return (
    <div>{status}</div>
  )
}

export default ResponseMessage

