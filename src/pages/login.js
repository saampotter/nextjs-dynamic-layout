import Router from "next/router";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();

  const handleClick = () => {
    login();
    Router.push("/");
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login Page
        </h2>
        <p className="text-center">
          This page is only wrapped within our main SiteLayout.
        </p>
        <button
          type="submit"
          onClick={handleClick}
          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Login;
