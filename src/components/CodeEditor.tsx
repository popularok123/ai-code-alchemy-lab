
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play, Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface CodeEditorProps {
  initialCode?: string;
}

const CodeEditor = ({ initialCode = "// Write or paste your code here\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet('World'));" }: CodeEditorProps) => {
  const [code, setCode] = useState(initialCode);
  const [model, setModel] = useState("gpt-4o");
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success("Code copied to clipboard");
  };

  const handleRunCode = () => {
    toast.info("Code execution simulated");
  };

  const lines = code.split("\n");

  return (
    <div className="editor-window">
      <div className="editor-header">
        <div className="flex items-center gap-3">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-sm text-muted-foreground">code.js</span>
        </div>
        <div className="flex items-center gap-2">
          <Select value={model} onValueChange={setModel}>
            <SelectTrigger className="w-[150px] h-8 text-xs">
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt-4o">GPT-4o</SelectItem>
              <SelectItem value="claude-3.5">Claude 3.5</SelectItem>
              <SelectItem value="codellama">CodeLlama</SelectItem>
              <SelectItem value="starcoder">StarCoder</SelectItem>
              <SelectItem value="custom">Custom Model</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="ghost" size="icon" onClick={handleCopyCode}>
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
          <Button variant="outline" size="sm" onClick={handleRunCode}>
            <Play className="h-3.5 w-3.5 mr-1" /> Run
          </Button>
        </div>
      </div>
      <div className="p-4 bg-card overflow-auto h-72">
        <div className="font-mono text-sm">
          {lines.map((line, i) => (
            <div key={i} className="code-line">
              <span className="line-number">{i + 1}</span>
              <textarea
                value={line}
                onChange={(e) => {
                  const newLines = [...lines];
                  newLines[i] = e.target.value;
                  setCode(newLines.join("\n"));
                }}
                className="bg-transparent border-0 outline-none resize-none w-[calc(100%-2rem)] overflow-hidden"
                rows={1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
