import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { setSEO } from "@/lib/seo";
import { formatCurrency } from "@/lib/emiCalculations";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);

interface SIPResult {
  monthlyInvestment: number;
  totalInvestment: number;
  estimatedReturns: number;
  totalValue: number;
}

function calculateSIP(monthlyInvestment: number, rate: number, years: number): SIPResult {
  const months = years * 12;
  const monthlyRate = rate / (12 * 100);
  
  const futureValue = monthlyInvestment * 
    (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
  
  const totalInvestment = monthlyInvestment * months;
  const estimatedReturns = futureValue - totalInvestment;
  
  return {
    monthlyInvestment,
    totalInvestment,
    estimatedReturns,
    totalValue: futureValue,
  };
}

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const [result, setResult] = useState(calculateSIP(5000, 12, 10));

  useEffect(() => {
    setSEO({
      title: "SIP Calculator - Calculate Mutual Fund Returns | ToolsHub",
      description: "Free online SIP calculator. Calculate returns on your systematic investment plan, see wealth growth over time with detailed projections.",
      keywords: "SIP calculator, systematic investment plan, mutual fund calculator, investment calculator, SIP returns",
    });
  }, []);

  const handleCalculate = () => {
    const newResult = calculateSIP(monthlyInvestment, rate, years);
    setResult(newResult);
  };

  useEffect(() => {
    handleCalculate();
  }, [monthlyInvestment, rate, years]);

  const chartData = {
    labels: ["Total Investment", "Estimated Returns"],
    datasets: [
      {
        data: [result.totalInvestment, result.estimatedReturns],
        backgroundColor: [
          "hsl(220, 91%, 56%)",
          "hsl(160, 84%, 39%)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          color: "hsl(var(--foreground))",
          font: {
            family: "Inter, system-ui, sans-serif",
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.label}: ${formatCurrency(context.parsed)}`;
          },
        },
      },
    },
  };

  const downloadReport = () => {
    const reportData = `
SIP Calculation Report
======================

Monthly Investment: ${formatCurrency(monthlyInvestment)}
Expected Return Rate: ${rate}% per annum
Investment Period: ${years} years

Results:
--------
Total Investment: ${formatCurrency(result.totalInvestment)}
Estimated Returns: ${formatCurrency(result.estimatedReturns)}
Total Value: ${formatCurrency(result.totalValue)}

Generated on: ${new Date().toLocaleDateString()}
    `;

    const blob = new Blob([reportData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sip-report-${Date.now()}.txt`;
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
            <h1 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground mb-4">
              SIP Calculator
            </h1>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Calculate your mutual fund returns with systematic investment planning
            </p>
          </div>

          <AdPlaceholder type="banner" />

          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Investment Details</h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="monthly-investment">Monthly Investment (₹)</Label>
                  <Input
                    id="monthly-investment"
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="mt-2"
                    data-testid="input-monthly-investment"
                  />
                  <input
                    type="range"
                    min="500"
                    max="100000"
                    step="500"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="w-full mt-2"
                    data-testid="slider-monthly-investment"
                  />
                </div>

                <div>
                  <Label htmlFor="rate">Expected Return Rate (% p.a.)</Label>
                  <Input
                    id="rate"
                    type="number"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="mt-2"
                    data-testid="input-rate"
                  />
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full mt-2"
                    data-testid="slider-rate"
                  />
                </div>

                <div>
                  <Label htmlFor="years">Time Period (Years)</Label>
                  <Input
                    id="years"
                    type="number"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="mt-2"
                    data-testid="input-years"
                  />
                  <input
                    type="range"
                    min="1"
                    max="40"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full mt-2"
                    data-testid="slider-years"
                  />
                </div>

                <Button 
                  onClick={downloadReport} 
                  className="w-full"
                  data-testid="button-download-report"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Results</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="text-muted-foreground">Monthly Investment</span>
                    <span className="text-xl font-bold" data-testid="text-monthly-investment">
                      {formatCurrency(result.monthlyInvestment)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="text-muted-foreground">Total Investment</span>
                    <span className="text-xl font-bold" data-testid="text-total-investment">
                      {formatCurrency(result.totalInvestment)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-accent/10 rounded-lg">
                    <span className="text-muted-foreground">Estimated Returns</span>
                    <span className="text-xl font-bold text-accent" data-testid="text-estimated-returns">
                      {formatCurrency(result.estimatedReturns)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg">
                    <span className="text-muted-foreground">Total Value</span>
                    <span className="text-2xl font-bold text-primary" data-testid="text-total-value">
                      {formatCurrency(result.totalValue)}
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Investment Breakdown</h3>
                <div className="h-64">
                  <Doughnut data={chartData} options={chartOptions} />
                </div>
              </Card>
            </div>
          </div>

          <AdPlaceholder type="banner" className="mt-8" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
