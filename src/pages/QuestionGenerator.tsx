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
  Globe,
  BookOpen,
  Hash,
  MessageSquare,
  Upload
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
      <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/30 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              AI-Powered Assessment Creation
            </span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">Create Intelligent Assessments</h1>
          <p className="text-muted-foreground mt-1">
            Generate contextual questions with advanced AI technology
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-2 mb-8 max-w-lg mx-auto">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setActiveTab("generate")}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === "generate"
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <Brain className="h-4 w-4 mr-2 inline" />
              Generate Questions
            </button>
            <button
              onClick={() => setActiveTab("repository")}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === "repository"
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <FileText className="h-4 w-4 mr-2 inline" />
              Question Repository
            </button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">

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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Source Material - Enhanced */}
              <Card className="lg:col-span-1 border border-blue-200/50 shadow-sm bg-gradient-to-br from-blue-50/30 to-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-900">Source Material</CardTitle>
                      <p className="text-sm text-gray-600">AI-enhanced content</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Document Preview */}
                  <div className="relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="relative flex-shrink-0">
                        <img 
                          src="/lovable-uploads/b401ff6b-c99f-41b0-8578-92b80ce62cd0.png" 
                          alt="Cyber Risk Management Document"
                          className="w-16 h-20 object-cover rounded-lg border border-gray-200 shadow-sm"
                        />
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 text-sm mb-1">Cyber Risk Management</h4>
                        <p className="text-xs text-gray-600 mb-2">Source material loaded successfully</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <FileText className="h-3 w-3" />
                          <span>PDF Document</span>
                          <span>•</span>
                          <span>24 pages</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AI Question Generator - Enhanced */}
              <Card className="lg:col-span-2 border border-purple-200/50 shadow-sm bg-gradient-to-br from-purple-50/30 to-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-purple-500/10 rounded-xl flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-900">AI Question Generator</CardTitle>
                      <p className="text-sm text-gray-600">Configure your question generation settings</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  {/* Study Domain & Learning Objectives */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                      <Target className="h-4 w-4 text-blue-600" />
                      Study Configuration
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-xs font-medium text-gray-600">
                          <Globe className="h-3 w-3" />
                          Study Domain
                        </label>
                        <Select defaultValue="defining-risk">
                          <SelectTrigger className="h-10 border-gray-200 bg-white hover:border-gray-300">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="defining-risk">Defining Risk and Cyber</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-xs font-medium text-gray-600">
                          <Brain className="h-3 w-3" />
                          Learning Objectives
                        </label>
                        <Select defaultValue="explain-pure-risk">
                          <SelectTrigger className="h-10 border-gray-200 bg-white hover:border-gray-300">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="explain-pure-risk">Explain why pure risk is</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  {/* Question Settings */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                      <MessageSquare className="h-4 w-4 text-purple-600" />
                      Question Settings
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-600">Taxonomy Framework</label>
                        <Select>
                          <SelectTrigger className="h-10 border-gray-200 bg-white hover:border-gray-300">
                            <SelectValue placeholder="Select framework" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="remember">Remember</SelectItem>
                            <SelectItem value="understand">Understand</SelectItem>
                            <SelectItem value="apply">Apply</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-600">Question Format</label>
                        <Select defaultValue="multiple-choice">
                          <SelectTrigger className="h-10 border-gray-200 bg-white hover:border-gray-300">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                            <SelectItem value="true-false">True/False</SelectItem>
                            <SelectItem value="essay">Essay</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    {/* Additional Settings */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-xs font-medium text-gray-600">
                          <Hash className="h-3 w-3" />
                          Question Quantity
                        </label>
                        <Select defaultValue="5">
                          <SelectTrigger className="h-10 border-gray-200 bg-white hover:border-gray-300">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="15">15</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-600">Point Value</label>
                        <Select defaultValue="1">
                          <SelectTrigger className="h-10 border-gray-200 bg-white hover:border-gray-300">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Instructions */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-600">Additional Instructions</label>
                    <textarea 
                      placeholder="Provide specific instructions for AI question generation..."
                      className="w-full h-20 px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white resize-none focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-300"
                    />
                  </div>

                  {/* Generate Button */}
                  <div className="pt-2">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white h-11 shadow-md">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Generate AI Questions
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