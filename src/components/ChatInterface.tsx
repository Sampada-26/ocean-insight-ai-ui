import { useState } from "react";
import { Send, Bot, User, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  hasCode?: boolean;
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! I\'m your Ocean Insight AI assistant. I can help you analyze oceanographic data, generate SQL queries for Argo float data, and create visualizations. What would you like to explore today?',
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
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: 'I understand you\'re interested in oceanographic data analysis. Based on your query, I can help you with Argo float profiles, temperature and salinity data, and generate appropriate visualizations. Would you like me to show you some sample data or create a specific query?',
        hasCode: Math.random() > 0.5,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
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
        <div className="flex items-center space-x-3">
          <Bot className="h-6 w-6 text-ocean-medium" />
          <div>
            <h2 className="text-lg font-semibold text-foreground">Ocean Data Assistant</h2>
            <p className="text-sm text-muted-foreground">Powered by AI & RAG system</p>
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
                  {message.hasCode && message.type === 'assistant' && (
                    <Card className="bg-muted p-3 border border-border/50">
                      <div className="flex items-center space-x-2 mb-2">
                        <Code className="h-4 w-4 text-ocean-medium" />
                        <span className="text-xs font-medium text-muted-foreground">SQL Query</span>
                      </div>
                      <pre className="text-xs text-foreground font-mono">
{`SELECT 
  profile_id, 
  latitude, 
  longitude, 
  temperature, 
  salinity, 
  depth
FROM argo_profiles 
WHERE latitude BETWEEN -60 AND 60
  AND date_range = '2024-01-01'
LIMIT 100;`}
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
        <p className="text-xs text-muted-foreground mt-2">
          Press Enter to send • Shift+Enter for new line
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;