import Link from "next/link";
import { Button } from "../../ui/button";
export interface AnimatedPrimaryButtonProps {
  link: string;
  testId: string;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function AnimatedPrimaryButton({
  link,
  testId,
  className = "",
  disabled = false,
  children,
  onClick,
}: AnimatedPrimaryButtonProps) {
  return (
    <Link
      href={link}
      data-testid={testId}
      onClick={onClick}
      className="flex items-center justify-center space-x-2 relative w-full"
    >
      <Button
        className={`group relative w-full flex items-center justify-center px-2py-4 text-xl md:w-auto ${className}`}
        disabled={disabled}
      >
        <span className="absolute inset-0 flex h-full -translate-x-full items-center justify-center text-black dark:text-white duration-300 group-hover:translate-x-0">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span>{children}</span>
        <span className="invisible relative">{children}</span>
      </Button>
    </Link>
  );
}
