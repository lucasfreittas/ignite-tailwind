import { ReactNode } from "react";

interface InputProps {
  icon?: ReactNode;
}

export function Input({ icon }: InputProps) {
  return (
    <div className="focus-within:border-primary-400 my-6 flex items-center gap-3 rounded-lg border border-zinc-300 px-3.5 py-2.5">
      {icon && <span className="h-5 w-5 text-zinc-500"> {icon}</span>}
      <input
        className="w-full text-base text-zinc-700 placeholder-zinc-500 outline-none"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}
