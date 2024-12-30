"use client";

import { signOut, useSession } from "next-auth/react";
import React, { createContext, useEffect, useState } from "react";
import { set } from "react-hook-form";

interface AuthContextProps {
  userData?: any;
  isLogged?: string;
  deslogar?: () => void;
}

const AuthContext = createContext<AuthContextProps>({});

function AuthProvider({ children }: any) {
  const [userData, setUserData] = useState<any>(null);
  const [userUid, setUserUid] = useState<string | null>(null);
  const [isLogged, setIsLogged] = useState("");
  const { data, status } = useSession();

  useEffect(() => {
    setUserData(data?.user);
    setIsLogged(status);
  }, [data, status]);

  const deslogar = async () => {
    await signOut();
    setIsLogged("unauthenticated");
  };

  return (
    <AuthContext.Provider value={{ isLogged, userData, deslogar }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
