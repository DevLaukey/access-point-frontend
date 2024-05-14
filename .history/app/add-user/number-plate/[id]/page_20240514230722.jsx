"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../../../components/layout/header";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Button } from "../../../../components/ui/button";
import { useRouter } from "next/navigation";

function Page() {
  const [numberPlate, setNumberPlate] = useState("");
  const history = useRouter(); // Initialize history for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any necessary actions before navigating, like submitting the form data
    // For now, let's just navigate to "/dashboard"
    history.push("/dashboard");
  };

  // Regular expression to match the format "KBS 090V"
  const plateRegex = /^[A-Z]{3}\s\d{3}[A-Z]$/;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center justify-center h-screen px-2 text-center">
        <ToastContainer />

        <h1 className="text-4xl font-bold mb-4">Number Plate Capture</h1>

        <Header />

        <Card>
          <CardHeader>
            <CardTitle>Add a car</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <form
              onSubmit={handleSubmit}
              className="flex items-center justify-center flex-col"
            >
              <div className="mb-4">
                <Label htmlFor="numberPlate" className="block font-bold mb-2">
                  Number Plate
                </Label>
                <Input
                  type="text"
                  id="numberPlate"
                  name="numberPlate"
                  value={numberPlate}
                  onChange={(e) => setNumberPlate(e.target.value)}
                  className="border border-gray-300 px-4 py-2 rounded-md w-full"
                  placeholder="Enter number plate (e.g., KBS 090V)"
                  // Apply regex pattern to enforce format
                  pattern={plateRegex}
                  title="Please enter a valid number plate in the format 'KBS 090V'"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="items-center justify-center w-full space-x-2">
            <Button
              type="button"
              onClick={() => history.push("/dashboard")} // Use history to navigate
              className="bg-gray-500 text-white px-4 py-2 rounded-md w-full"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
            >
              Confirm
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Page;
