import Image from "next/image";
import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="flex gap-3 items-center">
      <Image
        src={"https://github.com/lucasfreittas.png"}
        alt=""
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="flex flex-col max-w-[180px] truncate">
        <p className="font-semibold text-sm text-zinc-700 truncate">
          Lucas Freitas
        </p>
        <p className="font-normal text-sm text-zinc-500 truncate">
          l.freittas@outlook.com
        </p>
      </div>

      <LogOut
        size={20}
        className="ml-auto text-zinc-500 hover:brightness-125 cursor-pointer"
      />
    </div>
  );
}
