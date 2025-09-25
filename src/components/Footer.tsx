import { Download, FileText, Mail, Database, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border shadow-surface">
      <div className="max-w-full mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
          {/* Credits */}
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Database className="h-4 w-4 text-ocean-medium" />
              <span>Powered by</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="font-medium text-ocean-deep">Argo</span>
              <span>•</span>
              <span className="font-medium text-ocean-deep">INCOIS</span>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Bot className="h-3 w-3 text-teal-accent" />
                <span className="font-medium text-ocean-deep">AI-driven RAG system</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center space-x-2 shadow-surface hover:shadow-depth transition-shadow"
            >
              <Download className="h-4 w-4" />
              <span>Download CSV</span>
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center space-x-2 shadow-surface hover:shadow-depth transition-shadow"
            >
              <FileText className="h-4 w-4" />
              <span>Download NetCDF</span>
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center space-x-2 shadow-surface hover:shadow-depth transition-shadow"
            >
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-3 pt-3 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            Real-time oceanographic data analysis and visualization platform
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;