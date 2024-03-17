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
    <div className="flex flex-col items-center justify-center h-screen space-y-8">
      <Headline>{ONBOARDING_STEPS[0].headline}</Headline>
      <Subheadline>{ONBOARDING_STEPS[0].subheadline}</Subheadline>
      <AnimatedPrimaryButton
        link={`/onboarding/${firstOnboardingPage}`}
        testId="get-started-button"
      >
        Get Started
      </AnimatedPrimaryButton>
    </div>
  );
}
