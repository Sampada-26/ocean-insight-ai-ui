import Navigation from "@/components/Navigation";
import ChatInterface from "@/components/ChatInterface";
import DataDashboard from "@/components/DataDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Chat Interface - Left Panel */}
        <div className="w-full lg:w-1/2 xl:w-2/5 border-r border-border bg-card">
          <ChatInterface />
        </div>
        
        {/* Data Dashboard - Right Panel */}
        <div className="w-full lg:w-1/2 xl:w-3/5 bg-background">
          <DataDashboard />
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
