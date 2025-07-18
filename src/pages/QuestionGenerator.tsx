import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { 
  ArrowLeft, 
  Search,
  Download,
  Trash2,
  Edit,
  Eye,
  Plus,
  FileText,
  FileSpreadsheet,
  Book,
  Sparkles,
  Settings2,
  Filter,
  Home,
  Zap,
  MoreHorizontal,
  CheckCircle2,
  ChevronDown,
  Brain,
  Target,
  Activity,
  Cpu,
  Globe
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const QuestionGenerator = () => {
  const { bookCode } = useParams()
  const [activeTab, setActiveTab] = useState("generate")
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([])
  
  const bookData = {
    title: "Cyber Risk",
    subtitle: "Chartered Insurance Professional",
    code: "C20",
    year: "2024",
    cover: "/lovable-uploads/a13547e7-af5f-49b0-bb15-9b344d6cd72e.png"
  }

  const questions = [
    {
      id: "C20_V2024_S11_LO0_MC_L2_EN_ID2426",
      question: "What characteristic of pure risk makes it more acceptable for insurers to cover compared to speculative risk?",
      type: "Multiple Choice",
      user: "Shivaraj M",
      preview: true
    }
  ]

  const handleQuestionSelect = (questionId: string) => {
    setSelectedQuestions(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    )
  }

  return (
    <div className="min-h-screen bg-background">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground">AI-Levate</h1>
                <p className="text-xs text-muted-foreground">Intelligent Assessment Platform</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground">AI Online</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-lg">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">7,762 Tokens</span>
              </div>
              <Link to="/dashboard">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-card border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              AI-Powered Assessment Creation
            </span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">Create Intelligent Assessments</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Experience the future of educational content creation with our AI-powered platform. 
            Generate contextual questions and manage your repository efficiently.
          </p>
          
          {/* Stats */}
          <div className="flex items-center justify-center gap-12 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">250K+</div>
              <div className="text-sm text-muted-foreground">Questions Generated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">99.9%</div>
              <div className="text-sm text-muted-foreground">AI Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">5K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-card border border-border/50 p-1 rounded-xl shadow-sm">
              <TabsTrigger 
                value="generate" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm px-8 py-3 rounded-lg text-sm font-medium transition-all"
              >
                <Brain className="h-4 w-4 mr-2" />
                Generate Questions
              </TabsTrigger>
              <TabsTrigger 
                value="repository"
                className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm px-8 py-3 rounded-lg text-sm font-medium transition-all"
              >
                <FileText className="h-4 w-4 mr-2" />
                Question Repository
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Generate Questions Tab */}
          <TabsContent value="generate" className="space-y-6">
            
            {/* Status Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Available Tokens */}
              <Card className="border-0 shadow-sm bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-muted-foreground">Available Tokens</h3>
                    <div className="h-10 w-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <Zap className="h-5 w-5 text-green-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">7,762</div>
                  <div className="text-xs text-green-600 flex items-center gap-1">
                    <span>+250 today</span>
                  </div>
                </CardContent>
              </Card>

              {/* AI Generation Mode */}
              <Card className="border-0 shadow-sm bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-muted-foreground">AI Generation Mode</h3>
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Brain className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">Standard</span>
                    <div className="flex items-center">
                      <div className="w-10 h-6 bg-primary rounded-full p-1 transition-all">
                        <div className="w-4 h-4 bg-white rounded-full translate-x-4 transition-transform"></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-primary">Premium</span>
                  </div>
                </CardContent>
              </Card>

              {/* AI Engine Status */}
              <Card className="border-0 shadow-sm bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-muted-foreground">AI Engine Status</h3>
                    <div className="h-10 w-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <Cpu className="h-5 w-5 text-purple-600" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Ready & Optimized</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Configuration Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Source Material */}
              <Card className="border-0 shadow-sm bg-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Book className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Source Material</CardTitle>
                      <p className="text-sm text-muted-foreground">AI-enhanced content</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Book className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Upload or select content</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AI Question Generator */}
              <Card className="border-0 shadow-sm bg-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-base">AI Question Generator</CardTitle>
                      <p className="text-sm text-muted-foreground">Configure your question generation settings</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Study Domain</label>
                      <Select defaultValue="defining-risk">
                        <SelectTrigger className="h-9 border-border/50">
                          <SelectValue />
                          <ChevronDown className="h-4 w-4 opacity-50" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="defining-risk">Defining Risk and Cyber</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Learning Objectives</label>
                      <Select defaultValue="explain-pure-risk">
                        <SelectTrigger className="h-9 border-border/50">
                          <SelectValue />
                          <ChevronDown className="h-4 w-4 opacity-50" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="explain-pure-risk">Explain why pure risk is</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Taxonomy Framework</label>
                      <Select>
                        <SelectTrigger className="h-9 border-border/50">
                          <SelectValue placeholder="Select framework" />
                          <ChevronDown className="h-4 w-4 opacity-50" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="remember">Remember</SelectItem>
                          <SelectItem value="understand">Understand</SelectItem>
                          <SelectItem value="apply">Apply</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Question Format</label>
                      <Select defaultValue="multiple-choice">
                        <SelectTrigger className="h-9 border-border/50">
                          <SelectValue />
                          <ChevronDown className="h-4 w-4 opacity-50" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                          <SelectItem value="true-false">True/False</SelectItem>
                          <SelectItem value="essay">Essay</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      <Brain className="h-4 w-4 mr-2" />
                      Generate Questions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Export Actions */}
            <Card className="border-0 shadow-sm bg-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-medium text-foreground">Export Options</h4>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="h-9">
                      <FileText className="h-4 w-4 mr-2" />
                      Export to Word
                    </Button>
                    <Button variant="outline" size="sm" className="h-9">
                      <FileSpreadsheet className="h-4 w-4 mr-2" />
                      Export to Excel
                    </Button>
                    <Button variant="outline" size="sm" className="h-9">
                      <Download className="h-4 w-4 mr-2" />
                      Save Data
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Question Repository Tab */}
          <TabsContent value="repository" className="space-y-8 animate-fade-in">
            
            {/* Search & Filters */}
            <div className="surface-elevated rounded-xl p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search questions..." 
                      className="input-field pl-10 h-11 text-base"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" className="button-secondary">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                  <Button className="button-primary">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="surface-elevated rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">Source</label>
                  <Select defaultValue="all">
                    <SelectTrigger className="input-field h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="surface-overlay">
                      <SelectItem value="all">All Sources</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">Study</label>
                  <Select defaultValue="all">
                    <SelectTrigger className="input-field h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="surface-overlay">
                      <SelectItem value="all">All Studies</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">Learning Outcomes</label>
                  <Select defaultValue="all">
                    <SelectTrigger className="input-field h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="surface-overlay">
                      <SelectItem value="all">All LOs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">Question Type</label>
                  <Select defaultValue="all">
                    <SelectTrigger className="input-field h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="surface-overlay">
                      <SelectItem value="all">All Types</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="surface-elevated rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <p className="text-sm text-muted-foreground">
                    {selectedQuestions.length} of {questions.length} selected
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Button 
                    variant="outline" 
                    className="button-secondary"
                    disabled={selectedQuestions.length === 0}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Selected
                  </Button>
                  <Button 
                    variant="outline" 
                    className="button-secondary"
                    disabled={selectedQuestions.length === 0}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Export Selected
                  </Button>
                </div>
              </div>
            </div>

            {/* Questions Table */}
            <div className="surface-elevated rounded-xl overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-border">
                    <TableHead className="w-12">
                      <Checkbox />
                    </TableHead>
                    <TableHead className="font-medium text-foreground">Question</TableHead>
                    <TableHead className="font-medium text-foreground">Type</TableHead>
                    <TableHead className="font-medium text-foreground">Created By</TableHead>
                    <TableHead className="font-medium text-foreground">Status</TableHead>
                    <TableHead className="w-24"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {questions.map((question) => (
                    <TableRow key={question.id} className="border-b border-border hover:bg-secondary/10">
                      <TableCell>
                        <Checkbox
                          checked={selectedQuestions.includes(question.id)}
                          onCheckedChange={() => handleQuestionSelect(question.id)}
                        />
                      </TableCell>
                      <TableCell className="max-w-96">
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-foreground line-clamp-2">
                            {question.question}
                          </p>
                          <p className="text-xs text-muted-foreground font-mono">
                            {question.id}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {question.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {question.user}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-green-600">Active</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="button-ghost h-8 w-8 p-0">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="button-ghost h-8 w-8 p-0">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="button-ghost h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default QuestionGenerator