import { LayoutDashboard, FileBarChart, Users } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

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
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path

  return (
    <Sidebar className="border-r-0 bg-gradient-to-b from-slate-50/50 to-blue-50/30 backdrop-blur-sm w-16 hover:w-64 transition-all duration-300 group">
      <SidebarHeader className="p-3 border-b border-white/20">
        <div className="flex items-center justify-center group-hover:justify-start gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <img 
              src="/lovable-uploads/b5b0f5a8-9552-4635-8c44-d5e6f994179c.png" 
              alt="AI-Levate" 
              className="h-6 w-6 brightness-0 invert"
            />
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <Link to={item.url} className={`relative flex items-center justify-center group-hover:justify-start gap-3 p-3 rounded-xl transition-all duration-200 ${
                      isActive(item.url) 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                        : 'hover:bg-white/60 hover:shadow-md text-slate-700'
                    }`}>
                      <item.icon className="h-5 w-5 shrink-0" />
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">{item.title}</span>
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