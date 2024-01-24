import Header from "../../components/layout/header";
import Sidebar from "../../components/layout/sidebar";

export default function DashboardLayout({ children }) {

  const user = useSelector((state) => state.user);
  
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full mt-16">{children}</main>
      </div>
    </>
  );
}
