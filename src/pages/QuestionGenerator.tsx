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
  CheckCircle2
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
    <div className="min-h-screen bg-background animate-fade-in">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border surface-elevated">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <img 
                src="/lovable-uploads/b5b0f5a8-9552-4635-8c44-d5e6f994179c.png" 
                alt="AI-Levate" 
                className="h-10 w-10 rounded-xl object-cover"
              />
              <div>
                <h1 className="text-2xl font-semibold text-foreground">AI-Levate</h1>
                <p className="text-sm text-muted-foreground mt-0.5">Question Generator</p>
              </div>
            </div>
            
            <Link to="/dashboard">
              <Button 
                variant="ghost" 
                size="sm"
                className="button-ghost text-muted-foreground hover:text-foreground"
              >
                <Home className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        
        {/* Book Info Bar */}
        <div className="mb-8 p-6 surface-elevated rounded-xl animate-scale-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center">
                <Book className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">{bookData.title}</h2>
                <p className="text-sm text-muted-foreground">{bookData.subtitle} • {bookData.code} • {bookData.year}</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              Active
            </Badge>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-2 surface-elevated p-1 rounded-xl">
              <TabsTrigger 
                value="generate" 
                className="data-[state=active]:button-primary data-[state=active]:text-white button-secondary rounded-lg px-8 py-3 font-medium transition-all"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Generate Questions
              </TabsTrigger>
              <TabsTrigger 
                value="repository"
                className="data-[state=active]:button-primary data-[state=active]:text-white button-secondary rounded-lg px-8 py-3 font-medium transition-all"
              >
                <FileText className="h-4 w-4 mr-2" />
                Repository
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Generate Questions Tab */}
          <TabsContent value="generate" className="space-y-8 animate-fade-in">
            
            {/* Token Status */}
            <div className="surface-elevated rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Available Tokens</p>
                    <p className="text-2xl font-semibold text-foreground">7,762</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-muted-foreground">Book Based</span>
                  <div className="relative">
                    <input type="checkbox" defaultChecked className="sr-only" />
                    <div className="w-11 h-6 bg-gradient-to-r from-primary to-blue-600 rounded-full shadow-inner"></div>
                    <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition transform translate-x-5 shadow-sm"></div>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">LLM</span>
                </div>
              </div>
            </div>

            {/* Configuration Section */}
            <div className="surface-elevated rounded-xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center">
                  <Settings2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Question Configuration</h3>
                  <p className="text-sm text-muted-foreground">Set up your question parameters</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">Study</label>
                  <Select defaultValue="defining-risk">
                    <SelectTrigger className="input-field h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="surface-overlay">
                      <SelectItem value="defining-risk">1. Defining Risk and Cyber</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">Learning Outcomes</label>
                  <Select defaultValue="explain-pure-risk">
                    <SelectTrigger className="input-field h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="surface-overlay">
                      <SelectItem value="explain-pure-risk">1. Explain why pure risk is</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">Taxonomy</label>
                  <Select>
                    <SelectTrigger className="input-field h-11">
                      <SelectValue placeholder="Select taxonomy" />
                    </SelectTrigger>
                    <SelectContent className="surface-overlay">
                      <SelectItem value="remember">Remember</SelectItem>
                      <SelectItem value="understand">Understand</SelectItem>
                      <SelectItem value="apply">Apply</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">Question Type</label>
                  <Select defaultValue="multiple-choice">
                    <SelectTrigger className="input-field h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="surface-overlay">
                      <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                      <SelectItem value="true-false">True/False</SelectItem>
                      <SelectItem value="essay">Essay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">Number of Questions</label>
                  <Select defaultValue="1">
                    <SelectTrigger className="input-field h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="surface-overlay">
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">Marks</label>
                  <Select defaultValue="1">
                    <SelectTrigger className="input-field h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="surface-overlay">
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-border">
                <Button 
                  variant="outline" 
                  className="button-secondary px-6 py-3"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Additional Instructions
                </Button>
                
                <Button 
                  className="button-primary px-12 py-3 text-base font-medium"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate Questions
                </Button>
              </div>
            </div>

            {/* Export Actions */}
            <div className="surface-elevated rounded-xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h4 className="text-lg font-semibold text-foreground">Export Options</h4>
                <div className="flex items-center gap-3">
                  <Button variant="outline" className="button-secondary">
                    <FileText className="h-4 w-4 mr-2" />
                    Export to Word
                  </Button>
                  <Button variant="outline" className="button-secondary">
                    <FileSpreadsheet className="h-4 w-4 mr-2" />
                    Export to Excel
                  </Button>
                  <Button variant="outline" className="button-secondary">
                    <Download className="h-4 w-4 mr-2" />
                    Save Data
                  </Button>
                </div>
              </div>
            </div>
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