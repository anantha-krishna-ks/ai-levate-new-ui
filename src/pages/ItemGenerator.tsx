import { useState } from "react"
import { Link } from "react-router-dom"
import { 
  ArrowLeft, 
  BarChart3, 
  BookOpen, 
  Download,
  TrendingUp,
  Users,
  Zap,
  Calendar,
  Target,
  Award,
  Bell,
  Settings,
  Clock,
  Activity,
  BookMarked
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts'

const ItemGenerator = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("2024")

  const stats = [
    {
      label: "Total Tokens Used",
      value: "46,100",
      change: "+12%",
      icon: Zap,
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700"
    },
    {
      label: "Today's Usage", 
      value: "2,238",
      subLabel: "Balance: 7,762 remaining",
      change: "+5%",
      icon: Activity,
      gradient: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700"
    },
    {
      label: "Questions Generated",
      value: "65",
      change: "+23%",
      subStats: [
        { label: "Multiple Choice", value: "64", color: "text-orange-600" },
        { label: "Written Response", value: "1", color: "text-blue-600" }
      ],
      icon: Target,
      gradient: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700"
    },
    {
      label: "Questions Saved",
      value: "28",
      change: "+8%",
      subStats: [
        { label: "Multiple Choice", value: "27", color: "text-purple-600" },
        { label: "Written Response", value: "1", color: "text-pink-600" }
      ],
      icon: BookMarked,
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700"
    }
  ]

  const chartData = [
    { name: 'Mon', usage: 1200, questions: 8 },
    { name: 'Tue', usage: 1900, questions: 12 },
    { name: 'Wed', usage: 1500, questions: 10 },
    { name: 'Thu', usage: 2800, questions: 18 },
    { name: 'Fri', usage: 2238, questions: 15 },
    { name: 'Sat', usage: 1800, questions: 11 },
    { name: 'Sun', usage: 2100, questions: 14 },
  ]

  const weeklyData = [
    { day: 'Week 1', generated: 42, saved: 18 },
    { day: 'Week 2', generated: 38, saved: 22 },
    { day: 'Week 3', generated: 45, saved: 28 },
    { day: 'Week 4', generated: 52, saved: 31 },
  ]

  const books = [
    {
      year: "2024",
      title: "Cyber Risk",
      subtitle: "Chartered Insurance Professional",
      code: "C20",
      questions: 11,
      cover: "/lovable-uploads/a13547e7-af5f-49b0-bb15-9b344d6cd72e.png"
    },
    {
      year: "2023", 
      title: "Principles and Practice of Insurance",
      subtitle: "Chartered Insurance Professional",
      code: "C11",
      questions: 17,
      cover: "/lovable-uploads/a13547e7-af5f-49b0-bb15-9b344d6cd72e.png"
    }
  ]

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 relative">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/2 w-60 h-60 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <AppSidebar />
        
        <SidebarInset>
          {/* Header */}
          <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/20">
            <div className="flex h-16 items-center gap-4 px-6">
              <SidebarTrigger />
              <div className="flex-1 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Link to="/dashboard">
                    <Button variant="ghost" size="icon" className="hover:bg-blue-50 hover:scale-105 transition-all duration-200">
                      <ArrowLeft className="h-5 w-5 text-slate-600" />
                    </Button>
                  </Link>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Item Generator</h1>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <span>Welcome Back,</span>
                    <span className="font-semibold text-slate-800">Shivaraj Mi</span>
                  </div>
                  <Button variant="ghost" size="icon" className="hover:bg-blue-50 hover:scale-105 transition-all duration-200">
                    <Bell className="h-5 w-5 text-slate-600" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-blue-50 hover:scale-105 transition-all duration-200">
                    <Settings className="h-5 w-5 text-slate-600" />
                  </Button>
                  <Avatar className="h-9 w-9 ring-2 ring-blue-100">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">SM</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content - Bento Grid Layout */}
          <main className="flex-1 p-6">
            <div className="grid grid-cols-12 gap-6 h-full">
              
              {/* Generated Books Section */}
              <div className="col-span-12 lg:col-span-4">
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl">
                  <CardHeader className="pb-4 p-6">
                    <CardTitle className="flex items-center gap-2 text-xl font-bold text-slate-800">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <BookOpen className="h-5 w-5 text-white" />
                      </div>
                      Generated Books
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 p-6">
                    {books.map((book, index) => (
                      <Card 
                        key={index}
                        className="group p-4 bg-white/90 backdrop-blur-sm border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-lg">
                            {book.code}
                          </div>
                          <div className="flex-1 min-w-0">
                            <Badge variant="secondary" className="mb-2 text-xs bg-blue-50 text-blue-700">
                              {book.year}
                            </Badge>
                            <h3 className="font-semibold text-sm mb-1 group-hover:text-blue-600 transition-colors leading-tight text-slate-800">
                              {book.title}
                            </h3>
                            <p className="text-xs text-slate-600 mb-3 line-clamp-2">
                              {book.subtitle}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-medium text-blue-600">
                                {book.questions} Questions
                              </span>
                              <Button size="sm" variant="outline" className="h-6 px-2 text-xs hover:scale-105 transition-transform duration-200 border-blue-200 text-blue-600 hover:bg-blue-50">
                                <Download className="h-3 w-3 mr-1" />
                                Export
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Statistics Grid */}
              <div className="col-span-12 lg:col-span-8 space-y-6">
                
                {/* Key Metrics - Bento Style */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <Card 
                      key={index}
                      className="group bg-white/90 backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden rounded-2xl shadow-lg"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className={`w-full h-full bg-gradient-to-br ${stat.gradient}`} />
                      </div>
                      
                      <CardContent className="p-4 relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <stat.icon className="h-5 w-5 text-white" />
                          </div>
                          {stat.change && (
                            <Badge variant="secondary" className="text-xs text-green-600 bg-green-50">
                              {stat.change}
                            </Badge>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <div className={`text-2xl font-bold ${stat.textColor} group-hover:scale-105 transition-transform duration-300`}>
                            {stat.value}
                          </div>
                          <p className="text-xs font-medium text-slate-600">
                            {stat.label}
                          </p>
                          
                          {stat.subLabel && (
                            <p className="text-xs text-slate-500">
                              {stat.subLabel}
                            </p>
                          )}
                          
                          {stat.subStats && (
                            <div className="space-y-1 mt-3">
                              {stat.subStats.map((subStat, subIndex) => (
                                <div key={subIndex} className="flex items-center justify-between text-xs">
                                  <span className="text-slate-500">{subStat.label}</span>
                                  <span className={`font-bold ${subStat.color}`}>{subStat.value}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  {/* Daily Usage Trend */}
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-2xl">
                    <CardHeader className="pb-4 p-6">
                      <CardTitle className="flex items-center gap-2 text-lg text-slate-800">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                          <TrendingUp className="h-4 w-4 text-white" />
                        </div>
                        Daily Usage Trend
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={chartData}>
                            <defs>
                              <linearGradient id="usageGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                            <XAxis 
                              dataKey="name" 
                              stroke="#64748b"
                              fontSize={12}
                            />
                            <YAxis 
                              stroke="#64748b"
                              fontSize={12}
                            />
                            <Area
                              type="monotone"
                              dataKey="usage"
                              stroke="#3b82f6"
                              strokeWidth={3}
                              fill="url(#usageGradient)"
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Weekly Progress */}
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-2xl">
                    <CardHeader className="pb-4 p-6">
                      <CardTitle className="flex items-center gap-2 text-lg text-slate-800">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                          <BarChart3 className="h-4 w-4 text-white" />
                        </div>
                        Weekly Progress
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={weeklyData} barGap={8}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                            <XAxis 
                              dataKey="day" 
                              stroke="#64748b"
                              fontSize={12}
                            />
                            <YAxis 
                              stroke="#64748b"
                              fontSize={12}
                            />
                            <Bar
                              dataKey="generated"
                              fill="#3b82f6"
                              radius={[4, 4, 0, 0]}
                              name="Generated"
                            />
                            <Bar
                              dataKey="saved"
                              fill="#8b5cf6"
                              radius={[4, 4, 0, 0]}
                              name="Saved"
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-2xl">
                  <CardHeader className="pb-4 p-6">
                    <CardTitle className="flex items-center gap-2 text-lg text-slate-800">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-3 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-800">Generated 5 new questions for Cyber Risk</p>
                          <p className="text-xs text-slate-600">2 minutes ago</p>
                        </div>
                        <Badge variant="secondary" className="text-xs bg-green-50 text-green-700">New</Badge>
                      </div>
                      <div className="flex items-center gap-4 p-3 rounded-lg bg-blue-50/50">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-800">Exported question set C20</p>
                          <p className="text-xs text-slate-600">15 minutes ago</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-3 rounded-lg bg-blue-50/50">
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-800">Saved 3 questions to collection</p>
                          <p className="text-xs text-slate-600">1 hour ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

export default ItemGenerator