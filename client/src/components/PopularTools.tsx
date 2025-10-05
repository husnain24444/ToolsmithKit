import { Link } from "wouter";
import { Flame, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const popularTools = [
  {
    href: "/tools/loan-calculator",
    label: "EMI Calculator",
    description: "Most used finance calculator",
    icon: "💰",
    badge: "Popular",
    category: "Finance"
  },
  {
    href: "/tools/json-formatter",
    label: "JSON Formatter",
    description: "Top developer tool",
    icon: "📋",
    badge: "Trending",
    category: "Developer"
  },
  {
    href: "/tools/sip-calculator",
    label: "SIP Calculator",
    description: "Investment planning made easy",
    icon: "📈",
    badge: "Popular",
    category: "Finance"
  },
  {
    href: "/tools/tax-calculator",
    label: "Tax Calculator",
    description: "Calculate your tax liability",
    icon: "🧾",
    badge: "Hot",
    category: "Finance"
  },
];

export default function PopularTools() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="w-6 h-6 text-orange-500" />
            <h2 className="text-3xl font-bold text-foreground">Most Popular Tools</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of users using these powerful tools daily
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularTools.map((tool) => (
            <Card key={tool.href} className="p-6 hover:shadow-lg transition-all hover:scale-105">
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{tool.icon}</span>
                <Badge variant={tool.badge === "Popular" ? "default" : "secondary"} data-testid={`badge-${tool.badge.toLowerCase()}`}>
                  {tool.badge}
                </Badge>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{tool.label}</h3>
              <p className="text-sm text-muted-foreground mb-1">{tool.description}</p>
              <p className="text-xs text-muted-foreground mb-4">{tool.category}</p>
              <Button asChild className="w-full" size="sm" data-testid={`popular-tool-${tool.href.split("/").pop()}`}>
                <Link href={tool.href}>Try Now →</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
