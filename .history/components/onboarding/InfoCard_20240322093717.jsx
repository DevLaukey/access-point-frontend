"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

function InfoCard() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [institution, setInstitution] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const tier = localStorage.getItem("tier");

  const supabase = createClientComponentClient();

  useEffect(async () => {
    const {data} = await supabase.auth.getUser();
    setEmail(data.user.email);
  }, []);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleInstitutionChange = (e) => {
    setInstitution(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!firstName.trim()) {
      newErrors.firstName = "Please enter your first name.";
    }
    if (!lastName.trim()) {
      newErrors.lastName = "Please enter your last name.";
    }
    if (!institution.trim()) {
      newErrors.institution = "Please enter your institution.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      submitDetails(firstName, lastName, institution);
    }
  };
  const submitDetails = async (firstName, lastName, institution) => {
    try {
      const { data, error } = await supabase
        .from("admin_users")
        .insert([
          {
            admin_name: firstName + lastName,
            institution_name: institution,
            tier,
            email,
          },
        ])
        .select()
        .single();

      if (error) {
        throw error;
      }
      data && router.push(`/onboarding/entry-point/${data.id}`);
    } catch (error) {
      console.log("Error while submitting details:", error);
    } finally {
      // Reset the form
      setFirstName("");
      setLastName("");
      setInstitution("");
      setErrors({});
    }
  };

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 dark:text-gray-100 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            First Name
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
              errors.firstName ? "border-red-500" : "border-gray-200"
            } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            id="grid-first-name"
            type="text"
            placeholder="Jane"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs italic">{errors.firstName}</p>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700  dark:text-gray-100  text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Last Name
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
              errors.lastName ? "border-red-500" : "border-gray-200"
            } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white`}
            id="grid-last-name"
            type="text"
            placeholder="Doe"
            value={lastName}
            onChange={handleLastNameChange}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs italic">{errors.lastName}</p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700  dark:text-gray-100  text-xs font-bold mb-2"
            htmlFor="grid-institution"
          >
            Institution
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
              errors.institution ? "border-red-500" : "border-gray-200"
            } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            id="grid-institution"
            type="text"
            placeholder="Harvard University"
            value={institution}
            onChange={handleInstitutionChange}
          />
          {errors.institution && (
            <p className="text-red-500 text-xs italic">{errors.institution}</p>
          )}
        </div>
      </div>

      <Button className="w-full mt-2" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default InfoCard;
