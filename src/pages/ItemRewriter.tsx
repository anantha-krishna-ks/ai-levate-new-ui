import { useState } from "react";
import { ArrowLeft, Upload, Download, FileText, RefreshCw, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

interface QuestionData {
  questionNo: string;
  passage: string;
  question: string;
}

interface RewrittenQuestion {
  original: string;
  rewritten: string;
  choices?: string[];
}

const ItemRewriter = () => {
  const { toast } = useToast();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadedData, setUploadedData] = useState<QuestionData[]>([]);
  const [rewrittenQuestions, setRewrittenQuestions] = useState<RewrittenQuestion[]>([]);
  const [selectedFormat, setSelectedFormat] = useState("multiple-choice");
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [isRewriting, setIsRewriting] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
        toast({
          title: "Invalid File Format",
          description: "Please upload only .xlsx files",
          variant: "destructive",
        });
        return;
      }
      setUploadedFile(file);
      
      // Mock data simulation - in real app, you'd parse the Excel file
      const mockData: QuestionData[] = [
        {
          questionNo: "Q1",
          passage: "Jill Brien, age 20, is a university student. She is a non-smoker who has asthma. She has had infrequent asthma symptoms over the years, and uses her medication once or twice a week. You consider her to have mild asthma.",
          question: "What class of medication should be the mainstay of her pharmacological therapy? Be specific."
        },
        {
          questionNo: "Q2", 
          passage: "Jill Brien, age 20, is a university student. She is a non-smoker who has asthma. She has had infrequent asthma symptoms over the years, and uses her medication once or twice a week. You consider her to have mild asthma.",
          question: "Ms. Brien starts a part-time job at a construction site. Over the next few weeks she notices that her asthma symptoms are occurring more frequently, and require her to use the medication in question 1 at least once daily. What is the most likely cause of her asthma exacerbation?"
        },
        {
          questionNo: "Q3",
          passage: "Jill Brien, age 20, is a university student. She is a non-smoker who has asthma. She has had infrequent asthma symptoms over the years, and uses her medication once or twice a week. You consider her to have mild asthma.",
          question: "What class of medication should be the mainstay of Ms. Brien's pharmacological therapy at this point?"
        },
        {
          questionNo: "Q4",
          passage: "Jill Brien, age 20, is a university student. She is a non-smoker who has asthma. She has had infrequent asthma symptoms over the years, and uses her medication once or twice a week. You consider her to have mild asthma.",
          question: "Ms. Brien would like to be able to manage her own asthma therapy. What device would you recommend she purchase?"
        }
      ];
      
      setUploadedData(mockData);
      toast({
        title: "File Uploaded Successfully",
        description: `Uploaded ${mockData.length} questions`,
      });
    }
  };

  const handleRewriteQuestions = async () => {
    if (uploadedData.length === 0) {
      toast({
        title: "No Data to Rewrite",
        description: "Please upload a file first",
        variant: "destructive",
      });
      return;
    }

    setIsRewriting(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock rewritten questions
    const mockRewritten: RewrittenQuestion[] = [
      {
        original: "What class of medication should be the mainstay of her pharmacological therapy? Be specific.",
        rewritten: "What is a possible characteristic of Jill Brien's asthma management?",
        choices: [
          "a. She frequently experiences severe asthma symptoms.",
          "b. She uses medication daily for asthma control.",
          "c. She has mild asthma and uses medication once or twice weekly.",
          "d. She is a smoker with moderate asthma."
        ]
      },
      {
        original: "Ms. Brien starts a part-time job at a construction site. Over the next few weeks she notices that her asthma symptoms are occurring more frequently, and require her to use the medication in question 1 at least once daily. What is the most likely cause of her asthma exacerbation?",
        rewritten: "According to the passage, what level of asthma does Jill Brien have?",
        choices: [
          "a. Severe asthma",
          "b. Moderate asthma", 
          "c. Mild asthma",
          "d. Chronic asthma"
        ]
      },
      {
        original: "What class of medication should be the mainstay of Ms. Brien's pharmacological therapy at this point?",
        rewritten: "What is Jill Brien's age?",
        choices: [
          "a. 18",
          "b. 20",
          "c. 22", 
          "d. 25"
        ]
      },
      {
        original: "Ms. Brien would like to be able to manage her own asthma therapy. What device would you recommend she purchase?",
        rewritten: "What is the likely asthma classification for Jill Brien based on her symptoms?",
        choices: [
          "a. Severe asthma",
          "b. Moderate asthma",
          "c. Mild asthma",
          "d. Chronic asthma"
        ]
      }
    ];
    
    setRewrittenQuestions(mockRewritten);
    setIsRewriting(false);
    
    toast({
      title: "Questions Rewritten Successfully",
      description: `${mockRewritten.length} questions have been rewritten`,
    });
  };

  const handleDownloadTemplate = () => {
    toast({
      title: "Template Downloaded",
      description: "Sample template has been downloaded",
    });
  };

  const handleClear = () => {
    setRewrittenQuestions([]);
    toast({
      title: "Cleared",
      description: "Rewritten questions have been cleared",
    });
  };

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Your rewritten questions are being downloaded",
    });
  };

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
              <span className="text-sm text-gray-500">Item Rewriter</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Item Rewriter</h1>
          <p className="text-gray-600">Upload your questions and rewrite them to different formats</p>
        </div>

        {/* Upload Section */}
        <Card className="p-6 mb-8">
          <div className="text-center">
            <div className="mb-4">
              <span className="text-sm text-gray-600">Remaining Tokens:</span>
            </div>
            <div className="w-full max-w-2xl mx-auto mb-6">
              <div className="h-2 bg-blue-200 rounded-full">
                <div className="h-2 bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-4">
              <div className="flex items-center justify-center mb-4">
                <input
                  type="file"
                  accept=".xlsx,.xls"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Button variant="outline" className="mr-4">
                    Choose File
                  </Button>
                </label>
                <span className="text-gray-500">
                  {uploadedFile ? uploadedFile.name : "No file chosen"}
                </span>
                {uploadedFile && (
                  <Button className="ml-4 bg-blue-600 hover:bg-blue-700">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload
                  </Button>
                )}
              </div>
            </div>
            
            <div className="text-right text-sm text-gray-500 mb-2">
              Format accepted is only .xlsx
            </div>
            <div className="text-right text-sm text-gray-500 mb-4">
              <strong>Note:</strong> Import only 20 Questions
            </div>
            
            <div className="text-right">
              <Button 
                variant="outline" 
                className="bg-blue-600 text-white hover:bg-blue-700"
                onClick={handleDownloadTemplate}
              >
                Download Sample Template
              </Button>
            </div>
          </div>
        </Card>

        {/* Uploaded Data Section */}
        {uploadedData.length > 0 && (
          <Card className="p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Uploaded Data:</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Question No</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Passage</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Question(s)</th>
                  </tr>
                </thead>
                <tbody>
                  {uploadedData.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">{item.questionNo}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.passage}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.question}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Format</label>
                <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="multiple-choice">Multiple Choice Question</SelectItem>
                    <SelectItem value="true-false">True/False</SelectItem>
                    <SelectItem value="essay">Essay Question</SelectItem>
                    <SelectItem value="short-answer">Short Answer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Language</label>
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="german">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white ml-auto"
                onClick={handleRewriteQuestions}
                disabled={isRewriting}
              >
                {isRewriting ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Rewriting...
                  </>
                ) : (
                  "Rewrite Questions"
                )}
              </Button>
            </div>
          </Card>
        )}

        {/* Rewritten Questions Section */}
        {rewrittenQuestions.length > 0 && (
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Rewritten Question(s):</h2>
              <div className="flex gap-2">
                <Button variant="outline" onClick={handleClear}>
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleDownload}>
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Question(s)</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Multiple Choice Question(s)</th>
                  </tr>
                </thead>
                <tbody>
                  {rewrittenQuestions.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">{item.original}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <div className="mb-2">{item.rewritten}</div>
                        {item.choices && (
                          <div className="space-y-1">
                            {item.choices.map((choice, idx) => (
                              <div key={idx} className="text-sm">{choice}</div>
                            ))}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

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

export default ItemRewriter;