import { callApi, getDataFromLocalStorage } from "@api/helpers";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { createContext, useEffect, useState, ReactNode, Context } from "react";

const PROTECTED_ROUTES = ["/home"];
const UNPROTECTED_ROUTES = ["/signin", "/signup"];

interface AuthContextType {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

export const AuthContext: Context<AuthContextType | undefined> = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();
  const router = useRouter();

  const fetchUserAndProtectRoutes = async (token: string) => {
    try {
      // const response = await callApi({
      //   url: "/user",
      //   method: "GET",
      // });
      // setUser(response);
    } catch (e) {
      console.error("Failed to fetch user", e);
    }
  };

  useEffect(() => {
    const authToken = getDataFromLocalStorage("token");
    if (!authToken) {
      if (PROTECTED_ROUTES.some((protected_path) => pathname.startsWith(protected_path))) {
        router.push("/signin");
      }
    } else {
      if (UNPROTECTED_ROUTES.some((unprotected_path) => pathname.startsWith(unprotected_path))) {
        router.push("/home");
      }
      fetchUserAndProtectRoutes(authToken);
    }
  }, [pathname]);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
