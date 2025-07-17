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
  Settings
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const ItemGenerator = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("2024")

  const stats = [
    {
      label: "Total Tokens used",
      value: "46100",
      icon: Zap,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      label: "Today's usage",
      value: "2238", 
      subLabel: "Balance usage: 7762",
      icon: TrendingUp,
      gradient: "from-green-500 to-teal-600"
    },
    {
      label: "Total Questions Generated",
      value: "65",
      subStats: [
        { label: "Multiple Choice", value: "64" },
        { label: "Written Response", value: "1" }
      ],
      icon: Target,
      gradient: "from-orange-500 to-red-600"
    },
    {
      label: "Total Questions Saved",
      value: "28",
      subStats: [
        { label: "Multiple Choice", value: "27" },
        { label: "Written Response", value: "1" }
      ],
      icon: Award,
      gradient: "from-purple-500 to-pink-600"
    }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="ghost" size="icon" className="hover-scale">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <img 
                  src="/lovable-uploads/b5b0f5a8-9552-4635-8c44-d5e6f994179c.png" 
                  alt="AI-Levate" 
                  className="h-10 w-auto"
                />
                <div className="h-6 w-px bg-border" />
                <h1 className="text-xl font-semibold">Item Generator</h1>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Welcome Back,</span>
                <span className="font-semibold text-primary">Shivaraj Mi</span>
              </div>
              <Button variant="ghost" size="icon" className="hover-scale">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-scale">
                <Settings className="h-5 w-5" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-primary-foreground">SM</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Books */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Generated Books</h2>
                <div className="space-y-4">
                  {books.map((book, index) => (
                    <Card 
                      key={index}
                      className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm cursor-pointer hover:-translate-y-1"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center text-xs font-medium text-primary border-2 border-primary/20">
                            {book.code}
                          </div>
                          <div className="flex-1">
                            <Badge variant="outline" className="mb-2 text-xs">
                              {book.year}
                            </Badge>
                            <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                              {book.title}
                            </h3>
                            <p className="text-xs text-muted-foreground mb-3">
                              {book.subtitle}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">
                                Questions: {book.questions}
                              </span>
                              <Button size="sm" variant="outline" className="h-7 px-3 text-xs hover-scale">
                                <Download className="h-3 w-3 mr-1" />
                                Export
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Statistics */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Usage Statistics</h2>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <Card 
                      key={index}
                      className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-1 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-sm font-medium text-muted-foreground">
                            {stat.label}
                          </CardTitle>
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${stat.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <stat.icon className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-3">
                          <div className="text-3xl font-bold text-primary group-hover:scale-105 transition-transform duration-300">
                            {stat.value}
                          </div>
                          
                          {stat.subLabel && (
                            <div className="text-sm text-muted-foreground">
                              {stat.subLabel}
                            </div>
                          )}
                          
                          {stat.subStats && (
                            <div className="space-y-2">
                              {stat.subStats.map((subStat, subIndex) => (
                                <div key={subIndex} className="flex items-center justify-between text-sm">
                                  <span className="text-muted-foreground">{subStat.label}</span>
                                  <span className="font-semibold">{subStat.value}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Usage Chart Placeholder */}
                <Card className="border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      Usage Trends
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium">Daily Usage</span>
                        <Progress value={68} className="flex-1" />
                        <span className="text-sm text-muted-foreground">68%</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium">Weekly Goal</span>
                        <Progress value={42} className="flex-1" />
                        <span className="text-sm text-muted-foreground">42%</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium">Monthly Target</span>
                        <Progress value={85} className="flex-1" />
                        <span className="text-sm text-muted-foreground">85%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ItemGenerator