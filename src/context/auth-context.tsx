"use client";

import { signOut, useSession } from "next-auth/react";
import React, { createContext, useEffect, useState } from "react";
import { createClient } from "../../supabase/utils/server";

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

  // const getLoggedUser = async () => {
  //   try {
  //     const supabase = await createClient();
  //     const { data, error } = await supabase.auth.getUser();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getLoggedUser();
  // }, []);
  useEffect(() => {
    // setUserData(data?.user);
    //setIsLogged(status);
  }, []);

  return (
    <AuthContext.Provider value={{ isLogged, userData }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
