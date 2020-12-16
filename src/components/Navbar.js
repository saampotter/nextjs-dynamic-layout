import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <div className="absolute top-0 left-0 w-full flex items-center h-16 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex space-x-4">
          <p>Navbar</p>
          <p className="hidden md:block text-gray-600">
            (Common to all pages with SiteLayout in _app.js)
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hover:text-indigo-500" onClick={logout}>
            Sign Out
          </button>
          <div className="relative w-64">
            <input
              placeholder="Search"
              className="bg-gray-200 transition-colors duration-100 ease-in-out text-gray-600 py-2 pr-4 pl-10 block w-full appearance-none leading-normal border-2 border-transparent rounded-lg text-left select-none truncate pointer-events-auto focus:outline-none focus:bg-white focus:border-indigo-500"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
              <svg
                className="fill-current pointer-events-none text-gray-600 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
