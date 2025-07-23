import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Brain, Check, Zap, Target, Shield, Sparkles, Cpu, Database, Lightbulb } from "lucide-react"
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
      icon: <Brain className="w-6 h-6" />,
      title: "Neural Analysis",
      subtitle: "Advanced NLP processing",
      bgColor: "from-blue-500 to-blue-600"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI Processing",
      subtitle: "Real-time generation",
      bgColor: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance",
      subtitle: "Accuracy validation",
      bgColor: "from-green-500 to-green-600"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Processing",
      subtitle: "Content optimization",
      bgColor: "from-orange-500 to-orange-600"
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-purple-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-indigo-500/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-3/4 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }} />
      </div>

      {/* Enhanced Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-white/20 px-6 py-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm">AL</span>
          </div>
          <img 
            src="/lovable-uploads/b5b0f5a8-9552-4635-8c44-d5e6f994179c.png" 
            alt="AI-Levate" 
            className="h-6 w-auto"
          />
          <div className="flex items-center gap-2 ml-4">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-600 font-medium">AI Online</span>
            </div>
            <span className="text-sm text-gray-400">•</span>
            <span className="text-sm text-blue-600 font-medium">Processing your request...</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="max-w-5xl w-full space-y-8">
          {/* Enhanced AI Brain Section */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Outer glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-2xl animate-pulse" />
              
              {/* Main brain container */}
              <div className="relative w-40 h-40 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <Brain className="w-20 h-20 text-white animate-pulse" />
                
                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                  <Sparkles className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 text-yellow-400" />
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
                  <Lightbulb className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 text-orange-400" />
                </div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center animate-bounce shadow-lg">
                <Check className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Enhanced Title and Description */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
              AI is Generating Your Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Our advanced AI is analyzing your content and creating high-quality, contextually relevant assessment questions with precision and intelligence.
            </p>
          </div>

          {/* Enhanced Progress Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 transform hover:scale-[1.02] transition-all duration-500">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-800">Processing Progress</span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{progress}%</span>
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                </div>
              </div>
              
              <Progress value={progress} className="h-4 bg-gray-200" />

              {/* Enhanced Processing Steps */}
              <div className="space-y-4 mt-8">
                {steps.map((step, index) => {
                  const status = getStepStatus(index)
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-6 p-6 rounded-2xl transition-all duration-500 transform hover:scale-[1.02] ${
                        status === "complete" 
                          ? "bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 shadow-lg" 
                          : status === "processing"
                          ? "bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-lg"
                          : "bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-200"
                      }`}
                    >
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                        status === "complete" 
                          ? "bg-gradient-to-br from-green-500 to-emerald-600 scale-110" 
                          : status === "processing"
                          ? "bg-gradient-to-br from-blue-500 to-indigo-600 scale-110"
                          : "bg-gradient-to-br from-gray-400 to-slate-500"
                      }`}>
                        {status === "complete" ? (
                          <Check className="w-8 h-8 text-white" />
                        ) : status === "processing" ? (
                          <Target className="w-8 h-8 text-white animate-spin" />
                        ) : (
                          <Check className="w-8 h-8 text-white opacity-50" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold mb-1 ${
                          status === "complete" ? "text-green-900" :
                          status === "processing" ? "text-blue-900" : "text-gray-500"
                        }`}>
                          {step.title}
                        </h3>
                        <p className={`text-sm ${
                          status === "complete" ? "text-green-700" :
                          status === "processing" ? "text-blue-700" : "text-gray-400"
                        }`}>
                          {step.subtitle}
                        </p>
                      </div>
                      
                      {status === "complete" && (
                        <div className="text-sm font-semibold text-green-600 flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                          <Check className="w-4 h-4" />
                          Complete
                        </div>
                      )}
                      {status === "processing" && (
                        <div className="text-sm font-semibold text-blue-600 flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full">
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

          {/* Enhanced Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.bgColor} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Enhanced Footer Message */}
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
            <p className="text-gray-600 font-medium">
              Please wait while our AI processes your request. This may take a few moments...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionGenerationLoading