import { useState } from "react";
import { Globe, BarChart3, TrendingUp, Map, Activity, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DataDashboard = () => {
  const [activeTab, setActiveTab] = useState("map");

  const tabs = [
    { 
      id: "map", 
      label: "Recent Insights", 
      icon: Globe,
      description: "Latest oceanographic discoveries and data insights"
    },
    { 
      id: "profiles", 
      label: "Profile Viewer", 
      icon: BarChart3,
      description: "Depth vs temperature, salinity, and other variables"
    },
    { 
      id: "comparisons", 
      label: "Comparisons", 
      icon: TrendingUp,
      description: "Time-series analysis and regional comparisons"
    },
  ];

  return (
    <div className="h-full bg-gradient-surface">
      {/* Dashboard Header */}
      <div className="bg-card border-b border-border px-6 py-4 shadow-surface">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Activity className="h-6 w-6 text-ocean-medium" />
            <div>
              <h2 className="text-lg font-semibold text-foreground">Data Visualization</h2>
              <p className="text-sm text-muted-foreground">Interactive oceanographic data analysis</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="shadow-surface">
            <Layers className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Visualization Tabs */}
      <div className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
          <TabsList className="grid w-full grid-cols-3 bg-muted/50 shadow-surface">
            {tabs.map((tab) => (
              <TabsTrigger 
                key={tab.id} 
                value={tab.id}
                className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-depth"
              >
                <tab.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Recent Insights Tab */}
          <TabsContent value="map" className="mt-6 space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Latest Discoveries */}
              <Card className="p-6 shadow-ocean">
                <div className="flex items-center space-x-2 mb-4">
                  <Globe className="h-5 w-5 text-ocean-medium" />
                  <h3 className="text-lg font-semibold">Latest Discoveries</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-ocean-surface/50 rounded-lg border border-ocean-light/20">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-ocean-deep">Unusual Temperature Anomaly</h4>
                      <span className="text-xs text-muted-foreground">2 hours ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Float WMO-6903274 detected +2.3°C anomaly in North Atlantic at 800m depth
                    </p>
                    <div className="text-xs text-ocean-medium">Location: 45.2°N, 42.1°W</div>
                  </div>
                  
                  <div className="p-4 bg-ocean-surface/50 rounded-lg border border-ocean-light/20">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-ocean-deep">Deep Water Formation Event</h4>
                      <span className="text-xs text-muted-foreground">5 hours ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Significant salinity increase detected in Labrador Sea indicating active convection
                    </p>
                    <div className="text-xs text-ocean-medium">16 floats involved</div>
                  </div>

                  <div className="p-4 bg-ocean-surface/50 rounded-lg border border-ocean-light/20">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-ocean-deep">Marine Heatwave Alert</h4>
                      <span className="text-xs text-muted-foreground">1 day ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Persistent surface warming in Eastern Pacific exceeding 95th percentile
                    </p>
                    <div className="text-xs text-ocean-medium">Severity: Moderate</div>
                  </div>
                </div>
              </Card>

              {/* Real-time Statistics */}
              <Card className="p-6 shadow-ocean">
                <div className="flex items-center space-x-2 mb-4">
                  <Activity className="h-5 w-5 text-ocean-medium" />
                  <h3 className="text-lg font-semibold">Live Ocean Data</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gradient-depth rounded-lg">
                    <div className="text-2xl font-bold text-primary-foreground">3,847</div>
                    <div className="text-sm text-primary-foreground/80">Active Floats</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-depth rounded-lg">
                    <div className="text-2xl font-bold text-primary-foreground">127,439</div>
                    <div className="text-sm text-primary-foreground/80">Profiles Today</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-ocean-surface/30 rounded">
                    <span className="text-sm font-medium">Data Quality</span>
                    <span className="text-sm text-ocean-deep font-semibold">98.2%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-ocean-surface/30 rounded">
                    <span className="text-sm font-medium">New Deployments</span>
                    <span className="text-sm text-ocean-deep font-semibold">23 this week</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-ocean-surface/30 rounded">
                    <span className="text-sm font-medium">Coverage Area</span>
                    <span className="text-sm text-ocean-deep font-semibold">89% of oceans</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-ocean-surface/30 rounded">
                    <span className="text-sm font-medium">Processing Lag</span>
                    <span className="text-sm text-ocean-deep font-semibold">4.2 hours</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Recent Analysis Results */}
            <Card className="p-6 shadow-ocean">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-ocean-medium" />
                  <h3 className="text-lg font-semibold">Recent Analysis Results</h3>
                </div>
                <Button variant="outline" size="sm">View All Reports</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-surface rounded-lg border border-border/20">
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 text-ocean-medium mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Arctic Sea Ice Analysis</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      15% below 2010-2020 average
                    </p>
                    <div className="text-xs text-ocean-medium">Updated 6 hours ago</div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-surface rounded-lg border border-border/20">
                  <div className="text-center">
                    <Globe className="h-8 w-8 text-ocean-medium mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Gulf Stream Monitoring</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Transport rate: 18.2 ± 2.1 Sv
                    </p>
                    <div className="text-xs text-ocean-medium">Updated 3 hours ago</div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-surface rounded-lg border border-border/20">
                  <div className="text-center">
                    <Activity className="h-8 w-8 text-ocean-medium mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">pH Trend Analysis</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      -0.02 units/decade decline
                    </p>
                    <div className="text-xs text-ocean-medium">Updated 1 hour ago</div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Profile Viewer Tab */}
          <TabsContent value="profiles" className="mt-6 space-y-4">
            <Card className="p-6 shadow-ocean">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-ocean-medium" />
                  <h3 className="text-lg font-semibold">Depth Profiles</h3>
                </div>
                <Button variant="outline" size="sm">
                  Select Float
                </Button>
              </div>
              
              {/* Profile Plot Placeholder */}
              <div 
                id="plotly-profile-container"
                className="w-full h-96 bg-gradient-surface rounded-lg border border-border/20 flex items-center justify-center shadow-depth"
              >
                <div className="text-center space-y-4">
                  <BarChart3 className="h-16 w-16 text-ocean-medium mx-auto" />
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">Profile Visualization</h4>
                    <p className="text-muted-foreground">Plotly charts will be embedded here</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Temperature • Salinity • Oxygen • Depth analysis
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Comparisons Tab */}
          <TabsContent value="comparisons" className="mt-6 space-y-4">
            <Card className="p-6 shadow-ocean">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-ocean-medium" />
                  <h3 className="text-lg font-semibold">Time Series & Comparisons</h3>
                </div>
                <Button variant="outline" size="sm">
                  Configure Analysis
                </Button>
              </div>
              
              {/* Comparison Plot Placeholder */}
              <div 
                id="plotly-comparison-container"
                className="w-full h-96 bg-gradient-surface rounded-lg border border-border/20 flex items-center justify-center shadow-depth"
              >
                <div className="text-center space-y-4">
                  <TrendingUp className="h-16 w-16 text-ocean-medium mx-auto" />
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">Comparative Analysis</h4>
                    <p className="text-muted-foreground">Time-series and comparison charts</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Regional trends • Seasonal variations • Multi-variable analysis
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DataDashboard;