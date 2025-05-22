
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThumbsUp, Clock, Cpu, Braces } from "lucide-react";

export interface FineTuningMethod {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  challenges: string[];
  use_cases: string[];
  training_example?: string;
}

const methods: FineTuningMethod[] = [
  {
    id: "sft",
    name: "Supervised Fine-Tuning (SFT)",
    description: "The most common approach where models are trained on labeled examples to match desired outputs.",
    benefits: [
      "Direct control over model outputs",
      "Relatively straightforward implementation",
      "Works well with high-quality data"
    ],
    challenges: [
      "Requires substantial labeled data",
      "Can lead to overfitting",
      "Quality heavily dependent on training data"
    ],
    use_cases: [
      "Specific code style adherence",
      "Organization-specific coding standards",
      "Adapting to company frameworks"
    ],
    training_example: `
# Training example for SFT
training_data = [
  {
    "prompt": "Write a function to check if a string is a palindrome",
    "completion": """
def is_palindrome(text):
    """Check if the given string is a palindrome."""
    # Remove non-alphanumeric characters and convert to lowercase
    text = ''.join(c.lower() for c in text if c.isalnum())
    # Compare string with its reverse
    return text == text[::-1]
    """
  },
  # More examples...
]

model.fine_tune(training_data, method="sft")`
  },
  {
    id: "rlhf",
    name: "Reinforcement Learning from Human Feedback (RLHF)",
    description: "Uses human preferences to train a reward model that guides the fine-tuning process.",
    benefits: [
      "Aligns with human preferences",
      "Reduces harmful or unwanted outputs",
      "Can optimize for subjective qualities"
    ],
    challenges: [
      "Complex implementation",
      "Requires quality feedback data",
      "Risk of reward hacking"
    ],
    use_cases: [
      "Generating secure code",
      "Following best practices",
      "Producing maintainable solutions"
    ],
    training_example: `
# RLHF process simplified example
# 1. Train a reward model from human comparisons
preference_data = [
  {
    "better": "def secure_function(user_input):\\n    # Validate input\\n    if not isinstance(user_input, str):\\n        raise TypeError(\"Input must be string\")\\n    # Sanitize input\\n    sanitized = re.sub(r'[^\\w\\s]', '', user_input)\\n    return process_data(sanitized)",
    "worse": "def function(input):\\n    return process_data(input)"
  },
  # More preference pairs...
]

reward_model = train_reward_model(preference_data)

# 2. Fine-tune with RL using the reward model
def rl_fine_tune(model, reward_model, prompts):
    # RL optimization loop that maximizes reward model scores
    # ...implementation...
    return fine_tuned_model`
  },
  {
    id: "lora",
    name: "Low-Rank Adaptation (LoRA)",
    description: "An efficient fine-tuning technique that only updates a small number of parameters.",
    benefits: [
      "Memory efficient",
      "Fast training and inference",
      "Allows multiple adaptations of one base model"
    ],
    challenges: [
      "Limited capacity compared to full fine-tuning",
      "May not capture complex adaptations",
      "Requires careful rank selection"
    ],
    use_cases: [
      "Domain-specific code generation",
      "Adapting to niche programming languages",
      "Resource-constrained environments"
    ],
    training_example: `
# LoRA implementation example
from peft import LoraConfig, get_peft_model

# Define LoRA configuration
lora_config = LoraConfig(
    r=16,                 # Rank of update matrices
    lora_alpha=32,        # Scaling factor for LoRA
    target_modules=["q_proj", "v_proj"],  # Which modules to apply LoRA to
    lora_dropout=0.05,    # Dropout probability for LoRA layers
    bias="none"           # Don't train bias parameters
)

# Apply LoRA config to base model
model = get_peft_model(base_model, lora_config)

# Train as normal, but only LoRA parameters will be updated
model.train()`
  },
  {
    id: "peft",
    name: "Parameter-Efficient Fine-Tuning (PEFT)",
    description: "A collection of techniques that update only a small subset of a model's parameters.",
    benefits: [
      "Significantly reduced memory requirements",
      "Faster training times",
      "Enables fine-tuning on consumer hardware"
    ],
    challenges: [
      "May have reduced expressiveness",
      "Not all techniques work for all models",
      "Research area still evolving"
    ],
    use_cases: [
      "Rapid adaptation to new coding libraries",
      "Edge device deployment",
      "Multiple specialized versions of one model"
    ],
    training_example: `
# Example using Adapter-based PEFT
import transformers
from peft import get_peft_config, PeftModel, PeftConfig, AdapterConfig

# Configure adapter
adapter_config = AdapterConfig(
    hidden_size=768,
    adapter_size=64,      # Bottleneck size
    adapter_act="relu",   # Activation function
    adapter_initializer_range=0.01
)

# Apply adapter to model
model = transformers.AutoModelForCausalLM.from_pretrained("codellama/CodeLlama-7b")
peft_model = PeftModel.from_pretrained(model, adapter_config)

# Train only the adapter parameters
for param in peft_model.base_model.parameters():
    param.requires_grad = False  # Freeze base model parameters

# Train model
trainer = transformers.Trainer(model=peft_model, ...)`
  }
];

const MethodIcon = ({ methodId }: { methodId: string }) => {
  switch (methodId) {
    case 'sft':
      return <ThumbsUp className="h-5 w-5" />;
    case 'rlhf':
      return <Clock className="h-5 w-5" />;
    case 'lora':
      return <Cpu className="h-5 w-5" />;
    case 'peft':
      return <Braces className="h-5 w-5" />;
    default:
      return <ThumbsUp className="h-5 w-5" />;
  }
};

const FineTuningMethods = () => {
  return (
    <Tabs defaultValue="sft" className="w-full">
      <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
        {methods.map(method => (
          <TabsTrigger key={method.id} value={method.id} className="flex items-center gap-2">
            <MethodIcon methodId={method.id} />
            <span className="hidden sm:inline">{method.name.split('(')[0].trim()}</span>
            <span className="sm:hidden">{method.id.toUpperCase()}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {methods.map(method => (
        <TabsContent key={method.id} value={method.id} className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MethodIcon methodId={method.id} />
                {method.name}
              </CardTitle>
              <CardDescription>{method.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-primary">Benefits</h4>
                  <ul className="space-y-1 text-sm">
                    {method.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-primary">Challenges</h4>
                  <ul className="space-y-1 text-sm">
                    {method.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-primary">Use Cases</h4>
                  <ul className="space-y-1 text-sm">
                    {method.use_cases.map((useCase, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {method.training_example && (
                <div className="mt-6">
                  <h4 className="font-medium mb-2 text-primary">Implementation Example</h4>
                  <div className="bg-secondary/60 p-4 rounded-md overflow-x-auto">
                    <pre className="text-xs">
                      <code>{method.training_example}</code>
                    </pre>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default FineTuningMethods;
