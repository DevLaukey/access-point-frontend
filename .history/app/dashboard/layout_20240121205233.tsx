import Header from "../../components/layout/header";
import Sidebar from "../../components/layout/sidebar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full mt-20">{children}</main>
      </div>
    </>
  );
}