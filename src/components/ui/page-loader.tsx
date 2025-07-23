import { Loader2, Brain, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface PageLoaderProps {
  variant?: "default" | "ai" | "minimal"
  size?: "sm" | "md" | "lg"
  text?: string
  className?: string
}

export const PageLoader = ({ 
  variant = "default", 
  size = "md", 
  text = "Loading...",
  className 
}: PageLoaderProps) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  }

  if (variant === "minimal") {
    return (
      <div className={cn("flex items-center justify-center", className)}>
        <Loader2 className={cn("animate-spin text-[#2563eb]", sizeClasses[size])} />
      </div>
    )
  }

  if (variant === "ai") {
    return (
      <div className={cn("flex flex-col items-center justify-center space-y-4", className)}>
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Processing</h3>
          <p className="text-sm text-gray-600">{text}</p>
        </div>
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-[#2563eb] rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-[#2563eb] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
          <div className="w-2 h-2 bg-[#2563eb] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>
    )
  }

  return (
    <div className={cn("flex flex-col items-center justify-center space-y-4", className)}>
      <div className="relative">
        <Loader2 className={cn("animate-spin text-[#2563eb]", sizeClasses[size])} />
        <div className="absolute inset-0 rounded-full border-2 border-[#2563eb]/20 animate-pulse" />
      </div>
      <p className="text-sm font-medium text-gray-600 animate-pulse">{text}</p>
    </div>
  )
}

export const FullPageLoader = ({ text = "Loading..." }: { text?: string }) => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <PageLoader variant="ai" text={text} />
    </div>
  )
}

export const OverlayLoader = ({ text = "Loading..." }: { text?: string }) => {
  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-[1px] z-50 flex items-center justify-center">
      <div className="bg-white/95 backdrop-blur-md rounded-lg p-8 shadow-2xl border border-white/20 max-w-sm mx-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-gray-200 rounded-full animate-spin border-t-primary"></div>
          </div>
          <p className="text-gray-700 font-medium text-center">{text}</p>
        </div>
      </div>
    </div>
  )
}

export const InlineLoader = ({ text = "Loading..." }: { text?: string }) => {
  return (
    <div className="flex items-center justify-center py-8">
      <PageLoader variant="default" text={text} />
    </div>
  )
}