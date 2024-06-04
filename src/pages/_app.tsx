import type { AppProps } from "next/app";

// import "@styles/classes.scss";
// import "@styles/fonts.scss";
// import "@styles/globals.scss";

import { AuthProvider } from "@contexts/AuthContext";
import QueryProvider from "@contexts/QueryProvider";

function MyApp({ Component, pageProps }: AppProps) {
  //  const { data, error, isLoading } = useQuery(["todos"], () =>
  //    callApi({ url: "https://jsonplaceholder.typicode.com/todos" })
  //  );

  //  console.log(data, isLoading, "harsh");
  return (
    <QueryProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </QueryProvider>
  );
}

export default MyApp;
