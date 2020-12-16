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
      <div className="max-w-md w-full space-y-4 text-center">
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Login Page
        </h2>
        <p>This page is only wrapped within our main SiteLayout.</p>
        <p>Before you login, type a query into the search bar up the top.</p>
        <p>You'll notice your query persists between page transitions.</p>
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
