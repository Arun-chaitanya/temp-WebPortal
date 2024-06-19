import type { AppProps } from "next/app";
import { AuthProvider } from "@contexts/AuthContext";
import QueryProvider from "@contexts/QueryProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

import "@styles/classes.scss";
import "@styles/fonts.scss";
import "@styles/globals.scss";
import Head from "next/head";
import Analytics from "@components/Analytics/analytics";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Head>
            <link rel="icon" href="/logo.png" />
          </Head>
          <Analytics />
          <Component {...pageProps} />
        </ThemeProvider>
        <ToastContainer />
      </AuthProvider>
    </QueryProvider>
  );
}

export default MyApp;
