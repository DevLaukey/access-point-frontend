"use client";
import { OurFileRouter } from "../app/api/uploadthing/core";
import { UploadDropzone } from "@uploadthing/react";
import { Trash } from "lucide-react";
import Image from "next/image";
import { UploadFileResponse } from "uploadthing/client";
import { IMG_MAX_LIMIT } from "./forms/product-form";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";



export default function FileUpload({
  onChange,
  onRemove,
  value,
}){
  const { toast } = useToast();
  const onDeleteFile = (key) => {
    const files = value;
    let filteredFiles = files.filter((item) => item.key !== key);
    onRemove(filteredFiles);
  };
  const onUpdateFile = (newFiles) => {
    onChange([...value, ...newFiles]);
  };
  return (
    <>
    </>
  )
}
