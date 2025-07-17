import { Link } from "react-router-dom"
import { 
  BookOpen, 
  FileText, 
  Database, 
  GraduationCap, 
  RefreshCw, 
  Search, 
  Scan, 
  MessageSquare,
  ArrowRight,
  Bell,
  Settings,
  Play
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"

import itemGenerationHero from "@/assets/item-generation-hero.jpg"
import itemWriterHero from "@/assets/item-writer-hero.jpg"
import itemMetadataHero from "@/assets/item-metadata-hero.jpg"
import courseGeneratorHero from "@/assets/course-generator-hero.jpg"
import itemRewriterHero from "@/assets/item-rewriter-hero.jpg"
import itemSimilarityHero from "@/assets/item-similarity-hero.jpg"
import docChatHero from "@/assets/doc-chat-hero.jpg"
import ocrHero from "@/assets/ocr-hero.jpg"

const Dashboard = () => {
  const aiTools = [
    {
      id: "item-generation",
      title: "Item Generation",
      description: "Generate subjective and objective questions for any book title using advanced AI algorithms",
      category: "Question Creation",
      status: "active",
      path: "/item-generator",
      image: itemGenerationHero,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "item-writer",
      title: "Item Writer", 
      description: "Create objective questions with precise formatting and educational standards compliance",
      category: "Content Writing",
      status: "active",
      path: "/item-writer",
      image: itemWriterHero,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      id: "item-metadata",
      title: "Item Metadata",
      description: "Automate metadata creation for comprehensive item banks with intelligent tagging",
      category: "Data Management",
      status: "active",
      path: "/item-metadata",
      image: itemMetadataHero,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: "course-generator",
      title: "Course Generator",
      description: "Design comprehensive courses with AI-assisted curriculum planning and structure",
      category: "Course Design",
      status: "active",
      path: "/course-generator",
      image: courseGeneratorHero,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: "item-rewriter",
      title: "Item Rewriter",
      description: "Transform existing content while preserving original essence and educational value",
      category: "Content Enhancement",
      status: "active",
      path: "/item-rewriter",
      image: itemRewriterHero,
      color: "from-teal-500 to-teal-600"
    },
    {
      id: "item-similarity",
      title: "Item Similarity",
      description: "Compare content with existing repository items using advanced similarity algorithms",
      category: "Content Analysis",
      status: "active",
      path: "/item-similarity",
      image: itemSimilarityHero,
      color: "from-cyan-500 to-cyan-600"
    },
    {
      id: "doc-chat-ncert",
      title: "Doc Chat - NCERT",
      description: "Interactive learning experience with NCERT textbooks through AI-powered conversations",
      category: "Interactive Learning",
      status: "active",
      path: "/doc-chat-ncert",
      image: docChatHero,
      color: "from-violet-500 to-violet-600"
    },
    {
      id: "ocr",
      title: "OCR Scanner",
      description: "Extract and digitize text from images with high accuracy optical character recognition",
      category: "Document Processing",
      status: "active",
      path: "/ocr",
      image: ocrHero,
      color: "from-rose-500 to-rose-600"
    }
  ]

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <AppSidebar />
        
        <SidebarInset>
          {/* Header */}
          <header className="sticky top-0 z-50 apple-glass border-b border-white/10">
            <div className="flex h-16 items-center gap-4 px-8">
              <SidebarTrigger className="micro-scale" />
              <div className="flex-1 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <h1 className="text-2xl font-bold gradient-text">Dashboard</h1>
                    <p className="text-sm text-muted-foreground">Welcome back, let's continue learning</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="icon" className="micro-scale apple-hover">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                  </Button>
                  <Button variant="ghost" size="icon" className="micro-scale apple-hover">
                    <Settings className="h-5 w-5 text-muted-foreground" />
                  </Button>
                  <div className="flex items-center gap-3 pl-4 border-l border-border/20">
                    <div className="text-right">
                      <p className="text-sm font-semibold text-foreground">Shivaraj Mi</p>
                      <p className="text-xs text-muted-foreground">Administrator</p>
                    </div>
                    <Avatar className="h-10 w-10 ring-2 ring-white shadow-md">
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">SM</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-8 space-y-8">
            {/* Filter Tabs */}
            <div className="flex gap-3 mb-8">
              <Button 
                variant="default" 
                className="rounded-full px-8 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium"
              >
                All
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-8 py-2 bg-white/60 backdrop-blur-sm border-white/40 text-slate-700 hover:bg-blue-50 hover:scale-105 transition-all duration-300 font-medium"
              >
                Active Subscriptions
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-8 py-2 bg-white/60 backdrop-blur-sm border-white/40 text-slate-700 hover:bg-blue-50 hover:scale-105 transition-all duration-300 font-medium"
              >
                Yet to Subscribe
              </Button>
            </div>

            {/* AI Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {aiTools.map((tool, index) => (
                <Card 
                  key={tool.id} 
                  className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)'
                  }}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                    style={{
                      backgroundImage: `url(${tool.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100" />
                  
                  <CardHeader className="relative pb-4 z-10 p-6">
                    <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      <img 
                        src={tool.image} 
                        alt={tool.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                    </div>
                    <Badge variant="secondary" className="mb-2 text-xs">{tool.category}</Badge>
                    <CardTitle className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                      {tool.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative pt-0 z-10 p-6">
                    <p className="text-sm text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                      {tool.description}
                    </p>
                    <Link to={tool.path}>
                      <Button 
                        className="w-full group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium rounded-xl"
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