
import { ModelInfo } from "@/components/ModelCard";

export const modelsData: ModelInfo[] = [
  {
    id: "gpt4o",
    name: "GPT-4o",
    company: "OpenAI",
    description: "Multimodal model with strong code generation and understanding capabilities.",
    parameterCount: "1.8T parameters",
    languages: ["Python", "JavaScript", "TypeScript", "C++", "Java", "Go", "Rust", "SQL", "PHP"],
    specialties: ["Code completion", "Debugging", "Documentation", "Code explanation"],
    tags: ["Transformer", "Multimodal"],
    performance: {
      humanEval: 92,
      mbpp: 86,
      apps: 79
    }
  },
  {
    id: "claude35",
    name: "Claude 3.5 Sonnet",
    company: "Anthropic",
    description: "Advanced language model with enhanced reasoning and code synthesis abilities.",
    parameterCount: "~1T parameters",
    languages: ["Python", "JavaScript", "TypeScript", "Java", "C#", "Ruby", "Go", "SQL"],
    specialties: ["Code reasoning", "Security analysis", "Algorithm design", "Optimization"],
    tags: ["Constitutional AI", "RLHF"],
    performance: {
      humanEval: 90,
      mbpp: 87,
      apps: 81
    }
  },
  {
    id: "codellama",
    name: "Code Llama 70B",
    company: "Meta",
    description: "Open-weight model specifically optimized for code generation and understanding.",
    parameterCount: "70B parameters",
    languages: ["Python", "JavaScript", "Java", "C++", "PHP", "TypeScript", "C#", "Bash"],
    specialties: ["Fill-in-the-middle", "Long context", "Repository understanding"],
    tags: ["Open source", "Llama architecture"],
    performance: {
      humanEval: 75,
      mbpp: 68,
      apps: 62
    }
  },
  {
    id: "starcoder",
    name: "StarCoder 2",
    company: "HuggingFace",
    description: "Open-access model trained on permissively licensed code from multiple sources.",
    parameterCount: "15B parameters",
    languages: ["Python", "JavaScript", "Java", "Go", "Rust", "C", "C++", "Shell"],
    specialties: ["Code infilling", "Code translation", "Bug fixing"],
    tags: ["Open source", "Permissive license"],
    performance: {
      humanEval: 72,
      mbpp: 65,
      apps: 59
    }
  },
  {
    id: "deepseekcoder",
    name: "DeepSeek Coder",
    company: "DeepSeek",
    description: "Code-specialized model with strong performance across multiple languages.",
    parameterCount: "33B parameters",
    languages: ["Python", "Java", "C++", "JavaScript", "Go", "Rust", "PHP"],
    specialties: ["Repository-level understanding", "Code completion", "Problem solving"],
    tags: ["Mixed training", "Apache 2.0"],
    performance: {
      humanEval: 73,
      mbpp: 70,
      apps: 61
    }
  },
  {
    id: "codegemma",
    name: "CodeGemma",
    company: "Google",
    description: "Open model specialized for code with strong reasoning capabilities.",
    parameterCount: "7B parameters",
    languages: ["Python", "JavaScript", "Java", "C++", "Go", "Rust"],
    specialties: ["Repository-level code generation", "Function completion"],
    tags: ["Open weights", "Gemma family"],
    performance: {
      humanEval: 67,
      mbpp: 64,
      apps: 58
    }
  }
];
