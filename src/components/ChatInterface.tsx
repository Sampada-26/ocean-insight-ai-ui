import { useState } from "react";
import { Send, Bot, User, Code, Sparkles, MessageSquare, Database, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  SAMPLE_CHAT_MESSAGES, 
  SUGGESTED_QUERIES, 
  CONVERSATION_STARTERS,
  PROMPT_CATEGORIES,
  ADVANCED_PROMPTS,
  VISUALIZATION_PROMPTS,
  generateSQLQuery,
  getRandomResponse,
  type ChatMessage 
} from "@/data/chatData";
import { 
  DASHBOARD_METRICS,
  getActiveFloatsCount 
} from "@/data/dashboardData";

const ChatInterface = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(SAMPLE_CHAT_MESSAGES.slice(0, 1)); // Start with just the welcome message
  const [showSampleConversation, setShowSampleConversation] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('basic');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response with more realistic and comprehensive content
    setTimeout(() => {
      const lowerInput = currentInput.toLowerCase();
      const hasSQL = lowerInput.includes('show') || 
                    lowerInput.includes('find') || 
                    lowerInput.includes('query') ||
                    lowerInput.includes('sql') ||
                    lowerInput.includes('data');
      
      let responseContent = "I understand you're interested in oceanographic data analysis. ";
      
      // Enhanced contextual responses with data integration
      if (lowerInput.includes('temperature')) {
        responseContent = `Based on our current data from ${DASHBOARD_METRICS.activeFloats.toLocaleString()} active floats, I can analyze temperature patterns for you. Current global average sea surface temperature is showing interesting variations across different ocean basins. The Arabian Sea region is currently showing temperatures around 24.9°C, while the Bay of Bengal averages 28.8°C.`;
      } else if (lowerInput.includes('salinity')) {
        responseContent = `Salinity measurements from our active float network reveal distinct water mass characteristics. Current data shows the Arabian Sea with higher salinity values (avg 36.3 PSU) compared to the Bay of Bengal (avg 33.8 PSU), reflecting different precipitation and evaporation patterns in these regions.`;
      } else if (lowerInput.includes('oxygen')) {
        responseContent = `Oxygen levels are critical indicators of ocean health. Our current measurements show concerning patterns, particularly in the Arabian Sea where oxygen levels have dropped 5% in the last 30 days to an average of 155.6 μmol/kg. The Bay of Bengal shows healthier levels at 177.6 μmol/kg.`;
      } else if (lowerInput.includes('float') || lowerInput.includes('location')) {
        responseContent = `I can help you track our global network of ${DASHBOARD_METRICS.activeFloats.toLocaleString()} active Argo floats. Currently, we have 287 floats in the Arabian Sea, 194 in the Bay of Bengal, and 523 in the Southern Ocean. Each float provides temperature, salinity, and oxygen profiles up to 2000m depth.`;
      } else if (lowerInput.includes('trend') || lowerInput.includes('pattern')) {
        responseContent = `Long-term trends are essential for climate monitoring. Our 30-day analysis shows the Southern Ocean region trending upward (+3.2%), while the Arabian Sea shows concerning downward trends (-2.3%). Data quality remains high at ${DASHBOARD_METRICS.dataQuality}% across all regions.`;
      } else if (lowerInput.includes('region') || lowerInput.includes('basin')) {
        responseContent = `Regional analysis capabilities include comparisons across 6 major ocean basins. We currently monitor the Arabian Sea, Bay of Bengal, Southern Ocean, North Pacific, North Atlantic, and South Pacific with varying float densities and data coverage.`;
      } else if (lowerInput.includes('depth') || lowerInput.includes('profile')) {
        responseContent = `Depth profiles reveal the ocean's vertical structure. Our floats measure from surface to 2000m depth, capturing the mixed layer, thermocline, and deep water characteristics. The latest profile data shows interesting stratification patterns, particularly in monsoon-affected regions.`;
      } else if (lowerInput.includes('quality') || lowerInput.includes('qc')) {
        responseContent = `Data quality is maintained through rigorous QC procedures. Current system status: ${DASHBOARD_METRICS.dataQuality}% of profiles pass quality control, with ${getActiveFloatsCount()} floats actively transmitting. Our automated flagging system identifies sensor drift and anomalous readings.`;
      } else {
        responseContent = `Based on your query, I can help analyze our comprehensive ocean dataset. We process ${DASHBOARD_METRICS.newProfiles.toLocaleString()} new profiles every 10 days from our global float network. Let me generate relevant analysis and data access queries for you.`;
      }

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: responseContent + (hasSQL ? " Here's a SQL query to access this data:" : " Would you like me to generate specific data queries or visualizations?"),
        hasCode: hasSQL,
        codeContent: hasSQL ? generateSQLQuery(currentInput) : undefined,
        codeLanguage: hasSQL ? 'sql' : undefined,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1800);
  };

  const loadSampleConversation = () => {
    setMessages(SAMPLE_CHAT_MESSAGES);
    setShowSampleConversation(true);
  };

  const startFreshChat = () => {
    setMessages(SAMPLE_CHAT_MESSAGES.slice(0, 1));
    setShowSampleConversation(false);
  };

  const handleSuggestedQuery = (question: string) => {
    setInputValue(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full bg-gradient-surface">
      {/* Chat Header */}
      <div className="bg-card border-b border-border px-6 py-4 shadow-surface">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Bot className="h-6 w-6 text-ocean-medium" />
            <div>
              <h2 className="text-lg font-semibold text-foreground">FloatChat AI Assistant 🌊</h2>
              <p className="text-sm text-muted-foreground">Powered by AI & RAG system • Argo Float Data Expert</p>
            </div>
          </div>
          <div className="flex space-x-2">
            {!showSampleConversation ? (
              <Button variant="outline" size="sm" onClick={loadSampleConversation}>
                <Sparkles className="h-4 w-4 mr-2" />
                Sample Chat
              </Button>
            ) : (
              <Button variant="outline" size="sm" onClick={startFreshChat}>
                <MessageSquare className="h-4 w-4 mr-2" />
                Fresh Chat
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <Card className={`
              max-w-[80%] p-4 shadow-depth
              ${message.type === 'user' 
                ? 'bg-primary text-primary-foreground ml-12' 
                : 'bg-card mr-12'
              }
            `}>
              <div className="flex items-start space-x-3">
                {message.type === 'assistant' && (
                  <Bot className="h-5 w-5 text-ocean-medium mt-0.5 flex-shrink-0" />
                )}
                <div className="flex-1 space-y-2">
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  {message.hasCode && message.type === 'assistant' && message.codeContent && (
                    <Card className="bg-muted p-3 border border-border/50 mt-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Code className="h-4 w-4 text-ocean-medium" />
                          <span className="text-xs font-medium text-muted-foreground">
                            {message.codeLanguage?.toUpperCase() || 'SQL'} Query
                          </span>
                        </div>
                        <Badge variant="secondary" className="text-xs">Executable</Badge>
                      </div>
                      <pre className="text-xs text-foreground bg-background/50 p-2 rounded border overflow-x-auto">
                        <code>{message.codeContent}</code>
                      </pre>
                    </Card>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-xs opacity-60">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    {message.type === 'user' && (
                      <User className="h-4 w-4 opacity-60" />
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start animate-fade-in">
            <Card className="max-w-[80%] p-4 bg-card mr-12 shadow-depth">
              <div className="flex items-center space-x-3">
                <Bot className="h-5 w-5 text-ocean-medium animate-pulse" />
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-ocean-medium rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-ocean-medium rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-ocean-medium rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Enhanced Suggested Queries - Show only when chat is empty or has minimal messages */}
      {messages.length <= 1 && !isLoading && (
        <div className="border-t border-border p-4 bg-gradient-to-br from-muted/10 to-muted/30">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-medium text-muted-foreground">💡 Explore FloatChat Capabilities:</h4>
            <div className="flex space-x-1">
              {Object.entries(PROMPT_CATEGORIES).map(([key, category]) => (
                <Button
                  key={key}
                  variant={selectedCategory === key ? "default" : "ghost"}
                  size="sm"
                  className="text-xs h-7 px-2"
                  onClick={() => setSelectedCategory(key)}
                >
                  {category.title}
                </Button>
              ))}
            </div>
          </div>

          {/* Category Description */}
          <div className="mb-4 p-3 bg-background/50 rounded-lg border">
            <h5 className="font-medium text-sm mb-1">{PROMPT_CATEGORIES[selectedCategory as keyof typeof PROMPT_CATEGORIES].title}</h5>
            <p className="text-xs text-muted-foreground">{PROMPT_CATEGORIES[selectedCategory as keyof typeof PROMPT_CATEGORIES].description}</p>
          </div>

          {/* Category-specific Prompts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
            {PROMPT_CATEGORIES[selectedCategory as keyof typeof PROMPT_CATEGORIES].prompts.slice(0, 6).map((prompt, idx) => (
              <Button
                key={idx}
                variant="outline"
                size="sm"
                className="justify-start text-left h-auto p-3 text-xs hover:bg-ocean-light/20"
                onClick={() => handleSuggestedQuery(prompt)}
              >
                <div className="truncate">
                  <div className="font-medium leading-tight">{prompt}</div>
                </div>
              </Button>
            ))}
          </div>

          {/* Quick Start Badges */}
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Quick Start Examples:</p>
            <div className="flex flex-wrap gap-1">
              {CONVERSATION_STARTERS.slice(0, 6).map((starter, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="cursor-pointer hover:bg-ocean-light text-xs py-1 px-2"
                  onClick={() => handleSuggestedQuery(starter)}
                >
                  {starter.length > 50 ? starter.substring(0, 47) + '...' : starter}
                </Badge>
              ))}
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
            <div className="flex items-center space-x-2 text-blue-600">
              <Database className="h-3 w-3" />
              <span>4,120+ Active Floats</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600">
              <BarChart3 className="h-3 w-3" />
              <span>Real-time Analysis</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-600">
              <Code className="h-3 w-3" />
              <span>SQL Query Generation</span>
            </div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="bg-card border-t border-border p-4 shadow-surface">
        <div className="flex space-x-3">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about oceanographic data, request visualizations, or get SQL queries..."
            className="flex-1 bg-background border-border focus:ring-ocean-medium"
            disabled={isLoading}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="bg-primary hover:bg-ocean-medium transition-colors shadow-depth"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 flex items-center justify-between">
          <span>Press Enter to send • Shift+Enter for new line</span>
          <span className="text-ocean-medium">FloatChat v2.1.0 • PSID: 25040</span>
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;