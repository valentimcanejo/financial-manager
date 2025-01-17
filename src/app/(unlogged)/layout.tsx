import { redirect } from "next/navigation";
import { createClient } from "../../../supabase/utils/server";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (data?.user) {
    redirect("/");
  }

  return <main>{children}</main>;
}
