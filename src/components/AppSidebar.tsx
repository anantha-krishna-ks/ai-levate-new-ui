import { LayoutDashboard, FileBarChart, Users, LogOut, Menu } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"


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
    <div className="fixed left-0 top-0 h-full w-60 bg-white/95 backdrop-blur-xl border-r border-border/20 shadow-xl z-40">
      <div className="p-6 border-b border-border/20">
        <h2 className="font-bold text-lg text-foreground">Navigation</h2>
      </div>
      
      <div className="px-4 py-6">
        <nav className="space-y-2">
          {items.map((item) => (
            <Link
              key={item.title}
              to={item.url}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-primary/10 hover:scale-105 ${
                isActive(item.url) 
                  ? 'bg-primary/15 text-primary shadow-lg border border-primary/20' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span className="font-medium">{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}