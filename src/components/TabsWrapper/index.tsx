"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "motion/react";
import { ReactNode, useState } from "react";

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
  const [activeTab, setActiveTab] = useState("tab0");

  return (
    <Tabs.Root
      defaultValue="tab0"
      orientation="vertical"
      onValueChange={setActiveTab}
    >
      <Tabs.List
        aria-label={TabsWrapperName}
        className="my-6 flex gap-4 text-sm font-medium text-zinc-500"
      >
        {TabName.map((name, index) => {
          const tabValue = `tab${index}`;
          const isActive = activeTab === tabValue;

          return (
            <Tabs.Trigger
              className="hover:text-primary-400 data-[state=active]:text-primary-700 relative flex cursor-pointer transition-all duration-200 ease-in-out"
              key={index}
              value={tabValue}
            >
              {name}
              {isActive && (
                <motion.span
                  layoutId="activeTabIndicator"
                  className="bg-primary-700 absolute bottom-[-25px] h-0.5 w-full"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 50,
                  }}
                />
              )}
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
