import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Brain, Sparkles, ArrowRight, ArrowLeft, Check, Mail, User, Building, Shield, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    contactNumber: "",
    organizationName: "",
    acceptTerms: false
  });
  const [fieldValidation, setFieldValidation] = useState({
    firstName: false,
    email: false,
    username: false,
    password: false,
    organizationName: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Real-time validation
    if (typeof value === 'string' && value.length > 0) {
      if (field === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setFieldValidation(prev => ({ ...prev, [field]: emailRegex.test(value) }));
      } else if (field === 'password') {
        setFieldValidation(prev => ({ ...prev, [field]: value.length >= 6 }));
      } else {
        setFieldValidation(prev => ({ ...prev, [field]: value.trim().length > 0 }));
      }
    }
  };

  const getProgressPercentage = () => {
    return (currentStep / 3) * 100;
  };

  const canProceedStep1 = () => {
    return formData.firstName.trim() && formData.email.trim() && fieldValidation.email;
  };

  const canProceedStep2 = () => {
    return formData.username.trim() && formData.password.trim() && fieldValidation.password;
  };

  const canSubmit = () => {
    return formData.organizationName.trim() && formData.acceptTerms;
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute top-1/3 -right-20 w-64 h-64 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
        <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '30s' }} />
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 min-h-screen flex">
        {/* Left Side - AI Illustration Area */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12">
          <div className="max-w-md text-center space-y-8">
            {/* AI-Levate Logo */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  AI-Levate
                </h1>
              </div>
            </div>

            {/* Abstract AI Visualization */}
            <div className="relative mx-auto w-80 h-80">
              {/* Central Core */}
              <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-primary to-blue-500 rounded-full shadow-2xl animate-pulse" />
              
              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-80" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-80" />
              </div>
              
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-80" />
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-red-400 to-rose-400 rounded-full opacity-80" />
              </div>

              {/* Neural Network Lines */}
              <div className="absolute inset-0">
                <svg className="w-full h-full opacity-30" viewBox="0 0 320 320">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2e5c9e" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                  <path d="M160,60 Q160,160 60,160" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
                  <path d="M160,60 Q160,160 260,160" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <path d="M60,160 Q160,160 160,260" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  <path d="M260,160 Q160,160 160,260" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                </svg>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Join the Future of
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> AI Innovation</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Create your account and unlock the full potential of AI-powered automation and intelligent workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Register Form */}
        <div className="flex-1 lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center justify-center space-x-3 mb-8">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                AI-Levate
              </h1>
            </div>

            <Card className="border-0 shadow-2xl bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8">
                {/* Header with Back to Login */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-500">
                      Already have an account?{' '}
                      <button 
                        onClick={() => navigate('/')}
                        className="text-primary hover:text-primary/80 font-medium transition-colors underline"
                      >
                        Sign in
                      </button>
                    </div>
                    <div className="text-sm text-gray-500">
                      Step {currentStep} of 3
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {currentStep === 1 && "Let's get started"}
                    {currentStep === 2 && "Secure your account"}
                    {currentStep === 3 && "Almost there!"}
                  </h2>
                  <p className="text-gray-600">
                    {currentStep === 1 && "Tell us about yourself"}
                    {currentStep === 2 && "Create your login credentials"}
                    {currentStep === 3 && "Organization details & preferences"}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                  <Progress value={getProgressPercentage()} className="h-2 mb-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span className={currentStep >= 1 ? "text-primary font-medium" : ""}>Personal Info</span>
                    <span className={currentStep >= 2 ? "text-primary font-medium" : ""}>Account Setup</span>
                    <span className={currentStep >= 3 ? "text-primary font-medium" : ""}>Finalize</span>
                  </div>
                </div>

                {/* Multi-Step Form */}
                <form className="space-y-6">
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <div className="space-y-4 animate-fade-in">
                      {/* Social Login Options */}
                      <div className="space-y-3 mb-6">
                        <Button variant="outline" className="w-full h-11 font-medium transition-all hover:bg-accent/50 hover:scale-[1.02]" size="lg">
                          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          Continue with Google
                        </Button>
                        
                        <div className="relative">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200" />
                          </div>
                          <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-gray-500">Or continue with email</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700 flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            First Name <span className="text-red-500">*</span>
                          </Label>
                          <div className="relative">
                            <Input
                              id="firstName"
                              type="text"
                              placeholder="John"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                              className="h-11 border-gray-200 bg-white/80 focus:border-primary focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400 pr-10"
                            />
                            {fieldValidation.firstName && (
                              <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500 animate-scale-in" />
                            )}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700">
                            Last Name
                          </Label>
                          <Input
                            id="lastName"
                            type="text"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className="h-11 border-gray-200 bg-white/80 focus:border-primary focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center">
                          <Mail className="w-4 h-4 mr-1" />
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="h-11 border-gray-200 bg-white/80 focus:border-primary focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400 pr-10"
                          />
                          {fieldValidation.email && (
                            <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500 animate-scale-in" />
                          )}
                        </div>
                        {formData.email && !fieldValidation.email && (
                          <p className="text-sm text-red-500">Please enter a valid email address</p>
                        )}
                      </div>

                      <Button 
                        type="button"
                        onClick={nextStep}
                        disabled={!canProceedStep1()}
                        className="w-full h-12 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-lg shadow-lg transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        Continue
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  )}

                  {/* Step 2: Account Setup */}
                  {currentStep === 2 && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="space-y-2">
                        <Label htmlFor="username" className="text-sm font-semibold text-gray-700 flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          Username <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Input
                            id="username"
                            type="text"
                            placeholder="Choose a unique username"
                            value={formData.username}
                            onChange={(e) => handleInputChange('username', e.target.value)}
                            className="h-11 border-gray-200 bg-white/80 focus:border-primary focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400 pr-10"
                          />
                          {fieldValidation.username && (
                            <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500 animate-scale-in" />
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-sm font-semibold text-gray-700 flex items-center">
                          <Shield className="w-4 h-4 mr-1" />
                          Password <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a secure password"
                            value={formData.password}
                            onChange={(e) => handleInputChange('password', e.target.value)}
                            className="h-11 border-gray-200 bg-white/80 focus:border-primary focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400 pr-20"
                          />
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                            {fieldValidation.password && (
                              <Check className="w-4 h-4 text-green-500 animate-scale-in" />
                            )}
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>
                        {formData.password && !fieldValidation.password && (
                          <p className="text-sm text-red-500">Password must be at least 6 characters</p>
                        )}
                        {fieldValidation.password && (
                          <p className="text-sm text-green-600 flex items-center">
                            <Check className="w-4 h-4 mr-1" />
                            Password looks good!
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contactNumber" className="text-sm font-semibold text-gray-700">
                          Contact Number (Optional)
                        </Label>
                        <Input
                          id="contactNumber"
                          type="tel"
                          placeholder="91-XXXXXXXXXX"
                          value={formData.contactNumber}
                          onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                          className="h-11 border-gray-200 bg-white/80 focus:border-primary focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400"
                        />
                      </div>

                      <div className="flex space-x-3">
                        <Button 
                          type="button"
                          variant="outline"
                          onClick={prevStep}
                          className="flex-1 h-12 font-semibold transition-all duration-200 hover:scale-[1.02]"
                        >
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Back
                        </Button>
                        <Button 
                          type="button"
                          onClick={nextStep}
                          disabled={!canProceedStep2()}
                          className="flex-1 h-12 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-lg shadow-lg transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                        >
                          Continue
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Organization & Final */}
                  {currentStep === 3 && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse">
                          <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-gray-600">You're almost ready to experience AI-powered workflows!</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="organizationName" className="text-sm font-semibold text-gray-700 flex items-center">
                          <Building className="w-4 h-4 mr-1" />
                          Organization Name <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Input
                            id="organizationName"
                            type="text"
                            placeholder="Your company or organization"
                            value={formData.organizationName}
                            onChange={(e) => handleInputChange('organizationName', e.target.value)}
                            className="h-11 border-gray-200 bg-white/80 focus:border-primary focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400 pr-10"
                          />
                          {fieldValidation.organizationName && (
                            <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500 animate-scale-in" />
                          )}
                        </div>
                      </div>

                      {/* Terms Checkbox */}
                      <div className="flex items-start space-x-2 py-2">
                        <Checkbox
                          id="terms"
                          checked={formData.acceptTerms}
                          onCheckedChange={(checked) => handleInputChange('acceptTerms', checked as boolean)}
                          className="mt-0.5"
                        />
                        <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                          I accept the{' '}
                          <a href="#" className="text-primary hover:text-primary/80 underline transition-colors">
                            End User License Agreement (EULA)
                          </a>
                        </Label>
                      </div>

                      <div className="flex space-x-3">
                        <Button 
                          type="button"
                          variant="outline"
                          onClick={prevStep}
                          className="flex-1 h-12 font-semibold transition-all duration-200 hover:scale-[1.02]"
                        >
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Back
                        </Button>
                        <Button 
                          type="submit"
                          disabled={!canSubmit()}
                          className="flex-1 h-12 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-lg shadow-lg transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                          Create Account
                          <Sparkles className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Footer */}
            <div className="mt-8 text-center space-y-2">
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                <Sparkles className="w-3 h-3" />
                <span>Powered By: AI-Levate</span>
              </div>
              <div className="text-xs text-gray-400 space-y-1">
                <p>Copyright © 2025 | Excelsoft Technologies Ltd.</p>
                <div className="flex items-center justify-center space-x-4">
                  <a href="#" className="hover:text-primary transition-colors">Privacy and Cookie Policy</a>
                  <span>•</span>
                  <a href="#" className="hover:text-primary transition-colors">Help</a>
                  <span>•</span>
                  <span>Version: V.1.0.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;