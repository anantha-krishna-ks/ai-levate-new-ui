import { Link } from "react-router-dom"
import { 
  BookOpen, 
  FileText, 
  Database, 
  GraduationCap, 
  RefreshCw, 
  Search, 
  Camera, 
  User, 
  BarChart3,
  FileCheck,
  Scan,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Bell,
  Settings
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const Dashboard = () => {
  const aiTools = [
    {
      id: "item-generation",
      title: "Item Generation",
      description: "Subjective and Objective questions are generated for the book title by AI",
      icon: Sparkles,
      path: "/item-generator",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: "item-writer",
      title: "Item Writer", 
      description: "Objective questions are generated for the book title by AI",
      icon: FileText,
      path: "/item-writer",
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: "item-metadata",
      title: "Item Metadata",
      description: "AI-powered Item Metadata Generator automates metadata creation for item banks",
      icon: Database,
      path: "/item-metadata",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: "course-generator",
      title: "Course Generator",
      description: "AI assisted course generator app will help you to generate courses for defined information of the course",
      icon: GraduationCap,
      path: "/course-generator",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: "item-rewriter",
      title: "Item Rewriter",
      description: "Existing item will be rewritten having the same original essence",
      icon: RefreshCw,
      path: "/item-rewriter",
      gradient: "from-teal-500 to-blue-600"
    },
    {
      id: "item-similarity",
      title: "Item Similarity",
      description: "An AI-powered tool, helps authors instantly compare their work to existing items in the repository",
      icon: Search,
      path: "/item-similarity",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      id: "doc-chat-ncert",
      title: "Doc Chat - NCERT",
      description: "Learning can start with interacting with NCERT textbook by asking questions and getting answers from AI",
      icon: MessageSquare,
      path: "/doc-chat-ncert",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: "ocr",
      title: "OCR",
      description: "Tool which extracts the text characters from the image and transform the image to have the text in",
      icon: Scan,
      path: "/ocr",
      gradient: "from-pink-500 to-rose-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/b5b0f5a8-9552-4635-8c44-d5e6f994179c.png" 
                alt="AI-Levate" 
                className="h-10 w-auto"
              />
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

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Filter Tabs */}
        <div className="flex gap-4 mb-8">
          <Button variant="default" className="rounded-full px-6">
            All
          </Button>
          <Button variant="outline" className="rounded-full px-6 hover-scale">
            Active Subscriptions
          </Button>
          <Button variant="outline" className="rounded-full px-6 hover-scale">
            Yet to Subscribe
          </Button>
        </div>

        {/* AI Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {aiTools.map((tool, index) => (
            <Card 
              key={tool.id} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tool.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {tool.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {tool.description}
                </p>
                <Link to={tool.path}>
                  <Button 
                    className="w-full group-hover:bg-primary group-hover:scale-105 transition-all duration-300"
                    size="sm"
                  >
                    Launch App
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>Copyright © 2025 | Excelsoftt Technologies Ltd.</span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors story-link">
                Privacy and Cookie Policy
              </Link>
              <Link to="/help" className="hover:text-primary transition-colors story-link">
                Help
              </Link>
              <span>Version: V.1.0.0</span>
              <div className="flex items-center gap-2">
                <span>Powered By:</span>
                <img 
                  src="/lovable-uploads/b5b0f5a8-9552-4635-8c44-d5e6f994179c.png" 
                  alt="AI-Levate" 
                  className="h-5 w-auto"
                />
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default Dashboard