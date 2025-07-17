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
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logging out...")
  }

  return (
    <Sidebar className="border-r-0 w-16 hover:w-64 transition-all duration-300 group/sidebar bg-gradient-to-b from-background to-muted/30">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/b5b0f5a8-9552-4635-8c44-d5e6f994179c.png" 
            alt="AI-Levate" 
            className="h-10 w-10 rounded-xl object-cover shadow-lg"
          />
          <span className="font-bold text-foreground opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            AI-Levate
          </span>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-3 space-y-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {items.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={isActive(item.url)}
                    className={`group/item h-12 rounded-xl transition-all duration-300 hover:bg-primary/10 hover:scale-105 ${
                      isActive(item.url) ? 'bg-primary/20 text-primary shadow-lg' : ''
                    }`}
                  >
                    <Link to={item.url} className="flex items-center gap-3 px-3">
                      <item.icon className="h-5 w-5 flex-shrink-0 animate-nav-bounce" style={{ animationDelay: `${index * 100}ms` }} />
                      <span className="opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {/* User Profile Section */}
        <div className="mt-auto pt-4 border-t border-border/40">
          <div className="flex items-center gap-3 px-3 py-2 mb-2">
            <Avatar className="h-8 w-8 shadow-lg">
              <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-sm">
                SM
              </AvatarFallback>
            </Avatar>
            <div className="opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              <p className="text-sm font-medium">Shivaraj Mi</p>
              <p className="text-xs text-muted-foreground">Admin</p>
            </div>
          </div>
          
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="w-full h-12 rounded-xl transition-all duration-300 hover:bg-destructive/10 hover:text-destructive group/logout"
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            <span className="opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium ml-3">
              Logout
            </span>
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}