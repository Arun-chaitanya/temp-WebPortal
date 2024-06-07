import type { AppProps } from "next/app";
import { AuthProvider } from "@contexts/AuthContext";
import QueryProvider from "@contexts/QueryProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "@styles/classes.scss";
import "@styles/fonts.scss";
import "@styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <AuthProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </AuthProvider>
    </QueryProvider>
  );
}

export default MyApp;
