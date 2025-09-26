import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LogIn, Zap, Waves, BarChart3, MessageSquare, Activity, Globe, TrendingUp, Database } from "lucide-react";
import { DASHBOARD_METRICS } from "@/data/dashboardData";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Waves className="h-12 w-12 text-blue-600 animate-wave" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">FloatChat</h1>
              <Badge variant="secondary" className="mt-1">AI-Powered Ocean Data</Badge>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore Argo float data with AI-powered insights, interactive visualizations, and intelligent analysis tools
          </p>
          
          {/* Live Stats */}
          <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Activity className="h-4 w-4 text-green-500" />
              <span>{DASHBOARD_METRICS.activeFloats.toLocaleString()} Active Floats</span>
            </div>
            <div className="flex items-center space-x-1">
              <Database className="h-4 w-4 text-blue-500" />
              <span>{DASHBOARD_METRICS.totalProfiles.toLocaleString()} Total Profiles</span>
            </div>
            <div className="flex items-center space-x-1">
              <Globe className="h-4 w-4 text-purple-500" />
              <span>{DASHBOARD_METRICS.globalCoverage}% Global Coverage</span>
            </div>
          </div>
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

        {/* Live System Status */}
        <Card className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-lg flex items-center justify-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span>Live System Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-blue-600">{DASHBOARD_METRICS.newProfiles.toLocaleString()}</div>
                <div className="text-xs text-gray-500">New Profiles (10 days)</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-green-600">{DASHBOARD_METRICS.dataQuality}%</div>
                <div className="text-xs text-gray-500">Data Quality</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-purple-600">6</div>
                <div className="text-xs text-gray-500">Ocean Basins</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-orange-600">24/7</div>
                <div className="text-xs text-gray-500">Real-time Updates</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                System Operational • Last Updated: {DASHBOARD_METRICS.lastUpdate}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features Preview */}
        <div className="text-center text-gray-500 text-sm max-w-2xl mx-auto">
          <p className="mb-2">🌊 Real-time Argo float analysis • 📊 Interactive depth profiles • 🤖 AI chat assistant</p>
          <p>📈 Regional comparisons • 📁 CSV & NetCDF exports • 🔍 Smart SQL query generation</p>
          <p className="mt-4 text-xs">
            <strong>Data Sources:</strong> Argo GDAC • INCOIS • MoES • Team Ajinkya • PSID: 25040
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;