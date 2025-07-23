import { useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { 
  ArrowLeft, 
  Sparkles,
  Brain,
  Target,
  Globe,
  Hash,
  MessageSquare,
  ChevronDown,
  Zap,
  Settings2,
  FileText,
  FileSpreadsheet,
  Save
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

const QuestionGenerator = () => {
  const { bookCode } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("generate")
  const [generationMode, setGenerationMode] = useState(true) // true for LLM, false for Knowledge Base

  const handleGenerateQuestions = () => {
    navigate("/question-generation-loading")
  }

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

        {activeTab === "generate" && (
          <div className="space-y-6">
            {/* Top Row - Tokens and AI Mode */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Available Tokens */}
              <Card className="p-6 bg-white border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-700">Available Tokens</h3>
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">7,762</div>
                <div className="text-sm text-green-600 flex items-center gap-1">
                  <span>+250 today</span>
                </div>
              </Card>

              {/* AI Generation Mode */}
              <Card className="p-6 bg-white border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-700">AI Generation Mode</h3>
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Settings2 className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Knowledge Base</span>
                  <Switch 
                    checked={generationMode} 
                    onCheckedChange={setGenerationMode}
                    className="data-[state=checked]:bg-blue-600"
                  />
                  <span className="text-sm font-medium text-blue-600">LLM</span>
                </div>
              </Card>
            </div>

            {/* Main Content Row */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Left Column - Source Material */}
              <div className="lg:col-span-1 space-y-6">
                {/* Source Material */}
                <Card className="p-6 bg-white border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-700 mb-4">Source Material</h3>
                  <p className="text-xs text-gray-500 mb-4">AI enhanced content</p>
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center">
                    <img 
                      src="/lovable-uploads/a13547e7-af5f-49b0-bb15-9b344d6cd72e.png" 
                      alt="Cyber Risk Management"
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Cyber Risk Management</h4>
                    <p className="text-xs text-gray-500">Source material loaded successfully</p>
                  </div>
                </Card>
              </div>

              {/* Right Column - AI Question Generator */}
              <div className="lg:col-span-3">
                <Card className="p-6 bg-white border border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">AI Question Generator</h3>
                      <p className="text-sm text-gray-500">Configure your question generation settings</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left side form */}
                    <div className="space-y-6">
                      {/* Study Domain */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Target className="w-4 h-4 text-blue-600" />
                          <label className="text-sm font-medium text-gray-700">Study Domain</label>
                        </div>
                        <Select defaultValue="defining-risk">
                          <SelectTrigger className="w-full bg-white border-gray-200">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="defining-risk">Defining Risk and Cyber</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Taxonomy Framework */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Globe className="w-4 h-4 text-blue-600" />
                          <label className="text-sm font-medium text-gray-700">Taxonomy Framework</label>
                        </div>
                        <Select>
                          <SelectTrigger className="w-full bg-white border-gray-200">
                            <SelectValue placeholder="Select framework" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="remember">Remember</SelectItem>
                            <SelectItem value="understand">Understand</SelectItem>
                            <SelectItem value="apply">Apply</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Question Quantity */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Hash className="w-4 h-4 text-orange-600" />
                          <label className="text-sm font-medium text-gray-700">Question Quantity</label>
                        </div>
                        <Select defaultValue="1">
                          <SelectTrigger className="w-full bg-white border-gray-200">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                            <SelectItem value="10">10</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Right side form */}
                    <div className="space-y-6">
                      {/* Learning Objectives */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Brain className="w-4 h-4 text-purple-600" />
                          <label className="text-sm font-medium text-gray-700">Learning Objectives</label>
                        </div>
                        <Select defaultValue="explain-pure-risk">
                          <SelectTrigger className="w-full bg-white border-gray-200">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="explain-pure-risk">Explain why pure risk is</SelectItem>
                            <SelectItem value="define-cyber-risk">Define cyber risk fundamentals</SelectItem>
                            <SelectItem value="analyze-threats">Analyze security threats</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Question Format */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <FileText className="w-4 h-4 text-green-600" />
                          <label className="text-sm font-medium text-gray-700">Question Format</label>
                        </div>
                        <Select defaultValue="multiple-choice">
                          <SelectTrigger className="w-full bg-white border-gray-200">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="multiple-choice">1. Multiple Choice</SelectItem>
                            <SelectItem value="true-false">True/False</SelectItem>
                            <SelectItem value="essay">Essay</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Point Value */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-4 h-4 text-pink-600 text-sm font-bold">★</span>
                          <label className="text-sm font-medium text-gray-700">Point Value</label>
                        </div>
                        <Select defaultValue="1">
                          <SelectTrigger className="w-full bg-white border-gray-200">
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

                  {/* Additional Instructions - Full Width */}
                  <div className="mt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MessageSquare className="w-4 h-4 text-purple-600" />
                      <label className="text-sm font-medium text-gray-700">Additional Instructions</label>
                    </div>
                    <Textarea 
                      placeholder="Provide specific instructions for AI question generation..."
                      className="min-h-[100px] bg-white border-gray-200"
                    />
                  </div>

                  {/* Generate Button */}
                  <div className="flex justify-center mt-8">
                    <Button 
                      onClick={handleGenerateQuestions}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate Questions
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Export Options */}
        <div className="mt-8">
          <Card className="p-6 bg-white border border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-4">Export Options</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50">
                <FileText className="w-4 h-4 mr-2" />
                Export to Word
              </Button>
              <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50">
                <FileSpreadsheet className="w-4 h-4 mr-2" />
                Export to Excel
              </Button>
              <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50">
                <Save className="w-4 h-4 mr-2" />
                Save to Repository
              </Button>
            </div>
          </Card>
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
    </div>
  )
}

export default QuestionGenerator