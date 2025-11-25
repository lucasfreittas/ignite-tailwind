import Image from "next/image";
import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={"https://github.com/lucasfreittas.png"}
        alt=""
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="flex max-w-[180px] flex-col truncate">
        <p className="truncate text-sm font-semibold text-zinc-700">
          Lucas Freitas
        </p>
        <p className="truncate text-sm font-normal text-zinc-500">
          l.freittas@outlook.com
        </p>
      </div>

      <LogOut
        size={20}
        className="ml-auto cursor-pointer text-zinc-500 hover:brightness-125"
      />
    </div>
  );
}
