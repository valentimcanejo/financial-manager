"use client";

import { useEffect } from "react";
import AdminPanelLayout from "../../components/admin-panel/admin-panel-layout";
import { useAuth } from "../../hooks/use-auth";
import { useRouter } from "next/navigation";
import LoadingPanel from "../../components/LoadingPanel";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isLogged } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLogged === "authenticated") {
      router.push("/");
    }
  }, [isLogged]);

  if (!isLogged || isLogged === "authenticated") {
    return <LoadingPanel />;
  }

  return <main>{children}</main>;
}
