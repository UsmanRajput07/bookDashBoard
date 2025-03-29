import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import authToken from "@/zustand/store";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Navigate, Outlet } from "react-router";
import AppSidebar from "@/pages/components/AppSideBar";
import UserProfile from "../components/UserProfile";
import NotFound from "@/pages/components/NotFound";

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
