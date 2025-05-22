
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-background to-card">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Advanced AI Code Models with <span className="gradient-text">Fine-tuning</span> Capabilities
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Explore state-of-the-art AI models for code generation, understanding, and customization with enterprise-grade fine-tuning methods.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg">
              Explore Models <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
