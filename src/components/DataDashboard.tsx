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
      label: "Map View", 
      icon: Globe,
      description: "Global Argo float positions and data coverage"
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

          {/* Map View Tab */}
          <TabsContent value="map" className="mt-6 space-y-4">
            <Card className="p-6 shadow-ocean">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Map className="h-5 w-5 text-ocean-medium" />
                  <h3 className="text-lg font-semibold">Global Ocean Coverage</h3>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="w-3 h-3 bg-ocean-medium rounded-full"></div>
                  <span>Active Floats: 3,847</span>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div 
                id="leaflet-map-container"
                className="w-full h-96 bg-gradient-depth rounded-lg border border-border/20 flex items-center justify-center shadow-depth"
              >
                <div className="text-center space-y-4">
                  <Globe className="h-16 w-16 text-ocean-light mx-auto animate-wave" />
                  <div>
                    <h4 className="text-xl font-semibold text-primary-foreground">Interactive World Map</h4>
                    <p className="text-primary-foreground/80">Leaflet map will be embedded here</p>
                    <p className="text-sm text-primary-foreground/60 mt-2">
                      Float positions • Ocean basins • Data coverage
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4 bg-ocean-surface border-ocean-light/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ocean-deep">3,847</div>
                    <div className="text-sm text-ocean-medium">Active Floats</div>
                  </div>
                </Card>
                <Card className="p-4 bg-ocean-surface border-ocean-light/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ocean-deep">127,439</div>
                    <div className="text-sm text-ocean-medium">Profiles Today</div>
                  </div>
                </Card>
                <Card className="p-4 bg-ocean-surface border-ocean-light/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ocean-deep">98.2%</div>
                    <div className="text-sm text-ocean-medium">Data Quality</div>
                  </div>
                </Card>
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