import React, { useState, createContext, ReactNode } from "react";

interface TokenContextType {
  token: string | undefined;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const UserToken = createContext<TokenContextType | undefined>(undefined);

export const UserTokenProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | undefined>(undefined);
  return (
    <UserToken.Provider value={{ token, setToken }}>
      {children}
    </UserToken.Provider>
  );
};
