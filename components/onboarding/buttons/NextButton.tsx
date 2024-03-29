import Link  from "next/link";
import { useOnboardingStore } from "../../../utils/onboarding-store";
import ArrowRightIcon from "../ArrowRightIcon";

export type NextButtonProps = {
  className?: string;
  disabled: boolean;
};

export default function NextButton({
  className = "",
  disabled,
}: NextButtonProps) {
  const { nextOnboardingPage } = useOnboardingStore();

  return (
    <div
      className={`flex w-full flex-row justify-between gap-4 px-8 py-4 md:p-0 ${className}`}
    >
      {nextOnboardingPage && (
        <div
          className={`w-full md:ml-auto md:w-auto ${
            disabled ? "hover:animate-shake" : ""
          }`}
        >
          <Link
            href={`/onboarding/${nextOnboardingPage}`}
            data-testid="next-button"
            className={`flex items-center justify-center whitespace-nowrap 
              rounded-md px-6 py-3 text-base font-medium text-white 
              ${
                disabled
                  ? "pointer-events-none bg-neutral-400"
                  : "bg-neutral-900 transition-colors duration-500 focus:outline-none md:hover:bg-neutral-700"
              }
            `}
          >
            {("nextButton")}
            <ArrowRightIcon className="ml-2" />
          </Link>
        </div>
      )}
    </div>
  );
}
