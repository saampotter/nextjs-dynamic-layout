import Sidebar from "../components/Sidebar";

const AppLayout = ({ children }) => (
  <div className="relative flex h-full">
    <Sidebar />
    <div className="flex-grow pl-8 ml-48">{children}</div>
  </div>
);

export const getLayout = (page) => <AppLayout>{page}</AppLayout>;

export default AppLayout;
