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
  Target
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
      value: "2",
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
              <span className="font-semibold text-gray-900">AI-Levate</span>
              <span className="text-sm text-gray-500">Cyber Risk</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">AI Online</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-600 rounded flex items-center justify-center">
                <span className="text-white text-xs">✦</span>
              </div>
              <span className="text-sm text-purple-600 font-medium">Cyber Risk</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs">⚡</span>
              </div>
              <span className="text-sm text-blue-600 font-medium">7,762 Tokens</span>
            </div>
            <Link to="/item-generation">
              <Button variant="ghost" size="sm" className="text-gray-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Knowledge Base
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="text-gray-600">
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 max-w-7xl mx-auto">
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
            <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">?</span>
            <h3 className="text-lg font-semibold text-gray-900">Question Generation Parameters</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
            <div>
              <label className="text-sm text-gray-600 block mb-2">Study</label>
              <Select defaultValue="defining-risk">
                <SelectTrigger className="text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="defining-risk">1. Defining Risk and C...</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm text-gray-600 block mb-2">Learning Outcomes</label>
              <Select defaultValue="explain-pure">
                <SelectTrigger className="text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="explain-pure">1. Explain why pure ri...</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm text-gray-600 block mb-2">Taxonomy</label>
              <Select defaultValue="understand">
                <SelectTrigger className="text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="understand">Understand</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm text-gray-600 block mb-2">Number of Questions</label>
              <Select defaultValue="5">
                <SelectTrigger className="text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm text-gray-600 block mb-2">Marks</label>
              <Select defaultValue="1">
                <SelectTrigger className="text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm text-gray-600 block mb-2">Question Type</label>
              <Select defaultValue="multiple-choice">
                <SelectTrigger className="text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="multiple-choice">1. Multiple Choice</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <RotateCcw className="w-4 h-4 mr-2" />
              Regenerate
            </Button>
            <Button variant="outline" className="text-gray-600">
              Back to Setup
            </Button>
          </div>
        </Card>

        {/* Generated Questions */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Generated Questions</h3>
              <p className="text-sm text-gray-500">Review and manage your generated questions</p>
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

          {/* Question 1 */}
          <Card className="mb-6 border border-gray-200">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="bg-black text-white px-3 py-1 rounded text-sm font-medium">Question 1</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">1 Mark</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded text-sm">Multiple Choice</span>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-gray-600"
                    onClick={() => setIsEditDialogOpen(true)}
                  >
                    <Edit3 className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" className="text-purple-600">
                    <Eye className="w-4 h-4 mr-1" />
                    Preview
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600">
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
              
              <h4 className="text-lg font-medium text-gray-900 mb-4">
                1. What distinguishes pure risk from speculative risk in terms of insurability?
              </h4>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">A</span>
                  <span className="text-gray-900">Pure risk involves only the possibility of loss or no loss, making it insurable.</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                  <span className="w-6 h-6 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-sm font-medium">B</span>
                  <span className="text-gray-700">Speculative risk involves the possibility of gain, making it insurable.</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                  <span className="w-6 h-6 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-sm font-medium">C</span>
                  <span className="text-gray-700">Pure risk involves both gain and loss, making it uninsurable.</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                  <span className="w-6 h-6 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-sm font-medium">D</span>
                  <span className="text-gray-700">Speculative risk involves only loss, making it insurable.</span>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900">
                  <strong>Correct Answer:</strong> A. Pure risk involves only the possibility of loss or no loss, making it insurable.
                </p>
              </div>
            </div>
          </Card>

          {/* Question 2 */}
          <Card className="mb-6 border border-gray-200">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="bg-black text-white px-3 py-1 rounded text-sm font-medium">Question 2</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">1 Mark</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded text-sm">Multiple Choice</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="text-gray-600">
                    <Edit3 className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" className="text-purple-600">
                    <Eye className="w-4 h-4 mr-1" />
                    Preview
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600">
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
              
              <h4 className="text-lg font-medium text-gray-900 mb-4">
                2. Why is speculative risk generally excluded from insurance coverage?
              </h4>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">A</span>
                  <span className="text-gray-900">Speculative risk includes the possibility of financial gain.</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                  <span className="w-6 h-6 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-sm font-medium">B</span>
                  <span className="text-gray-700">Speculative risk involves only financial loss.</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                  <span className="w-6 h-6 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-sm font-medium">C</span>
                  <span className="text-gray-700">Speculative risk is predictable and measurable.</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                  <span className="w-6 h-6 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-sm font-medium">D</span>
                  <span className="text-gray-700">Speculative risk has no impact on financial outcomes.</span>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900">
                  <strong>Correct Answer:</strong> A. Speculative risk includes the possibility of financial gain.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Need More Questions */}
        <Card className="p-8 text-center border border-gray-200 mb-8">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-6 h-6 text-gray-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Need more questions?</h3>
          <p className="text-gray-600 mb-6">Generate additional questions with the same or different parameters</p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Generate More Questions
          </Button>
        </Card>

        {/* Footer */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-xs">⚡</span>
            </div>
            <span>Powered by advanced AI technology</span>
          </div>
        </div>
      </div>

      {/* Edit Question Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl font-semibold">
              <Edit3 className="w-5 h-5 text-blue-600" />
              Edit Multiple Choice
            </DialogTitle>
            <p className="text-sm text-gray-600 mt-1">
              Modify the question content, options, feedback, and metadata below.
            </p>
          </DialogHeader>

          <div className="space-y-6 mt-6">
            {/* Question Stem */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-blue-600" />
                <Label className="text-base font-semibold">Question Stem</Label>
              </div>
              <Textarea 
                defaultValue="What distinguishes pure risk from speculative risk in terms of insurability?"
                className="min-h-[100px] resize-none"
              />
            </div>

            {/* Options */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <Label className="text-base font-semibold">Options</Label>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm font-medium text-gray-700 mt-1">
                    A
                  </div>
                  <Textarea 
                    defaultValue="Pure risk involves only the possibility of loss or no loss, making it insurable."
                    className="flex-1 min-h-[60px] resize-none"
                  />
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm font-medium text-gray-700 mt-1">
                    B
                  </div>
                  <Textarea 
                    defaultValue="Speculative risk involves the possibility of gain, making it insurable."
                    className="flex-1 min-h-[60px] resize-none"
                  />
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm font-medium text-gray-700 mt-1">
                    C
                  </div>
                  <Textarea 
                    defaultValue="Pure risk involves both gain and loss, making it uninsurable."
                    className="flex-1 min-h-[60px] resize-none"
                  />
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm font-medium text-gray-700 mt-1">
                    D
                  </div>
                  <Textarea 
                    defaultValue="Speculative risk involves only loss, making it insurable."
                    className="flex-1 min-h-[60px] resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Correct Answer */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-purple-600" />
                <Label className="text-base font-semibold">Correct Answer</Label>
              </div>
              
              <Select defaultValue="A">
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A">A</SelectItem>
                  <SelectItem value="B">B</SelectItem>
                  <SelectItem value="C">C</SelectItem>
                  <SelectItem value="D">D</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="mt-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>Selected Answer:</strong> A. Pure risk involves only the possibility of loss or no loss, making it insurable.
                </p>
              </div>
            </div>

            {/* Feedback */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-xs font-bold">!</span>
                </span>
                <Label className="text-base font-semibold">Feedback</Label>
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">Option A Feedback</Label>
                  <Textarea 
                    defaultValue="Correct. Pure risk is insurable because it does not include the possibility of gain."
                    className="min-h-[60px] resize-none"
                  />
                </div>
                
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">Option B Feedback</Label>
                  <Textarea 
                    defaultValue="Incorrect. Speculative risk includes the possibility of gain, which makes it uninsurable."
                    className="min-h-[60px] resize-none"
                  />
                </div>
                
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">Option C Feedback</Label>
                  <Textarea 
                    defaultValue="Incorrect. Pure risk does not involve gain, only the possibility of loss or no loss."
                    className="min-h-[60px] resize-none"
                  />
                </div>
                
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">Option D Feedback</Label>
                  <Textarea 
                    defaultValue="Incorrect. Speculative risk involves both loss and gain, making it uninsurable."
                    className="min-h-[60px] resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Question Details */}
            <div>
              <Label className="text-base font-semibold mb-4 block">Question Details</Label>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <Label className="text-sm text-gray-600 mb-1 block">Marks</Label>
                  <div className="text-sm font-medium">1</div>
                </div>
                
                <div>
                  <Label className="text-sm text-gray-600 mb-1 block">Question Type</Label>
                  <div className="text-sm font-medium">Multiple Choice</div>
                </div>
                
                <div>
                  <Label className="text-sm text-gray-600 mb-1 block">Knowledge Base</Label>
                  <div className="text-sm font-medium">Cyber Risk</div>
                </div>
                
                <div>
                  <Label className="text-sm text-gray-600 mb-1 block">Study</Label>
                  <div className="text-sm font-medium">Defining Risk and Cyber Risk</div>
                </div>
                
                <div>
                  <Label className="text-sm text-gray-600 mb-1 block">Taxonomy</Label>
                  <div className="text-sm font-medium">Understand</div>
                </div>
                
                <div>
                  <Label className="text-sm text-gray-600 mb-1 block">Learning Objective</Label>
                  <div className="text-sm font-medium">Explain why pure risk is insurable but speculative risk is not</div>
                </div>
                
                <div className="md:col-span-3">
                  <Label className="text-sm text-gray-600 mb-1 block">Reference</Label>
                  <div className="text-sm font-medium">Study 1, Learning Objective 1, Page 1.</div>
                </div>
                
                <div className="md:col-span-3">
                  <Label className="text-sm text-gray-600 mb-1 block">Author</Label>
                  <div className="text-sm font-medium">Shivaraj M</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dialog Footer */}
          <div className="flex justify-end gap-3 mt-8 pt-6 border-t">
            <Button 
              variant="outline" 
              onClick={() => setIsEditDialogOpen(false)}
              className="text-gray-600"
            >
              Cancel
            </Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Save Changes
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default QuestionResults