import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, Zap, Waves, BarChart3, MessageSquare } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Waves className="h-12 w-12 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Ocean Insight AI</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore oceanic data with AI-powered insights, visualizations, and analysis tools
          </p>
        </div>

        {/* Main Options */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Direct Access */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => navigate('/dashboard')}>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">Direct Access</CardTitle>
              <CardDescription>
                Jump straight into ocean data exploration without any login required
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                className="w-full bg-green-600 hover:bg-green-700" 
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/dashboard');
                }}
              >
                <Zap className="mr-2 h-4 w-4" />
                Get Started
              </Button>
              <div className="mt-4 text-sm text-gray-500">
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center">
                    <BarChart3 className="h-4 w-4 mr-1" />
                    Dashboard
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    AI Chat
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Login Option */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => navigate('/login')}>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                <LogIn className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Login</CardTitle>
              <CardDescription>
                Sign in to access personalized features and save your preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                variant="outline" 
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/login');
                }}
              >
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
              <div className="mt-4 text-sm text-gray-500">
                <p>• Personalized dashboards</p>
                <p>• Save analysis history</p>
                <p>• Custom data exports</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Preview */}
        <div className="text-center text-gray-500 text-sm max-w-2xl mx-auto">
          <p className="mb-2">🌊 Real-time ocean data analysis • 📊 Interactive visualizations • 🤖 AI-powered insights</p>
          <p>📈 Statistical comparisons • 📁 CSV & NetCDF exports • 🔍 Smart search & filtering</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;