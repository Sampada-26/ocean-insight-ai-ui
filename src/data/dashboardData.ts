// FloatChat Dashboard - Comprehensive Hardcoded Data
// This provides realistic ocean data for proper dashboard illustration

export interface FloatData {
  id: string;
  latitude: number;
  longitude: number;
  region: string;
  lastProfile: string;
  status: 'active' | 'inactive' | 'warning';
  depth: number;
  temperature: number;
  salinity: number;
  oxygen: number;
  qcFlag: 'good' | 'questionable' | 'bad';
}

export interface DashboardMetrics {
  activeFloats: number;
  newProfiles: number;
  dataQuality: number;
  lastUpdate: string;
  totalProfiles: number;
  globalCoverage: number;
}

export interface RegionalData {
  region: string;
  floatCount: number;
  avgTemperature: number;
  avgSalinity: number;
  avgOxygen: number;
  trend: 'up' | 'down' | 'stable';
  changePercent: number;
}

export interface TrendData {
  date: string;
  temperature: number;
  salinity: number;
  oxygen: number;
  profileCount: number;
}

export interface AlertNotification {
  id: string;
  type: 'warning' | 'info' | 'critical';
  title: string;
  message: string;
  timestamp: string;
  region?: string;
  floatId?: string;
}

export interface DepthProfile {
  depth: number;
  temperature: number;
  salinity: number;
  oxygen: number;
  pressure: number;
}

export interface OceanMeasurement {
  latitude: number;
  longitude: number;
  pressureMin: number;
  pressureMax: number;
  pressureCount: number;
  temperature: number;
}

// Key Dashboard Metrics
export const DASHBOARD_METRICS: DashboardMetrics = {
  activeFloats: 4120,
  newProfiles: 12500,
  dataQuality: 94.2,
  lastUpdate: "26 Sept 2025 - 14:30 UTC",
  totalProfiles: 2847639,
  globalCoverage: 87.3
};

// Sample Float Data (representing active Argo floats globally)
export const SAMPLE_FLOATS: FloatData[] = [
  // Arabian Sea Region
  {
    id: "2902905",
    latitude: 18.45,
    longitude: 65.32,
    region: "Arabian Sea",
    lastProfile: "2025-09-26T12:15:00Z",
    status: "active",
    depth: 1850,
    temperature: 24.8,
    salinity: 36.2,
    oxygen: 165.4,
    qcFlag: "good"
  },
  {
    id: "2902906",
    latitude: 20.12,
    longitude: 67.89,
    region: "Arabian Sea",
    lastProfile: "2025-09-26T08:30:00Z",
    status: "active",
    depth: 1920,
    temperature: 25.1,
    salinity: 36.4,
    oxygen: 158.7,
    qcFlag: "good"
  },
  {
    id: "2902907",
    latitude: 16.78,
    longitude: 62.45,
    region: "Arabian Sea",
    lastProfile: "2025-09-25T23:45:00Z",
    status: "warning",
    depth: 1756,
    temperature: 24.3,
    salinity: 36.1,
    oxygen: 142.8,
    qcFlag: "questionable"
  },
  
  // Bay of Bengal Region
  {
    id: "2902908",
    latitude: 15.67,
    longitude: 88.23,
    region: "Bay of Bengal",
    lastProfile: "2025-09-26T13:20:00Z",
    status: "active",
    depth: 2100,
    temperature: 28.9,
    salinity: 33.8,
    oxygen: 178.2,
    qcFlag: "good"
  },
  {
    id: "2902909",
    latitude: 18.34,
    longitude: 85.76,
    region: "Bay of Bengal",
    lastProfile: "2025-09-26T11:10:00Z",
    status: "active",
    depth: 1980,
    temperature: 29.2,
    salinity: 33.5,
    oxygen: 182.1,
    qcFlag: "good"
  },
  {
    id: "2902910",
    latitude: 12.89,
    longitude: 82.45,
    region: "Bay of Bengal",
    lastProfile: "2025-09-26T14:05:00Z",
    status: "active",
    depth: 2250,
    temperature: 28.6,
    salinity: 34.1,
    oxygen: 172.5,
    qcFlag: "good"
  },

  // Southern Ocean Region
  {
    id: "2902911",
    latitude: -45.23,
    longitude: 78.90,
    region: "Southern Ocean",
    lastProfile: "2025-09-26T09:45:00Z",
    status: "active",
    depth: 2800,
    temperature: 4.2,
    salinity: 34.7,
    oxygen: 280.5,
    qcFlag: "good"
  },
  {
    id: "2902912",
    latitude: -42.67,
    longitude: 82.15,
    region: "Southern Ocean",
    lastProfile: "2025-09-26T07:30:00Z",
    status: "active",
    depth: 3200,
    temperature: 3.8,
    salinity: 34.8,
    oxygen: 295.2,
    qcFlag: "good"
  },

  // North Pacific
  {
    id: "2902913",
    latitude: 35.45,
    longitude: 165.23,
    region: "North Pacific",
    lastProfile: "2025-09-26T15:20:00Z",
    status: "active",
    depth: 2450,
    temperature: 18.7,
    salinity: 34.9,
    oxygen: 210.3,
    qcFlag: "good"
  },
  {
    id: "2902914",
    latitude: 28.90,
    longitude: 158.67,
    region: "North Pacific",
    lastProfile: "2025-09-26T10:15:00Z",
    status: "inactive",
    depth: 2100,
    temperature: 22.1,
    salinity: 35.2,
    oxygen: 195.8,
    qcFlag: "good"
  }
];

// Regional Summary Data
export const REGIONAL_DATA: RegionalData[] = [
  {
    region: "Arabian Sea",
    floatCount: 287,
    avgTemperature: 24.9,
    avgSalinity: 36.3,
    avgOxygen: 155.6,
    trend: "down",
    changePercent: -2.3
  },
  {
    region: "Bay of Bengal",
    floatCount: 194,
    avgTemperature: 28.8,
    avgSalinity: 33.8,
    avgOxygen: 177.6,
    trend: "stable",
    changePercent: 0.8
  },
  {
    region: "Southern Ocean",
    floatCount: 523,
    avgTemperature: 4.1,
    avgSalinity: 34.7,
    avgOxygen: 287.9,
    trend: "up",
    changePercent: 3.2
  },
  {
    region: "North Pacific",
    floatCount: 1456,
    avgTemperature: 19.8,
    avgSalinity: 35.0,
    avgOxygen: 203.5,
    trend: "stable",
    changePercent: -0.2
  },
  {
    region: "North Atlantic",
    floatCount: 892,
    avgTemperature: 15.2,
    avgSalinity: 35.8,
    avgOxygen: 245.1,
    trend: "up",
    changePercent: 1.7
  },
  {
    region: "South Pacific",
    floatCount: 768,
    avgTemperature: 12.4,
    avgSalinity: 34.6,
    avgOxygen: 225.3,
    trend: "down",
    changePercent: -1.1
  }
];

// 30-day Trend Data
export const TREND_DATA: TrendData[] = [
  { date: "2025-08-27", temperature: 19.2, salinity: 34.8, oxygen: 215.3, profileCount: 11800 },
  { date: "2025-08-29", temperature: 19.4, salinity: 34.9, oxygen: 214.8, profileCount: 12100 },
  { date: "2025-08-31", temperature: 19.1, salinity: 34.7, oxygen: 216.1, profileCount: 11950 },
  { date: "2025-09-02", temperature: 19.6, salinity: 35.0, oxygen: 213.9, profileCount: 12300 },
  { date: "2025-09-04", temperature: 19.8, salinity: 35.1, oxygen: 212.7, profileCount: 12450 },
  { date: "2025-09-06", temperature: 19.5, salinity: 34.8, oxygen: 214.2, profileCount: 12200 },
  { date: "2025-09-08", temperature: 19.9, salinity: 35.2, oxygen: 211.8, profileCount: 12580 },
  { date: "2025-09-10", temperature: 20.1, salinity: 35.0, oxygen: 213.4, profileCount: 12650 },
  { date: "2025-09-12", temperature: 19.7, salinity: 34.9, oxygen: 215.0, profileCount: 12400 },
  { date: "2025-09-14", temperature: 20.3, salinity: 35.3, oxygen: 210.6, profileCount: 12750 },
  { date: "2025-09-16", temperature: 20.0, salinity: 35.1, oxygen: 212.9, profileCount: 12600 },
  { date: "2025-09-18", temperature: 19.8, salinity: 34.8, oxygen: 214.7, profileCount: 12350 },
  { date: "2025-09-20", temperature: 20.2, salinity: 35.2, oxygen: 211.3, profileCount: 12800 },
  { date: "2025-09-22", temperature: 20.4, salinity: 35.4, oxygen: 209.8, profileCount: 12900 },
  { date: "2025-09-24", temperature: 20.1, salinity: 35.0, oxygen: 213.1, profileCount: 12700 },
  { date: "2025-09-26", temperature: 19.9, salinity: 34.9, oxygen: 214.5, profileCount: 12500 }
];

// Alert Notifications
export const NOTIFICATIONS: AlertNotification[] = [
  {
    id: "alert_001",
    type: "info",
    title: "New Float Deployed",
    message: "Float #2902920 successfully deployed in Bay of Bengal (16.45°N, 86.78°E)",
    timestamp: "2025-09-26T13:45:00Z",
    region: "Bay of Bengal",
    floatId: "2902920"
  },
  {
    id: "alert_002",
    type: "warning",
    title: "Sensor Drift Detected",
    message: "Possible salinity sensor drift in Float #2902907. QC flags updated.",
    timestamp: "2025-09-26T11:20:00Z",
    region: "Arabian Sea",
    floatId: "2902907"
  },
  {
    id: "alert_003",
    type: "critical",
    title: "Oxygen Level Alert",
    message: "Arabian Sea oxygen levels dropped 5% in the last 30 days - monitoring required",
    timestamp: "2025-09-26T08:15:00Z",
    region: "Arabian Sea"
  },
  {
    id: "alert_004",
    type: "info",
    title: "Data Processing Complete",
    message: "Daily processing completed: 12,500 profiles validated and uploaded to GDAC",
    timestamp: "2025-09-26T06:30:00Z"
  },
  {
    id: "alert_005",
    type: "warning",
    title: "Communication Gap",
    message: "Float #2902914 missed scheduled transmission - last contact 3 days ago",
    timestamp: "2025-09-25T14:20:00Z",
    region: "North Pacific",
    floatId: "2902914"
  }
];

// Sample Depth Profile Data (for Profile Viewer)
export const SAMPLE_DEPTH_PROFILE: DepthProfile[] = [
  { depth: 0, temperature: 29.2, salinity: 33.8, oxygen: 182.1, pressure: 0 },
  { depth: 10, temperature: 29.1, salinity: 33.9, oxygen: 180.5, pressure: 1.0 },
  { depth: 20, temperature: 28.9, salinity: 34.0, oxygen: 178.8, pressure: 2.0 },
  { depth: 30, temperature: 28.5, salinity: 34.1, oxygen: 176.2, pressure: 3.0 },
  { depth: 50, temperature: 27.8, salinity: 34.3, oxygen: 172.6, pressure: 5.1 },
  { depth: 75, temperature: 26.9, salinity: 34.5, oxygen: 168.4, pressure: 7.6 },
  { depth: 100, temperature: 25.7, salinity: 34.8, oxygen: 163.9, pressure: 10.1 },
  { depth: 150, temperature: 23.2, salinity: 35.2, oxygen: 155.7, pressure: 15.2 },
  { depth: 200, temperature: 20.8, salinity: 35.6, oxygen: 148.3, pressure: 20.3 },
  { depth: 300, temperature: 17.4, salinity: 35.9, oxygen: 138.9, pressure: 30.4 },
  { depth: 400, temperature: 14.9, salinity: 35.8, oxygen: 132.5, pressure: 40.6 },
  { depth: 500, temperature: 12.8, salinity: 35.6, oxygen: 128.7, pressure: 50.7 },
  { depth: 600, temperature: 11.2, salinity: 35.4, oxygen: 125.9, pressure: 60.9 },
  { depth: 800, temperature: 8.9, salinity: 35.0, oxygen: 122.3, pressure: 81.2 },
  { depth: 1000, temperature: 7.1, salinity: 34.8, oxygen: 119.8, pressure: 101.5 },
  { depth: 1200, temperature: 5.8, salinity: 34.7, oxygen: 118.2, pressure: 121.8 },
  { depth: 1500, temperature: 4.2, salinity: 34.6, oxygen: 117.5, pressure: 152.3 },
  { depth: 1800, temperature: 3.1, salinity: 34.6, oxygen: 117.8, pressure: 182.7 },
  { depth: 2000, temperature: 2.4, salinity: 34.6, oxygen: 118.4, pressure: 203.0 }
];

// Caribbean Sea/Atlantic Ocean Measurement Data
export const CARIBBEAN_MEASUREMENTS: OceanMeasurement[] = [
  {
    latitude: 16.61493683,
    longitude: -67.30243683,
    pressureMin: 0.4,
    pressureMax: 2022.3,
    pressureCount: 1024,
    temperature: 11.46
  },
  {
    latitude: 16.64294052,
    longitude: -67.29470825,
    pressureMin: 0.3,
    pressureMax: 1839.4,
    pressureCount: 981,
    temperature: 11.656
  },
  {
    latitude: 16.68493652,
    longitude: -67.28493499,
    pressureMin: 0.4,
    pressureMax: 1940.9,
    pressureCount: 982,
    temperature: 11.41
  },
  {
    latitude: 16.73183060,
    longitude: -67.28099823,
    pressureMin: 0.4,
    pressureMax: 1919.6,
    pressureCount: 990,
    temperature: 11.531
  },
  {
    latitude: 16.78118705,
    longitude: -67.27290344,
    pressureMin: 0.3,
    pressureMax: 1900.1,
    pressureCount: 978,
    temperature: 11.552
  },
  {
    latitude: 16.87450981,
    longitude: -67.25473785,
    pressureMin: 0.4,
    pressureMax: 2016.7,
    pressureCount: 1020,
    temperature: 11.686
  },
  {
    latitude: 16.97711181,
    longitude: -67.25085449,
    pressureMin: 0.4,
    pressureMax: 1996.7,
    pressureCount: 1004,
    temperature: 11.588
  },
  {
    latitude: 17.07415199,
    longitude: -67.24897003,
    pressureMin: 0.3,
    pressureMax: 2006.2,
    pressureCount: 1002,
    temperature: 11.624
  },
  {
    latitude: 17.15763092,
    longitude: -67.26374817,
    pressureMin: 0.4,
    pressureMax: 1998.1,
    pressureCount: 1014,
    temperature: 11.795
  },
  {
    latitude: 17.22288703,
    longitude: -67.30921936,
    pressureMin: 0.4,
    pressureMax: 2011.9,
    pressureCount: 1018,
    temperature: 11.728
  },
  {
    latitude: 17.26461792,
    longitude: -67.36209869,
    pressureMin: 0.3,
    pressureMax: 1996.9,
    pressureCount: 1013,
    temperature: 11.825
  },
  {
    latitude: 17.28343391,
    longitude: -67.43362427,
    pressureMin: 0.4,
    pressureMax: 2017.9,
    pressureCount: 1022,
    temperature: 11.758
  },
  {
    latitude: 17.30926895,
    longitude: -67.48382568,
    pressureMin: 0.4,
    pressureMax: 1996.2,
    pressureCount: 1017,
    temperature: 11.813
  },
  {
    latitude: 17.33198928,
    longitude: -67.52412415,
    pressureMin: 0.4,
    pressureMax: 2001.1,
    pressureCount: 1016,
    temperature: 11.279
  },
  {
    latitude: 17.34464073,
    longitude: -67.55323028,
    pressureMin: 0.4,
    pressureMax: 1998.0,
    pressureCount: 1016,
    temperature: 11.501
  },
  {
    latitude: 17.36059761,
    longitude: -67.58626556,
    pressureMin: 0.4,
    pressureMax: 1992.8,
    pressureCount: 1011,
    temperature: 11.729
  },
  {
    latitude: 17.37718582,
    longitude: -67.63383483,
    pressureMin: 0.4,
    pressureMax: 2006.7,
    pressureCount: 1014,
    temperature: 11.735
  },
  {
    latitude: 17.40514183,
    longitude: -67.66533661,
    pressureMin: 0.3,
    pressureMax: 2012.4,
    pressureCount: 1016,
    temperature: 11.756
  },
  {
    latitude: 17.42603874,
    longitude: -67.71547699,
    pressureMin: 0.4,
    pressureMax: 2005.6,
    pressureCount: 998,
    temperature: 11.245
  }
];

// Data Sources and Credits
export const DATA_SOURCES = {
  sources: [
    "Argo Global Data Assembly Centre (GDAC)",
    "Indian National Centre for Ocean Information Services (INCOIS)",
    "Ministry of Earth Sciences (MoES), Government of India",
    "Global Ocean Observing System (GOOS)",
    "World Meteorological Organization (WMO)"
  ],
  credits: {
    team: "Team Ajinkya",
    psid: "25040",
    lastUpdated: "26 September 2025",
    version: "FloatChat v2.1.0"
  }
};

// Export helper functions
export const getFloatsByRegion = (region: string): FloatData[] => {
  return SAMPLE_FLOATS.filter(float => float.region === region);
};

export const getActiveFloatsCount = (): number => {
  return SAMPLE_FLOATS.filter(float => float.status === 'active').length;
};

export const getDataQualityPercentage = (): number => {
  const goodData = SAMPLE_FLOATS.filter(float => float.qcFlag === 'good').length;
  return Math.round((goodData / SAMPLE_FLOATS.length) * 100 * 10) / 10;
};

export const getRecentAlerts = (count: number = 5): AlertNotification[] => {
  return NOTIFICATIONS.slice(0, count);
};