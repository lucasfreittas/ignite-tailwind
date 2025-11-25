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
        className={`group hover:bg-primary-50 flex items-center gap-3 rounded-md px-2.5 py-3 ${active ? "bg-primary-50" : ""}`}
      >
        {icon && (
          <span
            className={`h-6 w-6 ${active ? "text-primary-700" : "text-zinc-500"}`}
          >
            {icon}
          </span>
        )}
        {name && (
          <p
            className={`group-hover:text-primary-700 text-base font-medium ${active ? "text-primary-700" : "text-zinc-700"}`}
          >
            {name}
          </p>
        )}
        {isColappsed ? (
          <ChevronDown
            size={20}
            className={`group-hover:text-primary-400 ml-auto ${active ? "text-primary-400" : "text-zinc-400"}`}
          />
        ) : (
          ""
        )}
      </div>
    </Link>
  );
}
