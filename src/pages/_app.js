import "tailwindcss/tailwind.css";
import SiteLayout from "../layouts/SiteLayout";
import { AuthProvider } from "../hooks/useAuth";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <AuthProvider>
      <SiteLayout>{getLayout(<Component {...pageProps} />)}</SiteLayout>
    </AuthProvider>
  );
}
