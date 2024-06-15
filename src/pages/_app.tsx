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
import useAppstore, { StoreState } from "src/store/useAppstore";
import SignupModal from "@views/SignupModal";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: "#2B3F50", // Replace with your desired primary color (e.g., '#007bff')
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const signupModal = useAppstore((state: StoreState) => state.signupModal);

  return (
    <QueryProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Head>
            <link rel="icon" href="/logo.png" />
          </Head>
          {signupModal && <SignupModal />}
          <Component {...pageProps} />
        </ThemeProvider>
        <ToastContainer />
      </AuthProvider>
    </QueryProvider>
  );
}

export default MyApp;
