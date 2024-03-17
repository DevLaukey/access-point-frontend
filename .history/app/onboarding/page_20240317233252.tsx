"use client"
import { useRouter, } from "next/navigation"
import { useOnboardingStore } from "../../utils/onboarding-store";
import { useEffect } from "react";
import Headline from "../../components/onboarding/HeadLine";
import Subheadline from "../../components/onboarding/SubHeadline";
import ONBOARDING_STEPS from "../../utils/onboarding-pages.json";
import AnimatedPrimaryButton from "../../components/onboarding/buttons/AnimatedPrimaryButton";

export default function HomePage() {
  const router = useRouter();
  const { firstOnboardingPage } = useOnboardingStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();

      if (e.key === "Enter") {
        e.stopPropagation();

        router.push(`/onboarding/${firstOnboardingPage}`);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [firstOnboardingPage, router]);

  return (
    <div className="flex flex-col items-center justify-center pt-24">
      <Headline>Welcome To P.O.E.M.S</Headline>

      <Subheadline className="mb-12"> Register as an Admin</Subheadline>

      <div className="flex max-w-xl flex-col items-center justify-center">
        

        <div className="text-xs text-stone-500">
        press_enter_to_start_onboarding
        </div>
      </div>
    </div>
  );
}
