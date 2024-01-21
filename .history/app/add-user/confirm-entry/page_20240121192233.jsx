"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";

const UserDetailsPage = () => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState({
    firstName: "John",
    lastName: "Doe",
    idNumber: "121212",
  });

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to update user details here
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full mt-4">
          <ToastContainer />
          
           <Card>
            <CardHeader>
              <CardTitle>Add User Details</CardTitle>
              <CardDescription>
                Kindly input the data as they appear on the national ID.
              </CardDescription>
            </CardHeader>
              <CardContent className="space-y-2">
                  
            </CardContent>

              </Card>
      <h1 className="text-2xl font-bold m-4">Confirm User Details</h1>
      <div className="container mx-auto">
        <form
          onSubmit={handleSubmit}
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
              value={userDetails.firstName}
              onChange={handleInputChange}
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
              value={userDetails.lastName}
              onChange={handleInputChange}
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
              value={userDetails.idNumber}
              onChange={handleInputChange}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <Button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UserDetailsPage;
