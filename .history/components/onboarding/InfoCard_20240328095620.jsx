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
  const [tier, setTier] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State to manage loading state of the button

  const supabase = createClientComponentClient();

  useEffect(() => {
    setTier(localStorage.getItem("tier"));
    getUserEmail();
  }, []);

  const getUserEmail = async () => {
    const { data } = await supabase.auth.getUser();
    setEmail(data.user.email);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleInstitutionChange = (e) => {
    setInstitution(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set loading state to true
    setIsLoading(true);

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
      // Reset loading state to false
      setIsLoading(false);
    } else {
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
        // Reset loading state to false
        setIsLoading(false);
      }
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

      {/* Conditional rendering for button or loader */}
      {isLoading ? (
        <div className="flex justify-center mt-2">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <Button className="w-full mt-2" type="submit" disabled={isLoading}>
          Submit
        </Button>
      )}
    </form>
  );
}

export default InfoCard;
