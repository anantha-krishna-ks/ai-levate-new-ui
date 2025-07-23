import { useState } from "react"
import { Link } from "react-router-dom"
import { 
  ArrowLeft, 
  Zap, 
  CheckCircle2, 
  Clock, 
  BookOpen,
  FileText,
  FileSpreadsheet,
  Database,
  Edit3,
  Eye,
  Trash2,
  RotateCcw,
  Sparkles,
  ChevronDown,
  Target,
  User,
  Hash,
  AlignLeft,
  X,
  XCircle,
  AlertCircle,
  Plus,
  Settings2,
  Check,
  MessageSquare,
  FileQuestion
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const QuestionResults = () => {
  const [activeTab, setActiveTab] = useState("generate")
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isPreviewDialogOpen, setIsPreviewDialogOpen] = useState(false)
  const [questionType, setQuestionType] = useState("all")
  const [selectedQuestion, setSelectedQuestion] = useState(null)

  const stats = [
    { title: "Total Questions", value: "2", bgColor: "bg-blue-50", borderColor: "border-blue-200", icon: <Database className="w-4 h-4 text-blue-600" /> },
    { title: "Success Rate", value: "100%", bgColor: "bg-green-50", borderColor: "border-green-200", icon: <CheckCircle2 className="w-4 h-4 text-green-600" /> },
    { title: "Avg. Generation Time", value: "3.2s", bgColor: "bg-purple-50", borderColor: "border-purple-200", icon: <Clock className="w-4 h-4 text-purple-600" /> },
    { title: "Token Usage", value: "2.1K", bgColor: "bg-orange-50", borderColor: "border-orange-200", icon: <Zap className="w-4 h-4 text-orange-600" /> }
  ]

  const questions = [
    {
      id: 1,
      text: "Discuss the characteristics of pure risk that make it insurable and compare these to speculative risk.",
      type: "Written Response",
      feedback: "This question effectively tests understanding of risk types but could benefit from more specific examples.",
      difficulty: "Medium",
      maxMarks: 5,
      sample: "Pure risk is insurable due to its predictable nature and the absence of potential gain, allowing insurers to assess and manage losses effectively. Speculative risk, conversely, involves both potential gain and loss, making it unpredictable and unsuitable for traditional insurance products."
    },
    {
      id: 2,
      text: "Why are speculative risks generally excluded from insurance coverage, and how does this differ from the treatment of pure risks?",
      type: "Multiple Choice",
      feedback: "Clear and well-structured question with appropriate difficulty level.",
      difficulty: "Hard",
      maxMarks: 3,
      options: [
        { letter: "A", text: "Speculative risk includes the possibility of financial gain.", correct: true },
        { letter: "B", text: "Speculative risk involves only financial loss.", correct: false },
        { letter: "C", text: "Speculative risk is predictable and measurable.", correct: false },
        { letter: "D", text: "Speculative risk has no impact on financial outcomes.", correct: false }
      ]
    }
  ]

  // Filter questions based on selected type
  const filteredQuestions = questionType === "all" 
    ? questions 
    : questions.filter(q => q.type === questionType)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Link 
                to="/question-generator/cyber-risk" 
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Question Generator</span>
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Generated Questions Results</h1>
                <p className="text-gray-600 mt-1">Review and manage your AI-generated questions</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              className="flex items-center gap-2 border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              <RotateCcw className="w-4 h-4" />
              Regenerate
            </Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Export Questions
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-2 max-w-lg">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setActiveTab("generate")}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                  activeTab === "generate"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <Sparkles className="h-4 w-4" />
                Generate Questions
              </button>
              <button
                onClick={() => setActiveTab("repository")}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                  activeTab === "repository"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <FileText className="h-4 w-4" />
                Question Repository
              </button>
            </div>
          </div>
        </div>

        {activeTab === "generate" && (
          <div>
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className={`p-6 ${stat.bgColor} border ${stat.borderColor} shadow-sm`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{stat.title}</span>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                </Card>
              ))}
            </div>

            {/* Question Generation Parameters */}
            <Card className="p-6 bg-white border border-gray-200 shadow-sm mb-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <Settings2 className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Question Generation Parameters</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Study</label>
                  <Select defaultValue="defining-risk">
                    <SelectTrigger className="text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="defining-risk">1. Defining Risk and C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Learning Outcomes</label>
                  <Select defaultValue="pure-risk">
                    <SelectTrigger className="text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pure-risk">1. Explain why pure ris</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Taxonomy</label>
                  <Select defaultValue="understand">
                    <SelectTrigger className="text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="understand">Understand</SelectItem>
                      <SelectItem value="remember">Remember</SelectItem>
                      <SelectItem value="apply">Apply</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Number of Questions</label>
                  <Select defaultValue="5">
                    <SelectTrigger className="text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Marks</label>
                  <Select defaultValue="1">
                    <SelectTrigger className="text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Question Type</label>
                  <Select value={questionType} onValueChange={setQuestionType}>
                    <SelectTrigger className="text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="Multiple Choice">Multiple Choice</SelectItem>
                      <SelectItem value="Written Response">Written Response</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 px-6">
                  <RotateCcw className="w-4 h-4" />
                  Regenerate
                </Button>
                <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 px-6">
                  Back to Setup
                </Button>
              </div>
            </Card>

            {/* Generated Questions */}
            <div className="space-y-6">
              {filteredQuestions.map((question, index) => (
                <Card key={question.id} className="p-6 bg-white border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-sm font-medium">
                        {question.id}
                      </span>
                      <div>
                        <Badge variant="outline" className="text-xs font-medium">
                          {question.type}
                        </Badge>
                        <Badge variant="outline" className={`ml-2 text-xs font-medium ${
                          question.difficulty === 'Easy' ? 'bg-green-50 text-green-700 border-green-200' :
                          question.difficulty === 'Medium' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                          'bg-red-50 text-red-700 border-red-200'
                        }`}>
                          {question.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => {
                          setSelectedQuestion(question)
                          setIsPreviewDialogOpen(true)
                        }}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        Preview
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => {
                          setSelectedQuestion(question)
                          setIsEditDialogOpen(true)
                        }}
                        className="text-gray-600 hover:text-gray-700"
                      >
                        <Edit3 className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <Trash2 className="w-4 h-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium text-gray-900 mb-4">
                    {question.id}. {question.text}
                  </h4>
                  
                  {question.type === "Multiple Choice" && question.options ? (
                    <>
                      <div className="space-y-3 mb-4">
                        {question.options.map((option) => (
                          <div 
                            key={option.letter}
                            className={`flex items-center gap-3 p-3 rounded-lg ${
                              option.correct 
                                ? "bg-green-50 border border-green-200" 
                                : "border border-gray-200"
                            }`}
                          >
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
                              option.correct 
                                ? "bg-green-600 text-white" 
                                : "bg-gray-100 text-gray-700"
                            }`}>
                              {option.letter}
                            </span>
                            <span className={option.correct ? "text-gray-900" : "text-gray-700"}>
                              {option.text}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-blue-900">
                          <strong>Correct Answer:</strong> {question.options.find(opt => opt.correct)?.letter}. {question.options.find(opt => opt.correct)?.text}
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <MessageSquare className="w-5 h-5 text-green-600 mt-0.5" />
                        <h5 className="font-medium text-green-900">Sample Answer:</h5>
                      </div>
                      <p className="text-green-800 leading-relaxed">
                        {question.sample}
                      </p>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-12 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs">⚡</span>
                </div>
                <span>Powered by advanced AI technology</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "repository" && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-600">Total Questions</p>
                      <p className="text-2xl font-bold" style={{ color: "#1c398e", fontSize: '1.25rem' }}>
                        1,247
                      </p>
                      <p className="text-xs text-gray-500">+15% this month</p>
                    </div>
                    <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Database className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-600">AI Generated</p>
                      <p className="text-2xl font-bold" style={{ color: "#0d542b", fontSize: '1.25rem' }}>
                        892
                      </p>
                      <p className="text-xs text-gray-500">High quality</p>
                    </div>
                    <div className="h-8 w-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-purple-600" />
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-600">This Week</p>
                      <p className="text-2xl font-bold" style={{ color: "#59168b", fontSize: '1.25rem' }}>
                        47
                      </p>
                      <p className="text-xs text-gray-500">New questions</p>
                    </div>
                    <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-green-600" />
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-600">Contributors</p>
                      <p className="text-2xl font-bold" style={{ color: "#7e2a0c", fontSize: '1.25rem' }}>
                        12
                      </p>
                      <p className="text-xs text-gray-500">Active authors</p>
                    </div>
                    <div className="h-8 w-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <User className="h-5 w-5 text-orange-600" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Filters & Search */}
            <Card className="border border-gray-200">
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <Settings2 className="h-4 w-4" />
                    Filters & Search
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Source Type</label>
                      <Select defaultValue="all-sources">
                        <SelectTrigger className="bg-white border-gray-200">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-200 shadow-lg">
                          <SelectItem value="all-sources">All Sources</SelectItem>
                          <SelectItem value="book-based">Book Based</SelectItem>
                          <SelectItem value="ai-generated">AI Generated</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Study Area</label>
                      <Select defaultValue="all-areas">
                        <SelectTrigger className="bg-white border-gray-200">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-200 shadow-lg">
                          <SelectItem value="all-areas">All Areas</SelectItem>
                          <SelectItem value="cyber-risk">Cyber Risk</SelectItem>
                          <SelectItem value="risk-management">Risk Management</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Question Type</label>
                      <Select defaultValue="all-types">
                        <SelectTrigger className="bg-white border-gray-200">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-200 shadow-lg">
                          <SelectItem value="all-types">All Types</SelectItem>
                          <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                          <SelectItem value="true-false">True/False</SelectItem>
                          <SelectItem value="short-answer">Short Answer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Difficulty</label>
                      <Select defaultValue="all-levels">
                        <SelectTrigger className="bg-white border-gray-200">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-200 shadow-lg">
                          <SelectItem value="all-levels">All Levels</SelectItem>
                          <SelectItem value="easy">Easy</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="hard">Hard</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Search Questions</label>
                    <div className="relative">
                      <Sparkles className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input 
                        placeholder="Search questions, topics, or content..." 
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Questions Table */}
            <Card className="border border-gray-200">
              <div className="p-0">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">3 Questions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 border-gray-200">
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete Selected
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-200">
                      <FileText className="h-4 w-4 mr-1" />
                      Export to Word
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-200">
                      <FileSpreadsheet className="h-4 w-4 mr-1" />
                      Export to Excel
                    </Button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <th className="text-left p-4 text-sm font-medium text-gray-700 w-12">
                          <input type="checkbox" className="rounded border-gray-300" />
                        </th>
                        <th className="text-left p-4 text-sm font-medium text-gray-700 w-16">#</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-700 w-48">Question ID</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-700">Question</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-700">Type</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-700">Topic</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-700">Difficulty</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-700">Created</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-700 w-24">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-4">
                          <input type="checkbox" className="rounded border-gray-300" />
                        </td>
                        <td className="p-4 text-sm font-medium text-gray-900">1</td>
                        <td className="p-4 text-xs font-mono text-gray-600">C20_V2024_S11_L00_MC_L2_EN_ID2426</td>
                        <td className="p-4 text-sm text-gray-900 max-w-md">
                          <p className="truncate">What characteristic of pure risk makes it more acceptable for insurer...</p>
                        </td>
                        <td className="p-4 text-sm text-gray-700">Multiple Choice</td>
                        <td className="p-4 text-sm" style={{ color: "#7e2a0c" }}>Risk Management</td>
                        <td className="p-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Medium
                          </span>
                        </td>
                        <td className="p-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            2 hours ago
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Edit3 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-600 hover:text-red-700">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-4">
                          <input type="checkbox" className="rounded border-gray-300" />
                        </td>
                        <td className="p-4 text-sm font-medium text-gray-900">2</td>
                        <td className="p-4 text-xs font-mono text-gray-600">C20_V2024_S11_L01_TF_L1_EN_ID2427</td>
                        <td className="p-4 text-sm text-gray-900 max-w-md">
                          <p className="truncate">Pure risk always results in a loss or no loss situation.</p>
                        </td>
                        <td className="p-4 text-sm text-gray-700">True/False</td>
                        <td className="p-4 text-sm" style={{ color: "#7e2a0c" }}>Risk Fundamentals</td>
                        <td className="p-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Easy
                          </span>
                        </td>
                        <td className="p-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            1 day ago
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Edit3 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-600 hover:text-red-700">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-4">
                          <input type="checkbox" className="rounded border-gray-300" />
                        </td>
                        <td className="p-4 text-sm font-medium text-gray-900">3</td>
                        <td className="p-4 text-xs font-mono text-gray-600">C20_V2024_S11_L02_SA_L3_EN_ID2428</td>
                        <td className="p-4 text-sm text-gray-900 max-w-md">
                          <p className="truncate">Explain the relationship between risk assessment and cybersecurity f...</p>
                        </td>
                        <td className="p-4 text-sm text-gray-700">Short Answer</td>
                        <td className="p-4 text-sm" style={{ color: "#7e2a0c" }}>Cybersecurity</td>
                        <td className="p-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            Hard
                          </span>
                        </td>
                        <td className="p-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            3 days ago
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Edit3 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-600 hover:text-red-700">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="pb-6 border-b">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Edit3 className="w-5 h-5 text-white" />
              </div>
              <div>
                <DialogTitle className="text-xl font-semibold text-gray-900">
                  {questionType === "written-response" ? "Edit Written Response" : "Edit Multiple Choice"}
                </DialogTitle>
                <p className="text-sm text-gray-500 mt-1">
                  {questionType === "written-response"
                    ? "Modify the written response question, sample answer, key points, and metadata."
                    : "Modify the question stem, options, feedback, and metadata."
                  }
                </p>
              </div>
            </div>
          </DialogHeader>
          
          <div className="space-y-8 py-6">
            {/* Question Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                  <FileQuestion className="w-4 h-4 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Question Details</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Hash className="w-4 h-4" />
                    Max Marks
                  </Label>
                  <Select defaultValue="5">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <FileQuestion className="w-4 h-4" />
                    Type
                  </Label>
                  <Select defaultValue={questionType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                      <SelectItem value="written-response">Written Response</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Database className="w-4 h-4" />
                    Source
                  </Label>
                  <Select defaultValue="book-based">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="book-based">Book Based</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-3 pt-6 border-t">
            <Button 
              variant="outline" 
              onClick={() => setIsEditDialogOpen(false)}
              className="flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Cancel
            </Button>
            <Button 
              onClick={() => setIsEditDialogOpen(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              Save Changes
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Preview Dialog */}
      <Dialog open={isPreviewDialogOpen} onOpenChange={setIsPreviewDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="pb-6 border-b">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div>
                <DialogTitle className="text-xl font-semibold text-gray-900">
                  {questionType === "written-response" ? "Preview Written Response" : "Preview Multiple Choice"}
                </DialogTitle>
                <p className="text-sm text-gray-500 mt-1">
                  {questionType === "written-response"
                    ? "Review the complete written response question with sample answer, key points, and metadata details."
                    : "Review the complete question with all options, feedback, and metadata details."
                  }
                </p>
              </div>
            </div>
          </DialogHeader>
          
          <div className="space-y-8 py-6">
            {selectedQuestion && (
              <>
                {/* Question Stem */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Question:</h3>
                  </div>
                  
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                    <p className="text-gray-900 leading-relaxed">
                      {selectedQuestion.text}
                    </p>
                  </div>
                </div>

                {/* Question Options or Sample Answer */}
                {selectedQuestion.type === "Multiple Choice" && selectedQuestion.options ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                        <AlignLeft className="w-4 h-4 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Options:</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {selectedQuestion.options.map((option) => (
                        <div 
                          key={option.letter}
                          className={`flex items-center gap-3 p-3 rounded-lg ${
                            option.correct 
                              ? "bg-green-50 border border-green-200" 
                              : "border border-gray-200"
                          }`}
                        >
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
                            option.correct 
                              ? "bg-green-600 text-white" 
                              : "bg-gray-100 text-gray-700"
                          }`}>
                            {option.letter}
                          </span>
                          <span className={option.correct ? "text-gray-900 font-medium" : "text-gray-700"}>
                            {option.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Sample Answer:</h3>
                    </div>
                    
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 leading-relaxed">
                        {selectedQuestion.sample}
                      </p>
                    </div>
                  </div>
                )}

                {/* Question Metadata */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                      <Settings2 className="w-4 h-4 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Question Details:</h3>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Type</p>
                      <p className="text-sm font-medium text-gray-900">{selectedQuestion.type}</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Difficulty</p>
                      <p className="text-sm font-medium text-gray-900">{selectedQuestion.difficulty}</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Max Marks</p>
                      <p className="text-sm font-medium text-gray-900">{selectedQuestion.maxMarks}</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          
          <div className="flex justify-end gap-3 pt-6 border-t">
            <Button 
              variant="outline" 
              onClick={() => setIsPreviewDialogOpen(false)}
              className="flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Close Preview
            </Button>
            <Button 
              onClick={() => {
                setIsPreviewDialogOpen(false)
                setIsEditDialogOpen(true)
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
            >
              <Edit3 className="w-4 h-4" />
              Edit Question
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default QuestionResults