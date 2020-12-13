import Navbar from "../components/Navbar";

const SiteLayout = ({ children }) => (
  <div className="h-screen">
    <Navbar />
    <div className="h-full container mx-auto pt-20">{children}</div>
  </div>
);

export const getLayout = ({ children }) => <SiteLayout>{children}</SiteLayout>;

export default SiteLayout;
