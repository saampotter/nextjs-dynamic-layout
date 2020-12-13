import { getLayout } from "../../layouts/SettingsLayout";

const Profile = () => (
  <div>
    <p>
      These two tabbed pages are also encapsulated within another
      SettingsLayout.
    </p>
  </div>
);

Profile.getLayout = getLayout;

export default Profile;
