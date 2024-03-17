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
      // className="flex items-center justify-center space-x-2 relative w-full"
    >
   

      <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        <span className="relative  text-black">{children}</span>
        <div className="flex items-center -space-x-3 translate-x-3">
          <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>
    </Link>
  );
}
