import { ArrowLeft, Users, FileText, Bookmark, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ItemGeneration = () => {
  const stats = [
    {
      icon: <div className="w-4 h-4 bg-orange-500 rounded-sm flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-sm"></div>
      </div>,
      title: "Token Usage",
      total: "51,449",
      subtitle: "Total Tokens used",
      items: [
        { label: "Today's usage", value: "5,349", color: "text-orange-600" },
        { label: "Balance usage", value: "4,651", color: "text-orange-600" }
      ]
    },
    {
      icon: <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-sm"></div>
      </div>,
      title: "Questions Generated",
      total: "72",
      subtitle: "Total Questions Generated",
      items: [
        { label: "Multiple Choice", value: "65", color: "text-blue-600" },
        { label: "Written Response", value: "7", color: "text-blue-600" }
      ]
    },
    {
      icon: <div className="w-4 h-4 bg-green-500 rounded-sm flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-sm"></div>
      </div>,
      title: "Questions Saved",
      total: "28",
      subtitle: "Total Questions Saved",
      items: [
        { label: "Multiple Choice", value: "27", color: "text-green-600" },
        { label: "Written Response", value: "1", color: "text-green-600" }
      ]
    }
  ];

  const knowledgeBases = [
    {
      id: 1,
      year: "2024",
      level: "Advanced",
      category: "Risk Management",
      title: "Cyber Risk",
      description: "Comprehensive cybersecurity and risk management materials",
      questions: 11,
      image: "/lovable-uploads/a13547e7-af5f-49b0-bb15-9b344d6cd72e.png",
      status: "Active",
      lastUpdated: "2 days ago"
    },
    {
      id: 2,
      year: "2023",
      level: "Intermediate",
      category: "Insurance",
      title: "Principles and Practice of Insurance",
      description: "Fundamental principles and practical applications of insurance",
      questions: 17,
      image: "/lovable-uploads/b401ff6b-c99f-41b0-8578-92b80ce62cd0.png",
      status: "Active",
      lastUpdated: "1 week ago"
    },
    {
      id: 3,
      year: "2024",
      level: "Advanced",
      category: "Finance",
      title: "Financial Risk Assessment",
      description: "Modern approaches to financial risk analysis and management",
      questions: 23,
      image: "/lovable-uploads/b5b0f5a8-9552-4635-8c44-d5e6f994179c.png",
      status: "Active",
      lastUpdated: "3 days ago"
    }
  ];

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
              <span className="text-sm text-gray-500">Knowledge Base Selection</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">AI Online</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs">✦</span>
              </div>
              <span className="text-sm text-blue-600 font-medium">4,651 Tokens</span>
            </div>
            <Link to="/dashboard">
              <Button variant="ghost" size="sm" className="text-gray-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 max-w-7xl mx-auto">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Select Knowledge Base</h1>
          <p className="text-gray-600">Choose a knowledge base to start generating intelligent questions</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 bg-white border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                {stat.icon}
                <span className="font-medium text-gray-700">{stat.title}</span>
              </div>
              
              <div className="mb-3">
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.total}</div>
                <div className="text-sm text-gray-500">{stat.subtitle}</div>
              </div>
              
              <div className="space-y-2">
                {stat.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{item.label}</span>
                    <span className={`text-sm font-medium ${item.color}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Knowledge Base Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {knowledgeBases.map((base) => (
            <Card key={base.id} className="overflow-hidden bg-white border border-gray-200 hover:shadow-md transition-shadow">
              {/* Image Section */}
              <div className="relative h-48 bg-gray-100">
                <img 
                  src={base.image} 
                  alt={base.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-gray-900 text-white hover:bg-gray-900">
                    {base.year}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge 
                    variant="secondary" 
                    className={base.level === 'Advanced' ? 'bg-red-100 text-red-700 hover:bg-red-100' : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100'}
                  >
                    {base.level}
                  </Badge>
                </div>
                <div className="absolute bottom-3 right-3">
                  <div className="bg-white rounded-lg px-2 py-1 flex items-center gap-1">
                    <FileText className="w-3 h-3 text-blue-600" />
                    <span className="text-xs font-medium text-gray-900">Questions: {base.questions}</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="mb-3">
                  <div className="text-sm text-gray-500 mb-1">{base.category}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{base.title}</h3>
                  <p className="text-sm text-gray-600">{base.description}</p>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                    <span>{base.lastUpdated}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <span>{base.status}</span>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <div className="w-4 h-4 mr-2 flex items-center justify-center">
                    <div className="w-2 h-2 border border-white rounded-sm"></div>
                  </div>
                  Start Generating
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
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
    </div>
  );
};

export default ItemGeneration;