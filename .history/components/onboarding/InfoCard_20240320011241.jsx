"use client"
import React from 'react'
import * as z from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
    emailAddress: z.string().email({ message: "Invalid email address" }),
    
})
function InfoCard() {
  return (
      <div className='flex justify-center items-center my-2'>
          asd
    </div>
  )
}

export default InfoCard