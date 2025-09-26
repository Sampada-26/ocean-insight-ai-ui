// Comprehensive ocean sample data for Ocean Insight AI

export interface OceanStats {
  temperature: number;
  salinity: number;
  waveHeight: number;
  windSpeed: number;
  depth: number;
  ph?: number;
  dissolvedOxygen?: number;
  chlorophyll?: number;
}

export interface OceanTrendData {
  month: string;
  temperature: number;
  salinity: number;
  waveHeight?: number;
  windSpeed?: number;
}

export interface OceanInfo {
  id: string;
  name: string;
  region: string;
  generalInfo: string;
  statistics: OceanStats;
  trendData: OceanTrendData[];
  isWatchlisted?: boolean;
  trend?: 'up' | 'down' | 'stable';
  change?: number;
}

export const SAMPLE_OCEAN_DATA: OceanInfo[] = [
  {
    id: '1',
    name: 'Indian Ocean',
    region: 'Central Basin',
    generalInfo: 'The Indian Ocean is the third-largest ocean, covering approximately 70.56 million km². It\'s bounded by Asia to the north, Africa to the west, Australia to the east, and Antarctica to the south. Known for its warm waters, monsoon weather patterns, and rich marine biodiversity. The ocean plays a crucial role in global climate regulation and supports major shipping routes.',
    statistics: {
      temperature: 28.5,
      salinity: 34.7,
      waveHeight: 2.1,
      windSpeed: 15.3,
      depth: 3741,
      ph: 8.1,
      dissolvedOxygen: 4.5,
      chlorophyll: 0.15
    },
    trendData: [
      { month: 'Jan', temperature: 27.2, salinity: 34.5, waveHeight: 1.9, windSpeed: 14.1 },
      { month: 'Feb', temperature: 27.8, salinity: 34.6, waveHeight: 2.0, windSpeed: 14.8 },
      { month: 'Mar', temperature: 28.1, salinity: 34.7, waveHeight: 2.1, windSpeed: 15.2 },
      { month: 'Apr', temperature: 28.5, salinity: 34.7, waveHeight: 2.2, windSpeed: 15.5 },
      { month: 'May', temperature: 28.8, salinity: 34.8, waveHeight: 2.3, windSpeed: 16.1 },
      { month: 'Jun', temperature: 28.5, salinity: 34.7, waveHeight: 2.1, windSpeed: 15.3 },
      { month: 'Jul', temperature: 28.2, salinity: 34.6, waveHeight: 2.0, windSpeed: 14.9 },
      { month: 'Aug', temperature: 27.9, salinity: 34.5, waveHeight: 1.9, windSpeed: 14.5 },
      { month: 'Sep', temperature: 28.3, salinity: 34.6, waveHeight: 2.0, windSpeed: 15.0 },
      { month: 'Oct', temperature: 28.7, salinity: 34.8, waveHeight: 2.2, windSpeed: 15.8 },
      { month: 'Nov', temperature: 28.4, salinity: 34.7, waveHeight: 2.1, windSpeed: 15.4 },
      { month: 'Dec', temperature: 27.6, salinity: 34.5, waveHeight: 1.9, windSpeed: 14.3 }
    ],
    isWatchlisted: true,
    trend: 'up',
    change: 0.3
  },
  {
    id: '2',
    name: 'Pacific Ocean',
    region: 'Equatorial Pacific',
    generalInfo: 'The Pacific Ocean is the largest and deepest ocean on Earth, covering about 165 million km². It extends from the Arctic Ocean in the north to the Southern Ocean in the south, and is bounded by Asia and Australia in the west and the Americas in the east. The Pacific contains more than half of the free water on Earth and is home to the Ring of Fire.',
    statistics: {
      temperature: 27.8,
      salinity: 34.2,
      waveHeight: 2.5,
      windSpeed: 18.1,
      depth: 4280,
      ph: 8.0,
      dissolvedOxygen: 4.2,
      chlorophyll: 0.12
    },
    trendData: [
      { month: 'Jan', temperature: 26.8, salinity: 34.0, waveHeight: 2.3, windSpeed: 17.2 },
      { month: 'Feb', temperature: 27.1, salinity: 34.1, waveHeight: 2.4, windSpeed: 17.8 },
      { month: 'Mar', temperature: 27.5, salinity: 34.2, waveHeight: 2.5, windSpeed: 18.1 },
      { month: 'Apr', temperature: 27.8, salinity: 34.2, waveHeight: 2.6, windSpeed: 18.5 },
      { month: 'May', temperature: 28.2, salinity: 34.3, waveHeight: 2.7, windSpeed: 19.1 },
      { month: 'Jun', temperature: 28.1, salinity: 34.2, waveHeight: 2.5, windSpeed: 18.1 },
      { month: 'Jul', temperature: 27.9, salinity: 34.1, waveHeight: 2.4, windSpeed: 17.8 },
      { month: 'Aug', temperature: 27.6, salinity: 34.0, waveHeight: 2.3, windSpeed: 17.3 },
      { month: 'Sep', temperature: 27.8, salinity: 34.1, waveHeight: 2.4, windSpeed: 17.9 },
      { month: 'Oct', temperature: 28.0, salinity: 34.2, waveHeight: 2.5, windSpeed: 18.3 },
      { month: 'Nov', temperature: 27.7, salinity: 34.1, waveHeight: 2.4, windSpeed: 17.7 },
      { month: 'Dec', temperature: 27.2, salinity: 34.0, waveHeight: 2.3, windSpeed: 17.1 }
    ],
    isWatchlisted: false,
    trend: 'stable',
    change: 0.0
  },
  {
    id: '3',
    name: 'Atlantic Ocean',
    region: 'North Atlantic',
    generalInfo: 'The Atlantic Ocean is the second-largest ocean, covering about 106 million km². It separates the Old and New Worlds, connecting Europe and Africa with the Americas. The Atlantic is known for its S-shaped basin, the Mid-Atlantic Ridge, and its role in global thermohaline circulation including the Gulf Stream.',
    statistics: {
      temperature: 24.1,
      salinity: 35.1,
      waveHeight: 3.2,
      windSpeed: 22.4,
      depth: 3646,
      ph: 8.1,
      dissolvedOxygen: 5.1,
      chlorophyll: 0.18
    },
    trendData: [
      { month: 'Jan', temperature: 22.5, salinity: 35.3, waveHeight: 3.5, windSpeed: 24.1 },
      { month: 'Feb', temperature: 22.8, salinity: 35.2, waveHeight: 3.4, windSpeed: 23.7 },
      { month: 'Mar', temperature: 23.2, salinity: 35.1, waveHeight: 3.3, windSpeed: 23.2 },
      { month: 'Apr', temperature: 23.8, salinity: 35.0, waveHeight: 3.1, windSpeed: 22.5 },
      { month: 'May', temperature: 24.5, salinity: 35.1, waveHeight: 3.0, windSpeed: 21.8 },
      { month: 'Jun', temperature: 25.1, salinity: 35.2, waveHeight: 2.9, windSpeed: 21.2 },
      { month: 'Jul', temperature: 25.3, salinity: 35.1, waveHeight: 2.8, windSpeed: 20.9 },
      { month: 'Aug', temperature: 25.0, salinity: 35.0, waveHeight: 2.9, windSpeed: 21.1 },
      { month: 'Sep', temperature: 24.6, salinity: 35.1, waveHeight: 3.0, windSpeed: 21.7 },
      { month: 'Oct', temperature: 24.1, salinity: 35.1, waveHeight: 3.2, windSpeed: 22.4 },
      { month: 'Nov', temperature: 23.4, salinity: 35.2, waveHeight: 3.4, windSpeed: 23.1 },
      { month: 'Dec', temperature: 22.9, salinity: 35.3, waveHeight: 3.5, windSpeed: 23.8 }
    ],
    isWatchlisted: false,
    trend: 'up',
    change: 0.5
  },
  {
    id: '4',
    name: 'Arabian Sea',
    region: 'Northern Indian Ocean',
    generalInfo: 'The Arabian Sea is a region of the northern Indian Ocean, bounded by Pakistan and Iran to the north, the Indian Peninsula to the east, and the Arabian Peninsula to the west. It\'s an important maritime trade route and is known for its monsoon patterns, upwelling phenomena, and rich marine life including seasonal blooms.',
    statistics: {
      temperature: 29.2,
      salinity: 36.2,
      waveHeight: 1.8,
      windSpeed: 12.7,
      depth: 2734,
      ph: 8.0,
      dissolvedOxygen: 4.1,
      chlorophyll: 0.22
    },
    trendData: [
      { month: 'Jan', temperature: 28.1, salinity: 36.0, waveHeight: 1.6, windSpeed: 11.2 },
      { month: 'Feb', temperature: 28.5, salinity: 36.1, waveHeight: 1.7, windSpeed: 11.8 },
      { month: 'Mar', temperature: 29.0, salinity: 36.2, waveHeight: 1.8, windSpeed: 12.3 },
      { month: 'Apr', temperature: 29.5, salinity: 36.3, waveHeight: 1.9, windSpeed: 12.9 },
      { month: 'May', temperature: 30.1, salinity: 36.4, waveHeight: 2.0, windSpeed: 13.5 },
      { month: 'Jun', temperature: 29.8, salinity: 36.3, waveHeight: 1.8, windSpeed: 12.7 },
      { month: 'Jul', temperature: 29.2, salinity: 36.1, waveHeight: 1.7, windSpeed: 12.1 },
      { month: 'Aug', temperature: 28.9, salinity: 36.0, waveHeight: 1.6, windSpeed: 11.8 },
      { month: 'Sep', temperature: 29.3, salinity: 36.2, waveHeight: 1.7, windSpeed: 12.4 },
      { month: 'Oct', temperature: 29.7, salinity: 36.3, waveHeight: 1.8, windSpeed: 13.1 },
      { month: 'Nov', temperature: 29.4, salinity: 36.2, waveHeight: 1.8, windSpeed: 12.8 },
      { month: 'Dec', temperature: 28.6, salinity: 36.1, waveHeight: 1.7, windSpeed: 11.9 }
    ],
    isWatchlisted: true,
    trend: 'down',
    change: -0.2
  },
  {
    id: '5',
    name: 'Mediterranean Sea',
    region: 'Central Mediterranean',
    generalInfo: 'The Mediterranean Sea is a sea connected to the Atlantic Ocean, surrounded by the Mediterranean Basin and almost completely enclosed by land. It has played a central role in the history of Western civilization and is known for its unique climate, biodiversity, and cultural significance.',
    statistics: {
      temperature: 23.7,
      salinity: 38.4,
      waveHeight: 1.2,
      windSpeed: 18.9,
      depth: 1500,
      ph: 8.2,
      dissolvedOxygen: 4.8,
      chlorophyll: 0.08
    },
    trendData: [
      { month: 'Jan', temperature: 16.2, salinity: 38.6, waveHeight: 1.5, windSpeed: 21.2 },
      { month: 'Feb', temperature: 16.8, salinity: 38.5, waveHeight: 1.4, windSpeed: 20.8 },
      { month: 'Mar', temperature: 18.5, salinity: 38.4, waveHeight: 1.3, windSpeed: 20.1 },
      { month: 'Apr', temperature: 20.8, salinity: 38.3, waveHeight: 1.2, windSpeed: 19.3 },
      { month: 'May', temperature: 23.5, salinity: 38.2, waveHeight: 1.0, windSpeed: 17.8 },
      { month: 'Jun', temperature: 26.1, salinity: 38.4, waveHeight: 0.9, windSpeed: 16.2 },
      { month: 'Jul', temperature: 27.8, salinity: 38.5, waveHeight: 0.8, windSpeed: 15.1 },
      { month: 'Aug', temperature: 27.9, salinity: 38.6, waveHeight: 0.8, windSpeed: 15.3 },
      { month: 'Sep', temperature: 25.7, salinity: 38.4, waveHeight: 1.0, windSpeed: 17.1 },
      { month: 'Oct', temperature: 22.4, salinity: 38.3, waveHeight: 1.2, windSpeed: 18.9 },
      { month: 'Nov', temperature: 19.1, salinity: 38.4, waveHeight: 1.4, windSpeed: 20.3 },
      { month: 'Dec', temperature: 17.0, salinity: 38.5, waveHeight: 1.5, windSpeed: 21.0 }
    ],
    isWatchlisted: false,
    trend: 'stable',
    change: 0.1
  }
];

// Marine life data
export const MARINE_LIFE_DATA = {
  'Indian Ocean': {
    species: ['Blue Whale', 'Dugong', 'Manta Ray', 'Whale Shark', 'Tuna'],
    biodiversityIndex: 8.7,
    protectedAreas: 45,
    coralReefs: 'High density in Maldives and Seychelles'
  },
  'Pacific Ocean': {
    species: ['Great White Shark', 'Sea Turtle', 'Salmon', 'Dolphin', 'Octopus'],
    biodiversityIndex: 9.2,
    protectedAreas: 127,
    coralReefs: 'Great Barrier Reef and Coral Triangle'
  },
  'Atlantic Ocean': {
    species: ['Humpback Whale', 'Atlantic Cod', 'Sea Bass', 'Lobster', 'Shark'],
    biodiversityIndex: 8.1,
    protectedAreas: 89,
    coralReefs: 'Caribbean and Brazilian coast'
  }
};

// Climate data
export const CLIMATE_PATTERNS = {
  'Indian Ocean': {
    monsoons: 'Strong seasonal patterns affecting weather across South Asia',
    elnino: 'Indian Ocean Dipole affects regional climate',
    currents: 'Agulhas Current, South Equatorial Current'
  },
  'Pacific Ocean': {
    monsoons: 'Asian monsoon system interaction',
    elnino: 'El Niño/La Niña origin, major global climate driver',
    currents: 'Kuroshio Current, California Current, Equatorial Counter Current'
  },
  'Atlantic Ocean': {
    monsoons: 'West African monsoon influence',
    elnino: 'Atlantic Multidecadal Oscillation',
    currents: 'Gulf Stream, Labrador Current, Brazil Current'
  }
};