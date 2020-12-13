import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

export const Tabs = ({ children }) => (
  <div className="flex space-x-6 mb-2 shadow-inner">{children}</div>
);

export const Tab = ({ href, children }) => {
  const { pathname } = useRouter();
  const isActiveLink = href === pathname;

  return (
    <Link href={href}>
      <a
        className={clsx(
          "border-b-2 pb-1 transition-200 font-medium hover:text-gray-900 focus:border-indigo-500 focus:text-indigo-500",
          isActiveLink
            ? "border-indigo-500 text-indigo-500"
            : "border-transparent text-gray-600"
        )}
      >
        {children}
      </a>
    </Link>
  );
};
