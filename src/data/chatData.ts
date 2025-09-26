// Chat Interface Sample Data for FloatChat
// This provides realistic chat interactions and sample queries

export interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  hasCode?: boolean;
  timestamp: Date;
  codeContent?: string;
  codeLanguage?: string;
}

export interface SuggestedQuery {
  id: string;
  category: 'temperature' | 'salinity' | 'oxygen' | 'location' | 'trends';
  question: string;
  description: string;
}

// Sample chat conversations for demonstration
export const SAMPLE_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: '1',
    type: 'assistant',
    content: 'Hello! I\'m your FloatChat AI assistant 🌊 I can help you analyze oceanographic data from Argo floats, generate SQL queries, create visualizations, and answer questions about ocean conditions. What would you like to explore today?',
    timestamp: new Date('2025-09-26T08:00:00Z'),
  },
  {
    id: '2',
    type: 'user',
    content: 'Show me the temperature profile for the Arabian Sea from the latest data',
    timestamp: new Date('2025-09-26T08:01:00Z'),
  },
  {
    id: '3',
    type: 'assistant',
    content: 'I\'ll help you get the latest temperature profiles from the Arabian Sea. Based on our current data, we have 287 active floats in this region. Here\'s the SQL query to fetch the most recent temperature profiles:',
    hasCode: true,
    codeContent: `SELECT 
    f.float_id,
    f.latitude,
    f.longitude,
    p.depth,
    p.temperature,
    p.profile_date
FROM floats f
JOIN profiles p ON f.float_id = p.float_id
WHERE f.latitude BETWEEN 10 AND 25
  AND f.longitude BETWEEN 60 AND 75
  AND p.profile_date >= CURRENT_DATE - INTERVAL '7 days'
  AND p.temperature IS NOT NULL
ORDER BY p.profile_date DESC, p.depth ASC;`,
    codeLanguage: 'sql',
    timestamp: new Date('2025-09-26T08:01:30Z'),
  },
  {
    id: '4',
    type: 'user',
    content: 'What\'s the average oxygen level in the Bay of Bengal compared to last month?',
    timestamp: new Date('2025-09-26T08:05:00Z'),
  },
  {
    id: '5',
    type: 'assistant',
    content: 'Great question! The Bay of Bengal shows interesting seasonal patterns in oxygen levels. Current average is 177.6 μmol/kg compared to 174.2 μmol/kg last month - that\'s a 2% increase. Here\'s the comparative analysis query:',
    hasCode: true,
    codeContent: `WITH current_month AS (
  SELECT AVG(p.oxygen) as avg_oxygen_current
  FROM profiles p
  JOIN floats f ON p.float_id = f.float_id
  WHERE f.latitude BETWEEN 8 AND 22
    AND f.longitude BETWEEN 80 AND 95
    AND p.profile_date >= DATE_TRUNC('month', CURRENT_DATE)
    AND p.oxygen IS NOT NULL
),
previous_month AS (
  SELECT AVG(p.oxygen) as avg_oxygen_prev
  FROM profiles p
  JOIN floats f ON p.float_id = f.float_id
  WHERE f.latitude BETWEEN 8 AND 22
    AND f.longitude BETWEEN 80 AND 95
    AND p.profile_date >= DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
    AND p.profile_date < DATE_TRUNC('month', CURRENT_DATE)
    AND p.oxygen IS NOT NULL
)
SELECT 
  c.avg_oxygen_current,
  p.avg_oxygen_prev,
  ROUND(((c.avg_oxygen_current - p.avg_oxygen_prev) / p.avg_oxygen_prev * 100), 2) as percent_change
FROM current_month c, previous_month p;`,
    codeLanguage: 'sql',
    timestamp: new Date('2025-09-26T08:05:45Z'),
  }
];

// Suggested queries for users
export const SUGGESTED_QUERIES: SuggestedQuery[] = [
  {
    id: 'temp_1',
    category: 'temperature',
    question: 'Show me temperature trends in the Indian Ocean over the last 30 days',
    description: 'Analyze temperature variations and trends across the Indian Ocean basin'
  },
  {
    id: 'sal_1',
    category: 'salinity',
    question: 'Compare salinity levels between Arabian Sea and Bay of Bengal',
    description: 'Regional comparison of salinity measurements between two major basins'
  },
  {
    id: 'oxy_1',
    category: 'oxygen',
    question: 'Find areas with low oxygen concentrations (< 150 μmol/kg)',
    description: 'Identify potential oxygen minimum zones and their geographic distribution'
  },
  {
    id: 'loc_1',
    category: 'location',
    question: 'Which floats are currently active near the Maldives?',
    description: 'Get real-time status of floats in a specific geographic region'
  },
  {
    id: 'trend_1',
    category: 'trends',
    question: 'Show me seasonal patterns in the monsoon regions',
    description: 'Analyze how ocean parameters change during different monsoon seasons'
  },
  {
    id: 'temp_2',
    category: 'temperature',
    question: 'What\'s the thermocline depth in the equatorial Indian Ocean?',
    description: 'Identify the depth where temperature gradient is steepest'
  },
  {
    id: 'sal_2',
    category: 'salinity',
    question: 'Find the saltiest water masses in our current dataset',
    description: 'Locate high-salinity water masses and their characteristics'
  },
  {
    id: 'oxy_2',
    category: 'oxygen',
    question: 'Track oxygen depletion events over time',
    description: 'Monitor areas showing declining oxygen levels over multiple profiles'
  }
];

// Sample AI responses for different types of queries
export const AI_RESPONSES = {
  temperature: [
    "Based on the latest Argo data, I can analyze temperature patterns for you. The average sea surface temperature in your selected region is currently...",
    "Temperature profiles show interesting variations with depth. Let me generate a query to extract the thermal structure...",
    "The thermocline characteristics in this region indicate mixed layer depths of approximately..."
  ],
  salinity: [
    "Salinity measurements from our active floats show distinct water mass characteristics. The average salinity is...",
    "I notice some interesting salinity gradients in your selected area. Here's what the data reveals...",
    "The halocline structure suggests the presence of different water masses with varying salt content..."
  ],
  oxygen: [
    "Oxygen levels are a crucial indicator of ocean health. Current measurements show...",
    "I'm detecting some concerning oxygen depletion patterns. Let me analyze this further...",
    "The dissolved oxygen profiles indicate well-oxygenated surface waters transitioning to..."
  ],
  location: [
    "I can help you track floats in specific geographic regions. Currently active floats in your area include...",
    "Based on the latest GPS positions, here are the floats operating in your region of interest...",
    "Float deployment patterns show good coverage in this area with approximately..."
  ],
  trends: [
    "Long-term trends in ocean parameters are essential for climate monitoring. The data shows...",
    "Seasonal variations in this region typically follow monsoon patterns with...",
    "Comparing current conditions to historical data reveals some interesting changes..."
  ]
};

// Chat interface helper functions
export const getRandomResponse = (category: keyof typeof AI_RESPONSES): string => {
  const responses = AI_RESPONSES[category];
  return responses[Math.floor(Math.random() * responses.length)];
};

export const generateSQLQuery = (userQuery: string): string => {
  // Simple query generation based on keywords
  if (userQuery.toLowerCase().includes('temperature') && userQuery.toLowerCase().includes('arabian')) {
    return `SELECT 
    f.float_id,
    f.latitude,
    f.longitude,
    p.depth,
    p.temperature,
    p.profile_date
FROM floats f
JOIN profiles p ON f.float_id = p.float_id
WHERE f.latitude BETWEEN 10 AND 25
  AND f.longitude BETWEEN 60 AND 75
  AND p.temperature IS NOT NULL
ORDER BY p.profile_date DESC, p.depth ASC;`;
  }
  
  if (userQuery.toLowerCase().includes('oxygen') && userQuery.toLowerCase().includes('bay of bengal')) {
    return `SELECT 
    AVG(p.oxygen) AS avg_oxygen,
    COUNT(*) AS profile_count,
    MIN(p.oxygen) AS min_oxygen,
    MAX(p.oxygen) AS max_oxygen
FROM profiles p
JOIN floats f ON p.float_id = f.float_id
WHERE f.latitude BETWEEN 8 AND 22
  AND f.longitude BETWEEN 80 AND 95
  AND p.oxygen IS NOT NULL
  AND p.profile_date >= CURRENT_DATE - INTERVAL '30 days';`;
  }
  
  // Default query
  return `SELECT 
    f.float_id,
    f.latitude,
    f.longitude,
    p.profile_date,
    p.temperature,
    p.salinity,
    p.oxygen
FROM floats f
JOIN profiles p ON f.float_id = p.float_id
WHERE p.profile_date >= CURRENT_DATE - INTERVAL '7 days'
ORDER BY p.profile_date DESC
LIMIT 100;`;
};

// Advanced Analysis Prompts
export const ADVANCED_PROMPTS = [
  // Climate Research Prompts
  "How has ocean temperature changed in the last decade?",
  "What does the data tell us about El Niño/La Niña impacts?",
  "Show me evidence of ocean acidification in the data",
  "Analyze the relationship between sea surface temperature and depth",
  "What are the implications of changing salinity patterns?",
  
  // Policy Maker Prompts
  "Summarize ocean health indicators for policy briefing",
  "What climate trends should governments be concerned about?",
  "Provide evidence for marine conservation planning",
  "How reliable is our ocean monitoring coverage?",
  "What data do we have on coral reef regions?",
  
  // Student/Educational Prompts
  "Explain how Argo floats work and why they're important",
  "What can we learn from ocean temperature profiles?",
  "How do scientists measure ocean salinity remotely?",
  "Show me the ocean's layered structure with real data",
  "Why is the Southern Ocean so important for climate?",
  
  // Research Scientist Prompts
  "Calculate mixed layer depth from temperature profiles",
  "Show me water mass characteristics in different basins",
  "Identify upwelling zones from the temperature data",
  "Analyze seasonal thermocline variations",
  "Find evidence of deep water formation processes",
  
  // Operational Prompts
  "Which floats need maintenance or replacement?",
  "Show me data gaps in our global coverage",
  "What's the data transmission success rate?",
  "Identify potential sensor calibration issues",
  "Generate quality control summary report"
];

// Visualization Request Prompts
export const VISUALIZATION_PROMPTS = [
  "Create a global map showing float positions colored by temperature",
  "Generate a depth profile chart for the Arabian Sea",
  "Show me a time series of oxygen levels over the past year",
  "Create a comparison chart between two ocean regions",
  "Plot salinity vs temperature for all recent profiles",
  "Generate a histogram of depth measurements",
  "Show seasonal temperature variations as an animation",
  "Create a heatmap of data density by geographic region",
  "Plot the relationship between latitude and surface temperature",
  "Generate box plots showing data quality by region"
];

// Technical/SQL Query Prompts
export const TECHNICAL_PROMPTS = [
  "Write SQL to find all floats active in the last 30 days",
  "Generate a query to calculate average temperature by depth bins",
  "Show me how to join float metadata with profile data",
  "Create a query to identify data outliers using statistical methods",
  "Write SQL to find the deepest measurement for each float",
  "Generate a query to calculate data completeness by region",
  "Show me how to query for specific quality control flags",
  "Create SQL to find floats with the longest operational history",
  "Write a query to calculate seasonal averages by region",
  "Generate SQL to identify floats with sensor drift patterns"
];

// Real-world Application Prompts
export const APPLICATION_PROMPTS = [
  "How can this data help predict monsoon patterns?",
  "What ocean conditions favor tropical cyclone formation?",
  "Show me data relevant to fisheries management",
  "How does ocean warming affect marine ecosystems?",
  "What evidence do we have of changing ocean circulation?",
  "How can shipping routes be optimized using this data?",
  "What ocean conditions indicate drought or flood risk?",
  "Show me data relevant to coral bleaching events",
  "How does ocean data help in tsunami early warning?",
  "What patterns indicate changes in global ocean conveyor belt?"
];

// Export comprehensive conversation starters
export const CONVERSATION_STARTERS = [
  // Basic Queries
  "What are the current ocean conditions in the Arabian Sea?",
  "Show me the latest temperature profiles from Indian Ocean floats",
  "Compare salinity between different ocean basins",
  "Find floats with recent oxygen measurements",
  
  // Trend Analysis
  "Generate a report on Bay of Bengal water masses",
  "What seasonal patterns do you see in the data?",
  "Show me floats that haven't reported in the last week",
  "Create a visualization of temperature vs depth profiles",
  
  // Advanced Analysis
  "Identify ocean areas showing significant warming trends",
  "Analyze water mass mixing in the equatorial regions",
  "Show me evidence of changing ocean circulation patterns",
  "Calculate heat content changes in the upper ocean",
  
  // Educational/Explanatory
  "Explain the difference between temperature and potential temperature",
  "How do ocean currents affect global climate?",
  "What makes the Southern Ocean unique in global circulation?",
  "Why do we measure both salinity and conductivity?",
  
  // Policy/Management
  "Provide an ocean health assessment for the Indian Ocean",
  "What data supports marine protected area planning?",
  "Show me regions most vulnerable to climate change",
  "Generate alerts for unusual ocean conditions"
];

// Comprehensive prompt categories for UI
export const PROMPT_CATEGORIES = {
  basic: {
    title: "Basic Ocean Queries",
    description: "Simple questions about current ocean conditions",
    prompts: CONVERSATION_STARTERS.slice(0, 8)
  },
  advanced: {
    title: "Advanced Analysis",
    description: "Complex scientific analysis and research questions",
    prompts: ADVANCED_PROMPTS.slice(0, 10)
  },
  visualization: {
    title: "Data Visualization",
    description: "Requests for charts, maps, and visual analysis",
    prompts: VISUALIZATION_PROMPTS.slice(0, 8)
  },
  technical: {
    title: "Technical Queries",
    description: "SQL queries and technical data access",
    prompts: TECHNICAL_PROMPTS.slice(0, 8)
  },
  applications: {
    title: "Real-World Applications",
    description: "Practical applications for policy and management",
    prompts: APPLICATION_PROMPTS.slice(0, 8)
  }
};