import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation } from "lucide-react";
import { CARIBBEAN_MEASUREMENTS } from "@/data/dashboardData";

const GeographicMap = () => {
  // Calculate bounds for positioning
  const latitudes = CARIBBEAN_MEASUREMENTS.map(m => m.latitude);
  const longitudes = CARIBBEAN_MEASUREMENTS.map(m => m.longitude);
  
  const minLat = Math.min(...latitudes);
  const maxLat = Math.max(...latitudes);
  const minLng = Math.min(...longitudes);
  const maxLng = Math.max(...longitudes);
  
  const latRange = maxLat - minLat;
  const lngRange = maxLng - minLng;

  // Convert coordinates to percentage positions
  const getPosition = (lat: number, lng: number) => {
    const x = ((lng - minLng) / lngRange) * 100;
    const y = ((maxLat - lat) / latRange) * 100; // Invert Y axis for proper map orientation
    return { x, y };
  };

  // Get temperature color
  const getTemperatureColor = (temp: number) => {
    const minTemp = Math.min(...CARIBBEAN_MEASUREMENTS.map(m => m.temperature));
    const maxTemp = Math.max(...CARIBBEAN_MEASUREMENTS.map(m => m.temperature));
    const normalized = (temp - minTemp) / (maxTemp - minTemp);
    
    if (normalized < 0.33) return '#3b82f6'; // Blue for cooler
    if (normalized < 0.66) return '#10b981'; // Green for medium
    return '#f59e0b'; // Orange for warmer
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Navigation className="h-5 w-5 text-blue-500" />
          <span>Geographic Distribution</span>
        </CardTitle>
        <CardDescription>
          Measurement station locations in the Caribbean Sea region
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg border border-blue-300 overflow-hidden">
          {/* Grid lines for reference */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
              {Array.from({ length: 100 }).map((_, i) => (
                <div key={i} className="border border-blue-300"></div>
              ))}
            </div>
          </div>

          {/* Coordinate labels */}
          <div className="absolute top-2 left-2 text-xs text-blue-700 font-mono">
            {maxLat.toFixed(2)}°N, {minLng.toFixed(2)}°W
          </div>
          <div className="absolute bottom-2 right-2 text-xs text-blue-700 font-mono">
            {minLat.toFixed(2)}°N, {maxLng.toFixed(2)}°W
          </div>

          {/* Measurement points */}
          {CARIBBEAN_MEASUREMENTS.map((measurement, index) => {
            const position = getPosition(measurement.latitude, measurement.longitude);
            const color = getTemperatureColor(measurement.temperature);
            
            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                }}
              >
                <div
                  className="w-3 h-3 rounded-full border-2 border-white shadow-lg transition-all duration-200 group-hover:scale-150 group-hover:z-10"
                  style={{ backgroundColor: color }}
                ></div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-20">
                  <div className="bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                    <div className="font-semibold">Station {index + 1}</div>
                    <div>{measurement.latitude.toFixed(4)}°N, {Math.abs(measurement.longitude).toFixed(4)}°W</div>
                    <div>Temp: {measurement.temperature.toFixed(2)}°C</div>
                    <div>Max Pressure: {measurement.pressureMax.toFixed(1)} dbar</div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                </div>
              </div>
            );
          })}

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg p-3 shadow-lg">
            <div className="text-xs font-semibold text-gray-700 mb-2">Temperature Scale</div>
            <div className="flex items-center space-x-2 text-xs">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Cool</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Medium</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span>Warm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Geographic Summary */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <h4 className="font-semibold text-blue-800 text-sm mb-2">Coverage Area</h4>
            <div className="text-xs text-blue-700 space-y-1">
              <div>Latitude: {minLat.toFixed(3)}° to {maxLat.toFixed(3)}°N</div>
              <div>Longitude: {maxLng.toFixed(3)}° to {minLng.toFixed(3)}°W</div>
              <div>Span: ~{((maxLat - minLat) * 111).toFixed(1)} km N-S</div>
              <div>Span: ~{((maxLng - minLng) * 111 * Math.cos(minLat * Math.PI / 180)).toFixed(1)} km E-W</div>
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <h4 className="font-semibold text-green-800 text-sm mb-2">Station Density</h4>
            <div className="text-xs text-green-700 space-y-1">
              <div>Total stations: {CARIBBEAN_MEASUREMENTS.length}</div>
              <div>Average spacing: ~{(((maxLat - minLat) * 111) / CARIBBEAN_MEASUREMENTS.length * 19).toFixed(1)} km</div>
              <div>Region: Caribbean Sea</div>
              <div>Data coverage: High resolution</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GeographicMap;