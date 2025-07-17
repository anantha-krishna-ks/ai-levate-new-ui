
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { 
  ArrowLeft, 
  Upload,
  Search,
  Download,
  Trash2,
  Edit,
  Eye,
  ChevronDown,
  RotateCcw,
  FileText,
  Book,
  Settings,
  Save,
  Home,
  Plus,
  FileSpreadsheet
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
    <div className="min-h-screen w-full bg-gradient-to-br from-background via-muted/5 to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/20 shadow-sm">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/b5b0f5a8-9552-4635-8c44-d5e6f994179c.png" 
              alt="AI-Levate" 
              className="h-8 w-8 rounded-lg object-cover"
            />
            <h1 className="text-xl font-bold text-foreground">AI-Levate</h1>
          </div>
          
          <Link to="/dashboard">
            <Button 
              variant="outline" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground border-border hover:bg-muted/50 transition-all duration-200"
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
        
        {/* Left Sidebar - Book Info */}
        <div className="w-full lg:w-64 bg-white/80 backdrop-blur-sm border-r border-border/20 p-6">
          <div className="space-y-4">
            <div className="text-center">
              <Badge variant="secondary" className="mb-2">
                {bookData.year}
              </Badge>
              <div className="text-sm font-medium text-muted-foreground mb-1">
                {bookData.code}
              </div>
              <h3 className="font-semibold text-sm leading-tight mb-2">
                {bookData.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {bookData.subtitle}
              </p>
            </div>
            
            <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 flex items-center justify-center">
              <Book className="h-8 w-8 text-primary" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            
            {/* Tab Navigation */}
            <div className="flex items-center justify-center mb-8">
              <TabsList className="grid w-full max-w-lg grid-cols-2 bg-white border border-border shadow-sm p-1 rounded-lg">
                <TabsTrigger 
                  value="generate" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/90 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 rounded-md px-6 py-3 font-medium"
                >
                  Generate Questions
                </TabsTrigger>
                <TabsTrigger 
                  value="repository"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/90 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 rounded-md px-6 py-3 font-medium"
                >
                  Question Repository
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Generate Questions Tab */}
            <TabsContent value="generate" className="space-y-8">
              <Card className="bg-white border border-border shadow-lg rounded-xl">
                <CardHeader className="pb-0">
                  <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-3">
                    <div className="h-8 w-8 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center">
                      <Plus className="h-4 w-4 text-white" />
                    </div>
                    Generate Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-6">
                  
                  {/* Token Info */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Remaining Tokens:</span> 
                      <span className="font-bold text-primary ml-1">7762</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium">Book Based</span>
                      <div className="relative inline-block w-12 h-6">
                        <input 
                          type="checkbox" 
                          defaultChecked 
                          className="sr-only" 
                        />
                        <div className="block bg-gradient-to-r from-amber-400 to-orange-500 w-12 h-6 rounded-full shadow-inner"></div>
                        <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform translate-x-6 shadow-md"></div>
                      </div>
                      <span className="text-sm font-medium">LLM</span>
                    </div>
                  </div>

                  {/* Filters Section */}
                  <div className="bg-muted/30 rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Question Configuration</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    
                      {/* Study */}
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Study</label>
                        <Select defaultValue="defining-risk">
                          <SelectTrigger className="bg-white border-2 border-border shadow-sm hover:border-primary/50 transition-colors">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="defining-risk">1. Defining Risk and Cyber</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* LOs */}
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Learning Outcomes</label>
                        <Select defaultValue="explain-pure-risk">
                          <SelectTrigger className="bg-white border-2 border-border shadow-sm hover:border-primary/50 transition-colors">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="explain-pure-risk">1. Explain why pure risk is</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Taxonomy */}
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Taxonomy</label>
                        <Select>
                          <SelectTrigger className="bg-white border-2 border-border shadow-sm hover:border-primary/50 transition-colors">
                            <SelectValue placeholder="-- Select --" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="remember">Remember</SelectItem>
                            <SelectItem value="understand">Understand</SelectItem>
                            <SelectItem value="apply">Apply</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Question Type */}
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Question Type</label>
                        <Select defaultValue="multiple-choice">
                          <SelectTrigger className="bg-white border-2 border-border shadow-sm hover:border-primary/50 transition-colors">
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
                  </div>

                  {/* Additional Configuration */}
                  <div className="bg-muted/30 rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Question Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Number of Questions</label>
                        <Select defaultValue="1">
                          <SelectTrigger className="bg-white border-2 border-border shadow-sm hover:border-primary/50 transition-colors">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                            <SelectItem value="10">10</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Marks</label>
                        <Select defaultValue="1">
                          <SelectTrigger className="bg-white border-2 border-border shadow-sm hover:border-primary/50 transition-colors">
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

                  {/* Generate Section */}
                  <div className="border-t border-border pt-8">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                      <Button 
                        variant="outline" 
                        className="flex items-center gap-2 bg-white border-2 border-border hover:bg-muted/50 hover:border-primary/50 transition-all duration-200 px-6"
                      >
                        <Plus className="h-4 w-4" />
                        Add Additional Instructions
                      </Button>
                      
                      <Button 
                        size="lg"
                        className="bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 px-12 py-3 text-lg font-semibold"
                      >
                        Generate Questions
                      </Button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-end gap-3 mt-8 pt-6 border-t border-border">
                    <Button variant="outline" className="flex items-center gap-2 border-border hover:bg-muted/50 transition-colors">
                      <FileText className="h-4 w-4" />
                      Export to Word
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2 border-border hover:bg-muted/50 transition-colors">
                      <FileSpreadsheet className="h-4 w-4" />
                      Export to Excel
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2 border-border hover:bg-muted/50 transition-colors">
                      <Save className="h-4 w-4" />
                      Save Data
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Question Repository Tab */}
            <TabsContent value="repository" className="space-y-8">
              
              {/* Search Bar */}
              <Card className="bg-white border border-border shadow-lg rounded-xl">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4 items-end">
                    <div className="flex-1 space-y-2">
                      <label className="text-sm font-semibold text-foreground">Search Questions</label>
                      <div className="flex gap-2">
                        <Input 
                          placeholder="Enter search keywords..." 
                          className="bg-white border-2 border-border shadow-sm hover:border-primary/50 transition-colors"
                        />
                        <Button 
                          className="bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary/70 px-8"
                        >
                          <Search className="h-4 w-4 mr-2" />
                          Search
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Filters Section */}
              <Card className="bg-white border border-border shadow-lg rounded-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-3">
                    <div className="h-8 w-8 bg-gradient-to-r from-muted-foreground to-muted-foreground/80 rounded-lg flex items-center justify-center">
                      <Settings className="h-4 w-4 text-white" />
                    </div>
                    Filter Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    
                    {/* Source */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Source</label>
                      <Select defaultValue="all">
                        <SelectTrigger className="bg-white border-2 border-border shadow-sm hover:border-primary/50 transition-colors">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Sources</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Study */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Study</label>
                      <Select defaultValue="all">
                        <SelectTrigger className="bg-white border-2 border-border shadow-sm hover:border-primary/50 transition-colors">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Studies</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* LOs */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Learning Outcomes</label>
                      <Select defaultValue="all">
                        <SelectTrigger className="bg-white border-2 border-border shadow-sm hover:border-primary/50 transition-colors">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Learning Outcomes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Question Type */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Question Type</label>
                      <Select defaultValue="all">
                        <SelectTrigger className="bg-white border-2 border-border shadow-sm hover:border-primary/50 transition-colors">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Question Types</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Filters */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Taxonomy</label>
                      <Select defaultValue="all">
                        <SelectTrigger className="bg-white border-2 border-border shadow-sm hover:border-primary/50 transition-colors">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Taxonomies</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Created By</label>
                      <Select defaultValue="me">
                        <SelectTrigger className="bg-white border-2 border-border shadow-sm hover:border-primary/50 transition-colors">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="me">Me</SelectItem>
                          <SelectItem value="all">All Users</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Results Section */}
              <Card className="bg-white border border-border shadow-lg rounded-xl">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-3">
                      <div className="h-8 w-8 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center">
                        <FileText className="h-4 w-4 text-white" />
                      </div>
                      Question Repository
                    </CardTitle>
                    <div className="flex items-center gap-4">
                      <div className="text-sm text-muted-foreground">
                        Total Questions: <span className="font-bold text-primary text-base">11</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="flex items-center gap-2 border-border hover:bg-muted/50">
                          <Trash2 className="h-4 w-4" />
                          Delete Selected
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center gap-2 border-border hover:bg-muted/50">
                          <FileText className="h-4 w-4" />
                          Export Word
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center gap-2 border-border hover:bg-muted/50">
                          <FileSpreadsheet className="h-4 w-4" />
                          Export Excel
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">

                  {/* Questions Table */}
                  <div className="border border-border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader className="bg-muted/50">
                        <TableRow className="border-b border-border hover:bg-muted/50">
                          <TableHead className="w-12 py-4">
                            <Checkbox className="border-2" />
                          </TableHead>
                          <TableHead className="font-semibold py-4">Question ID</TableHead>
                          <TableHead className="font-semibold py-4">Question Text</TableHead>
                          <TableHead className="font-semibold py-4">Type</TableHead>
                          <TableHead className="font-semibold py-4">Created By</TableHead>
                          <TableHead className="font-semibold py-4 text-center">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {questions.map((question) => (
                          <TableRow key={question.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                            <TableCell className="py-4">
                              <Checkbox 
                                className="border-2"
                                checked={selectedQuestions.includes(question.id)}
                                onCheckedChange={() => handleQuestionSelect(question.id)}
                              />
                            </TableCell>
                            <TableCell className="font-mono text-xs py-4 max-w-48">
                              <div className="truncate text-muted-foreground">
                                {question.id}
                              </div>
                            </TableCell>
                            <TableCell className="max-w-md py-4">
                              <div className="truncate font-medium">
                                {question.question}
                              </div>
                            </TableCell>
                            <TableCell className="py-4">
                              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                                {question.type}
                              </Badge>
                            </TableCell>
                            <TableCell className="py-4 text-muted-foreground">{question.user}</TableCell>
                            <TableCell className="py-4">
                              <div className="flex items-center justify-center gap-1">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  className="h-8 w-8 p-0 border-border hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-colors"
                                >
                                  <Eye className="h-3 w-3" />
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  className="h-8 w-8 p-0 border-border hover:bg-amber-50 hover:border-amber-200 hover:text-amber-600 transition-colors"
                                >
                                  <Edit className="h-3 w-3" />
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  className="h-8 w-8 p-0 border-border hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-colors"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default QuestionGenerator
