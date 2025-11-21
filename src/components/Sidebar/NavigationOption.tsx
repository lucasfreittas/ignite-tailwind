import Link from "next/link";
import { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface NavigationOptionProps {
  href: string;
  name: string;
  icon?: ReactNode;
  isColappsed?: boolean;
  active?: boolean;
}

export function NavigationOption({
  href,
  name,
  icon,
  isColappsed,
  active,
}: NavigationOptionProps) {
  return (
    <Link href={{ href }}>
      <div
        className={`group flex items-center gap-3 py-3 px-2.5 hover:bg-primary-50 rounded-md 
          ${active ? "bg-primary-50" : ""}`}
      >
        {icon && (
          <span
            className={`w-6 h-6
          ${active ? "text-primary-700" : "text-zinc-500"}`}
          >
            {icon}
          </span>
        )}
        {name && (
          <p
            className={`text-base font-medium group-hover:text-primary-700
              ${active ? "text-primary-700" : "text-zinc-700"}`}
          >
            {name}
          </p>
        )}
        {isColappsed ? (
          <ChevronDown
            size={20}
            className={`ml-auto group-hover:text-primary-400
              ${active ? "text-primary-400" : "text-zinc-400"}`}
          />
        ) : (
          ""
        )}
      </div>
    </Link>
  );
}
