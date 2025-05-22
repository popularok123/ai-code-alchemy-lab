
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CodeEditor from "@/components/CodeEditor";
import ModelCard from "@/components/ModelCard";
import ModelComparison from "@/components/ModelComparison";
import FineTuningMethods from "@/components/FineTuningMethods";
import { modelsData } from "@/data/modelsData";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Code, BookOpen, Wand2, Repeat, Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [selectedModels, setSelectedModels] = useState(modelsData.slice(0, 4));
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Demo Section */}
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Experience <span className="gradient-text">AI-Powered</span> Code Generation
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our platform provides state-of-the-art models trained specifically 
                  for code generation, understanding, and transformation tasks.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="text-xs">Multi-Language Support</Badge>
                  <Badge variant="outline" className="text-xs">Context-Aware</Badge>
                  <Badge variant="outline" className="text-xs">IDE Integration</Badge>
                  <Badge variant="outline" className="text-xs">Security-Focused</Badge>
                </div>
              </div>
              
              <div>
                <CodeEditor />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Bot className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium mb-2">Advanced Models</h3>
                <p className="text-muted-foreground mb-4">
                  Access state-of-the-art models specifically trained and optimized for code generation.
                </p>
                <Button variant="link" className="px-0">
                  Explore Models <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              
              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Wand2 className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium mb-2">Enterprise Fine-tuning</h3>
                <p className="text-muted-foreground mb-4">
                  Customize models to your specific codebase, style, and patterns with our fine-tuning capabilities.
                </p>
                <Button variant="link" className="px-0">
                  Learn About Fine-tuning <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              
              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Repeat className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium mb-2">API Integration</h3>
                <p className="text-muted-foreground mb-4">
                  Seamlessly integrate our models into your development workflow with our comprehensive API.
                </p>
                <Button variant="link" className="px-0">
                  View Documentation <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Models Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="gradient-text">Specialized</span> Code Models
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Compare the capabilities of cutting-edge AI models optimized specifically for code generation, understanding, and transformation.
              </p>
            </div>
            
            <div className="mb-12">
              <Tabs defaultValue="cards">
                <div className="flex justify-center mb-6">
                  <TabsList>
                    <TabsTrigger value="cards">Cards View</TabsTrigger>
                    <TabsTrigger value="comparison">Comparison</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="cards">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modelsData.slice(0, 6).map(model => (
                      <ModelCard key={model.id} model={model} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="comparison">
                  <div className="bg-card border border-border rounded-lg overflow-hidden">
                    <ModelComparison models={selectedModels} />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="text-center">
              <Button>
                View All Models <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Fine-tuning Section */}
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Advanced <span className="gradient-text">Fine-tuning</span> Methods
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Transform general-purpose models into specialized code assistants with our enterprise-grade fine-tuning techniques.
              </p>
            </div>
            
            <FineTuningMethods />
            
            <div className="mt-12 text-center">
              <Button>
                Get Started with Fine-tuning <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Enhance Your <span className="gradient-text">Development Workflow</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of developers already using our AI code platform to build better software faster.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Code className="h-5 w-5" />
                  Try It Free
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <BookOpen className="h-5 w-5" />
                  Read Documentation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
