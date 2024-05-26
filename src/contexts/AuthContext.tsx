import { createContext, useState } from "react";

export type AuthType = [boolean, any | null];

export const AuthContext = createContext<AuthType>([true, null]);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any | null>(null);

  return <AuthContext.Provider value={[loading, user]}>{children}</AuthContext.Provider>;
};
