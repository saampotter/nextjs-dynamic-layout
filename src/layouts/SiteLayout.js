import { AlertCircle } from "react-feather";
import Navbar from "../components/Navbar";

const SiteLayout = ({ children }) => (
  <div className="h-screen">
    <Navbar />
    <div className="h-full container mx-auto pt-20 px-4 hidden md:block">
      {children}
    </div>
    <div className="h-full flex items-center justify-center">
      <div className="text-center">
        <span className="flex justify-center mb-4 text-red-500">
          <AlertCircle />
        </span>
        <p>This demo is better on a desktop</p>
        <p>(or at least a bigger screen)</p>
      </div>
    </div>
  </div>
);

export const getLayout = ({ children }) => <SiteLayout>{children}</SiteLayout>;

export default SiteLayout;
