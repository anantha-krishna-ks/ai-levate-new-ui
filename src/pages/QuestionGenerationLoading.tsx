import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Brain, Check, Zap, Target, Shield } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const QuestionGenerationLoading = () => {
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: "Analyzing Source Material",
      subtitle: "Processing document content and structure",
      status: "complete"
    },
    {
      title: "Understanding Context",
      subtitle: "Extracting key concepts and learning objectives",
      status: "complete"
    },
    {
      title: "Generating Questions",
      subtitle: "Creating contextually relevant questions",
      status: "complete"
    },
    {
      title: "Optimizing Quality",
      subtitle: "Ensuring question clarity and accuracy",
      status: "processing"
    },
    {
      title: "Finalizing Results",
      subtitle: "Preparing your assessment questions",
      status: "pending"
    }
  ]

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      title: "Neural Analysis",
      subtitle: "Advanced NLP processing",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      title: "AI Processing",
      subtitle: "Real-time generation",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Quality Assurance",
      subtitle: "Accuracy validation",
      bgColor: "bg-green-50"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2
        
        // Update current step based on progress
        if (newProgress >= 20 && currentStep < 1) setCurrentStep(1)
        if (newProgress >= 40 && currentStep < 2) setCurrentStep(2)
        if (newProgress >= 60 && currentStep < 3) setCurrentStep(3)
        if (newProgress >= 80 && currentStep < 4) setCurrentStep(4)
        
        // Complete and navigate when done
        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            navigate("/question-results")
          }, 1000)
          return 100
        }
        
        return newProgress
      })
    }, 100)

    return () => clearInterval(interval)
  }, [currentStep, navigate])

  const getStepStatus = (index: number) => {
    if (index < currentStep) return "complete"
    if (index === currentStep) return "processing"
    return "pending"
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AL</span>
          </div>
          <span className="font-semibold text-gray-900">AI-Levate</span>
          <span className="text-sm text-gray-500 ml-2">Processing your request...</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full space-y-8">
          {/* AI Brain Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg">
                <Brain className="w-16 h-16 text-white animate-pulse" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white animate-bounce"></div>
            </div>
          </div>

          {/* Title and Description */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">AI is generating your questions</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our advanced AI is analyzing your content and creating high-quality, contextually
              relevant assessment questions.
            </p>
          </div>

          {/* Progress Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Processing Progress</span>
                <span className="text-sm font-medium text-blue-600">{progress}%</span>
              </div>
              
              <Progress value={progress} className="h-3" />

              {/* Processing Steps */}
              <div className="space-y-4 mt-8">
                {steps.map((step, index) => {
                  const status = getStepStatus(index)
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                        status === "complete" 
                          ? "bg-green-50 border border-green-200" 
                          : status === "processing"
                          ? "bg-blue-50 border border-blue-200"
                          : "bg-gray-50 border border-gray-200"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        status === "complete" 
                          ? "bg-green-500" 
                          : status === "processing"
                          ? "bg-blue-500"
                          : "bg-gray-400"
                      }`}>
                        {status === "complete" ? (
                          <Check className="w-6 h-6 text-white" />
                        ) : status === "processing" ? (
                          <Target className="w-6 h-6 text-white animate-spin" />
                        ) : (
                          <Check className="w-6 h-6 text-white opacity-50" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`font-medium ${
                          status === "complete" ? "text-green-900" :
                          status === "processing" ? "text-blue-900" : "text-gray-500"
                        }`}>
                          {step.title}
                        </h3>
                        <p className={`text-sm ${
                          status === "complete" ? "text-green-600" :
                          status === "processing" ? "text-blue-600" : "text-gray-400"
                        }`}>
                          {step.subtitle}
                        </p>
                      </div>
                      
                      {status === "complete" && (
                        <div className="text-sm font-medium text-green-600 flex items-center gap-1">
                          <Check className="w-4 h-4" />
                          Complete
                        </div>
                      )}
                      {status === "processing" && (
                        <div className="text-sm font-medium text-blue-600 flex items-center gap-1">
                          <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                          Processing...
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className={`${feature.bgColor} rounded-2xl p-6 text-center`}>
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Footer Message */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Please wait while our AI processes your request. This may take a few moments...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionGenerationLoading