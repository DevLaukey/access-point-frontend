"use client"

import PersonalDetailsOnboarding from "../../../components/onboarding/PersonalDetailsOnboarding";
import { useParams } from "next/navigation";
function page() {

  const { tier } = useParams();
  console.log(tier)
  return (
   <PersonalDetailsOnboarding/>
  );
}

export default page;
