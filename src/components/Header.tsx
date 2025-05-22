
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Code, Zap, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="border-b border-border bg-card/70 backdrop-blur-md sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold gradient-text">DevGenius</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <Tabs defaultValue="models">
            <TabsList className="bg-muted">
              <TabsTrigger value="models">Models</TabsTrigger>
              <TabsTrigger value="fine-tuning">Fine-tuning</TabsTrigger>
              <TabsTrigger value="playground">Playground</TabsTrigger>
              <TabsTrigger value="docs">Documentation</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          <Button variant="secondary" size="sm">
            <Github className="h-4 w-4 mr-1" /> GitHub
          </Button>
          <Button size="sm">
            <Zap className="h-4 w-4 mr-1" /> Try Free
          </Button>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-6 border-t border-border bg-card absolute left-0 right-0 flex flex-col gap-4">
          <Button variant="ghost" className="justify-start" onClick={() => setMobileMenuOpen(false)}>Models</Button>
          <Button variant="ghost" className="justify-start" onClick={() => setMobileMenuOpen(false)}>Fine-tuning</Button>
          <Button variant="ghost" className="justify-start" onClick={() => setMobileMenuOpen(false)}>Playground</Button>
          <Button variant="ghost" className="justify-start" onClick={() => setMobileMenuOpen(false)}>Documentation</Button>
          <div className="flex flex-col gap-2 pt-2">
            <Button variant="outline" className="w-full">
              <Github className="h-4 w-4 mr-2" /> GitHub
            </Button>
            <Button className="w-full">
              <Zap className="h-4 w-4 mr-2" /> Try Free
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
