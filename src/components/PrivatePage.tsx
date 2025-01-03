import { redirect } from "next/navigation";

import { createClient } from "../../supabase/utils/server";

export default async function PrivatePage({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  return <>{children}</>;
}
