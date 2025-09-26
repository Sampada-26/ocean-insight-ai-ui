import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  ComposedChart
} from 'recharts';
import { MapPin, Thermometer, Gauge, TrendingUp, BarChart3, Activity, Navigation, Zap } from "lucide-react";
import { CARIBBEAN_MEASUREMENTS } from "@/data/dashboardData";
import GeographicMap from "./GeographicMap";
import PlotlyVisualizations from "./PlotlyVisualizations";

const MeasurementVisuals = () => {
  // Prepare data for charts
  const chartData = CARIBBEAN_MEASUREMENTS.map((measurement, index) => ({
    index: index + 1,
    latitude: measurement.latitude,
    longitude: measurement.longitude,
    temperature: measurement.temperature,
    pressureMin: measurement.pressureMin,
    pressureMax: measurement.pressureMax,
    pressureRange: measurement.pressureMax - measurement.pressureMin,
    pressureCount: measurement.pressureCount,
    location: `${measurement.latitude.toFixed(2)}, ${measurement.longitude.toFixed(2)}`
  }));

  // Calculate statistics
  const avgTemperature = CARIBBEAN_MEASUREMENTS.reduce((sum, m) => sum + m.temperature, 0) / CARIBBEAN_MEASUREMENTS.length;
  const maxPressure = Math.max(...CARIBBEAN_MEASUREMENTS.map(m => m.pressureMax));
  const minTemperature = Math.min(...CARIBBEAN_MEASUREMENTS.map(m => m.temperature));
  const maxTemperature = Math.max(...CARIBBEAN_MEASUREMENTS.map(m => m.temperature));
  const totalMeasurements = CARIBBEAN_MEASUREMENTS.reduce((sum, m) => sum + m.pressureCount, 0);

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-sm text-gray-800">{`Station ${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value.toFixed(3)}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="flex items-center space-x-2">
            <Thermometer className="h-5 w-5 text-blue-600" />
            <div>
              <div className="text-2xl font-bold text-blue-800">{avgTemperature.toFixed(2)}°C</div>
              <div className="text-sm text-blue-600">Avg Temperature</div>
              <div className="text-xs text-blue-500">Range: {minTemperature.toFixed(2)} - {maxTemperature.toFixed(2)}°C</div>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="flex items-center space-x-2">
            <Gauge className="h-5 w-5 text-green-600" />
            <div>
              <div className="text-2xl font-bold text-green-800">{maxPressure.toFixed(1)}</div>
              <div className="text-sm text-green-600">Max Pressure (dbar)</div>
              <div className="text-xs text-green-500">Deep ocean measurements</div>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-purple-600" />
            <div>
              <div className="text-2xl font-bold text-purple-800">{CARIBBEAN_MEASUREMENTS.length}</div>
              <div className="text-sm text-purple-600">Measurement Stations</div>
              <div className="text-xs text-purple-500">Caribbean Sea region</div>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <div className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-orange-600" />
            <div>
              <div className="text-2xl font-bold text-orange-800">{totalMeasurements.toLocaleString()}</div>
              <div className="text-sm text-orange-600">Total Data Points</div>
              <div className="text-xs text-orange-500">Pressure measurements</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <Tabs defaultValue="plotly" className="space-y-4">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="plotly" className="flex items-center space-x-2">
            <Zap className="h-4 w-4" />
            <span className="hidden sm:inline">Plotly 3D</span>
          </TabsTrigger>
          <TabsTrigger value="map" className="flex items-center space-x-2">
            <Navigation className="h-4 w-4" />
            <span className="hidden sm:inline">Map</span>
          </TabsTrigger>
          <TabsTrigger value="temperature" className="flex items-center space-x-2">
            <Thermometer className="h-4 w-4" />
            <span className="hidden sm:inline">Temperature</span>
          </TabsTrigger>
          <TabsTrigger value="pressure" className="flex items-center space-x-2">
            <Gauge className="h-4 w-4" />
            <span className="hidden sm:inline">Pressure</span>
          </TabsTrigger>
          <TabsTrigger value="scatter" className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4" />
            <span className="hidden sm:inline">Correlation</span>
          </TabsTrigger>
          <TabsTrigger value="overview" className="flex items-center space-x-2">
            <BarChart3 className="h-4 w-4" />
            <span className="hidden sm:inline">Overview</span>
          </TabsTrigger>
        </TabsList>

        {/* Plotly 3D Visualizations Tab */}
        <TabsContent value="plotly" className="space-y-4">
          <PlotlyVisualizations />
        </TabsContent>

        {/* Geographic Map Tab */}
        <TabsContent value="map" className="space-y-4">
          <GeographicMap />
        </TabsContent>

        {/* Temperature Analysis */}
        <TabsContent value="temperature" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Thermometer className="h-5 w-5 text-orange-500" />
                <span>Temperature Distribution</span>
              </CardTitle>
              <CardDescription>
                Temperature measurements across Caribbean Sea stations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="index" 
                      tick={{ fontSize: 12 }}
                      label={{ value: 'Station Number', position: 'insideBottom', offset: -5 }}
                    />
                    <YAxis 
                      tick={{ fontSize: 12 }}
                      label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey="temperature" 
                      stroke="#f97316" 
                      fill="#fed7aa" 
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <Badge variant="outline" className="mr-2">Average: {avgTemperature.toFixed(2)}°C</Badge>
                <Badge variant="outline" className="mr-2">Min: {minTemperature.toFixed(2)}°C</Badge>
                <Badge variant="outline">Max: {maxTemperature.toFixed(2)}°C</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pressure Analysis */}
        <TabsContent value="pressure" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Gauge className="h-5 w-5 text-blue-500" />
                  <span>Pressure Range</span>
                </CardTitle>
                <CardDescription>
                  Min and max pressure at each station
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="index" tick={{ fontSize: 10 }} />
                      <YAxis tick={{ fontSize: 10 }} />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="pressureMin" fill="#93c5fd" name="Min Pressure" />
                      <Line 
                        type="monotone" 
                        dataKey="pressureMax" 
                        stroke="#1e40af" 
                        strokeWidth={2}
                        name="Max Pressure"
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-green-500" />
                  <span>Data Coverage</span>
                </CardTitle>
                <CardDescription>
                  Number of measurements per station
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="index" tick={{ fontSize: 10 }} />
                      <YAxis tick={{ fontSize: 10 }} />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar 
                        dataKey="pressureCount" 
                        fill="#10b981" 
                        name="Measurement Count"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Correlation Analysis */}
        <TabsContent value="scatter" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Temperature vs Pressure Range</CardTitle>
                <CardDescription>
                  Relationship between temperature and pressure variation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis 
                        type="number" 
                        dataKey="temperature" 
                        name="Temperature"
                        tick={{ fontSize: 10 }}
                        label={{ value: 'Temperature (°C)', position: 'insideBottom', offset: -5 }}
                      />
                      <YAxis 
                        type="number" 
                        dataKey="pressureRange" 
                        name="Pressure Range"
                        tick={{ fontSize: 10 }}
                        label={{ value: 'Pressure Range (dbar)', angle: -90, position: 'insideLeft' }}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Scatter dataKey="pressureRange" fill="#8b5cf6" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>
                  Latitude vs Longitude plot with temperature color coding
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis 
                        type="number" 
                        dataKey="longitude" 
                        name="Longitude"
                        tick={{ fontSize: 10 }}
                        label={{ value: 'Longitude', position: 'insideBottom', offset: -5 }}
                      />
                      <YAxis 
                        type="number" 
                        dataKey="latitude" 
                        name="Latitude"
                        tick={{ fontSize: 10 }}
                        label={{ value: 'Latitude', angle: -90, position: 'insideLeft' }}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Scatter dataKey="temperature" fill="#f59e0b" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Overview */}
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-purple-500" />
                <span>Multi-Parameter Overview</span>
              </CardTitle>
              <CardDescription>
                Combined view of temperature, pressure, and measurement counts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="index" 
                      tick={{ fontSize: 10 }}
                      label={{ value: 'Station Number', position: 'insideBottom', offset: -5 }}
                    />
                    <YAxis 
                      yAxisId="left" 
                      tick={{ fontSize: 10 }}
                      label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft' }}
                    />
                    <YAxis 
                      yAxisId="right" 
                      orientation="right" 
                      tick={{ fontSize: 10 }}
                      label={{ value: 'Pressure (dbar)', angle: 90, position: 'insideRight' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar 
                      yAxisId="right"
                      dataKey="pressureMax" 
                      fill="#e0e7ff" 
                      name="Max Pressure"
                      opacity={0.7}
                    />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="temperature" 
                      stroke="#f97316" 
                      strokeWidth={3}
                      name="Temperature"
                      dot={{ fill: '#f97316', strokeWidth: 2, r: 4 }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Data Summary */}
      <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-cyan-200">
        <CardHeader>
          <CardTitle className="text-cyan-800">Data Summary</CardTitle>
          <CardDescription className="text-cyan-600">
            Statistical overview of Caribbean Sea measurements
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-cyan-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Geographic Coverage</h4>
              <ul className="space-y-1">
                <li>• Latitude range: {Math.min(...CARIBBEAN_MEASUREMENTS.map(m => m.latitude)).toFixed(2)}° to {Math.max(...CARIBBEAN_MEASUREMENTS.map(m => m.latitude)).toFixed(2)}°N</li>
                <li>• Longitude range: {Math.max(...CARIBBEAN_MEASUREMENTS.map(m => m.longitude)).toFixed(2)}° to {Math.min(...CARIBBEAN_MEASUREMENTS.map(m => m.longitude)).toFixed(2)}°W</li>
                <li>• Region: Caribbean Sea / Western Atlantic</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Measurement Details</h4>
              <ul className="space-y-1">
                <li>• Total stations: {CARIBBEAN_MEASUREMENTS.length}</li>
                <li>• Average depth: ~{(maxPressure / 10).toFixed(0)}m (est. from pressure)</li>
                <li>• Data quality: High precision measurements</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MeasurementVisuals;