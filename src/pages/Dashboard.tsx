import { Link } from "react-router-dom"
import { 
  Sparkles,
  ArrowRight,
  Bell,
  Settings,
  Clock,
  MessageCircle,
  TrendingUp
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"

// Import hero images
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
      description: "Subjective and Objective questions are generated for the book title by AI",
      path: "/item-generator",
      image: itemGenerationHero,
      category: "AI Tools",
      status: "Active",
      users: "2.4k"
    },
    {
      id: "item-writer",
      title: "Item Writer", 
      description: "Objective questions are generated for the book title by AI",
      path: "/item-writer",
      image: itemWriterHero,
      category: "AI Tools",
      status: "Active",
      users: "1.8k"
    },
    {
      id: "item-metadata",
      title: "Item Metadata",
      description: "AI-powered Item Metadata Generator automates metadata creation for item banks",
      path: "/item-metadata",
      image: itemMetadataHero,
      category: "AI Tools",
      status: "Beta",
      users: "0.9k"
    },
    {
      id: "course-generator",
      title: "Course Generator",
      description: "AI assisted course generator app will help you to generate courses for defined information of the course",
      path: "/course-generator",
      image: courseGeneratorHero,
      category: "AI Tools",
      status: "Active",
      users: "3.1k"
    },
    {
      id: "item-rewriter",
      title: "Item Rewriter",
      description: "Existing item will be rewritten having the same original essence",
      path: "/item-rewriter",
      image: itemRewriterHero,
      category: "AI Tools",
      status: "Active",
      users: "1.2k"
    },
    {
      id: "item-similarity",
      title: "Item Similarity",
      description: "An AI-powered tool, helps authors instantly compare their work to existing items in the repository",
      path: "/item-similarity",
      image: itemSimilarityHero,
      category: "AI Tools",
      status: "Active",
      users: "2.7k"
    },
    {
      id: "doc-chat-ncert",
      title: "Doc Chat - NCERT",
      description: "Learning can start with interacting with NCERT textbook by asking questions and getting answers from AI",
      path: "/doc-chat-ncert",
      image: docChatHero,
      category: "AI Tools",
      status: "Active",
      users: "4.2k"
    },
    {
      id: "ocr",
      title: "OCR",
      description: "Tool which extracts the text characters from the image and transform the image to have the text in",
      path: "/ocr",
      image: ocrHero,
      category: "AI Tools",
      status: "Active",
      users: "1.6k"
    }
  ]

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background via-muted/10 to-background">
        <AppSidebar />
        
        <SidebarInset className="ml-16">
          {/* Header */}
          <header className="sticky top-0 z-50 glass-effect border-b border-border/30">
            <div className="flex h-16 items-center justify-between px-6">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
                <div className="h-6 w-px bg-border/40" />
                <span className="text-sm text-muted-foreground">Welcome back, Shivaraj Mi</span>
              </div>
              
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform duration-200">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform duration-200">
                  <Settings className="h-5 w-5" />
                </Button>
                <Avatar className="h-8 w-8 shadow-lg">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">SM</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 space-y-8">
            {/* Filter Tabs */}
            <div className="flex gap-4">
              <Button 
                variant="default" 
                className="rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90"
              >
                All Tools
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-6 glass-effect hover:bg-primary/10 hover:scale-105 transition-all duration-300"
              >
                Active
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-6 glass-effect hover:bg-primary/10 hover:scale-105 transition-all duration-300"
              >
                Beta
              </Button>
            </div>

            {/* AI Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiTools.map((tool, index) => (
                <Card 
                  key={tool.id} 
                  className="group relative overflow-hidden card-modern border-0 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hero Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={tool.image} 
                      alt={tool.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tool.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {tool.status}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                        {tool.title}
                      </CardTitle>
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <CardDescription className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0 space-y-4">
                    {/* Metadata Row */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        <span>{tool.users} users</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="h-4 w-4" />
                        <span>{tool.category}</span>
                      </div>
                    </div>
                    
                    <Link to={tool.path}>
                      <Button 
                        className="w-full group/btn bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                        size="sm"
                      >
                        Launch Application
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