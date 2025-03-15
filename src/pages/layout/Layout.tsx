import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSideBar } from "@/pages/components/AppSideBar";
import authToken from "@/zustand/store";
import { Navigate, Outlet } from "react-router";

export default function Layout() {
  const token = authToken((state) => state.token);
  if(token === "") {
    return <Navigate to="/signup" replace />
  }
  return (
    <SidebarProvider>
      <AppSideBar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
