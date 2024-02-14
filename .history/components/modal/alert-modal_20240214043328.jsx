"use client";
import { useEffect, useState } from "react";
import { Modal } from "../ui/modal";
import { Button } from "../ui/button";

export const AlertModal = ({ data, isOpen, onClose, onConfirm, loading }) => {
  console.log(data)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function getCurrentTime() { 
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  }
  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Thank you for visiting"
      description={`Please confirm that you are leaving the premise at: ${getCurrentTime()}`}
      isOpen={isOpen}
      onClose={onClose}
    >
    
      <div className="pt-6 m-6 flex flex-col justify-center">
        <h2 className="font-semibold">
          Name: <span className="text-primary">{data?.full_name}</span>
        </h2>
        <h2 className="font-semibold">
          Arrival Time: <span className="text-primary">{data?.arrival_time}</span>
        </h2>
      </div>
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={loading} variant="destructive" onClick={onConfirm}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};
