// Main Dashboard Overview Data for FloatChat
// This provides comprehensive dashboard metrics and status information

import { DASHBOARD_METRICS, REGIONAL_DATA, NOTIFICATIONS } from './dashboardData';

export interface DashboardOverview {
  totalFloats: number;
  activeFloats: number;
  dailyProfiles: number;
  dataQuality: number;
  globalCoverage: number;
  lastUpdate: string;
  systemStatus: 'operational' | 'maintenance' | 'warning';
  processingQueue: number;
}

export interface QuickStat {
  id: string;
  title: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
  icon: string;
  color: 'blue' | 'green' | 'orange' | 'red' | 'purple';
}

export interface RegionQuickView {
  region: string;
  floatCount: number;
  status: 'normal' | 'warning' | 'critical';
  lastData: string;
  avgTemp: number;
  coverage: number;
}

// Main Dashboard Overview
export const DASHBOARD_OVERVIEW: DashboardOverview = {
  totalFloats: DASHBOARD_METRICS.activeFloats + 892, // Include inactive floats
  activeFloats: DASHBOARD_METRICS.activeFloats,
  dailyProfiles: 3847,
  dataQuality: DASHBOARD_METRICS.dataQuality,
  globalCoverage: DASHBOARD_METRICS.globalCoverage,
  lastUpdate: DASHBOARD_METRICS.lastUpdate,
  systemStatus: 'operational',
  processingQueue: 127
};

// Quick Stats for Dashboard Cards
export const QUICK_STATS: QuickStat[] = [
  {
    id: 'active_floats',
    title: 'Active Floats',
    value: DASHBOARD_METRICS.activeFloats.toLocaleString(),
    change: 2.3,
    trend: 'up',
    icon: 'activity',
    color: 'blue'
  },
  {
    id: 'daily_profiles',
    title: 'Daily Profiles',
    value: '3,847',
    change: 5.7,
    trend: 'up',
    icon: 'trending-up',
    color: 'green'
  },
  {
    id: 'data_quality',
    title: 'Data Quality',
    value: `${DASHBOARD_METRICS.dataQuality}%`,
    change: 0.8,
    trend: 'up',
    icon: 'check-circle',
    color: 'green'
  },
  {
    id: 'coverage',
    title: 'Global Coverage',
    value: `${DASHBOARD_METRICS.globalCoverage}%`,
    change: -0.2,
    trend: 'stable',
    icon: 'globe',
    color: 'purple'
  },
  {
    id: 'alerts',
    title: 'Active Alerts',
    value: NOTIFICATIONS.filter(n => n.type === 'warning' || n.type === 'critical').length.toString(),
    change: -12.5,
    trend: 'down',
    icon: 'alert-triangle',
    color: 'orange'
  },
  {
    id: 'processing',
    title: 'Processing Queue',
    value: '127',
    change: -34.2,
    trend: 'down',
    icon: 'cpu',
    color: 'blue'
  }
];

// Regional Quick View
export const REGION_QUICK_VIEW: RegionQuickView[] = REGIONAL_DATA.map(region => ({
  region: region.region,
  floatCount: region.floatCount,
  status: region.trend === 'down' && Math.abs(region.changePercent) > 3 ? 'warning' : 'normal',
  lastData: '26 Sept 2025, 14:30 UTC',
  avgTemp: region.avgTemperature,
  coverage: Math.round(region.floatCount / 50) // Simple coverage calculation
}));

// Recent Activity Feed
export const RECENT_ACTIVITY = [
  {
    id: '1',
    type: 'deployment',
    title: 'New Float Deployed',
    description: 'Float #2902920 deployed in Bay of Bengal',
    timestamp: '2025-09-26T13:45:00Z',
    location: '16.45°N, 86.78°E'
  },
  {
    id: '2',
    type: 'data',
    title: 'Daily Processing Complete',
    description: '12,500 profiles processed and validated',
    timestamp: '2025-09-26T06:30:00Z',
    location: 'Global'
  },
  {
    id: '3',
    type: 'alert',
    title: 'Sensor Drift Detected',
    description: 'Salinity sensor drift in Float #2902907',
    timestamp: '2025-09-26T11:20:00Z',
    location: 'Arabian Sea'
  },
  {
    id: '4',
    type: 'maintenance',
    title: 'System Maintenance',
    description: 'Scheduled GDAC synchronization completed',
    timestamp: '2025-09-26T04:00:00Z',
    location: 'Infrastructure'
  },
  {
    id: '5',
    type: 'milestone',
    title: 'Data Milestone',
    description: 'Reached 2.8M total profiles in database',
    timestamp: '2025-09-25T18:30:00Z',
    location: 'Global'
  }
];

// System Health Indicators
export const SYSTEM_HEALTH = {
  database: {
    status: 'healthy',
    responseTime: '145ms',
    uptime: '99.97%',
    lastBackup: '2025-09-26T02:00:00Z'
  },
  dataIngestion: {
    status: 'healthy',
    rate: '847 profiles/hour',
    queue: 127,
    errors: 3
  },
  apiService: {
    status: 'healthy',
    requests: '2.4K/hour',
    latency: '89ms',
    availability: '99.95%'
  },
  monitoring: {
    status: 'healthy',
    alerts: 2,
    warnings: 5,
    notifications: 12
  }
};

// Performance Metrics
export const PERFORMANCE_METRICS = {
  dataProcessing: {
    totalProfiles: DASHBOARD_METRICS.totalProfiles,
    processedToday: 3847,
    averageProcessingTime: '2.3 seconds',
    successRate: 98.7
  },
  qualityControl: {
    passedQC: Math.round(DASHBOARD_METRICS.totalProfiles * (DASHBOARD_METRICS.dataQuality / 100)),
    flaggedProfiles: Math.round(DASHBOARD_METRICS.totalProfiles * ((100 - DASHBOARD_METRICS.dataQuality) / 100)),
    manualReview: 1247,
    averageQCTime: '0.8 seconds'
  },
  userActivity: {
    activeUsers: 847,
    queriesProcessed: 1534,
    dataDownloads: 89,
    chatInteractions: 234
  }
};

// Featured Insights
export const FEATURED_INSIGHTS = [
  {
    id: 'temp_anomaly',
    title: 'Temperature Anomaly Detected',
    description: 'Arabian Sea showing 2.3°C above seasonal average',
    severity: 'medium',
    region: 'Arabian Sea',
    impact: 'Regional climate patterns may be affected',
    recommendation: 'Increase monitoring frequency in affected region'
  },
  {
    id: 'oxygen_decline',
    title: 'Oxygen Levels Declining',
    description: '5% decrease in Arabian Sea oxygen over 30 days',
    severity: 'high',
    region: 'Arabian Sea',
    impact: 'Marine ecosystem stress indicators',
    recommendation: 'Alert marine biology research teams'
  },
  {
    id: 'coverage_improvement',
    title: 'Coverage Enhancement',
    description: 'Southern Ocean coverage improved by 3.2%',
    severity: 'low',
    region: 'Southern Ocean',
    impact: 'Better climate model inputs available',
    recommendation: 'Leverage improved data for climate assessments'
  }
];

// Export helper functions
export const getSystemStatus = (): 'operational' | 'warning' | 'critical' => {
  const criticalAlerts = NOTIFICATIONS.filter(n => n.type === 'critical').length;
  const warningAlerts = NOTIFICATIONS.filter(n => n.type === 'warning').length;
  
  if (criticalAlerts > 0) return 'critical';
  if (warningAlerts > 2) return 'warning';
  return 'operational';
};

export const getActiveAlertsCount = (): number => {
  return NOTIFICATIONS.filter(n => n.type === 'warning' || n.type === 'critical').length;
};

export const getLatestActivity = (count: number = 5) => {
  return RECENT_ACTIVITY.slice(0, count);
};