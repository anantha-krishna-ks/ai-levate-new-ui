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
import { Input } from "@/components/ui/input"

const QuestionResults = () => {
  const [activeTab, setActiveTab] = useState("generate")
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isPreviewDialogOpen, setIsPreviewDialogOpen] = useState(false)
  const [questionType, setQuestionType] = useState("Multiple Choice")
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
  const filteredQuestions = questions.filter(q => q.type === questionType)

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
                      {/* Question Labels */}
                      <div className="flex items-center gap-2">
                        <Badge className="bg-gray-100 text-gray-900 hover:bg-gray-100 border-gray-200 text-sm font-medium px-3 py-1">
                          Question {question.id}
                        </Badge>
                        <Badge className="bg-black text-white hover:bg-black border-black text-sm font-medium px-3 py-1">
                          {question.maxMarks} Mark{question.maxMarks > 1 ? 's' : ''}
                        </Badge>
                        <Badge className={`text-sm font-medium px-3 py-1 ${
                          question.type === 'Multiple Choice' 
                            ? 'bg-purple-100 text-purple-700 hover:bg-purple-100 border-purple-200' 
                            : 'bg-blue-100 text-blue-700 hover:bg-blue-100 border-blue-200'
                        }`}>
                          {question.type}
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
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white to-gray-50">
          <DialogHeader className="border-b border-gray-200 pb-4">
            <DialogTitle className="flex items-center gap-3 text-xl">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <Edit3 className="w-4 h-4 text-white" />
              </div>
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Edit Multiple Choice
              </span>
            </DialogTitle>
            <p className="text-gray-600 text-sm mt-2">Modify the question content, options, feedback, and metadata below.</p>
          </DialogHeader>
          
          {selectedQuestion && selectedQuestion.type === "Multiple Choice" && (
            <div className="space-y-6 mt-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <FileQuestion className="w-5 h-5 text-gray-600" />
                  <Label htmlFor="question-stem" className="text-sm font-semibold text-gray-900">Question Stem</Label>
                </div>
                <Textarea
                  id="question-stem"
                  defaultValue="What distinguishes pure risk from speculative risk in terms of insurability?"
                  className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  rows={3}
                />
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <AlignLeft className="w-5 h-5 text-gray-600" />
                  <Label className="text-sm font-semibold text-gray-900">Options</Label>
                </div>
                <div className="space-y-4">
                  {['A', 'B', 'C', 'D'].map((letter, index) => (
                    <div key={letter} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 bg-gray-700 text-white rounded-full flex items-center justify-center text-sm font-medium">
                          {letter}
                        </span>
                        <Label className="text-sm font-medium text-gray-700">Option {letter}</Label>
                      </div>
                      <Textarea
                        defaultValue={
                          index === 0 ? "Pure risk involves only the possibility of loss or no loss, making it insurable." :
                          index === 1 ? "Speculative risk involves the possibility of gain, making it insurable." :
                          index === 2 ? "Pure risk involves both gain and loss, making it uninsurable." :
                          "Speculative risk involves only loss, making it insurable."
                        }
                        className="ml-8 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        rows={2}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <Label className="text-sm font-semibold text-green-900">Correct Answer</Label>
                </div>
                <Select defaultValue="A">
                  <SelectTrigger className="w-full border-green-300 focus:border-green-500 focus:ring-green-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A">A</SelectItem>
                    <SelectItem value="B">B</SelectItem>
                    <SelectItem value="C">C</SelectItem>
                    <SelectItem value="D">D</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-green-800 text-sm mt-3 p-3 bg-white/60 rounded-lg">
                  <strong>Selected Answer:</strong> A. Pure risk involves only the possibility of loss or no loss, making it insurable.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-5 h-5 text-gray-600" />
                  <Label className="text-sm font-semibold text-gray-900">Feedback</Label>
                </div>
                <div className="space-y-4">
                  {[
                    "Correct. Pure risk is insurable because it does not include the possibility of gain.",
                    "Incorrect. Speculative risk includes the possibility of gain, which makes it uninsurable.",
                    "Incorrect. Pure risk does not involve gain, only the possibility of loss or no loss.",
                    "Incorrect. Speculative risk involves both loss and gain, making it uninsurable."
                  ].map((feedback, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <Textarea
                        defaultValue={feedback}
                        className="text-sm border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        rows={2}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                    <Settings2 className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Question Details</h4>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <Label className="text-sm font-medium text-gray-600 block mb-2">Marks</Label>
                      <Input defaultValue="1" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <Label className="text-sm font-medium text-gray-600 block mb-2">Type</Label>
                      <Input defaultValue="Multiple Choice" className="border-gray-300 bg-gray-50" disabled />
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <Label className="text-sm font-medium text-gray-600 block mb-2">Book Name</Label>
                      <Input defaultValue="Cyber Risk" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <Label className="text-sm font-medium text-gray-600 block mb-2">Study</Label>
                      <Input defaultValue="Defining Risk and Cyber Risk" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <Label className="text-sm font-medium text-gray-600 block mb-2">Taxonomy</Label>
                      <Input defaultValue="Understand" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <Label className="text-sm font-medium text-gray-600 block mb-2">Learning Objective</Label>
                      <Input defaultValue="Explain why pure risk is insurable but speculative risk is not" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <Label className="text-sm font-medium text-gray-600 block mb-2">Reference Info</Label>
                      <Input defaultValue="Study 1, Learning Objective 1, Page 1." className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <Label className="text-sm font-medium text-gray-600 block mb-2">User Name</Label>
                      <Input defaultValue="Shivaraj M" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-200">
                <Button 
                  variant="outline" 
                  onClick={() => setIsEditDialogOpen(false)}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-sm">
                  <Check className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Preview Dialog */}
      <Dialog open={isPreviewDialogOpen} onOpenChange={setIsPreviewDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white to-gray-50">
          <DialogHeader className="border-b border-gray-200 pb-4">
            <DialogTitle className="flex items-center gap-3 text-xl">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Eye className="w-4 h-4 text-white" />
              </div>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Preview Multiple Choice
              </span>
            </DialogTitle>
          </DialogHeader>
          
          {selectedQuestion && selectedQuestion.type === "Multiple Choice" && (
            <div className="space-y-6 mt-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                    <AlertCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Question Overview</h3>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      Review the complete question with all options, feedback, and metadata details.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <FileQuestion className="w-5 h-5 text-gray-600" />
                  <h4 className="font-semibold text-gray-900">Question Stem:</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  What distinguishes pure risk from speculative risk in terms of insurability?
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <AlignLeft className="w-5 h-5 text-gray-600" />
                  <h4 className="font-semibold text-gray-900">Answer Options:</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="w-6 h-6 bg-gray-700 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">A</span>
                    <span className="text-gray-700 leading-relaxed">Pure risk involves only the possibility of loss or no loss, making it insurable.</span>
                  </div>
                  <div className="p-1">
                    <span className="font-semibold text-gray-700">B</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="w-6 h-6 bg-gray-700 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">B</span>
                    <span className="text-gray-700 leading-relaxed">Speculative risk involves the possibility of gain, making it insurable.</span>
                  </div>
                  <div className="p-1">
                    <span className="font-semibold text-gray-700">C</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="w-6 h-6 bg-gray-700 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">C</span>
                    <span className="text-gray-700 leading-relaxed">Pure risk involves both gain and loss, making it uninsurable.</span>
                  </div>
                  <div className="p-1">
                    <span className="font-semibold text-gray-700">D</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="w-6 h-6 bg-gray-700 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">D</span>
                    <span className="text-gray-700 leading-relaxed">Speculative risk involves only loss, making it insurable.</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-green-900">Correct Answer:</h4>
                </div>
                <p className="text-green-800 text-lg font-medium">A. Pure risk involves only the possibility of loss or no loss, making it insurable.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-5 h-5 text-gray-600" />
                  <h4 className="font-semibold text-gray-900">Detailed Feedback:</h4>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <span className="font-semibold text-green-900">Option A:</span>
                        <span className="text-green-800 ml-2">Correct. Pure risk is insurable because it does not include the possibility of gain.</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-red-50 to-rose-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <span className="font-semibold text-red-900">Option B:</span>
                        <span className="text-red-800 ml-2">Incorrect. Speculative risk includes the possibility of gain, which makes it uninsurable.</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-red-50 to-rose-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <span className="font-semibold text-red-900">Option C:</span>
                        <span className="text-red-800 ml-2">Incorrect. Pure risk does not involve gain, only the possibility of loss or no loss.</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-red-50 to-rose-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <span className="font-semibold text-red-900">Option D:</span>
                        <span className="text-red-800 ml-2">Incorrect. Speculative risk involves both loss and gain, making it uninsurable.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                    <Settings2 className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Question Details:</h4>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <span className="text-sm font-medium text-gray-600 block mb-1">Type</span>
                      <p className="text-gray-900 font-medium">Multiple Choice</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <span className="text-sm font-medium text-gray-600 block mb-1">Marks</span>
                      <p className="text-gray-900 font-medium">1</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <span className="text-sm font-medium text-gray-600 block mb-1">Source</span>
                      <p className="text-gray-900 font-medium">Book Based</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <span className="text-sm font-medium text-gray-600 block mb-1">Book Name</span>
                      <p className="text-gray-900 font-medium">Cyber Risk</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <span className="text-sm font-medium text-gray-600 block mb-1">Taxonomy</span>
                      <p className="text-gray-900 font-medium">Understand</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <span className="text-sm font-medium text-gray-600 block mb-1">User Name</span>
                      <p className="text-gray-900 font-medium">Shivaraj M</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <span className="text-sm font-medium text-gray-600 block mb-1">Study:</span>
                      <p className="text-gray-900 font-medium">Defining Risk and Cyber Risk</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <span className="text-sm font-medium text-gray-600 block mb-1">Learning Objective:</span>
                      <p className="text-gray-900 font-medium">Explain why pure risk is insurable but speculative risk is not</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <span className="text-sm font-medium text-gray-600 block mb-1">Reference Info</span>
                      <p className="text-gray-900 font-medium">Study 1, Learning Objective 1, Page 1.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default QuestionResults