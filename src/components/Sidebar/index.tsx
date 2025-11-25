import { Input } from "../Input";
import { Logo } from "./Logo";
import { NavigationOption } from "./NavigationOption";
import { LifeBuoy, Settings, Search } from "lucide-react";

import {
  House,
  ChartNoAxesColumn,
  Layers,
  SquareCheckBig,
  Flag,
  Users,
} from "lucide-react";
import { UsedSpace } from "./UsedSpace";
import { Profile } from "./Profile";

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col">
      <Logo />
      <Input icon={<Search />} />

      <nav className="grow">
        <ul className="flex flex-col gap-1">
          <li>
            <NavigationOption
              href="/"
              name="Home"
              icon={<House />}
              isColappsed
              active
            />
          </li>
          <li>
            <NavigationOption
              href="/"
              name="Dashboard"
              icon={<ChartNoAxesColumn />}
              isColappsed
            />
          </li>
          <li>
            <NavigationOption
              href="/"
              name="Projects"
              icon={<Layers />}
              isColappsed
            />
          </li>
          <li>
            <NavigationOption
              href="/"
              name="Tasks"
              icon={<SquareCheckBig />}
              isColappsed
            />
          </li>
          <li>
            <NavigationOption
              href="/"
              name="Reporting"
              icon={<Flag />}
              isColappsed
            />
          </li>
          <li>
            <NavigationOption
              href="/"
              name="Users"
              icon={<Users />}
              isColappsed
            />
          </li>
        </ul>
      </nav>

      <nav className="">
        <ul className="flex flex-col gap-1">
          <li>
            <NavigationOption href="/" name="Support" icon={<LifeBuoy />} />
          </li>
          <li>
            <NavigationOption
              href="/"
              name="Settings"
              icon={<Settings />}
              active
            />
          </li>
        </ul>
      </nav>

      <UsedSpace />
      <Profile />
    </div>
  );
}
