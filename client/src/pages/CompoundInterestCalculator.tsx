import { useState, useEffect } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { setSEO } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface CompoundResult {
  futureValue: number;
  totalInvestment: number;
  totalInterest: number;
}

function calculateCompoundInterest(
  principal: number,
  rate: number,
  years: number,
  frequency: number
): CompoundResult {
  const futureValue = principal * Math.pow(1 + rate / (100 * frequency), frequency * years);
  const totalInvestment = principal;
  const totalInterest = futureValue - totalInvestment;

  return {
    futureValue,
    totalInvestment,
    totalInterest,
  };
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(10);
  const [years, setYears] = useState(5);
  const [frequency, setFrequency] = useState(12);
  const [result, setResult] = useState<CompoundResult>(calculateCompoundInterest(100000, 10, 5, 12));

  useEffect(() => {
    setSEO({
      title: "Compound Interest Calculator - Calculate Investment Returns | ToolsHub",
      description: "Free online compound interest calculator. Calculate future value, total interest, and investment growth with different compounding frequencies.",
      keywords: "compound interest calculator, investment calculator, FD calculator, savings calculator, interest calculator",
    });
  }, []);

  useEffect(() => {
    const newResult = calculateCompoundInterest(principal, rate, years, frequency);
    setResult(newResult);
  }, [principal, rate, years, frequency]);

  const chartData = {
    labels: ["Principal", "Interest Earned"],
    datasets: [
      {
        label: "Amount (₹)",
        data: [result.totalInvestment, result.totalInterest],
        backgroundColor: ["hsl(220, 91%, 56%)", "hsl(160, 84%, 39%)"],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Investment Breakdown",
        color: "hsl(var(--foreground))",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "hsl(var(--foreground))",
        },
        grid: {
          color: "hsl(var(--border))",
        },
      },
      x: {
        ticks: {
          color: "hsl(var(--foreground))",
        },
        grid: {
          color: "hsl(var(--border))",
        },
      },
    },
  };

  const downloadReport = () => {
    const freqName = {
      1: "Annually",
      2: "Semi-Annually",
      4: "Quarterly",
      12: "Monthly",
      365: "Daily",
    }[frequency] || "Custom";

    const reportData = `
Compound Interest Calculation Report
=====================================

Investment Details:
-------------------
Principal Amount: ${formatCurrency(principal)}
Interest Rate: ${rate}% per annum
Investment Period: ${years} years
Compounding Frequency: ${freqName}

Results:
--------
Future Value: ${formatCurrency(result.futureValue)}
Total Investment: ${formatCurrency(result.totalInvestment)}
Total Interest Earned: ${formatCurrency(result.totalInterest)}

Generated on: ${new Date().toLocaleDateString()}
    `;

    const blob = new Blob([reportData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `compound-interest-report-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background text-foreground dark:text-foreground">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-primary dark:text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground">
                Compound Interest Calculator
              </h1>
            </div>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Calculate the future value of your investments with compound interest
            </p>
          </div>

          <AdPlaceholder type="banner" />

          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-foreground dark:text-foreground mb-6">Investment Details</h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="principal" className="text-foreground dark:text-foreground">
                    Principal Amount (₹)
                  </Label>
                  <Input
                    id="principal"
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="mt-2 bg-input dark:bg-input border-border dark:border-border text-foreground dark:text-foreground"
                    data-testid="input-principal"
                  />
                </div>

                <div>
                  <Label htmlFor="rate" className="text-foreground dark:text-foreground">
                    Annual Interest Rate (%)
                  </Label>
                  <Input
                    id="rate"
                    type="number"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="mt-2 bg-input dark:bg-input border-border dark:border-border text-foreground dark:text-foreground"
                    data-testid="input-rate"
                  />
                </div>

                <div>
                  <Label htmlFor="years" className="text-foreground dark:text-foreground">
                    Investment Period (Years)
                  </Label>
                  <Input
                    id="years"
                    type="number"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="mt-2 bg-input dark:bg-input border-border dark:border-border text-foreground dark:text-foreground"
                    data-testid="input-years"
                  />
                </div>

                <div>
                  <Label htmlFor="frequency" className="text-foreground dark:text-foreground">
                    Compounding Frequency
                  </Label>
                  <Select value={frequency.toString()} onValueChange={(value) => setFrequency(Number(value))}>
                    <SelectTrigger className="mt-2 bg-input dark:bg-input border-border dark:border-border text-foreground dark:text-foreground" data-testid="select-frequency">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Annually</SelectItem>
                      <SelectItem value="2">Semi-Annually</SelectItem>
                      <SelectItem value="4">Quarterly</SelectItem>
                      <SelectItem value="12">Monthly</SelectItem>
                      <SelectItem value="365">Daily</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 bg-muted dark:bg-muted">
                <h2 className="text-xl font-semibold text-foreground dark:text-foreground mb-6">Results</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="text-center p-4 bg-primary/10 dark:bg-primary/20 rounded-lg">
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-1">Future Value</p>
                    <p className="text-3xl font-bold text-primary dark:text-primary" data-testid="text-future-value">
                      {formatCurrency(result.futureValue)}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-background dark:bg-background rounded-lg">
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-1">Principal</p>
                      <p className="text-xl font-semibold text-foreground dark:text-foreground" data-testid="text-principal">
                        {formatCurrency(result.totalInvestment)}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-background dark:bg-background rounded-lg">
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-1">Interest</p>
                      <p className="text-xl font-semibold text-accent dark:text-accent" data-testid="text-interest">
                        {formatCurrency(result.totalInterest)}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="h-64">
                  <Bar data={chartData} options={chartOptions} />
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
