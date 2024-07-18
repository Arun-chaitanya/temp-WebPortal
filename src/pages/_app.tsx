import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

import { AuthProvider } from "@contexts/AuthContext";
import QueryProvider from "@contexts/QueryProvider";

import Analytics from "@components/Analytics/analytics";

import "@styles/classes.scss";
import "@styles/fonts.scss";
import "@styles/globals.scss";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Apply your CSS properties here
          textTransform: "capitalize",
        },
      },
    },
  },
  typography: {
    fontFamily: "Raleway, sans-serif",
  },
  palette: {
    primary: {
      main: "#2B3F50", // Replace with your desired primary color (e.g., '#007bff')
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Head>
            <link rel="icon" href="/assets/meta-logo.svg" />
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
