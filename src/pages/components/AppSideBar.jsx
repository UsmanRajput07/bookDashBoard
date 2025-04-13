import { Home, BookOpen, NotebookPen } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"
import UserProfile from "../components/UserProfile"
import { Link } from "react-router"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashBoard",
    icon: Home,
  },
  {
    title: "Books",
    url: "/dashBoard/books",
    icon: BookOpen,
  },
  {
    title: "CreateBook",
    url: "/dashBoard/createBook",
    icon: NotebookPen,
  },
]

export default function AppSidebar() {
  return (
    <Sidebar variant="insert" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserProfile/>
      </SidebarFooter>
    </Sidebar>
  )
}
