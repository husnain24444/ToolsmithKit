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

interface FDResult {
  principalAmount: number;
  interestEarned: number;
  maturityAmount: number;
}

function calculateFD(principal: number, rate: number, years: number): FDResult {
  const maturityAmount = principal * Math.pow(1 + rate / 100, years);
  const interestEarned = maturityAmount - principal;
  
  return {
    principalAmount: principal,
    interestEarned,
    maturityAmount,
  };
}

export default function FDCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(5);
  const [result, setResult] = useState(calculateFD(100000, 6.5, 5));

  useEffect(() => {
    setSEO({
      title: "FD Calculator - Calculate Fixed Deposit Returns | toolsmith",
      description: "Free online fixed deposit calculator. Calculate maturity amount and interest earned on your FD investments with accurate projections.",
      keywords: "FD calculator, fixed deposit calculator, FD maturity calculator, interest calculator, bank FD",
    });
  }, []);

  const handleCalculate = () => {
    const newResult = calculateFD(principal, rate, years);
    setResult(newResult);
  };

  useEffect(() => {
    handleCalculate();
  }, [principal, rate, years]);

  const chartData = {
    labels: ["Principal Amount", "Interest Earned"],
    datasets: [
      {
        data: [result.principalAmount, result.interestEarned],
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
Fixed Deposit Calculation Report
=================================

Principal Amount: ${formatCurrency(principal)}
Interest Rate: ${rate}% per annum
Tenure: ${years} years

Results:
--------
Principal Amount: ${formatCurrency(result.principalAmount)}
Interest Earned: ${formatCurrency(result.interestEarned)}
Maturity Amount: ${formatCurrency(result.maturityAmount)}

Generated on: ${new Date().toLocaleDateString()}
    `;

    const blob = new Blob([reportData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `fd-report-${Date.now()}.txt`;
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
              Fixed Deposit Calculator
            </h1>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Calculate maturity amount and returns on your fixed deposit investments
            </p>
          </div>

          <AdPlaceholder type="banner" />

          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">FD Details</h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="principal">Principal Amount (₹)</Label>
                  <Input
                    id="principal"
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="mt-2"
                    data-testid="input-principal"
                  />
                  <input
                    type="range"
                    min="1000"
                    max="10000000"
                    step="1000"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="w-full mt-2"
                    data-testid="slider-principal"
                  />
                </div>

                <div>
                  <Label htmlFor="rate">Interest Rate (% p.a.)</Label>
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
                    max="15"
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
                    max="30"
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
                    <span className="text-muted-foreground">Principal Amount</span>
                    <span className="text-xl font-bold" data-testid="text-principal">
                      {formatCurrency(result.principalAmount)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-accent/10 rounded-lg">
                    <span className="text-muted-foreground">Interest Earned</span>
                    <span className="text-xl font-bold text-accent" data-testid="text-interest">
                      {formatCurrency(result.interestEarned)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg">
                    <span className="text-muted-foreground">Maturity Amount</span>
                    <span className="text-2xl font-bold text-primary" data-testid="text-maturity">
                      {formatCurrency(result.maturityAmount)}
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
