import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from '../../../components/layout/header';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

function page() {
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
                onSubmit={updateUserDetails}
                className="flex items-center justify-center flex-col"
              >
                <div className="mb-4">
                  <Label htmlFor="firstName" className="block font-bold mb-2">
                    First Name
                  </Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    className="border border-gray-300 px-4 py-2 rounded-md w-full"
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="lastName" className="block font-bold mb-2">
                    Last Name
                  </Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    className="border border-gray-300 px-4 py-2 rounded-md w-full"
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="idNumber" className="block font-bold mb-2">
                    ID Number
                  </Label>
                  <Input
                    type="number"
                    id="idNumber"
                    name="idNumber"
                    value={idNumber}
                    onChange={(e) => {
                      setIdNumber(e.target.value);
                    }}
                    className="border border-gray-300 px-4 py-2 rounded-md w-full"
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter className="items-center justify-center w-full space-x-2">
              <Button
                type="submit"
                onClick={updateUserDetails}
                className="bg-gray-500 text-white px-4 py-2 rounded-md w-full"
              >
                Update
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

export default page