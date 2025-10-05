import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface RelatedTool {
  href: string;
  label: string;
  description: string;
}

interface RelatedToolsProps {
  currentTool: string;
  category: "finance" | "developer";
}

const financeTools: RelatedTool[] = [
  { href: "/tools/loan-calculator", label: "EMI Calculator", description: "Calculate monthly loan payments" },
  { href: "/tools/compound-interest", label: "Compound Interest", description: "Investment growth calculator" },
  { href: "/tools/roi-calculator", label: "ROI Calculator", description: "Return on investment calculator" },
  { href: "/tools/sip-calculator", label: "SIP Calculator", description: "Mutual fund investment planner" },
  { href: "/tools/fd-calculator", label: "FD Calculator", description: "Fixed deposit returns" },
  { href: "/tools/tax-calculator", label: "Tax Calculator", description: "Income tax calculator" },
];

const developerTools: RelatedTool[] = [
  { href: "/tools/json-formatter", label: "JSON Formatter", description: "Format and validate JSON" },
  { href: "/tools/base64", label: "Base64 Tool", description: "Encode/decode Base64" },
  { href: "/tools/hash-generator", label: "Hash Generator", description: "Generate secure hashes" },
  { href: "/tools/url-encoder", label: "URL Encoder", description: "Encode/decode URLs" },
];

export default function RelatedTools({ currentTool, category }: RelatedToolsProps) {
  const tools = category === "finance" ? financeTools : developerTools;
  const relatedTools = tools.filter((tool) => tool.href !== currentTool).slice(0, 3);

  if (relatedTools.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-foreground mb-6">Related Tools</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedTools.map((tool) => (
          <Card key={tool.href} className="p-6 hover:shadow-md transition-shadow">
            <h4 className="text-lg font-semibold text-foreground mb-2">{tool.label}</h4>
            <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
            <Button asChild variant="outline" size="sm" className="w-full" data-testid={`related-tool-${tool.href.split("/").pop()}`}>
              <Link href={tool.href}>
                <span className="flex items-center justify-center gap-2">
                  Try it now
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
