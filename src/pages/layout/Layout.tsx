import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import authToken from "@/zustand/store";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Navigate } from "react-router";
import AppSidebar from "@/pages/components/AppSideBar";
import UserProfile from "../components/UserProfile";
import { BookData } from "../components/BookData";

export default function Layout() {
  const token = authToken((state) => state.token);
  // if (token === "") {
  //   return <Navigate to="/signup" replace />;
  // }
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator className="mr-2 h-4" />
          </div>
        </header>
        <main>
          <BookData />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
