import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  TrendingUp, 
  TrendingDown, 
  Download, 
  MessageSquare, 
  Plus, 
  Star,
  StarOff,
  Activity,
  Waves,
  Thermometer,
  Droplets,
  Wind
} from "lucide-react";

interface OceanData {
  id: string;
  name: string;
  region: string;
  temperature: number;
  salinity: number;
  waveHeight: number;
  windSpeed: number;
  trend: 'up' | 'down' | 'stable';
  change: number;
  isWatchlisted: boolean;
}

const mockOceanData: OceanData[] = [
  {
    id: '1',
    name: 'Indian Ocean',
    region: 'Central Basin',
    temperature: 28.5,
    salinity: 34.7,
    waveHeight: 2.1,
    windSpeed: 15.3,
    trend: 'up',
    change: 0.3,
    isWatchlisted: true
  },
  {
    id: '2',
    name: 'Arabian Sea',
    region: 'Northern Indian Ocean',
    temperature: 29.2,
    salinity: 36.2,
    waveHeight: 1.8,
    windSpeed: 12.7,
    trend: 'down',
    change: -0.2,
    isWatchlisted: true
  },
  {
    id: '3',
    name: 'Pacific Ocean',
    region: 'Equatorial Pacific',
    temperature: 27.8,
    salinity: 34.2,
    waveHeight: 2.5,
    windSpeed: 18.1,
    trend: 'stable',
    change: 0.0,
    isWatchlisted: false
  },
  {
    id: '4',
    name: 'Atlantic Ocean',
    region: 'North Atlantic',
    temperature: 24.1,
    salinity: 35.1,
    waveHeight: 3.2,
    windSpeed: 22.4,
    trend: 'up',
    change: 0.5,
    isWatchlisted: false
  },
  {
    id: '5',
    name: 'Bay of Bengal',
    region: 'Northern Indian Ocean',
    temperature: 29.8,
    salinity: 33.5,
    waveHeight: 1.6,
    windSpeed: 14.2,
    trend: 'up',
    change: 0.4,
    isWatchlisted: true
  },
  {
    id: '6',
    name: 'Mediterranean Sea',
    region: 'Central Mediterranean',
    temperature: 23.7,
    salinity: 38.4,
    waveHeight: 1.2,
    windSpeed: 18.9,
    trend: 'stable',
    change: 0.1,
    isWatchlisted: false
  },
  {
    id: '7',
    name: 'Red Sea',
    region: 'Northern Red Sea',
    temperature: 26.3,
    salinity: 40.0,
    waveHeight: 1.1,
    windSpeed: 11.5,
    trend: 'up',
    change: 0.2,
    isWatchlisted: false
  },
  {
    id: '8',
    name: 'Caribbean Sea',
    region: 'Western Caribbean',
    temperature: 28.9,
    salinity: 36.0,
    waveHeight: 1.9,
    windSpeed: 16.7,
    trend: 'down',
    change: -0.1,
    isWatchlisted: true
  },
  {
    id: '9',
    name: 'South China Sea',
    region: 'Central Basin',
    temperature: 28.1,
    salinity: 34.1,
    waveHeight: 2.3,
    windSpeed: 13.8,
    trend: 'stable',
    change: 0.0,
    isWatchlisted: false
  },
  {
    id: '10',
    name: 'Coral Sea',
    region: 'Southwest Pacific',
    temperature: 26.4,
    salinity: 35.4,
    waveHeight: 2.8,
    windSpeed: 19.3,
    trend: 'up',
    change: 0.3,
    isWatchlisted: false
  },
  {
    id: '11',
    name: 'Tasman Sea',
    region: 'Southwest Pacific',
    temperature: 21.2,
    salinity: 35.2,
    waveHeight: 3.5,
    windSpeed: 25.1,
    trend: 'down',
    change: -0.4,
    isWatchlisted: false
  },
  {
    id: '12',
    name: 'Bering Sea',
    region: 'North Pacific',
    temperature: 8.7,
    salinity: 32.8,
    waveHeight: 4.1,
    windSpeed: 28.6,
    trend: 'up',
    change: 0.6,
    isWatchlisted: true
  },
  {
    id: '13',
    name: 'Gulf of Mexico',
    region: 'Northwestern Gulf',
    temperature: 27.5,
    salinity: 36.5,
    waveHeight: 1.7,
    windSpeed: 14.9,
    trend: 'stable',
    change: 0.1,
    isWatchlisted: false
  },
  {
    id: '14',
    name: 'North Sea',
    region: 'Central North Sea',
    temperature: 12.8,
    salinity: 35.0,
    waveHeight: 2.9,
    windSpeed: 21.7,
    trend: 'down',
    change: -0.3,
    isWatchlisted: false
  },
  {
    id: '15',
    name: 'Baltic Sea',
    region: 'Central Baltic',
    temperature: 15.6,
    salinity: 7.8,
    waveHeight: 1.4,
    windSpeed: 17.2,
    trend: 'up',
    change: 0.2,
    isWatchlisted: false
  }
];

const DashboardPage = () => {
  const navigate = useNavigate();
  const [oceanData, setOceanData] = useState<OceanData[]>(mockOceanData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('watchlist');
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setOceanData(prev => 
        prev.map(item => ({
          ...item,
          temperature: Number((item.temperature + (Math.random() - 0.5) * 0.2).toFixed(1)),
          waveHeight: Number((item.waveHeight + (Math.random() - 0.5) * 0.1).toFixed(1)),
          windSpeed: Number((item.windSpeed + (Math.random() - 0.5) * 1.0).toFixed(1)),
          change: Number(((Math.random() - 0.5) * 1.0).toFixed(1)),
          trend: Math.random() > 0.6 ? 'up' : Math.random() > 0.3 ? 'down' : 'stable'
        }))
      );
      setLastUpdated(new Date());
    }, 15000); // Update every 15 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleWatchlist = (id: string) => {
    setOceanData(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, isWatchlisted: !item.isWatchlisted }
          : item
      )
    );
  };

  const filteredData = oceanData.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const watchlistedData = filteredData.filter(item => item.isWatchlisted);

  const handleExportCSV = () => {
    // CSV export logic with comprehensive data
    const csvContent = [
      ['Name', 'Region', 'Temperature (°C)', 'Salinity (PSU)', 'Wave Height (m)', 'Wind Speed (km/h)', 'Trend', '24h Change', 'Status', 'Timestamp'].join(','),
      ...filteredData.map(item => 
        [
          `"${item.name}"`, 
          `"${item.region}"`, 
          item.temperature, 
          item.salinity, 
          item.waveHeight, 
          item.windSpeed, 
          item.trend,
          item.change,
          item.isWatchlisted ? 'Watchlisted' : 'Not Watchlisted',
          new Date().toISOString()
        ].join(',')
      )
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ocean-data-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleExportNetCDF = () => {
    // NetCDF export simulation with sample data structure
    const netcdfData = {
      dimensions: {
        time: filteredData.length,
        location: 1
      },
      variables: {
        temperature: {
          dimensions: ['time', 'location'],
          data: filteredData.map(item => item.temperature),
          units: 'degrees_celsius',
          long_name: 'Sea Surface Temperature'
        },
        salinity: {
          dimensions: ['time', 'location'],
          data: filteredData.map(item => item.salinity),
          units: 'psu',
          long_name: 'Sea Surface Salinity'
        },
        wave_height: {
          dimensions: ['time', 'location'],
          data: filteredData.map(item => item.waveHeight),
          units: 'meters',
          long_name: 'Significant Wave Height'
        },
        wind_speed: {
          dimensions: ['time', 'location'],
          data: filteredData.map(item => item.windSpeed),
          units: 'km/h',
          long_name: 'Wind Speed'
        }
      },
      global_attributes: {
        title: 'Ocean Insight AI - Sample Ocean Data',
        institution: 'Ocean Insight AI',
        source: 'Satellite and buoy observations',
        created: new Date().toISOString()
      }
    };

    // Create a mock NetCDF file as JSON for demonstration
    const jsonContent = JSON.stringify(netcdfData, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ocean-data-${new Date().toISOString().split('T')[0]}.nc.json`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Waves className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Ocean Dashboard</h1>
              <p className="text-gray-600">Monitor and analyze ocean conditions</p>
              <p className="text-xs text-gray-500 mt-1">
                Last updated: {lastUpdated.toLocaleTimeString()} • Live data simulation
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={() => navigate('/chat')}
              className="flex items-center space-x-2"
            >
              <MessageSquare className="h-4 w-4" />
              <span>AI Chat</span>
            </Button>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportCSV}
              >
                <Download className="h-4 w-4 mr-2" />
                CSV
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportNetCDF}
              >
                <Download className="h-4 w-4 mr-2" />
                NetCDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Alerts */}
        <div className="mb-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex items-center space-x-2">
              <Activity className="h-4 w-4 text-blue-600" />
              <p className="text-sm text-blue-800">
                <strong>Live Update:</strong> Bay of Bengal showing increased wave activity • 
                Red Sea temperature rising above seasonal average
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search oceans, regions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="watchlist">
              <Star className="h-4 w-4 mr-2" />
              Watchlist ({watchlistedData.length})
            </TabsTrigger>
            <TabsTrigger value="all">
              <Activity className="h-4 w-4 mr-2" />
              All Data ({filteredData.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="watchlist" className="space-y-4">
            {watchlistedData.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Star className="h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No items in watchlist</h3>
                  <p className="text-gray-600 text-center">
                    Add ocean regions to your watchlist to monitor them closely
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {watchlistedData.map((item) => (
                  <OceanCard
                    key={item.id}
                    data={item}
                    onToggleWatchlist={toggleWatchlist}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredData.map((item) => (
                <OceanCard
                  key={item.id}
                  data={item}
                  onToggleWatchlist={toggleWatchlist}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface OceanCardProps {
  data: OceanData;
  onToggleWatchlist: (id: string) => void;
}

const OceanCard = ({ data, onToggleWatchlist }: OceanCardProps) => {
  const getTrendIcon = () => {
    switch (data.trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Activity className="h-4 w-4 text-gray-600" />;
    }
  };

  const getTrendColor = () => {
    switch (data.trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{data.name}</CardTitle>
            <CardDescription>{data.region}</CardDescription>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onToggleWatchlist(data.id)}
            className="h-8 w-8 p-0"
          >
            {data.isWatchlisted ? (
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            ) : (
              <StarOff className="h-4 w-4 text-gray-400" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center space-x-2">
            <Thermometer className="h-4 w-4 text-red-500" />
            <div>
              <p className="text-sm font-medium">{data.temperature}°C</p>
              <p className="text-xs text-gray-600">Temperature</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Droplets className="h-4 w-4 text-blue-500" />
            <div>
              <p className="text-sm font-medium">{data.salinity} PSU</p>
              <p className="text-xs text-gray-600">Salinity</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Waves className="h-4 w-4 text-cyan-500" />
            <div>
              <p className="text-sm font-medium">{data.waveHeight}m</p>
              <p className="text-xs text-gray-600">Wave Height</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Wind className="h-4 w-4 text-gray-500" />
            <div>
              <p className="text-sm font-medium">{data.windSpeed} km/h</p>
              <p className="text-xs text-gray-600">Wind Speed</p>
            </div>
          </div>
        </div>

        {/* Trend */}
        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center space-x-2">
            {getTrendIcon()}
            <span className={`text-sm font-medium ${getTrendColor()}`}>
              {data.change > 0 ? '+' : ''}{data.change}°C
            </span>
          </div>
          <Badge variant="secondary" className="text-xs">
            24h change
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardPage;