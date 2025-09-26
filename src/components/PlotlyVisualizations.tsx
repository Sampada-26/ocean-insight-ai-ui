import React from 'react';
import Plot from 'react-plotly.js';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, TrendingUp, MapPin } from "lucide-react";
import { CARIBBEAN_MEASUREMENTS } from "@/data/dashboardData";

const PlotlyVisualizations = () => {
  // Prepare data for 3D Surface Plot
  const prepare3DData = () => {
    const latitudes = CARIBBEAN_MEASUREMENTS.map(m => m.latitude);
    const longitudes = CARIBBEAN_MEASUREMENTS.map(m => m.longitude);
    const pressures = CARIBBEAN_MEASUREMENTS.map(m => m.pressureMax);
    
    return {
      x: longitudes,
      y: latitudes,
      z: pressures,
      type: 'scatter3d',
      mode: 'markers+lines',
      marker: {
        size: 8,
        color: pressures,
        colorscale: 'Viridis',
        showscale: true,
        colorbar: {
          title: 'Pressure (dbar)',
          thickness: 15,
          len: 0.5
        }
      },
      line: {
        color: 'rgba(0,0,0,0.1)',
        width: 2
      },
      name: 'Pressure Measurements'
    };
  };

  // Prepare Temperature vs Pressure Profile Data
  const prepareProfileData = () => {
    // Create depth profile data based on pressure
    const temperatures = CARIBBEAN_MEASUREMENTS.map(m => m.temperature);
    const pressures = CARIBBEAN_MEASUREMENTS.map(m => m.pressureMax);
    const cycles = CARIBBEAN_MEASUREMENTS.map((_, i) => i + 1);
    
    return {
      x: temperatures,
      y: pressures,
      mode: 'markers',
      type: 'scatter',
      marker: {
        size: 8,
        color: cycles,
        colorscale: 'Plasma',
        showscale: true,
        colorbar: {
          title: 'Cycle',
          thickness: 15,
          len: 0.5
        }
      },
      name: 'Temperature vs Pressure'
    };
  };

  // Prepare Geographic Distribution Data
  const prepareGeographicData = () => {
    const latitudes = CARIBBEAN_MEASUREMENTS.map(m => m.latitude);
    const longitudes = CARIBBEAN_MEASUREMENTS.map(m => m.longitude);
    const temperatures = CARIBBEAN_MEASUREMENTS.map(m => m.temperature);
    const pressures = CARIBBEAN_MEASUREMENTS.map(m => m.pressureMax);
    
    const hoverText = CARIBBEAN_MEASUREMENTS.map((m, i) => 
      `Station ${i + 1}<br>` +
      `Lat: ${m.latitude.toFixed(4)}°N<br>` +
      `Lon: ${Math.abs(m.longitude).toFixed(4)}°W<br>` +
      `Temp: ${m.temperature.toFixed(2)}°C<br>` +
      `Max Pressure: ${m.pressureMax.toFixed(1)} dbar`
    );

    return {
      lat: latitudes,
      lon: longitudes,
      mode: 'markers',
      type: 'scattermapbox',
      marker: {
        size: 15,
        color: temperatures,
        colorscale: 'RdYlBu_r',
        showscale: true,
        colorbar: {
          title: 'Temperature (°C)',
          thickness: 15,
          len: 0.5
        }
      },
      text: hoverText,
      hovertemplate: '%{text}<extra></extra>',
      name: 'Measurement Stations'
    };
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="3d-surface" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="3d-surface" className="flex items-center space-x-2">
            <BarChart3 className="h-4 w-4" />
            <span className="hidden sm:inline">3D Surface</span>
          </TabsTrigger>
          <TabsTrigger value="profile" className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4" />
            <span className="hidden sm:inline">T-P Profile</span>
          </TabsTrigger>
          <TabsTrigger value="geographic" className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span className="hidden sm:inline">Geographic Map</span>
          </TabsTrigger>
        </TabsList>

        {/* 3D Surface Plot */}
        <TabsContent value="3d-surface" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-blue-500" />
                <span>3D Pressure Distribution</span>
              </CardTitle>
              <CardDescription>
                3D visualization of pressure measurements across Caribbean Sea coordinates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[600px]">
                <Plot
                  data={[prepare3DData()]}
                  layout={{
                    title: {
                      text: 'Pressure Distribution by Geographic Location',
                      font: { size: 16 }
                    },
                    scene: {
                      xaxis: {
                        title: 'Longitude (°E)',
                        tickformat: '.2f'
                      },
                      yaxis: {
                        title: 'Latitude (°N)',
                        tickformat: '.2f'
                      },
                      zaxis: {
                        title: 'Pressure (dbar)',
                        tickformat: '.1f'
                      },
                      camera: {
                        eye: { x: 1.5, y: 1.5, z: 1.5 }
                      }
                    },
                    margin: { l: 0, r: 0, t: 50, b: 0 },
                    paper_bgcolor: 'rgba(0,0,0,0)',
                    plot_bgcolor: 'rgba(0,0,0,0)'
                  }}
                  config={{
                    displayModeBar: true,
                    responsive: true,
                    displaylogo: false,
                    modeBarButtonsToRemove: ['pan2d', 'lasso2d']
                  }}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className="mt-4">
                <Badge variant="outline" className="mr-2">
                  {CARIBBEAN_MEASUREMENTS.length} measurement stations
                </Badge>
                <Badge variant="outline">
                  Max pressure: {Math.max(...CARIBBEAN_MEASUREMENTS.map(m => m.pressureMax)).toFixed(1)} dbar
                </Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Temperature vs Pressure Profile */}
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-orange-500" />
                <span>Temperature vs Pressure Profile</span>
              </CardTitle>
              <CardDescription>
                Ocean depth profile showing temperature-pressure relationships
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[600px]">
                <Plot
                  data={[prepareProfileData()]}
                  layout={{
                    title: {
                      text: 'Temperature vs Pressure Profile',
                      font: { size: 16 }
                    },
                    xaxis: {
                      title: 'Temperature (°C)',
                      range: [10.5, 12.5],
                      gridcolor: '#e5e5e5'
                    },
                    yaxis: {
                      title: 'Pressure (dbar)',
                      autorange: 'reversed', // Invert Y-axis to show depth increasing downward
                      gridcolor: '#e5e5e5'
                    },
                    plot_bgcolor: '#f8fafc',
                    paper_bgcolor: 'rgba(0,0,0,0)',
                    margin: { l: 80, r: 80, t: 60, b: 80 },
                    hovermode: 'closest'
                  }}
                  config={{
                    displayModeBar: true,
                    responsive: true,
                    displaylogo: false,
                    modeBarButtonsToRemove: ['pan2d', 'lasso2d']
                  }}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p>
                  <strong>Note:</strong> Y-axis is inverted to represent ocean depth. 
                  Higher pressure values indicate deeper ocean layers.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Geographic Distribution Map */}
        <TabsContent value="geographic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-green-500" />
                <span>Geographic Distribution of Measurements</span>
              </CardTitle>
              <CardDescription>
                Interactive map showing measurement station locations with temperature color coding
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[600px]">
                <Plot
                  data={[prepareGeographicData()]}
                  layout={{
                    title: {
                      text: 'Measurement Stations in Caribbean Sea',
                      font: { size: 16 }
                    },
                    mapbox: {
                      style: 'open-street-map',
                      center: {
                        lat: (Math.min(...CARIBBEAN_MEASUREMENTS.map(m => m.latitude)) + 
                             Math.max(...CARIBBEAN_MEASUREMENTS.map(m => m.latitude))) / 2,
                        lon: (Math.min(...CARIBBEAN_MEASUREMENTS.map(m => m.longitude)) + 
                             Math.max(...CARIBBEAN_MEASUREMENTS.map(m => m.longitude))) / 2
                      },
                      zoom: 8
                    },
                    margin: { l: 0, r: 0, t: 50, b: 0 },
                    paper_bgcolor: 'rgba(0,0,0,0)',
                    plot_bgcolor: 'rgba(0,0,0,0)'
                  }}
                  config={{
                    displayModeBar: true,
                    responsive: true,
                    displaylogo: false,
                    modeBarButtonsToRemove: ['pan2d', 'lasso2d']
                  }}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-800 text-sm mb-2">Coverage Statistics</h4>
                  <div className="text-xs text-blue-700 space-y-1">
                    <div>Latitude range: {Math.min(...CARIBBEAN_MEASUREMENTS.map(m => m.latitude)).toFixed(3)}° to {Math.max(...CARIBBEAN_MEASUREMENTS.map(m => m.latitude)).toFixed(3)}°N</div>
                    <div>Longitude range: {Math.max(...CARIBBEAN_MEASUREMENTS.map(m => m.longitude)).toFixed(3)}° to {Math.min(...CARIBBEAN_MEASUREMENTS.map(m => m.longitude)).toFixed(3)}°W</div>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-green-800 text-sm mb-2">Temperature Range</h4>
                  <div className="text-xs text-green-700 space-y-1">
                    <div>Min: {Math.min(...CARIBBEAN_MEASUREMENTS.map(m => m.temperature)).toFixed(3)}°C</div>
                    <div>Max: {Math.max(...CARIBBEAN_MEASUREMENTS.map(m => m.temperature)).toFixed(3)}°C</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PlotlyVisualizations;