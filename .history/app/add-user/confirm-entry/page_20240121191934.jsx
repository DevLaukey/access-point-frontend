"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

const UserDetailsPage = () => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState({
    firstName: "John",
      lastName: "Doe",
        idNumber: "121212",
    // Add more user details here
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

      <h1 className="text-2xl font-bold m-4">Confirm User Details</h1>
      <div className="container mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col"
        >
          <div className="mb-4">
            <Label htmlFor="fname" className="block font-bold mb-2">
              First Name
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={userDetails.name}
                          onChange={handleInputChange}
                          
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              className="border border-gray-300 px-4 py-2 rounded-md w-full"
            />
          </div>
          {/* Add more input fields for other user details */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDetailsPage;