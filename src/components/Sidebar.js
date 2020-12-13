import clsx from "clsx";
import Link from "next/link";
import { Settings, Home, ChevronDown } from "react-feather";
import { useRouter } from "next/router";

const Tab = ({ href, icon, children }) => {
  const { pathname } = useRouter();
  const isActiveLink = href === pathname;

  const getWrapper = (el) => (href ? <Link href={href}>{el}</Link> : <>{el}</>);

  return getWrapper(
    <a
      className={clsx(
        "flex items-center p-2 rounded-md mb-2 transition duration-200 text-sm font-medium hover:text-black focus:bg-gray-300",
        isActiveLink ? "text-black bg-gray-300" : "text-gray-600"
      )}
    >
      <span className="mr-2">{icon}</span>
      {children}
    </a>
  );
};

const Sidebar = () => (
  <div className="absolute top-0 left-0 h-64 flex flex-col overflow-y-scroll w-48">
    <Tab href="/" icon={<Home size="22" />}>
      Home
    </Tab>
    {Array.from(Array(20)).map((_, i) => (
      <Tab key={i} icon={<ChevronDown size="22" />}>
        Scroll Down
      </Tab>
    ))}
    <Tab href="/settings/profile" icon={<Settings size="22" />}>
      Settings
    </Tab>
  </div>
);

export default Sidebar;
