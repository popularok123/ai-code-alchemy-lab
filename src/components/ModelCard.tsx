
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { InfoIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export interface ModelInfo {
  id: string;
  name: string;
  company: string;
  description: string;
  parameterCount: string;
  languages: string[];
  specialties: string[];
  tags: string[];
  performance: {
    humanEval: number;
    mbpp: number;
    apps: number;
  };
}

interface ModelCardProps {
  model: ModelInfo;
}

const ModelCard = ({ model }: ModelCardProps) => {
  return (
    <div className="model-card bg-card border border-border rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-semibold">{model.name}</h3>
            <p className="text-sm text-muted-foreground">{model.company}</p>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <InfoIcon className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="w-80">
                <div className="space-y-2">
                  <p className="font-medium">Performance Metrics</p>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">HumanEval</p>
                      <p className="font-medium">{model.performance.humanEval}%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">MBPP</p>
                      <p className="font-medium">{model.performance.mbpp}%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Apps</p>
                      <p className="font-medium">{model.performance.apps}%</p>
                    </div>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <p className="text-sm mb-4">{model.description}</p>
        
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline">{model.parameterCount}</Badge>
          {model.tags.map(tag => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        
        <div className="space-y-3">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Languages</p>
            <div className="flex flex-wrap gap-1">
              {model.languages.map(lang => (
                <span key={lang} className="method-pill">{lang}</span>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-xs text-muted-foreground mb-1">Specialties</p>
            <div className="flex flex-wrap gap-1">
              {model.specialties.map(specialty => (
                <span key={specialty} className="method-pill">{specialty}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-border p-4 flex items-center justify-between">
        <div>
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              style={{ width: `${(model.performance.humanEval + model.performance.mbpp + model.performance.apps) / 3}%` }}
            ></div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Avg. Performance: {Math.round((model.performance.humanEval + model.performance.mbpp + model.performance.apps) / 3)}%
          </p>
        </div>
        
        <Button size="sm">Try Model</Button>
      </div>
    </div>
  );
};

export default ModelCard;
