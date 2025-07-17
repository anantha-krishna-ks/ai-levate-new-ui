
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
  Save
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
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 hover:from-amber-600 hover:to-orange-600 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Back to Dashboard
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
            <div className="flex items-center justify-center mb-6">
              <TabsList className="grid w-full max-w-md grid-cols-2 bg-muted/50">
                <TabsTrigger 
                  value="generate" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Generate Questions
                </TabsTrigger>
                <TabsTrigger 
                  value="repository"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Question Repository
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Generate Questions Tab */}
            <TabsContent value="generate" className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm border border-border/20 shadow-lg">
                <CardContent className="p-8">
                  
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

                  {/* Form Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    
                    {/* Study */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Study</label>
                      <Select defaultValue="defining-risk">
                        <SelectTrigger className="bg-white border-border/30">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="defining-risk">1. Defining Risk and Cyber</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* LOs */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">LOs</label>
                      <Select defaultValue="explain-pure-risk">
                        <SelectTrigger className="bg-white border-border/30">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="explain-pure-risk">1. Explain why pure risk is</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Taxonomy */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Taxonomy</label>
                      <Select>
                        <SelectTrigger className="bg-white border-border/30">
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
                      <label className="text-sm font-medium text-foreground">Question Type</label>
                      <Select defaultValue="multiple-choice">
                        <SelectTrigger className="bg-white border-border/30">
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

                  {/* Number of Questions & Marks */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Number of Questions</label>
                      <Select defaultValue="1">
                        <SelectTrigger className="bg-white border-border/30">
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
                      <label className="text-sm font-medium text-foreground">Marks</label>
                      <Select defaultValue="1">
                        <SelectTrigger className="bg-white border-border/30">
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

                  {/* Upload & Generate Section */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 bg-white border-border/30 hover:bg-muted/50"
                    >
                      <Upload className="h-4 w-4" />
                      Upload File
                    </Button>
                    
                    <Button 
                      className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 hover:from-amber-600 hover:to-orange-600 shadow-lg hover:shadow-xl transition-all duration-300 px-8"
                    >
                      Generate
                    </Button>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-end gap-4 mt-8 pt-6 border-t border-border/20">
                    <Button variant="outline" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 hover:from-blue-600 hover:to-blue-700">
                      Export to Word
                    </Button>
                    <Button variant="outline" className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0 hover:from-green-600 hover:to-green-700">
                      Export to Excel
                    </Button>
                    <Button variant="outline" className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0 hover:from-purple-600 hover:to-purple-700">
                      Save Data
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Question Repository Tab */}
            <TabsContent value="repository" className="space-y-6">
              
              {/* Filters Section */}
              <Card className="bg-white/90 backdrop-blur-sm border border-border/20 shadow-lg">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    
                    {/* Source */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Source</label>
                      <Select defaultValue="all">
                        <SelectTrigger className="bg-white border-border/30">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Study */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Study</label>
                      <Select defaultValue="all">
                        <SelectTrigger className="bg-white border-border/30">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* LOs */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">LOs</label>
                      <Select defaultValue="all">
                        <SelectTrigger className="bg-white border-border/30">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Question Type */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Question Type</label>
                      <Select defaultValue="all">
                        <SelectTrigger className="bg-white border-border/30">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Filters */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Taxonomy</label>
                      <Select defaultValue="all">
                        <SelectTrigger className="bg-white border-border/30">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Created By</label>
                      <Select defaultValue="me">
                        <SelectTrigger className="bg-white border-border/30">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="me">Me</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Search</label>
                      <div className="flex gap-2">
                        <Input 
                          placeholder="Enter search text" 
                          className="bg-white border-border/30"
                        />
                        <Button 
                          className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 hover:from-amber-600 hover:to-orange-600"
                        >
                          Go
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Results Section */}
              <Card className="bg-white/90 backdrop-blur-sm border border-border/20 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">Questions</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      Total Questions: <span className="font-bold text-primary">11</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-end gap-4 mb-6">
                    <Button variant="outline" className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0 hover:from-red-600 hover:to-red-700">
                      Delete Question(s)
                    </Button>
                    <Button variant="outline" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 hover:from-blue-600 hover:to-blue-700">
                      Export to Word
                    </Button>
                    <Button variant="outline" className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0 hover:from-green-600 hover:to-green-700">
                      Export to Excel
                    </Button>
                  </div>

                  {/* Questions Table */}
                  <div className="border border-border/20 rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/30">
                          <TableHead className="w-12">
                            <Checkbox />
                          </TableHead>
                          <TableHead className="font-semibold">Sl No</TableHead>
                          <TableHead className="font-semibold">Question Identifier</TableHead>
                          <TableHead className="font-semibold">Question</TableHead>
                          <TableHead className="font-semibold">User Name</TableHead>
                          <TableHead className="font-semibold">Type</TableHead>
                          <TableHead className="font-semibold">Preview</TableHead>
                          <TableHead className="font-semibold">Edit</TableHead>
                          <TableHead className="font-semibold">Delete</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {questions.map((question, index) => (
                          <TableRow key={question.id} className="hover:bg-muted/20">
                            <TableCell>
                              <Checkbox 
                                checked={selectedQuestions.includes(question.id)}
                                onCheckedChange={() => handleQuestionSelect(question.id)}
                              />
                            </TableCell>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell className="font-mono text-xs">{question.id}</TableCell>
                            <TableCell className="max-w-md">
                              <p className="line-clamp-2 text-sm">{question.question}</p>
                            </TableCell>
                            <TableCell>{question.user}</TableCell>
                            <TableCell>
                              <Badge variant="secondary">{question.type}</Badge>
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-700">
                                <Trash2 className="h-4 w-4" />
                              </Button>
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
