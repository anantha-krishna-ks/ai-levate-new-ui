import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Sparkles, Brain, Code, Zap, ArrowRight, Clock, Users } from "lucide-react";
import { AppSidebar } from "@/components/AppSidebar";
import { ProfileDropdown } from "@/components/ProfileDropdown";
import comingSoonHero from "@/assets/coming-soon-hero.jpg";

const NotFound = () => {
  const location = useLocation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Tools",
      description: "Advanced AI capabilities"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Smart Generation",
      description: "Intelligent content creation"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized performance"
    }
  ];

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <AppSidebar />
      
      <div className="ml-0 lg:ml-60 min-h-screen flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b">
          <div className="flex h-16 items-center justify-between px-4 lg:px-6">
            <div className="flex items-center gap-4 lg:gap-6">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">Coming Soon</h1>
              <p className="hidden md:block text-sm text-gray-600">This feature is under development</p>
            </div>
            <ProfileDropdown />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-6">
          <div className="max-w-4xl mx-auto">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Development Progress</p>
                    <p className="text-2xl font-bold text-gray-900">75%</p>
                    <p className="text-xs text-blue-600">Almost Ready</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Expected Launch</p>
                    <p className="text-2xl font-bold text-gray-900">Soon</p>
                    <p className="text-xs text-green-600">Stay Tuned</p>
                  </div>
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight className="h-5 w-5 text-green-600" />
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Users Waiting</p>
                    <p className="text-2xl font-bold text-gray-900">1.2k+</p>
                    <p className="text-xs text-purple-600">Growing Interest</p>
                  </div>
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Main Coming Soon Card */}
            <Card className="bg-white border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-all duration-500">
              <div className="relative">
                <img 
                  src={comingSoonHero} 
                  alt="Coming Soon" 
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Exciting Features Coming Soon!</h2>
                      <p className="text-white/90">Next-generation AI tools in development</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-gray-900">
                      This Feature is Under Development
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      We're working hard to bring you amazing new capabilities. This feature will be available soon with enhanced AI-powered functionality.
                    </p>
                  </div>
                  
                  {/* Progress Indicator */}
                  <div className="flex items-center justify-center gap-2 my-8">
                    <div className="w-3 h-3 rounded-full bg-[#2563eb] animate-bounce" />
                    <div className="w-3 h-3 rounded-full bg-[#2563eb]/70 animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-3 h-3 rounded-full bg-[#2563eb]/50 animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                  
                  <Link to="/dashboard">
                    <Button className="bg-[#2563eb] hover:bg-[#2563eb]/90 text-white px-8 py-3 text-lg font-medium shadow-none hover:shadow-lg transition-all duration-300 group">
                      <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Back to Dashboard
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Feature Preview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className={`bg-white border border-gray-200 shadow-sm cursor-pointer transform transition-all duration-300 hover:shadow-md hover:scale-105 ${
                    hoveredCard === index ? 'shadow-lg' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-[#2563eb]/10 flex items-center justify-center text-[#2563eb] transform transition-all duration-300 ${
                      hoveredCard === index ? 'scale-110 bg-[#2563eb] text-white' : ''
                    }`}>
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NotFound;
