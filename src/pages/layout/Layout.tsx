import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import authToken from "@/zustand/store";
import { Navigate, Outlet } from "react-router";
import AppSidebar from "@/pages/components/AppSideBar";

export default function Layout() {
  const token = authToken((state) => state.token);
  if (token === "") {
    return <Navigate to="/login" replace />;
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="px-6">
          <SidebarTrigger className="-ml-1" />
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
