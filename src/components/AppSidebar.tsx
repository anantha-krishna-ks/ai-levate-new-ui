import { LayoutDashboard, FileBarChart, Users, LogOut, Menu } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: FileBarChart,
  },
  {
    title: "Manage Users",
    url: "/manage-users",
    icon: Users,
  },
]

export function AppSidebar() {
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logging out...")
  }

  return (
    <Sidebar className="border-r border-border/20 w-64 bg-card/80 backdrop-blur-xl">
      <SidebarHeader className="p-6 border-b border-border/20">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/b5b0f5a8-9552-4635-8c44-d5e6f994179c.png" 
            alt="AI-Levate" 
            className="h-10 w-10 rounded-xl object-cover shadow-lg"
          />
          <span className="font-bold text-xl text-foreground">
            AI-Levate
          </span>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={isActive(item.url)}
                    className={`h-12 rounded-xl transition-all duration-300 hover:bg-primary/10 hover:scale-105 ${
                      isActive(item.url) ? 'bg-primary/15 text-primary shadow-lg border border-primary/20' : ''
                    }`}
                  >
                    <Link to={item.url} className="flex items-center gap-3 px-4">
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      <span className="font-medium">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}