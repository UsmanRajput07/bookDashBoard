import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {AppSideBar} from "@/pages/components/AppSideBar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSideBar />
      <main>
        <SidebarTrigger />
        <Outlet/>
      </main>
    </SidebarProvider>
  );
}
