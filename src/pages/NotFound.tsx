import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, RefreshCw } from "lucide-react";
import comingSoonHero from "@/assets/coming-soon-hero.jpg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/10 to-background p-4">
      <Card className="max-w-2xl w-full bg-white/80 backdrop-blur-sm border border-border/20 shadow-2xl">
        <CardContent className="p-12 text-center">
          {/* Hero Image */}
          <div className="mb-8 relative">
            <img 
              src={comingSoonHero} 
              alt="Coming Soon" 
              className="w-full max-w-md mx-auto rounded-xl shadow-lg animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-primary/5 rounded-xl" />
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold text-primary mb-2">Coming Soon!</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                This amazing feature is currently under development and will be available soon.
              </p>
              <p className="text-sm text-muted-foreground">
                We're working hard to bring you the best AI-powered tools for your educational needs.
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
              <Link to="/">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Home className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Back to Dashboard
                </Button>
              </Link>
              
              <Button variant="outline" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 group">
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

export default NotFound;
