import { TabAPI } from "@/components/ConfigurationTabs/TabAPI";
import { TabBilling } from "@/components/ConfigurationTabs/TabBilling";
import { TabEmail } from "@/components/ConfigurationTabs/TabEmail";
import { TabIntegrations } from "@/components/ConfigurationTabs/TabIntegrations";
import { TabNotifications } from "@/components/ConfigurationTabs/TabNotifications";
import { TabPassword } from "@/components/ConfigurationTabs/TabPassword";
import { TabPlan } from "@/components/ConfigurationTabs/TabPlan";
import { TabProfile } from "@/components/ConfigurationTabs/TabProfile";
import { TabTeam } from "@/components/ConfigurationTabs/TabTeam";
import { TabUserDetails } from "@/components/ConfigurationTabs/TabUserDetails";
import { TabsWrapper } from "@/components/TabsWrapper";

export default function Home() {
  return (
    <>
      <h1 className="h-9 text-3xl font-medium text-zinc-900">Settings</h1>
      <TabsWrapper
        TabsWrapperName="Configuration Tabs"
        TabName={[
          "My Details",
          "Profile",
          "Password",
          "Team",
          "Plan",
          "Billing",
          "Email",
          "Notifications",
          "Integrations",
          "API",
        ]}
        TabContent={[
          <TabUserDetails key="0" />,
          <TabProfile key="1" />,
          <TabPassword key="2" />,
          <TabTeam key="3" />,
          <TabPlan key="4" />,
          <TabBilling key="5" />,
          <TabEmail key="6" />,
          <TabNotifications key="7" />,
          <TabIntegrations key="8" />,
          <TabAPI key="9" />,
        ]}
      />
    </>
  );
}
