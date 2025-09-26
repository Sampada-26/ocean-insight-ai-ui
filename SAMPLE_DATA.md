# Ocean Insight AI - Sample Data Documentation

## Overview
This application now includes comprehensive hardcoded sample data to demonstrate all features without requiring a backend API.

## 🌊 Ocean Data (15 Regions)

### Major Oceans
1. **Indian Ocean** (Central Basin) - 28.5°C, Watchlisted ⭐
2. **Pacific Ocean** (Equatorial Pacific) - 27.8°C  
3. **Atlantic Ocean** (North Atlantic) - 24.1°C

### Regional Seas
4. **Arabian Sea** (Northern Indian Ocean) - 29.2°C, Watchlisted ⭐
5. **Bay of Bengal** (Northern Indian Ocean) - 29.8°C, Watchlisted ⭐
6. **Mediterranean Sea** (Central Mediterranean) - 23.7°C
7. **Red Sea** (Northern Red Sea) - 26.3°C
8. **Caribbean Sea** (Western Caribbean) - 28.9°C, Watchlisted ⭐
9. **South China Sea** (Central Basin) - 28.1°C

### Cold Water Regions
10. **Bering Sea** (North Pacific) - 8.7°C, Watchlisted ⭐
11. **North Sea** (Central North Sea) - 12.8°C
12. **Baltic Sea** (Central Baltic) - 15.6°C
13. **Tasman Sea** (Southwest Pacific) - 21.2°C

### Other Regions
14. **Coral Sea** (Southwest Pacific) - 26.4°C
15. **Gulf of Mexico** (Northwestern Gulf) - 27.5°C

## 📊 Data Points per Region
- **Temperature**: Surface water temperature in °C
- **Salinity**: Salt content in PSU (Practical Salinity Units)
- **Wave Height**: Average wave height in meters
- **Wind Speed**: Surface wind speed in km/h
- **Depth**: Average depth in meters
- **pH**: Acidity level (where available)
- **Dissolved Oxygen**: O2 content in mg/L
- **Trend**: Up/Down/Stable indicators
- **24h Change**: Recent temperature change

## 📈 Historical Data
Each ocean region includes 12 months of trend data showing:
- Monthly temperature variations
- Salinity changes throughout the year
- Wave height patterns (for some regions)
- Wind speed variations (for some regions)

## 🤖 Chat AI Responses

### Ocean Information Queries
- "show me data of indian ocean" → Full stats + trends + charts
- "tell me about pacific ocean" → Comprehensive data
- "bay of bengal information" → Regional details
- "red sea data" → Specialized info

### Comparison Queries
- "compare indian ocean with arabian sea" → Side-by-side charts
- "compare pacific and atlantic ocean" → Statistical comparison

### Special Topics
- "marine life" → Biodiversity data for all oceans
- "climate patterns" → Weather and climate info
- "pollution levels" → Environmental status

## 🔄 Real-time Simulation
- **Live Updates**: Data refreshes every 15 seconds
- **Dynamic Changes**: Temperature, wave height, wind speed vary slightly
- **Trend Indicators**: Change between up/down/stable status
- **Last Updated**: Timestamp shown in dashboard header

## 📁 Export Features

### CSV Export
- Comprehensive tabular data with timestamps
- Includes all metrics and watchlist status
- Filename includes current date

### NetCDF Export
- Structured scientific data format (JSON simulation)
- Includes dimensions, variables, and metadata
- Ready for oceanographic analysis tools

### JSON Export (Chat)
- Conversation data with charts and statistics
- Preserves query context and responses

## 🎯 Interactive Features

### Dashboard
- **Watchlist**: Star/unstar functionality (5 items currently watchlisted)
- **Search**: Filter by ocean name or region
- **Tabs**: Switch between "Watchlist" and "All Data"
- **Real-time alerts**: Notifications about data patterns
- **Live updates**: Automatic data refresh simulation

### Chat Interface
- **ChatGPT-style**: Clean conversation flow
- **Rich responses**: Text + charts + statistics
- **Export options**: Download conversation data
- **Interactive queries**: Natural language processing simulation

## 🌐 Sample Scenarios to Test

1. **Landing Page**: Choose Direct Access or Login
2. **Dashboard**: Browse ocean data, add to watchlist
3. **Chat Queries**:
   - "show me data of indian ocean"
   - "compare it with arabian sea"
   - "tell me about marine life"
   - "what about bay of bengal?"
4. **Export Data**: Try CSV and NetCDF downloads
5. **Live Updates**: Watch data change in real-time

## 🔧 Technical Implementation
- **React TypeScript** with comprehensive type definitions
- **Recharts** for interactive visualizations
- **Real-time simulation** using setInterval
- **LocalStorage ready** for persistent watchlists
- **Mobile responsive** design

The application now provides a complete demonstration of ocean data analysis capabilities without requiring any external APIs or backend services.