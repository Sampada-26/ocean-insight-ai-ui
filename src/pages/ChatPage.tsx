import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  Bot, 
  User, 
  BarChart3, 
  Download, 
  ArrowLeft, 
  Waves,
  TrendingUp,
  TrendingDown,
  Activity
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  data?: OceanQueryData;
  comparisonData?: ComparisonData;
}

interface OceanQueryData {
  name: string;
  region: string;
  generalInfo: string;
  statistics: {
    temperature: number;
    salinity: number;
    waveHeight: number;
    windSpeed: number;
    depth: number;
  };
  trendData: Array<{
    month: string;
    temperature: number;
    salinity: number;
  }>;
}

interface ComparisonData {
  ocean1: OceanQueryData;
  ocean2: OceanQueryData;
  differences: {
    temperature: number;
    salinity: number;
    waveHeight: number;
    windSpeed: number;
  };
}

const ChatPage = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! I\'m your Ocean Insight AI assistant. Ask me about ocean data, request comparisons, or get statistical information about any ocean region. What would you like to explore?',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue.toLowerCase();
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response with ocean data
    setTimeout(() => {
      let assistantMessage: Message;

      if (currentInput.includes('indian ocean')) {
        assistantMessage = {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          content: 'Here\'s the comprehensive data for the Indian Ocean:',
          timestamp: new Date(),
          data: {
            name: 'Indian Ocean',
            region: 'Central Basin',
            generalInfo: 'The Indian Ocean is the third-largest ocean, covering approximately 70.56 million km². It\'s bounded by Asia to the north, Africa to the west, Australia to the east, and Antarctica to the south. Known for its warm waters, monsoon weather patterns, and rich marine biodiversity. The ocean plays a crucial role in global climate regulation and supports major shipping routes.',
            statistics: {
              temperature: 28.5,
              salinity: 34.7,
              waveHeight: 2.1,
              windSpeed: 15.3,
              depth: 3741
            },
            trendData: [
              { month: 'Jan', temperature: 27.2, salinity: 34.5 },
              { month: 'Feb', temperature: 27.8, salinity: 34.6 },
              { month: 'Mar', temperature: 28.1, salinity: 34.7 },
              { month: 'Apr', temperature: 28.5, salinity: 34.7 },
              { month: 'May', temperature: 28.8, salinity: 34.8 },
              { month: 'Jun', temperature: 28.5, salinity: 34.7 },
              { month: 'Jul', temperature: 28.2, salinity: 34.6 },
              { month: 'Aug', temperature: 27.9, salinity: 34.5 },
              { month: 'Sep', temperature: 28.3, salinity: 34.6 },
              { month: 'Oct', temperature: 28.7, salinity: 34.8 },
              { month: 'Nov', temperature: 28.4, salinity: 34.7 },
              { month: 'Dec', temperature: 27.6, salinity: 34.5 }
            ]
          }
        };
      } else if (currentInput.includes('pacific ocean')) {
        assistantMessage = {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          content: 'Here\'s detailed information about the Pacific Ocean:',
          timestamp: new Date(),
          data: {
            name: 'Pacific Ocean',
            region: 'Equatorial Pacific',
            generalInfo: 'The Pacific Ocean is the largest and deepest ocean on Earth, covering about 165 million km². It extends from the Arctic Ocean in the north to the Southern Ocean in the south, and is bounded by Asia and Australia in the west and the Americas in the east. The Pacific contains more than half of the free water on Earth.',
            statistics: {
              temperature: 27.8,
              salinity: 34.2,
              waveHeight: 2.5,
              windSpeed: 18.1,
              depth: 4280
            },
            trendData: [
              { month: 'Jan', temperature: 26.8, salinity: 34.0 },
              { month: 'Feb', temperature: 27.1, salinity: 34.1 },
              { month: 'Mar', temperature: 27.5, salinity: 34.2 },
              { month: 'Apr', temperature: 27.8, salinity: 34.2 },
              { month: 'May', temperature: 28.2, salinity: 34.3 },
              { month: 'Jun', temperature: 28.1, salinity: 34.2 },
              { month: 'Jul', temperature: 27.9, salinity: 34.1 },
              { month: 'Aug', temperature: 27.6, salinity: 34.0 },
              { month: 'Sep', temperature: 27.8, salinity: 34.1 },
              { month: 'Oct', temperature: 28.0, salinity: 34.2 },
              { month: 'Nov', temperature: 27.7, salinity: 34.1 },
              { month: 'Dec', temperature: 27.2, salinity: 34.0 }
            ]
          }
        };
      } else if (currentInput.includes('atlantic ocean')) {
        assistantMessage = {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          content: 'Here\'s comprehensive data for the Atlantic Ocean:',
          timestamp: new Date(),
          data: {
            name: 'Atlantic Ocean',
            region: 'North Atlantic',
            generalInfo: 'The Atlantic Ocean is the second-largest ocean, covering about 106 million km². It separates the Old and New Worlds, connecting Europe and Africa with the Americas. The Atlantic is known for its S-shaped basin, the Mid-Atlantic Ridge, and its role in global thermohaline circulation.',
            statistics: {
              temperature: 24.1,
              salinity: 35.1,
              waveHeight: 3.2,
              windSpeed: 22.4,
              depth: 3646
            },
            trendData: [
              { month: 'Jan', temperature: 22.5, salinity: 35.3 },
              { month: 'Feb', temperature: 22.8, salinity: 35.2 },
              { month: 'Mar', temperature: 23.2, salinity: 35.1 },
              { month: 'Apr', temperature: 23.8, salinity: 35.0 },
              { month: 'May', temperature: 24.5, salinity: 35.1 },
              { month: 'Jun', temperature: 25.1, salinity: 35.2 },
              { month: 'Jul', temperature: 25.3, salinity: 35.1 },
              { month: 'Aug', temperature: 25.0, salinity: 35.0 },
              { month: 'Sep', temperature: 24.6, salinity: 35.1 },
              { month: 'Oct', temperature: 24.1, salinity: 35.1 },
              { month: 'Nov', temperature: 23.4, salinity: 35.2 },
              { month: 'Dec', temperature: 22.9, salinity: 35.3 }
            ]
          }
        };
      } else if (currentInput.includes('arabian sea') || currentInput.includes('arabic ocean')) {
        assistantMessage = {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          content: 'Here\'s detailed information about the Arabian Sea:',
          timestamp: new Date(),
          data: {
            name: 'Arabian Sea',
            region: 'Northern Indian Ocean',
            generalInfo: 'The Arabian Sea is a region of the northern Indian Ocean, bounded by Pakistan and Iran to the north, the Indian Peninsula to the east, and the Arabian Peninsula to the west. It\'s an important maritime trade route and is known for its monsoon patterns and rich marine life.',
            statistics: {
              temperature: 29.2,
              salinity: 36.2,
              waveHeight: 1.8,
              windSpeed: 12.7,
              depth: 2734
            },
            trendData: [
              { month: 'Jan', temperature: 28.1, salinity: 36.0 },
              { month: 'Feb', temperature: 28.5, salinity: 36.1 },
              { month: 'Mar', temperature: 29.0, salinity: 36.2 },
              { month: 'Apr', temperature: 29.5, salinity: 36.3 },
              { month: 'May', temperature: 30.1, salinity: 36.4 },
              { month: 'Jun', temperature: 29.8, salinity: 36.3 },
              { month: 'Jul', temperature: 29.2, salinity: 36.1 },
              { month: 'Aug', temperature: 28.9, salinity: 36.0 },
              { month: 'Sep', temperature: 29.3, salinity: 36.2 },
              { month: 'Oct', temperature: 29.7, salinity: 36.3 },
              { month: 'Nov', temperature: 29.4, salinity: 36.2 },
              { month: 'Dec', temperature: 28.6, salinity: 36.1 }
            ]
          }
        };
      } else if (currentInput.includes('compare') && (currentInput.includes('arabic') || currentInput.includes('arabian'))) {
        assistantMessage = {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          content: 'Here\'s a detailed comparison between the Indian Ocean and Arabian Sea:',
          timestamp: new Date(),
          comparisonData: {
            ocean1: {
              name: 'Indian Ocean',
              region: 'Central Basin',
              generalInfo: 'The Indian Ocean is the third-largest ocean, covering 70.56 million km² with warm waters and monsoon patterns.',
              statistics: {
                temperature: 28.5,
                salinity: 34.7,
                waveHeight: 2.1,
                windSpeed: 15.3,
                depth: 3741
              },
              trendData: []
            },
            ocean2: {
              name: 'Arabian Sea',
              region: 'Northern Indian Ocean',
              generalInfo: 'The Arabian Sea is a region of the northern Indian Ocean, known for its monsoon patterns and maritime trade routes.',
              statistics: {
                temperature: 29.2,
                salinity: 36.2,
                waveHeight: 1.8,
                windSpeed: 12.7,
                depth: 2734
              },
              trendData: []
            },
            differences: {
              temperature: 0.7,
              salinity: 1.5,
              waveHeight: -0.3,
              windSpeed: -2.6
            }
          }
        };
      } else if (currentInput.includes('compare') && currentInput.includes('pacific')) {
        assistantMessage = {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          content: 'Here\'s a comparison between the Indian Ocean and Pacific Ocean:',
          timestamp: new Date(),
          comparisonData: {
            ocean1: {
              name: 'Indian Ocean',
              region: 'Central Basin',
              generalInfo: 'Third-largest ocean with warm waters and monsoon patterns.',
              statistics: {
                temperature: 28.5,
                salinity: 34.7,
                waveHeight: 2.1,
                windSpeed: 15.3,
                depth: 3741
              },
              trendData: []
            },
            ocean2: {
              name: 'Pacific Ocean',
              region: 'Equatorial Pacific',
              generalInfo: 'Largest and deepest ocean covering about 165 million km².',
              statistics: {
                temperature: 27.8,
                salinity: 34.2,
                waveHeight: 2.5,
                windSpeed: 18.1,
                depth: 4280
              },
              trendData: []
            },
            differences: {
              temperature: -0.7,
              salinity: -0.5,
              waveHeight: 0.4,
              windSpeed: 2.8
            }
          }
        };
      } else if (currentInput.includes('bay of bengal')) {
        assistantMessage = {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          content: 'Here\'s detailed information about the Bay of Bengal:',
          timestamp: new Date(),
          data: {
            name: 'Bay of Bengal',
            region: 'Northern Indian Ocean',
            generalInfo: 'The Bay of Bengal is the largest bay in the world, forming the northeastern part of the Indian Ocean. It\'s bounded by India to the west, Bangladesh to the north, Myanmar to the east, and Sri Lanka to the south. Known for its monsoon patterns, tropical cyclones, and significant freshwater input from major rivers.',
            statistics: {
              temperature: 29.8,
              salinity: 33.5,
              waveHeight: 1.6,
              windSpeed: 14.2,
              depth: 2600
            },
            trendData: [
              { month: 'Jan', temperature: 27.5, salinity: 33.2 },
              { month: 'Feb', temperature: 28.1, salinity: 33.3 },
              { month: 'Mar', temperature: 28.9, salinity: 33.4 },
              { month: 'Apr', temperature: 29.5, salinity: 33.5 },
              { month: 'May', temperature: 30.2, salinity: 33.3 },
              { month: 'Jun', temperature: 29.8, salinity: 33.1 },
              { month: 'Jul', temperature: 29.3, salinity: 33.0 },
              { month: 'Aug', temperature: 29.1, salinity: 33.0 },
              { month: 'Sep', temperature: 29.6, salinity: 33.2 },
              { month: 'Oct', temperature: 30.0, salinity: 33.4 },
              { month: 'Nov', temperature: 29.7, salinity: 33.5 },
              { month: 'Dec', temperature: 28.2, salinity: 33.3 }
            ]
          }
        };
      } else if (currentInput.includes('red sea')) {
        assistantMessage = {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          content: 'Here\'s information about the Red Sea:',
          timestamp: new Date(),
          data: {
            name: 'Red Sea',
            region: 'Northern Red Sea',
            generalInfo: 'The Red Sea is a seawater inlet of the Indian Ocean, lying between Africa and Asia. It\'s connected to the ocean via the Bab el Mandeb strait and the Gulf of Aden. Famous for its exceptional coral reefs, high salinity, and warm temperatures year-round.',
            statistics: {
              temperature: 26.3,
              salinity: 40.0,
              waveHeight: 1.1,
              windSpeed: 11.5,
              depth: 2211
            },
            trendData: [
              { month: 'Jan', temperature: 24.1, salinity: 40.2 },
              { month: 'Feb', temperature: 24.8, salinity: 40.1 },
              { month: 'Mar', temperature: 25.7, salinity: 40.0 },
              { month: 'Apr', temperature: 26.8, salinity: 39.9 },
              { month: 'May', temperature: 28.2, salinity: 40.0 },
              { month: 'Jun', temperature: 29.1, salinity: 40.1 },
              { month: 'Jul', temperature: 29.3, salinity: 40.2 },
              { month: 'Aug', temperature: 29.0, salinity: 40.1 },
              { month: 'Sep', temperature: 28.4, salinity: 40.0 },
              { month: 'Oct', temperature: 27.2, salinity: 39.9 },
              { month: 'Nov', temperature: 25.9, salinity: 40.0 },
              { month: 'Dec', temperature: 24.6, salinity: 40.1 }
            ]
          }
        };
      } else if (currentInput.includes('mediterranean')) {
        assistantMessage = {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          content: 'Here\'s information about the Mediterranean Sea:',
          timestamp: new Date(),
          data: {
            name: 'Mediterranean Sea',
            region: 'Central Mediterranean',
            generalInfo: 'The Mediterranean Sea is a sea connected to the Atlantic Ocean, surrounded by the Mediterranean Basin and almost completely enclosed by land. It has played a central role in the history of Western civilization and is known for its unique climate and biodiversity.',
            statistics: {
              temperature: 23.7,
              salinity: 38.4,
              waveHeight: 1.2,
              windSpeed: 18.9,
              depth: 1500
            },
            trendData: [
              { month: 'Jan', temperature: 16.2, salinity: 38.6 },
              { month: 'Feb', temperature: 16.8, salinity: 38.5 },
              { month: 'Mar', temperature: 18.5, salinity: 38.4 },
              { month: 'Apr', temperature: 20.8, salinity: 38.3 },
              { month: 'May', temperature: 23.5, salinity: 38.2 },
              { month: 'Jun', temperature: 26.1, salinity: 38.4 },
              { month: 'Jul', temperature: 27.8, salinity: 38.5 },
              { month: 'Aug', temperature: 27.9, salinity: 38.6 },
              { month: 'Sep', temperature: 25.7, salinity: 38.4 },
              { month: 'Oct', temperature: 22.4, salinity: 38.3 },
              { month: 'Nov', temperature: 19.1, salinity: 38.4 },
              { month: 'Dec', temperature: 17.0, salinity: 38.5 }
            ]
          }
        };
      } else {
        // Check for special queries
        if (currentInput.includes('marine life') || currentInput.includes('fish') || currentInput.includes('species')) {
          assistantMessage = {
            id: (Date.now() + 1).toString(),
            type: 'assistant',
            content: '🐠 **Marine Life Overview:**\n\n🌊 **Indian Ocean**: Home to Blue Whales, Dugongs, Manta Rays, and Whale Sharks. Biodiversity index: 8.7/10\n\n🌊 **Pacific Ocean**: Features Great White Sharks, Sea Turtles, Salmon, and rich coral ecosystems. Biodiversity index: 9.2/10\n\n🌊 **Atlantic Ocean**: Known for Humpback Whales, Atlantic Cod, and extensive marine protected areas. Biodiversity index: 8.1/10\n\nThe oceans support incredible biodiversity with over 230,000 known marine species!',
            timestamp: new Date(),
          };
        } else if (currentInput.includes('climate') || currentInput.includes('weather') || currentInput.includes('temperature trends')) {
          assistantMessage = {
            id: (Date.now() + 1).toString(),
            type: 'assistant',
            content: '🌡️ **Climate Patterns Overview:**\n\n🌊 **Indian Ocean**: Strong monsoon patterns affecting South Asian weather, Indian Ocean Dipole influences regional climate\n\n🌊 **Pacific Ocean**: Origin of El Niño/La Niña - major global climate drivers affecting weather worldwide\n\n🌊 **Atlantic Ocean**: Atlantic Multidecadal Oscillation influences hurricane activity and European weather\n\n**Current Trends**: Ocean temperatures have increased by 0.6°C since 1960s, affecting marine ecosystems and weather patterns globally.',
            timestamp: new Date(),
          };
        } else if (currentInput.includes('pollution') || currentInput.includes('plastic') || currentInput.includes('environment')) {
          assistantMessage = {
            id: (Date.now() + 1).toString(),
            type: 'assistant',
            content: '🏭 **Ocean Environmental Status:**\n\n🚨 **Pollution Levels**: \n• Pacific: 80,000 tons of plastic in Great Pacific Garbage Patch\n• Atlantic: High microplastic concentration in Gulf Stream\n• Indian: Coastal pollution from industrial discharge\n\n📊 **pH Levels**: Ocean acidification detected across all major basins\n• Pacific: pH 8.0 (↓0.1 since 1990s)\n• Atlantic: pH 8.1 (↓0.1 since 1990s)\n• Indian: pH 8.1 (stable)\n\n💡 **Conservation**: 127 marine protected areas in Pacific, 89 in Atlantic, 45 in Indian Ocean',
            timestamp: new Date(),
          };
        } else {
          assistantMessage = {
            id: (Date.now() + 1).toString(),
            type: 'assistant',
            content: 'I can help you with comprehensive ocean data analysis! Try asking about:\n\n🌊 **Ocean Data**: "Show me data of Indian Ocean", "Tell me about Pacific Ocean", "Bay of Bengal information"\n\n📊 **Comparisons**: "Compare Indian Ocean with Arabian Sea", "Compare Pacific and Atlantic Ocean"\n\n🐠 **Marine Life**: "Tell me about marine life", "What species live in oceans?"\n\n🌡️ **Climate**: "How do oceans affect climate?", "Show me temperature trends"\n\n🌍 **Environment**: "Ocean pollution levels", "Environmental status of oceans"\n\nI\'ll provide detailed statistics, trends, and visualizations for any ocean topic!',
            timestamp: new Date(),
          };
        }
      }

      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleExportData = (data: any, filename: string) => {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.json`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-4 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/dashboard')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <div className="flex items-center space-x-3">
              <Bot className="h-6 w-6 text-blue-600" />
              <div>
                <h1 className="text-lg font-semibold">Ocean Insight AI</h1>
                <p className="text-sm text-gray-600">Ask me anything about ocean data</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto py-6 px-4">
          {messages.map((message) => (
            <div key={message.id} className="mb-8">
              <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-3 max-w-3xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  {/* Avatar */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user' 
                      ? 'bg-blue-600' 
                      : 'bg-gray-200'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-gray-600" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className={`prose max-w-none ${message.type === 'user' ? 'text-right' : ''}`}>
                      <p className="text-gray-800 leading-relaxed">{message.content}</p>
                    </div>

                    {/* Ocean Data Display */}
                    {message.data && (
                      <OceanDataDisplay 
                        data={message.data} 
                        onExport={() => handleExportData(message.data, message.data!.name)}
                      />
                    )}

                    {/* Comparison Data Display */}
                    {message.comparisonData && (
                      <ComparisonDisplay 
                        data={message.comparisonData}
                        onExport={() => handleExportData(message.comparisonData, 'ocean-comparison')}
                      />
                    )}

                    <p className="text-xs text-gray-500">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="mb-8">
              <div className="flex justify-start">
                <div className="flex items-start space-x-3 max-w-3xl">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-gray-600 animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 bg-white p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex space-x-4">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about ocean data, request comparisons, or get statistical information..."
              className="flex-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              disabled={isLoading}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-xs text-gray-500">
              Try: "show me data of indian ocean", "compare it with Arabian Sea", or "tell me about Pacific Ocean"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Ocean Data Display Component
interface OceanDataDisplayProps {
  data: OceanQueryData;
  onExport: () => void;
}

const OceanDataDisplay = ({ data, onExport }: OceanDataDisplayProps) => {
  return (
    <div className="space-y-4">
      {/* General Info */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">{data.name}</h3>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" onClick={onExport}>
                <Download className="h-4 w-4 mr-1" />
                Export
              </Button>
            </div>
          </div>
          <Badge variant="secondary" className="mb-3">{data.region}</Badge>
          <p className="text-gray-700 text-sm leading-relaxed">{data.generalInfo}</p>
        </CardContent>
      </Card>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <StatCard
          label="Temperature"
          value={`${data.statistics.temperature}°C`}
          icon={<Activity className="h-4 w-4" />}
          trend="up"
        />
        <StatCard
          label="Salinity"
          value={`${data.statistics.salinity} PSU`}
          icon={<Waves className="h-4 w-4" />}
          trend="stable"
        />
        <StatCard
          label="Wave Height"
          value={`${data.statistics.waveHeight}m`}
          icon={<TrendingUp className="h-4 w-4" />}
          trend="down"
        />
        <StatCard
          label="Wind Speed"
          value={`${data.statistics.windSpeed} km/h`}
          icon={<Activity className="h-4 w-4" />}
          trend="up"
        />
        <StatCard
          label="Avg Depth"
          value={`${data.statistics.depth}m`}
          icon={<Waves className="h-4 w-4" />}
          trend="stable"
        />
      </div>

      {/* Charts */}
      {data.trendData.length > 0 && (
        <Card>
          <CardContent className="p-4">
            <h4 className="text-md font-semibold mb-4">Temperature & Salinity Trends</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="temperature" stroke="#3b82f6" name="Temperature (°C)" />
                  <Line type="monotone" dataKey="salinity" stroke="#06b6d4" name="Salinity (PSU)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

// Comparison Display Component
interface ComparisonDisplayProps {
  data: ComparisonData;
  onExport: () => void;
}

const ComparisonDisplay = ({ data, onExport }: ComparisonDisplayProps) => {
  const comparisonData = [
    {
      metric: 'Temperature',
      [data.ocean1.name]: data.ocean1.statistics.temperature,
      [data.ocean2.name]: data.ocean2.statistics.temperature,
      difference: data.differences.temperature
    },
    {
      metric: 'Salinity',
      [data.ocean1.name]: data.ocean1.statistics.salinity,
      [data.ocean2.name]: data.ocean2.statistics.salinity,
      difference: data.differences.salinity
    },
    {
      metric: 'Wave Height',
      [data.ocean1.name]: data.ocean1.statistics.waveHeight,
      [data.ocean2.name]: data.ocean2.statistics.waveHeight,
      difference: data.differences.waveHeight
    },
    {
      metric: 'Wind Speed',
      [data.ocean1.name]: data.ocean1.statistics.windSpeed,
      [data.ocean2.name]: data.ocean2.statistics.windSpeed,
      difference: data.differences.windSpeed
    }
  ];

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Ocean Comparison</h3>
            <Button size="sm" variant="outline" onClick={onExport}>
              <Download className="h-4 w-4 mr-1" />
              Export
            </Button>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="metric" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={data.ocean1.name} fill="#3b82f6" />
                <Bar dataKey={data.ocean2.name} fill="#06b6d4" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Stat Card Component
interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  trend: 'up' | 'down' | 'stable';
}

const StatCard = ({ label, value, icon, trend }: StatCardProps) => {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-3 w-3 text-green-600" />;
      case 'down':
        return <TrendingDown className="h-3 w-3 text-red-600" />;
      default:
        return <Activity className="h-3 w-3 text-gray-600" />;
    }
  };

  return (
    <Card>
      <CardContent className="p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="text-gray-600">{icon}</div>
          {getTrendIcon()}
        </div>
        <div>
          <p className="text-lg font-semibold">{value}</p>
          <p className="text-xs text-gray-600">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatPage;