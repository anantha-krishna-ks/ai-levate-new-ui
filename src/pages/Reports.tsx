import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, RefreshCw } from "lucide-react";

const Reports = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("User navigated to Reports page:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 p-4">
      <Card className="max-w-2xl w-full glass-effect border-0 shadow-2xl">
        <CardContent className="p-12 text-center">
          {/* Animated Image */}
          <div className="mb-8 relative">
            <img 
              src="/src/assets/coming-soon.png" 
              alt="Coming Soon" 
              className="w-full max-w-md mx-auto animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-primary/5 rounded-lg" />
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold text-primary mb-2">Reports Coming Soon!</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Advanced analytics and reporting features are currently under development.
              </p>
              <p className="text-sm text-muted-foreground">
                Get ready for comprehensive insights into your AI tool usage, performance metrics, and detailed analytics.
              </p>
            </div>
            
            {/* Progress Indicator */}
            <div className="flex items-center justify-center gap-2 my-8">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-3 h-3 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/dashboard">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Home className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Back to Dashboard
                </Button>
              </Link>
              
              <Link to="/">
                <Button variant="outline" className="w-full sm:w-auto glass-effect hover:bg-primary/10 transition-all duration-300 group">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Return Home
                </Button>
              </Link>
            </div>
            
            {/* Notification Signup */}
            <div className="mt-8 p-6 rounded-lg bg-muted/30 border border-border/20">
              <p className="text-sm font-medium text-muted-foreground mb-3">
                Want to be notified when Reports are ready?
              </p>
              <Button variant="secondary" className="group hover:bg-secondary/80 transition-all duration-300">
                <RefreshCw className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
                Notify Me
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;