import { getLayout } from "../layouts/AppLayout";

const IndexPage = () => (
  <div className="space-y-4">
    <p className="text-2xl font-bold">Home</p>
    <p>
      With your cursor over the 'Home' link, scroll down the sidebar and click
      on the 'Settings' link.
    </p>
    <p>You will notice how the scroll position of the sidebar is preserved.</p>
    <p>
      This is because this page, and the settings page we are navigating to, are
      encapsulated within the AppLayout component.
    </p>
  </div>
);

IndexPage.getLayout = getLayout;

export default IndexPage;
