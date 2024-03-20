
import PersonalDetailsOnboarding from "../../../components/onboarding/PersonalDetailsOnboarding";
import { useRouter } from "next/navigation";
function page() {
  // get the details from query params
  const router = useRouter();
  const { tier } = router.query;

  return (
   <PersonalDetailsOnboarding/>
  );
}

export default page;
