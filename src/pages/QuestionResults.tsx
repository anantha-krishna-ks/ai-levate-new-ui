import { Link } from "react-router-dom"
import { ArrowLeft, CheckCircle, Download, Save, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const QuestionResults = () => {
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
              <span className="text-sm text-gray-500">Question Generation Complete</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm text-green-600">Generation Complete</span>
            </div>
            <Link to="/question-generator/cyber-risk">
              <Button variant="ghost" size="sm" className="text-gray-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Generator
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Generated Questions</h1>
          <p className="text-gray-600">Your AI-generated assessment questions are ready!</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Download className="w-4 h-4 mr-2" />
            Download Questions
          </Button>
          <Button variant="outline">
            <Save className="w-4 h-4 mr-2" />
            Save to Repository
          </Button>
          <Button variant="outline">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>

        {/* Generated Questions */}
        <Card className="p-6">
          <CardContent className="p-0">
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Question 1 - Multiple Choice (1 point)</h3>
                <p className="text-gray-700 mb-4">
                  What is the primary difference between pure risk and speculative risk in the context of cybersecurity?
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium">A</span>
                    <span className="text-gray-700">Pure risk only involves financial losses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-medium">B</span>
                    <span className="text-gray-700 font-medium">Pure risk can only result in loss or no loss, while speculative risk can result in gain or loss</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium">C</span>
                    <span className="text-gray-700">Speculative risk is more common in cybersecurity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium">D</span>
                    <span className="text-gray-700">There is no difference between the two types of risk</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700"><strong>Correct Answer:</strong> B - Pure risk can only result in loss or no loss, while speculative risk can result in gain or loss</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default QuestionResults