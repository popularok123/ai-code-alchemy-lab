
import { Badge } from "@/components/ui/badge";
import { ModelInfo } from "./ModelCard";

interface ModelComparisonProps {
  models: ModelInfo[];
}

const ModelComparison = ({ models }: ModelComparisonProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-muted/50">
            <th className="p-3 text-left font-medium text-muted-foreground border-b border-border">Model</th>
            <th className="p-3 text-left font-medium text-muted-foreground border-b border-border">Size</th>
            <th className="p-3 text-left font-medium text-muted-foreground border-b border-border">HumanEval</th>
            <th className="p-3 text-left font-medium text-muted-foreground border-b border-border">MBPP</th>
            <th className="p-3 text-left font-medium text-muted-foreground border-b border-border">Apps</th>
            <th className="p-3 text-left font-medium text-muted-foreground border-b border-border">Specialties</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model) => (
            <tr key={model.id} className="hover:bg-muted/30">
              <td className="p-3 border-b border-border">
                <div>
                  <p className="font-medium">{model.name}</p>
                  <p className="text-sm text-muted-foreground">{model.company}</p>
                </div>
              </td>
              <td className="p-3 border-b border-border">
                <Badge variant="outline">{model.parameterCount}</Badge>
              </td>
              <td className="p-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{model.performance.humanEval}%</span>
                  <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${model.performance.humanEval}%` }}
                    ></div>
                  </div>
                </div>
              </td>
              <td className="p-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{model.performance.mbpp}%</span>
                  <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${model.performance.mbpp}%` }}
                    ></div>
                  </div>
                </div>
              </td>
              <td className="p-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{model.performance.apps}%</span>
                  <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${model.performance.apps}%` }}
                    ></div>
                  </div>
                </div>
              </td>
              <td className="p-3 border-b border-border">
                <div className="flex flex-wrap gap-1">
                  {model.specialties.slice(0, 3).map(specialty => (
                    <span key={specialty} className="method-pill">{specialty}</span>
                  ))}
                  {model.specialties.length > 3 && (
                    <span className="method-pill">+{model.specialties.length - 3}</span>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ModelComparison;
