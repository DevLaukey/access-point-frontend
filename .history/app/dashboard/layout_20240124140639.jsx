import Header from "../../components/layout/header";
import Sidebar from "../../components/layout/sidebar";
import { useSelector } from "react-redux";
export default function DashboardLayout({ children }) {

  const user = useSelector((state) => state.user);
  console.log(user);
  
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
