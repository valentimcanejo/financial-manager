import AdminPanelLayout from "../../components/admin-panel/admin-panel-layout";
import PrivatePage from "../../components/PrivatePage";

export default function Layout({ children }: { children: React.ReactNode }) {
  // const { isLogged } = useAuth();
  // const router = useRouter();

  // useEffect(() => {
  //   if (isLogged === "unauthenticated") {
  //     router.push("/login");
  //   }
  // }, [isLogged]);

  // if (!isLogged || isLogged === "unauthenticated") {
  //   return <LoadingPanel />;
  // }

  return (
    <PrivatePage>
      <AdminPanelLayout>
        <main>{children}</main>
      </AdminPanelLayout>
    </PrivatePage>
  );
}
