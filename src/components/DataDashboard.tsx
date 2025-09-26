import { useState } from "react";
import { Globe, BarChart3, TrendingUp, Map, Activity, Layers, AlertTriangle, CheckCircle, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  DASHBOARD_METRICS, 
  SAMPLE_FLOATS, 
  REGIONAL_DATA, 
  TREND_DATA, 
  NOTIFICATIONS, 
  SAMPLE_DEPTH_PROFILE,
  DATA_SOURCES,
  getActiveFloatsCount,
  getDataQualityPercentage,
  getRecentAlerts 
} from "@/data/dashboardData";
import MeasurementTable from "./MeasurementTable";

const DataDashboard = () => {
  const [activeTab, setActiveTab] = useState("map");
  const [selectedRegion, setSelectedRegion] = useState("Arabian Sea");

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
    { 
      id: "measurements", 
      label: "Measurements", 
      icon: Activity,
      description: "Caribbean Sea pressure and temperature data"
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
          <TabsList className="grid w-full grid-cols-4 bg-muted/50 shadow-surface">
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

              {/* Key Metrics Cards */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="p-4 bg-ocean-surface border-ocean-light/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ocean-deep">{DASHBOARD_METRICS.activeFloats.toLocaleString()}</div>
                    <div className="text-sm text-ocean-medium">Active Floats</div>
                    <Badge variant="secondary" className="mt-1 text-xs">+23 today</Badge>
                  </div>
                </Card>
                <Card className="p-4 bg-ocean-surface border-ocean-light/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{DASHBOARD_METRICS.newProfiles.toLocaleString()}</div>
                    <div className="text-sm text-ocean-medium">New Profiles (10 days)</div>
                    <Badge variant="outline" className="mt-1 text-xs">Last 10 days</Badge>
                  </div>
                </Card>
                <Card className="p-4 bg-ocean-surface border-ocean-light/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{DASHBOARD_METRICS.dataQuality}%</div>
                    <div className="text-sm text-ocean-medium">Data Quality (QC passed)</div>
                    <Badge variant="default" className="mt-1 text-xs bg-green-100 text-green-800">Good</Badge>
                  </div>
                </Card>
                <Card className="p-4 bg-ocean-surface border-ocean-light/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{DASHBOARD_METRICS.globalCoverage}%</div>
                    <div className="text-sm text-ocean-medium">Global Coverage</div>
                    <Badge variant="outline" className="mt-1 text-xs">Ocean basins</Badge>
                  </div>
                </Card>
              </div>

              {/* Regional Data Summary */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-ocean-medium" />
                  Regional Summary
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {REGIONAL_DATA.map((region) => (
                    <Card key={region.region} className="p-4 bg-gradient-to-br from-ocean-surface to-ocean-light/10 border-ocean-light/30">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-medium text-ocean-deep">{region.region}</h5>
                        <Badge 
                          variant={region.trend === 'up' ? 'default' : region.trend === 'down' ? 'destructive' : 'secondary'}
                          className="text-xs"
                        >
                          {region.trend === 'up' ? '↗' : region.trend === 'down' ? '↘' : '→'} {Math.abs(region.changePercent)}%
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Floats:</span>
                          <span className="font-medium">{region.floatCount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Avg Temp:</span>
                          <span className="font-medium">{region.avgTemperature}°C</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Avg Salinity:</span>
                          <span className="font-medium">{region.avgSalinity} PSU</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Avg O₂:</span>
                          <span className="font-medium">{region.avgOxygen} μmol/kg</span>
                        </div>
                      </div>
                    </Card>
                  ))}
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
                <div className="flex space-x-2">
                  <select 
                    className="px-3 py-1 border rounded-md text-sm"
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                  >
                    {REGIONAL_DATA.map(region => (
                      <option key={region.region} value={region.region}>{region.region}</option>
                    ))}
                  </select>
                  <Button variant="outline" size="sm">Float #2902908</Button>
                </div>
              </div>
              
              {/* Float Info */}
              <div className="mb-4 p-4 bg-muted/30 rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Float ID:</span>
                    <p className="font-medium">2902908</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Location:</span>
                    <p className="font-medium">15.67°N, 88.23°E</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Last Profile:</span>
                    <p className="font-medium">26 Sept 2025, 13:20 UTC</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Status:</span>
                    <Badge variant="default" className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                </div>
              </div>
              
              {/* Profile Plot Placeholder with Sample Data */}
              <div 
                id="plotly-profile-container"
                className="w-full h-96 bg-gradient-surface rounded-lg border border-border/20 shadow-depth overflow-hidden"
              >
                <div className="h-full p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-medium">Temperature vs Depth Profile</h4>
                    <div className="text-sm text-muted-foreground">Bay of Bengal • Float #2902908</div>
                  </div>
                  
                  {/* Simulated Chart Data Display */}
                  <div className="grid grid-cols-3 gap-4 h-full">
                    {/* Temperature Profile */}
                    <div className="bg-blue-50 rounded-md p-3">
                      <h5 className="font-medium text-blue-700 mb-2">Temperature (°C)</h5>
                      <div className="space-y-1 text-xs">
                        {SAMPLE_DEPTH_PROFILE.slice(0, 8).map((point, idx) => (
                          <div key={idx} className="flex justify-between">
                            <span>{point.depth}m:</span>
                            <span className="font-medium">{point.temperature}°C</span>
                          </div>
                        ))}
                        <div className="text-center text-muted-foreground mt-2">...</div>
                      </div>
                    </div>
                    
                    {/* Salinity Profile */}
                    <div className="bg-green-50 rounded-md p-3">
                      <h5 className="font-medium text-green-700 mb-2">Salinity (PSU)</h5>
                      <div className="space-y-1 text-xs">
                        {SAMPLE_DEPTH_PROFILE.slice(0, 8).map((point, idx) => (
                          <div key={idx} className="flex justify-between">
                            <span>{point.depth}m:</span>
                            <span className="font-medium">{point.salinity}</span>
                          </div>
                        ))}
                        <div className="text-center text-muted-foreground mt-2">...</div>
                      </div>
                    </div>
                    
                    {/* Oxygen Profile */}
                    <div className="bg-purple-50 rounded-md p-3">
                      <h5 className="font-medium text-purple-700 mb-2">Oxygen (μmol/kg)</h5>
                      <div className="space-y-1 text-xs">
                        {SAMPLE_DEPTH_PROFILE.slice(0, 8).map((point, idx) => (
                          <div key={idx} className="flex justify-between">
                            <span>{point.depth}m:</span>
                            <span className="font-medium">{point.oxygen}</span>
                          </div>
                        ))}
                        <div className="text-center text-muted-foreground mt-2">...</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      Interactive Plotly charts will render here • Max depth: 2000m • 19 data points
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
                  <h3 className="text-lg font-semibold">Time Series & Trends (Last 30 Days)</h3>
                </div>
                <Button variant="outline" size="sm">
                  Export Analysis
                </Button>
              </div>
              
              {/* Trend Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card className="p-4 bg-blue-50 border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-blue-600">Avg Temperature</p>
                      <p className="text-2xl font-bold text-blue-700">19.8°C</p>
                      <p className="text-xs text-blue-500">±0.5°C variation</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                </Card>
                <Card className="p-4 bg-green-50 border-green-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-green-600">Avg Salinity</p>
                      <p className="text-2xl font-bold text-green-700">35.0 PSU</p>
                      <p className="text-xs text-green-500">±0.3 PSU variation</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                </Card>
                <Card className="p-4 bg-purple-50 border-purple-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-purple-600">Avg Oxygen</p>
                      <p className="text-2xl font-bold text-purple-700">213.2 μmol/kg</p>
                      <p className="text-xs text-purple-500">±4.8 μmol/kg variation</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </div>
                </Card>
              </div>
              
              {/* Comparison Chart with Sample Data */}
              <div 
                id="plotly-comparison-container"
                className="w-full h-96 bg-gradient-surface rounded-lg border border-border/20 shadow-depth overflow-hidden"
              >
                <div className="h-full p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-medium">30-Day Trend Analysis</h4>
                    <div className="text-sm text-muted-foreground">Global Average • All Active Floats</div>
                  </div>
                  
                  {/* Simulated Trend Data */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div className="font-medium text-muted-foreground">Date</div>
                      <div className="font-medium text-blue-600">Temperature (°C)</div>
                      <div className="font-medium text-green-600">Salinity (PSU)</div>
                      <div className="font-medium text-purple-600">Profiles Count</div>
                    </div>
                    
                    <div className="max-h-64 overflow-y-auto space-y-1">
                      {TREND_DATA.slice(-10).map((trend, idx) => (
                        <div key={idx} className="grid grid-cols-4 gap-4 text-sm py-1 hover:bg-muted/20 rounded">
                          <div className="text-muted-foreground">{new Date(trend.date).toLocaleDateString()}</div>
                          <div className="text-blue-700 font-medium">{trend.temperature}</div>
                          <div className="text-green-700 font-medium">{trend.salinity}</div>
                          <div className="text-purple-700 font-medium">{trend.profileCount.toLocaleString()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      Interactive time-series plots will render here • Plotly/D3.js charts • Multi-variable correlation
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Recent Alerts & Notifications */}
            <Card className="p-6 shadow-ocean">
              <div className="flex items-center space-x-2 mb-4">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                <h3 className="text-lg font-semibold">Recent Alerts & Notifications</h3>
                <Badge variant="secondary">{NOTIFICATIONS.length}</Badge>
              </div>
              
              <div className="space-y-3">
                {getRecentAlerts(5).map((alert) => (
                  <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/20 border-l-4 border-l-blue-400">
                    <div className="flex-shrink-0 mt-1">
                      {alert.type === 'critical' && <AlertTriangle className="h-4 w-4 text-red-500" />}
                      {alert.type === 'warning' && <AlertTriangle className="h-4 w-4 text-orange-500" />}
                      {alert.type === 'info' && <CheckCircle className="h-4 w-4 text-blue-500" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-sm">{alert.title}</p>
                        <div className="flex items-center space-x-2">
                          {alert.region && <Badge variant="outline" className="text-xs">{alert.region}</Badge>}
                          <span className="text-xs text-muted-foreground flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {new Date(alert.timestamp).toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{alert.message}</p>
                      {alert.floatId && (
                        <Badge variant="secondary" className="mt-2 text-xs">Float #{alert.floatId}</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Measurements Tab */}
          <TabsContent value="measurements" className="mt-6 space-y-4">
            <MeasurementTable />
          </TabsContent>
        </Tabs>
        
        {/* Footer with Data Sources */}
        <div className="mt-8 border-t border-border pt-6">
          <Card className="p-4 bg-muted/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-sm text-muted-foreground">DATA SOURCES</h4>
                <div className="space-y-1 text-xs text-muted-foreground">
                  {DATA_SOURCES.sources.map((source, idx) => (
                    <div key={idx}>• {source}</div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-sm text-muted-foreground">CREDITS & INFO</h4>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div>• Team: {DATA_SOURCES.credits.team}</div>
                  <div>• PSID: {DATA_SOURCES.credits.psid}</div>
                  <div>• Version: {DATA_SOURCES.credits.version}</div>
                  <div>• Last Updated: {DATA_SOURCES.credits.lastUpdated}</div>
                  <div>• Total Profiles: {DASHBOARD_METRICS.totalProfiles.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DataDashboard;