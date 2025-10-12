import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Clock, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getRecentTools, type RecentTool } from "@/lib/recentTools";

export default function RecentTools() {
  const [recentTools, setRecentTools] = useState<RecentTool[]>([]);

  useEffect(() => {
    setRecentTools(getRecentTools());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (recentTools.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Recently Used Tools</h2>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {recentTools.map((tool) => (
            <Card key={tool.href} className="p-4 hover:shadow-md transition-shadow">
              <Link href={tool.href} onClick={scrollToTop}>
                <div className="cursor-pointer" data-testid={`recent-tool-${tool.href.split("/").pop()}`}>
                  <div className="text-sm font-medium text-foreground mb-1 line-clamp-2">
                    {tool.label}
                  </div>
                  <div className="text-xs text-muted-foreground capitalize">{tool.category}</div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
