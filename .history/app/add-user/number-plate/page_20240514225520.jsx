import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../../components/layout/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

function page() {
  const [numberPlate, setNumberPlate] = useState();
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center justify-center h-screen px-2 text-center">
        <ToastContainer />

        <h1 className="text-4xl font-bold mb-4">Number Plate Capture</h1>
        <h5 className="font-bold mb-4">Add a car</h5>

        <div className="flex flex-col items-center justify-center h-screen w-full mt-4">
          <ToastContainer />
          <Header />

          <Card>
            <CardHeader>
              <CardTitle>Confirm User Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <form
                onSubmit={() => console.log("submit")}
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
                    onChange={(e) => {
                      setNumberPlate(e.target.value);
                    }}
                    className="border border-gray-300 px-4 py-2 rounded-md w-full"
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter className="items-center justify-center w-full space-x-2">
              <Button
                type="submit"
                onClick={() => router.push("/dashboard")}
                className="bg-gray-500 text-white px-4 py-2 rounded-md w-full"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={() => router.push("/dashboard")}
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
              >
                Confirm
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default page;
