import { LayoutDashboard, FileBarChart, Users, LogOut, Settings } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
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

  return (
    <Sidebar className="apple-glass border-r-0 w-64">
      <SidebarHeader className="p-6 border-b border-border/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg micro-scale">
            <img 
              src="/lovable-uploads/b5b0f5a8-9552-4635-8c44-d5e6f994179c.png" 
              alt="AI-Levate" 
              className="h-6 w-6 brightness-0 invert"
            />
          </div>
          <div>
            <h1 className="font-bold text-lg gradient-text">AI-Levate</h1>
            <p className="text-xs text-muted-foreground">Education Platform</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={isActive(item.url)}
                    className="group"
                  >
                    <Link 
                      to={item.url} 
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl smooth-transition ${
                        isActive(item.url) 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg micro-glow' 
                          : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground micro-scale'
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4 border-t border-border/20">
        <div className="space-y-3">
          <div className="flex items-center gap-3 px-3 py-2">
            <Avatar className="h-8 w-8 ring-2 ring-blue-100">
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm font-semibold">SM</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">Shivaraj Mi</p>
              <p className="text-xs text-muted-foreground truncate">Admin</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="flex-1 micro-scale">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="ghost" size="sm" className="flex-1 text-red-600 hover:text-red-700 hover:bg-red-50 micro-scale">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}