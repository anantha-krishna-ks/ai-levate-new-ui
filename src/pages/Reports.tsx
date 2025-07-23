import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, BarChart3, TrendingUp, PieChart, Sparkles, ArrowRight, Clock, Users } from "lucide-react";
import { AppSidebar } from "@/components/AppSidebar";
import { ProfileDropdown } from "@/components/ProfileDropdown";
import comingSoonHero from "@/assets/coming-soon-hero.jpg";

const Reports = () => {
  const location = useLocation();
  const [hoveredChart, setHoveredChart] = useState<number | null>(null);

  const analytics = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Usage Analytics",
      description: "Track tool usage and performance"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth Metrics",
      description: "Monitor growth trends"
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Detailed Reports",
      description: "Comprehensive data insights"
    }
  ];

  useEffect(() => {
    console.log("User navigated to Reports page:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <AppSidebar />
      
      <div className="ml-0 lg:ml-60 min-h-screen flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b">
          <div className="flex h-16 items-center justify-between px-4 lg:px-6">
            <div className="flex items-center gap-4 lg:gap-6">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">Reports & Analytics</h1>
              <p className="hidden md:block text-sm text-gray-600">Advanced reporting features coming soon</p>
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
                    <p className="text-sm text-gray-600 mb-1">Analytics Engine</p>
                    <p className="text-2xl font-bold text-gray-900">95%</p>
                    <p className="text-xs text-green-600">Ready</p>
                  </div>
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BarChart3 className="h-5 w-5 text-green-600" />
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Launch Timeline</p>
                    <p className="text-2xl font-bold text-gray-900">Q1</p>
                    <p className="text-xs text-blue-600">2025</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Report Types</p>
                    <p className="text-2xl font-bold text-gray-900">12+</p>
                    <p className="text-xs text-purple-600">Planned</p>
                  </div>
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Main Coming Soon Card */}
            <Card className="bg-white border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-all duration-500">
              <div className="relative">
                <img 
                  src={comingSoonHero} 
                  alt="Reports Analytics" 
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Advanced Analytics & Reports</h2>
                      <p className="text-white/90">Comprehensive insights coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-gray-900">
                      Powerful Reporting Tools in Development
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Get ready for comprehensive analytics, usage insights, performance metrics, and detailed reports to help you understand your AI tool usage patterns.
                    </p>
                  </div>
                  
                  {/* Progress Indicator */}
                  <div className="flex items-center justify-center gap-2 my-8">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-bounce" />
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-3 h-3 rounded-full bg-green-300 animate-bounce" style={{ animationDelay: '0.2s' }} />
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

            {/* Analytics Preview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {analytics.map((analytic, index) => (
                <Card
                  key={index}
                  className={`bg-white border border-gray-200 shadow-sm cursor-pointer transform transition-all duration-300 hover:shadow-md hover:scale-105 ${
                    hoveredChart === index ? 'shadow-lg' : ''
                  }`}
                  onMouseEnter={() => setHoveredChart(index)}
                  onMouseLeave={() => setHoveredChart(null)}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600 transform transition-all duration-300 ${
                      hoveredChart === index ? 'scale-110 bg-green-500 text-white' : ''
                    }`}>
                      {analytic.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{analytic.title}</h3>
                    <p className="text-sm text-gray-600">{analytic.description}</p>
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

export default Reports;