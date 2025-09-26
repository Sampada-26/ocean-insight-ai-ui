import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Thermometer, Gauge, BarChart3 } from "lucide-react";
import { CARIBBEAN_MEASUREMENTS } from "@/data/dashboardData";
import MeasurementVisuals from "./MeasurementVisuals";

const MeasurementTable = () => {
  // Calculate statistics
  const avgTemperature = CARIBBEAN_MEASUREMENTS.reduce((sum, m) => sum + m.temperature, 0) / CARIBBEAN_MEASUREMENTS.length;
  const maxPressure = Math.max(...CARIBBEAN_MEASUREMENTS.map(m => m.pressureMax));
  const totalMeasurements = CARIBBEAN_MEASUREMENTS.reduce((sum, m) => sum + m.pressureCount, 0);

  return (
    <div className="space-y-6">
      <Card className="p-6 shadow-ocean">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-ocean-medium" />
            <h3 className="text-lg font-semibold">Caribbean Sea Measurements</h3>
          </div>
          <Badge variant="outline" className="text-xs">
            {CARIBBEAN_MEASUREMENTS.length} stations
          </Badge>
        </div>

        <Tabs defaultValue="visuals" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="visuals" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Charts & Graphs</span>
            </TabsTrigger>
            <TabsTrigger value="table" className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Data Table</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="visuals" className="mt-6">
            <MeasurementVisuals />
          </TabsContent>

          <TabsContent value="table" className="mt-6 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card className="p-4 bg-ocean-surface border-ocean-light/20">
                <div className="flex items-center space-x-2">
                  <Thermometer className="h-4 w-4 text-orange-500" />
                  <div>
                    <div className="text-lg font-bold text-ocean-deep">{avgTemperature.toFixed(2)}°C</div>
                    <div className="text-sm text-ocean-medium">Avg Temperature</div>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-ocean-surface border-ocean-light/20">
                <div className="flex items-center space-x-2">
                  <Gauge className="h-4 w-4 text-blue-500" />
                  <div>
                    <div className="text-lg font-bold text-ocean-deep">{maxPressure.toFixed(1)}</div>
                    <div className="text-sm text-ocean-medium">Max Pressure (dbar)</div>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-ocean-surface border-ocean-light/20">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-green-500" />
                  <div>
                    <div className="text-lg font-bold text-ocean-deep">{totalMeasurements.toLocaleString()}</div>
                    <div className="text-sm text-ocean-medium">Total Measurements</div>
                  </div>
                </div>
              </Card>
            </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="p-4 bg-ocean-surface border-ocean-light/20">
          <div className="flex items-center space-x-2">
            <Thermometer className="h-4 w-4 text-orange-500" />
            <div>
              <div className="text-lg font-bold text-ocean-deep">{avgTemperature.toFixed(2)}°C</div>
              <div className="text-sm text-ocean-medium">Avg Temperature</div>
            </div>
          </div>
        </Card>
        <Card className="p-4 bg-ocean-surface border-ocean-light/20">
          <div className="flex items-center space-x-2">
            <Gauge className="h-4 w-4 text-blue-500" />
            <div>
              <div className="text-lg font-bold text-ocean-deep">{maxPressure.toFixed(1)}</div>
              <div className="text-sm text-ocean-medium">Max Pressure (dbar)</div>
            </div>
          </div>
        </Card>
        <Card className="p-4 bg-ocean-surface border-ocean-light/20">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-green-500" />
            <div>
              <div className="text-lg font-bold text-ocean-deep">{totalMeasurements.toLocaleString()}</div>
              <div className="text-sm text-ocean-medium">Total Measurements</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Data Table */}
      <div className="rounded-md border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold">Latitude</TableHead>
              <TableHead className="font-semibold">Longitude</TableHead>
              <TableHead className="font-semibold">Pressure Min</TableHead>
              <TableHead className="font-semibold">Pressure Max</TableHead>
              <TableHead className="font-semibold">Pressure Count</TableHead>
              <TableHead className="font-semibold">Temperature (°C)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {CARIBBEAN_MEASUREMENTS.map((measurement, index) => (
              <TableRow key={index} className="hover:bg-muted/50">
                <TableCell className="font-mono text-sm">
                  {measurement.latitude.toFixed(8)}
                </TableCell>
                <TableCell className="font-mono text-sm">
                  {measurement.longitude.toFixed(8)}
                </TableCell>
                <TableCell className="font-mono text-sm">
                  {measurement.pressureMin.toFixed(1)}
                </TableCell>
                <TableCell className="font-mono text-sm">
                  <Badge variant="outline" className="font-mono">
                    {measurement.pressureMax.toFixed(1)}
                  </Badge>
                </TableCell>
                <TableCell className="font-mono text-sm">
                  {measurement.pressureCount.toLocaleString()}
                </TableCell>
                <TableCell className="font-mono text-sm">
                  <div className="flex items-center space-x-1">
                    <Thermometer className="h-3 w-3 text-orange-500" />
                    <span>{measurement.temperature.toFixed(3)}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

            {/* Data Source Info */}
            <div className="mt-4 text-xs text-muted-foreground">
              <p>
                Data collected from Caribbean Sea region (approximately 16.6°N - 17.4°N, 67.2°W - 67.7°W).
                Measurements include pressure range and temperature readings at various oceanic stations.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default MeasurementTable;