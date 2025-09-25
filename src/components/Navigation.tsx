import { Home, BarChart3, MessageCircle, Info, HelpCircle, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = [
    { name: "Home", icon: Home, active: true },
    { name: "Dashboard", icon: BarChart3, active: false },
    { name: "Chat", icon: MessageCircle, active: false },
    { name: "About", icon: Info, active: false },
    { name: "Help", icon: HelpCircle, active: false },
  ];

  return (
    <nav className="bg-gradient-ocean shadow-ocean border-b border-border/20">
      <div className="max-w-full mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <Waves className="h-8 w-8 text-primary-foreground animate-wave" />
            <div className="text-primary-foreground">
              <h1 className="text-xl font-bold tracking-tight">Ocean Insight AI</h1>
              <p className="text-xs text-primary-foreground/80">Oceanographic Data Assistant</p>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant={item.active ? "secondary" : "ghost"}
                size="sm"
                className={`
                  flex items-center space-x-2 transition-all duration-200
                  ${item.active 
                    ? "bg-primary-foreground/20 text-primary-foreground shadow-surface" 
                    : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  }
                `}
              >
                <item.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{item.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;