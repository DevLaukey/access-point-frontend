import { ArrowLeftIcon } from "lucide-react";
import Link from "next/navigation"

export interface SecondaryButtonProps {
  className?: string;
  link: string;
}

export default function SecondaryButton({
  link,
  className,
}: SecondaryButtonProps) {
  return (
    <Link
      href={link}
      className={`flex items-center rounded-full border px-4 py-1 text-sm hover:bg-stone-200 ${className}`}
    >
      <ArrowLeftIcon className="mr-2 w-4" />
      {("backButton")}
    </Link>
  );
}
