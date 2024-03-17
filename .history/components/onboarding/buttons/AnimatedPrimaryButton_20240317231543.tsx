import Link from "next/link";

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
      className={`group relative inline-flex items-center overflow-hidden rounded bg-cyan-700 px-6 py-3 font-medium text-black transition duration-300 ease-out dark:text-white ${className} ${
        disabled
          ? "pointer-events-none bg-neutral-400 text-white"
          : "cursor-pointer"
      }`}
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
      <span className="absolute flex h-full w-full items-center justify-center text-black dark:text-white transition-all duration-300 group-hover:translate-x-full">
        {children}
      </span>
      <span className="invisible relative">{children}</span>
    </Link>
  );
}
