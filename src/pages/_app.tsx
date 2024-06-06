import type { AppProps } from "next/app";
import { AuthProvider } from "@contexts/AuthContext";
import QueryProvider from "@contexts/QueryProvider";

import "@styles/classes.scss";
import "@styles/fonts.scss";
import "@styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </QueryProvider>
  );
}

export default MyApp;
