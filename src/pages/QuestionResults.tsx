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
  MessageSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const QuestionResults = () => {
  const [activeTab, setActiveTab] = useState("generate")
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isPreviewDialogOpen, setIsPreviewDialogOpen] = useState(false)
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number | null>(null)
  const [editingQuestion, setEditingQuestion] = useState("")
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "Why are speculative risks generally excluded from insurance coverage, and how does this differ from the treatment of pure risks?",
      type: "multiple-choice",
      marks: 5,
      options: [
        { id: "A", text: "Pure risk involves only the possibility of loss or no loss, making it insurable.", correct: true },
        { id: "B", text: "Speculative risk involves the possibility of gain, making it insurable.", correct: false },
        { id: "C", text: "Pure risk involves both gain and loss, making it uninsurable.", correct: false },
        { id: "D", text: "Speculative risk involves only loss, making it insurable.", correct: false }
      ]
    },
    {
      id: 2,
      question: "What factors make pure risks suitable for insurance coverage compared to speculative risks?",
      type: "written-response",
      marks: 5,
      answer: "Pure risks are suitable for insurance because they involve only loss or no loss scenarios, making them predictable and measurable."
    }
  ])
  
  const handleEditQuestion = (index: number) => {
    setSelectedQuestionIndex(index)
    setEditingQuestion(questions[index].question)
    setIsEditDialogOpen(true)
  }
  
  const handleSaveEdit = () => {
    if (selectedQuestionIndex !== null) {
      const updatedQuestions = [...questions]
      updatedQuestions[selectedQuestionIndex].question = editingQuestion
      setQuestions(updatedQuestions)
      setIsEditDialogOpen(false)
      setSelectedQuestionIndex(null)
      setEditingQuestion("")
    }
  }
  
  const handlePreviewQuestion = (index: number) => {
    setSelectedQuestionIndex(index)
    setIsPreviewDialogOpen(true)
  }
  
  const handleDeleteQuestion = (index: number) => {
    if (confirm("Are you sure you want to delete this question?")) {
      const updatedQuestions = questions.filter((_, i) => i !== index)
      setQuestions(updatedQuestions)
    }
  }

  const stats = [
    {
      title: "Remaining Tokens",
      value: "2200",
      icon: <Zap className="w-5 h-5 text-blue-600" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Questions Generated", 
      value: questions.length.toString(),
      icon: <CheckCircle2 className="w-5 h-5 text-green-600" />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: "Generation Time",
      value: "2.3 seconds", 
      icon: <Clock className="w-5 h-5 text-purple-600" />,
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Knowledge Base",
      value: "Cyber Risk",
      icon: <BookOpen className="w-5 h-5 text-orange-600" />,
      bgColor: "bg-orange-50", 
      borderColor: "border-orange-200"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AL</span>
              </div>
              <img 
                src="/lovable-uploads/b5b0f5a8-9552-4635-8c44-d5e6f994179c.png" 
                alt="AI-Levate" 
                className="h-5 w-auto"
              />
              <span className="text-sm text-gray-500">Cyber Risk</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">AI Online</span>
            </div>
            <Link to="/item-generation">
              <Button variant="ghost" size="sm" className="text-gray-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Knowledge Base
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-600"
              onClick={() => {
                localStorage.removeItem('authToken')
                localStorage.removeItem('userSession')
                sessionStorage.clear()
                window.location.href = "/"
              }}
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 max-w-7xl mx-auto">
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

        {/* Generated Questions */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Generated Questions</h3>
              <p className="text-sm text-gray-500">Review and manage your generated questions ({questions.length} questions)</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="text-gray-600">
                <FileText className="w-4 h-4 mr-2" />
                Export to Word
              </Button>
              <Button variant="outline" className="text-gray-600">
                <FileSpreadsheet className="w-4 h-4 mr-2" />
                Export to Excel
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Database className="w-4 h-4 mr-2" />
                Save Data
              </Button>
            </div>
          </div>

          {/* Dynamic Questions List */}
          {questions.map((question, index) => (
            <Card key={question.id} className="mb-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-black text-white px-3 py-1 rounded text-sm font-medium">Question {index + 1}</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">{question.marks} Marks</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded text-sm">
                      {question.type === "multiple-choice" ? "Multiple Choice" : "Written Response"}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-gray-600 hover:bg-gray-100 transition-colors"
                      onClick={() => handleEditQuestion(index)}
                    >
                      <Edit3 className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-purple-600 hover:bg-purple-50 transition-colors"
                      onClick={() => handlePreviewQuestion(index)}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Preview
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-red-600 hover:bg-red-50 transition-colors"
                      onClick={() => handleDeleteQuestion(index)}
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
                
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  {index + 1}. {question.question}
                </h4>
                
                {question.type === "multiple-choice" ? (
                  <>
                    <div className="space-y-3 mb-4">
                      {question.options?.map((option) => (
                        <div 
                          key={option.id}
                          className={`flex items-center gap-3 p-3 rounded-lg ${
                            option.correct 
                              ? 'bg-green-50 border border-green-200' 
                              : 'border border-gray-200'
                          }`}
                        >
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
                            option.correct 
                              ? 'bg-green-600 text-white' 
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {option.id}
                          </span>
                          <span className={option.correct ? 'text-gray-900' : 'text-gray-700'}>
                            {option.text}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm text-blue-900">
                        <strong>Correct Answer:</strong> {question.options?.find(opt => opt.correct)?.id}. {question.options?.find(opt => opt.correct)?.text}
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
                      {question.answer}
                    </p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Question {selectedQuestionIndex !== null ? selectedQuestionIndex + 1 : ''}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="question-text">Question Text</Label>
              <Textarea
                id="question-text"
                value={editingQuestion}
                onChange={(e) => setEditingQuestion(e.target.value)}
                rows={4}
                className="mt-1"
              />
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveEdit} className="bg-[#2563eb] hover:bg-[#2563eb]/90">
                Save Changes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Preview Dialog */}
      <Dialog open={isPreviewDialogOpen} onOpenChange={setIsPreviewDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Preview Question {selectedQuestionIndex !== null ? selectedQuestionIndex + 1 : ''}</DialogTitle>
          </DialogHeader>
          {selectedQuestionIndex !== null && (
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">
                  {selectedQuestionIndex + 1}. {questions[selectedQuestionIndex]?.question}
                </h3>
                
                {questions[selectedQuestionIndex]?.type === "multiple-choice" ? (
                  <div className="space-y-3">
                    {questions[selectedQuestionIndex]?.options?.map((option) => (
                      <div 
                        key={option.id}
                        className={`flex items-center gap-3 p-3 rounded-lg ${
                          option.correct 
                            ? 'bg-green-100 border border-green-300' 
                            : 'bg-white border border-gray-200'
                        }`}
                      >
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
                          option.correct 
                            ? 'bg-green-600 text-white' 
                            : 'bg-gray-200 text-gray-700'
                        }`}>
                          {option.id}
                        </span>
                        <span>{option.text}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white p-4 rounded border">
                    <p className="text-gray-700">{questions[selectedQuestionIndex]?.answer}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default QuestionResults