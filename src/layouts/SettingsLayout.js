import { Tabs, Tab } from "../components/Tabs";
import { getLayout as getAppLayout } from "./AppLayout";

const SettingsLayout = ({ children }) => (
  <div className="space-y-4">
    <p className="text-2xl font-bold">Settings</p>
    <Tabs>
      <Tab href="/settings/profile">Profile</Tab>
      <Tab href="/settings/notifications">Notifications</Tab>
    </Tabs>
    {children}
  </div>
);

export const getLayout = (page) =>
  getAppLayout(<SettingsLayout>{page}</SettingsLayout>);

export default SettingsLayout;
