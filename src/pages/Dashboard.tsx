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
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"

const Dashboard = () => {
  const aiTools = [
    {
      id: "item-generation",
      title: "Item Generation",
      description: "Subjective and Objective questions are generated for the book title by AI",
      icon: Sparkles,
      path: "/item-generator",
      gradient: "from-blue-500 to-purple-600",
      image: "/src/assets/item-generation.png"
    },
    {
      id: "item-writer",
      title: "Item Writer", 
      description: "Objective questions are generated for the book title by AI",
      icon: FileText,
      path: "/item-writer",
      gradient: "from-green-500 to-teal-600",
      image: "/src/assets/item-writer.png"
    },
    {
      id: "item-metadata",
      title: "Item Metadata",
      description: "AI-powered Item Metadata Generator automates metadata creation for item banks",
      icon: Database,
      path: "/item-metadata",
      gradient: "from-orange-500 to-red-600",
      image: "/src/assets/item-metadata.png"
    },
    {
      id: "course-generator",
      title: "Course Generator",
      description: "AI assisted course generator app will help you to generate courses for defined information of the course",
      icon: GraduationCap,
      path: "/course-generator",
      gradient: "from-purple-500 to-pink-600",
      image: "/src/assets/course-generator.png"
    },
    {
      id: "item-rewriter",
      title: "Item Rewriter",
      description: "Existing item will be rewritten having the same original essence",
      icon: RefreshCw,
      path: "/item-rewriter",
      gradient: "from-teal-500 to-blue-600",
      image: "/src/assets/item-rewriter.png"
    },
    {
      id: "item-similarity",
      title: "Item Similarity",
      description: "An AI-powered tool, helps authors instantly compare their work to existing items in the repository",
      icon: Search,
      path: "/item-similarity",
      gradient: "from-indigo-500 to-purple-600",
      image: "/src/assets/item-similarity.png"
    },
    {
      id: "doc-chat-ncert",
      title: "Doc Chat - NCERT",
      description: "Learning can start with interacting with NCERT textbook by asking questions and getting answers from AI",
      icon: MessageSquare,
      path: "/doc-chat-ncert",
      gradient: "from-cyan-500 to-blue-600",
      image: "/src/assets/doc-chat-ncert.png"
    },
    {
      id: "ocr",
      title: "OCR",
      description: "Tool which extracts the text characters from the image and transform the image to have the text in",
      icon: Scan,
      path: "/ocr",
      gradient: "from-pink-500 to-rose-600",
      image: "/src/assets/ocr.png"
    }
  ]

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
        <AppSidebar />
        
        <SidebarInset>
          {/* Header */}
          <header className="sticky top-0 z-50 glass-effect border-b border-border/40">
            <div className="flex h-16 items-center gap-4 px-6">
              <SidebarTrigger />
              <div className="flex-1 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src="/lovable-uploads/b5b0f5a8-9552-4635-8c44-d5e6f994179c.png" 
                    alt="AI-Levate" 
                    className="h-8 w-auto"
                  />
                  <div className="h-6 w-px bg-border/40" />
                  <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
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
          <main className="flex-1 p-6 space-y-8">
            {/* Filter Tabs */}
            <div className="flex gap-4">
              <Button 
                variant="default" 
                className="rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
              >
                All
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-6 glass-effect hover:bg-primary/10 hover-scale transition-all duration-300"
              >
                Active Subscriptions
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-6 glass-effect hover:bg-primary/10 hover-scale transition-all duration-300"
              >
                Yet to Subscribe
              </Button>
            </div>

            {/* AI Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {aiTools.map((tool, index) => (
                <Card 
                  key={tool.id} 
                  className="group relative overflow-hidden glass-effect hover:shadow-2xl hover-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in border-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      backgroundImage: `url(${tool.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer opacity-0 group-hover:opacity-100" />
                  
                  <CardHeader className="relative pb-4 z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tool.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <tool.icon className="h-8 w-8 text-white drop-shadow-sm" />
                    </div>
                    <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                      {tool.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative pt-0 z-10">
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                      {tool.description}
                    </p>
                    <Link to={tool.path}>
                      <Button 
                        className="w-full group/btn bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl group-hover:scale-105 transition-all duration-300 font-medium"
                        size="sm"
                      >
                        Launch App
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-border/40">
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
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

export default Dashboard