import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { setSEO } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, TrendingDown } from "lucide-react";

interface ROIResult {
  roi: number;
  netProfit: number;
  totalReturn: number;
}

function calculateROI(initialInvestment: number, finalValue: number): ROIResult {
  const netProfit = finalValue - initialInvestment;
  const roi = (netProfit / initialInvestment) * 100;
  const totalReturn = finalValue;

  return {
    roi,
    netProfit,
    totalReturn,
  };
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function ROICalculator() {
  const [initialInvestment, setInitialInvestment] = useState(100000);
  const [finalValue, setFinalValue] = useState(150000);
  const [result, setResult] = useState<ROIResult>(calculateROI(100000, 150000));

  useEffect(() => {
    setSEO({
      title: "ROI Calculator - Calculate Return on Investment | toolsmith",
      description: "Free online ROI calculator. Calculate return on investment, net profit, and investment performance with detailed breakdowns.",
      keywords: "ROI calculator, return on investment, profit calculator, investment return calculator, business calculator",
    });
  }, []);

  useEffect(() => {
    const newResult = calculateROI(initialInvestment, finalValue);
    setResult(newResult);
  }, [initialInvestment, finalValue]);

  const downloadReport = () => {
    const reportData = `
ROI Calculation Report
======================

Investment Details:
-------------------
Initial Investment: ${formatCurrency(initialInvestment)}
Final Value: ${formatCurrency(finalValue)}

Results:
--------
ROI: ${result.roi.toFixed(2)}%
Net Profit/Loss: ${formatCurrency(result.netProfit)}
Total Return: ${formatCurrency(result.totalReturn)}

Status: ${result.roi >= 0 ? "Profitable" : "Loss"}

Generated on: ${new Date().toLocaleDateString()}
    `;

    const blob = new Blob([reportData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `roi-report-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const isProfit = result.roi >= 0;

  return (
    <div className="min-h-screen bg-background dark:bg-background text-foreground dark:text-foreground">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-primary dark:text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground">
                ROI Calculator
              </h1>
            </div>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Calculate your return on investment and measure investment performance
            </p>
          </div>

          <AdPlaceholder type="banner" />

          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-foreground dark:text-foreground mb-6">Investment Details</h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="initialInvestment" className="text-foreground dark:text-foreground">
                    Initial Investment (₹)
                  </Label>
                  <Input
                    id="initialInvestment"
                    type="number"
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(Number(e.target.value))}
                    className="mt-2 bg-input dark:bg-input border-border dark:border-border text-foreground dark:text-foreground"
                    data-testid="input-initial-investment"
                  />
                  <p className="text-xs text-muted-foreground dark:text-muted-foreground mt-1">
                    The total amount you invested initially
                  </p>
                </div>

                <div>
                  <Label htmlFor="finalValue" className="text-foreground dark:text-foreground">
                    Final Value (₹)
                  </Label>
                  <Input
                    id="finalValue"
                    type="number"
                    value={finalValue}
                    onChange={(e) => setFinalValue(Number(e.target.value))}
                    className="mt-2 bg-input dark:bg-input border-border dark:border-border text-foreground dark:text-foreground"
                    data-testid="input-final-value"
                  />
                  <p className="text-xs text-muted-foreground dark:text-muted-foreground mt-1">
                    The current or final value of your investment
                  </p>
                </div>

                <div className="pt-4 border-t border-border dark:border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground dark:text-muted-foreground">ROI Formula:</span>
                    <code className="text-xs bg-muted dark:bg-muted px-2 py-1 rounded">
                      (Final - Initial) / Initial × 100
                    </code>
                  </div>
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className={`p-6 ${isProfit ? 'bg-green-50 dark:bg-green-950/20' : 'bg-red-50 dark:bg-red-950/20'}`}>
                <h2 className="text-xl font-semibold text-foreground dark:text-foreground mb-6">Results</h2>
                <div className="space-y-4">
                  <div className="text-center p-6 bg-background dark:bg-background rounded-lg">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      {isProfit ? (
                        <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                      ) : (
                        <TrendingDown className="w-6 h-6 text-red-600 dark:text-red-400" />
                      )}
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">Return on Investment</p>
                    </div>
                    <p className={`text-4xl font-bold ${isProfit ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`} data-testid="text-roi">
                      {result.roi.toFixed(2)}%
                    </p>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground mt-2">
                      {isProfit ? "Profitable Investment" : "Investment Loss"}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-background dark:bg-background rounded-lg">
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-1">Initial Investment</p>
                      <p className="text-lg font-semibold text-foreground dark:text-foreground" data-testid="text-initial">
                        {formatCurrency(initialInvestment)}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-background dark:bg-background rounded-lg">
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-1">Final Value</p>
                      <p className="text-lg font-semibold text-foreground dark:text-foreground" data-testid="text-final">
                        {formatCurrency(finalValue)}
                      </p>
                    </div>
                  </div>

                  <div className="text-center p-4 bg-background dark:bg-background rounded-lg">
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-1">Net Profit/Loss</p>
                    <p className={`text-2xl font-bold ${isProfit ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`} data-testid="text-net-profit">
                      {formatCurrency(result.netProfit)}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground dark:text-foreground mb-4">Understanding ROI</h3>
                <div className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                  <p>• Positive ROI indicates a profitable investment</p>
                  <p>• Negative ROI indicates a loss on the investment</p>
                  <p>• ROI helps compare different investment opportunities</p>
                  <p>• Consider the time period when evaluating ROI</p>
                </div>
              </Card>

              <Button
                onClick={downloadReport}
                variant="outline"
                className="w-full border-border dark:border-border text-foreground dark:text-foreground hover:bg-muted dark:hover:bg-muted"
                data-testid="button-download-report"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Report
              </Button>
            </div>
          </div>

          <AdPlaceholder type="inline" className="mt-8" />
        </div>
      </div>

      <Footer />
      <AdPlaceholder type="mobile-sticky" />
    </div>
  );
}
