import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import RelatedTools from "@/components/RelatedTools";
import { setSEO } from "@/lib/seo";
import { addRecentTool } from "@/lib/recentTools";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Percent } from "lucide-react";

export default function PercentageCalculator() {
  const [percentOfValue, setPercentOfValue] = useState({ percent: 10, value: 100, result: 10 });
  const [percentageChange, setPercentageChange] = useState({ from: 100, to: 150, result: 50 });
  const [percentageIncrease, setPercentageIncrease] = useState({ value: 100, percent: 20, result: 120 });
  const [percentageDecrease, setPercentageDecrease] = useState({ value: 100, percent: 20, result: 80 });

  useEffect(() => {
    setSEO({
      title: "Percentage Calculator - Calculate Percentages Online | toolsmith",
      description: "Free percentage calculator for all your percentage needs. Calculate percentage of a number, percentage change, increase, decrease, and more. Fast and accurate results.",
      keywords: "percentage calculator, percent calculator, percentage of, percentage change, percentage increase, percentage decrease, calculate percentage",
    });

    addRecentTool({
      href: "/tools/percentage-calculator",
      label: "Percentage Calculator",
      category: "general",
    });
  }, []);

  const calculatePercentOf = (percent: number, value: number) => {
    const result = (percent / 100) * value;
    setPercentOfValue({ percent, value, result });
  };

  const calculatePercentageChange = (from: number, to: number) => {
    const result = from === 0 ? 0 : ((to - from) / from) * 100;
    setPercentageChange({ from, to, result });
  };

  const calculatePercentageIncrease = (value: number, percent: number) => {
    const result = value + (value * percent) / 100;
    setPercentageIncrease({ value, percent, result });
  };

  const calculatePercentageDecrease = (value: number, percent: number) => {
    const result = value - (value * percent) / 100;
    setPercentageDecrease({ value, percent, result });
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background text-foreground dark:text-foreground">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <AdPlaceholder type="banner" />

        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground mb-4">
              Percentage Calculator
            </h1>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Calculate percentages quickly and easily. Find percentage of a number, percentage change, and more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* What is X% of Y? */}
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Percent className="w-6 h-6 text-primary dark:text-primary mr-2" />
                <h2 className="text-xl font-semibold text-foreground dark:text-foreground">
                  What is X% of Y?
                </h2>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="percent-of-percent" className="text-foreground dark:text-foreground">
                      Percent (%)
                    </Label>
                    <Input
                      id="percent-of-percent"
                      type="number"
                      value={percentOfValue.percent}
                      onChange={(e) =>
                        calculatePercentOf(Number(e.target.value), percentOfValue.value)
                      }
                      data-testid="input-percent-of-percent"
                    />
                  </div>
                  <div>
                    <Label htmlFor="percent-of-value" className="text-foreground dark:text-foreground">
                      of Value
                    </Label>
                    <Input
                      id="percent-of-value"
                      type="number"
                      value={percentOfValue.value}
                      onChange={(e) =>
                        calculatePercentOf(percentOfValue.percent, Number(e.target.value))
                      }
                      data-testid="input-percent-of-value"
                    />
                  </div>
                </div>
                <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-1">Result:</p>
                  <p className="text-2xl font-bold text-primary dark:text-primary" data-testid="text-percent-of-result">
                    {percentOfValue.result.toFixed(2)}
                  </p>
                </div>
              </div>
            </Card>

            {/* Percentage Change */}
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Percent className="w-6 h-6 text-accent dark:text-accent mr-2" />
                <h2 className="text-xl font-semibold text-foreground dark:text-foreground">
                  Percentage Change
                </h2>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="change-from" className="text-foreground dark:text-foreground">
                      From
                    </Label>
                    <Input
                      id="change-from"
                      type="number"
                      value={percentageChange.from}
                      onChange={(e) =>
                        calculatePercentageChange(Number(e.target.value), percentageChange.to)
                      }
                      data-testid="input-change-from"
                    />
                  </div>
                  <div>
                    <Label htmlFor="change-to" className="text-foreground dark:text-foreground">
                      To
                    </Label>
                    <Input
                      id="change-to"
                      type="number"
                      value={percentageChange.to}
                      onChange={(e) =>
                        calculatePercentageChange(percentageChange.from, Number(e.target.value))
                      }
                      data-testid="input-change-to"
                    />
                  </div>
                </div>
                <div className="bg-accent/10 dark:bg-accent/20 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-1">Change:</p>
                  <p className="text-2xl font-bold text-accent dark:text-accent" data-testid="text-percentage-change">
                    {percentageChange.result >= 0 ? "+" : ""}
                    {percentageChange.result.toFixed(2)}%
                  </p>
                </div>
              </div>
            </Card>

            {/* Percentage Increase */}
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Percent className="w-6 h-6 text-green-500 mr-2" />
                <h2 className="text-xl font-semibold text-foreground dark:text-foreground">
                  Percentage Increase
                </h2>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="increase-value" className="text-foreground dark:text-foreground">
                      Value
                    </Label>
                    <Input
                      id="increase-value"
                      type="number"
                      value={percentageIncrease.value}
                      onChange={(e) =>
                        calculatePercentageIncrease(
                          Number(e.target.value),
                          percentageIncrease.percent
                        )
                      }
                      data-testid="input-increase-value"
                    />
                  </div>
                  <div>
                    <Label htmlFor="increase-percent" className="text-foreground dark:text-foreground">
                      Increase by (%)
                    </Label>
                    <Input
                      id="increase-percent"
                      type="number"
                      value={percentageIncrease.percent}
                      onChange={(e) =>
                        calculatePercentageIncrease(
                          percentageIncrease.value,
                          Number(e.target.value)
                        )
                      }
                      data-testid="input-increase-percent"
                    />
                  </div>
                </div>
                <div className="bg-green-500/10 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-1">New Value:</p>
                  <p className="text-2xl font-bold text-green-500" data-testid="text-increase-result">
                    {percentageIncrease.result.toFixed(2)}
                  </p>
                </div>
              </div>
            </Card>

            {/* Percentage Decrease */}
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Percent className="w-6 h-6 text-red-500 mr-2" />
                <h2 className="text-xl font-semibold text-foreground dark:text-foreground">
                  Percentage Decrease
                </h2>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="decrease-value" className="text-foreground dark:text-foreground">
                      Value
                    </Label>
                    <Input
                      id="decrease-value"
                      type="number"
                      value={percentageDecrease.value}
                      onChange={(e) =>
                        calculatePercentageDecrease(
                          Number(e.target.value),
                          percentageDecrease.percent
                        )
                      }
                      data-testid="input-decrease-value"
                    />
                  </div>
                  <div>
                    <Label htmlFor="decrease-percent" className="text-foreground dark:text-foreground">
                      Decrease by (%)
                    </Label>
                    <Input
                      id="decrease-percent"
                      type="number"
                      value={percentageDecrease.percent}
                      onChange={(e) =>
                        calculatePercentageDecrease(
                          percentageDecrease.value,
                          Number(e.target.value)
                        )
                      }
                      data-testid="input-decrease-percent"
                    />
                  </div>
                </div>
                <div className="bg-red-500/10 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-1">New Value:</p>
                  <p className="text-2xl font-bold text-red-500" data-testid="text-decrease-result">
                    {percentageDecrease.result.toFixed(2)}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <AdPlaceholder type="inline" className="mt-8" />

          {/* SEO Content */}
          <Card className="p-6 mt-8">
            <h2 className="text-2xl font-semibold text-foreground dark:text-foreground mb-4">
              Percentage Calculator Guide
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Our percentage calculator helps you solve common percentage problems quickly and accurately. Whether you need to calculate discounts, tips, taxes, or growth rates, this tool has you covered.
              </p>
              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mt-6 mb-3">
                Common Percentage Calculations:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground dark:text-muted-foreground">
                <li>Calculate sales discounts and save money shopping</li>
                <li>Determine tip amounts at restaurants</li>
                <li>Figure out tax amounts on purchases</li>
                <li>Track investment returns and growth rates</li>
                <li>Calculate grade percentages and test scores</li>
                <li>Measure business metrics like profit margins</li>
              </ul>
            </div>
          </Card>

          <RelatedTools currentTool="/tools/percentage-calculator" category="general" />
        </div>
      </div>

      <Footer />
      <AdPlaceholder type="mobile-sticky" />
    </div>
  );
}
