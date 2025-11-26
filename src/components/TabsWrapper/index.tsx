import * as Tabs from "@radix-ui/react-tabs";
import { ReactNode } from "react";

interface TabsWrapperProps {
  TabsWrapperName: string;
  TabName: string[];
  TabContent: ReactNode[];
}

export function TabsWrapper({
  TabsWrapperName,
  TabName,
  TabContent,
}: TabsWrapperProps) {
  return (
    <Tabs.Root defaultValue="tab0" orientation="vertical">
      <Tabs.List
        aria-label={TabsWrapperName}
        className="my-6 flex gap-4 text-sm font-medium text-zinc-500"
      >
        {TabName.map((name, index) => {
          return (
            <Tabs.Trigger
              className="hover:text-primary-400 group data-[state=active]:text-primary-700 relative flex cursor-pointer transition-all duration-200 ease-in-out"
              key={index}
              value={`tab${index}`}
            >
              {name}
              <span className="bg-primary-700 absolute bottom-[-25px] h-0.5 w-0 group-data-[state=active]:w-full"></span>
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>
      <div className="mt-4 mb-8 h-px w-full bg-zinc-200"></div>
      {TabContent.map((content, index) => {
        return (
          <Tabs.Content key={index} value={`tab${index}`}>
            {content}
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
}
