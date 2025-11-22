import { useState, useEffect, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import RelatedTools from "@/components/RelatedTools";
import { setSEO } from "@/lib/seo";
import { calculateEMI, formatCurrency } from "@/lib/emiCalculations";
import { addRecentTool } from "@/lib/recentTools";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function LoanCalculator() {
  const [principal, setPrincipal] = useState(1000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [result, setResult] = useState(calculateEMI(1000000, 8.5, 20));

  useEffect(() => {
    setSEO({
      title: "EMI Calculator - Calculate Loan EMI Online | toolsmith",
      description: "Free online EMI calculator. Calculate monthly loan payments, total interest, and view detailed amortization schedules. Supports home loans, car loans, and personal loans.",
      keywords: "EMI calculator, loan calculator, home loan EMI, car loan calculator, personal loan EMI, interest calculator",
    });
    
    addRecentTool({
      href: "/tools/loan-calculator",
      label: "EMI / Loan Calculator",
      category: "finance",
    });
  }, []);

  const handleCalculate = () => {
    const newResult = calculateEMI(principal, rate, tenure);
    setResult(newResult);
  };

  useEffect(() => {
    handleCalculate();
  }, [principal, rate, tenure]);

  const chartData = {
    labels: ["Principal Amount", "Total Interest"],
    datasets: [
      {
        data: [principal, result.totalInterest],
        backgroundColor: [
          "hsl(220, 91%, 56%)", // primary
          "hsl(160, 84%, 39%)", // accent
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
EMI Calculation Report
======================

Loan Amount: ${formatCurrency(principal)}
Interest Rate: ${rate}% per annum
Loan Tenure: ${tenure} years

Results:
--------
Monthly EMI: ${formatCurrency(result.emi)}
Total Interest: ${formatCurrency(result.totalInterest)}
Total Amount Payable: ${formatCurrency(result.totalAmount)}

Generated on: ${new Date().toLocaleDateString()}
    `;

    const blob = new Blob([reportData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `emi-report-${Date.now()}.txt`;
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
              EMI / Loan Calculator
            </h1>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Calculate your monthly EMI, total interest, and loan breakdown with our accurate calculator
            </p>
          </div>

          <AdPlaceholder type="banner" />

          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            {/* Calculator Form */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-foreground dark:text-foreground mb-6">Loan Details</h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="loanAmount" className="text-foreground dark:text-foreground">
                    Loan Amount (₹)
                  </Label>
                  <Input
                    id="loanAmount"
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="mt-2 bg-input dark:bg-input border-border dark:border-border text-foreground dark:text-foreground"
                    data-testid="input-loan-amount"
                  />
                </div>

                <div>
                  <Label htmlFor="interestRate" className="text-foreground dark:text-foreground">
                    Interest Rate (% per annum)
                  </Label>
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="mt-2 bg-input dark:bg-input border-border dark:border-border text-foreground dark:text-foreground"
                    data-testid="input-interest-rate"
                  />
                </div>

                <div>
                  <Label htmlFor="tenure" className="text-foreground dark:text-foreground">
                    Loan Tenure (Years)
                  </Label>
                  <Input
                    id="tenure"
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="mt-2 bg-input dark:bg-input border-border dark:border-border text-foreground dark:text-foreground"
                    data-testid="input-tenure"
                  />
                </div>

                <Button
                  onClick={handleCalculate}
                  className="w-full bg-primary dark:bg-primary text-primary-foreground dark:text-primary-foreground hover:bg-primary/90 dark:hover:bg-primary/90"
                  data-testid="button-calculate-emi"
                >
                  Calculate EMI
                </Button>
              </div>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              <Card className="p-6 bg-muted dark:bg-muted">
                <h2 className="text-xl font-semibold text-foreground dark:text-foreground mb-6">Results</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-1">Monthly EMI</p>
                    <p className="text-2xl font-bold text-primary dark:text-primary" data-testid="text-emi-amount">
                      {formatCurrency(result.emi)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-1">Total Interest</p>
                    <p className="text-xl font-semibold text-foreground dark:text-foreground" data-testid="text-total-interest">
                      {formatCurrency(result.totalInterest)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-1">Total Amount</p>
                    <p className="text-xl font-semibold text-foreground dark:text-foreground" data-testid="text-total-amount">
                      {formatCurrency(result.totalAmount)}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground dark:text-foreground mb-4">
                  Principal vs Interest Breakdown
                </h3>
                <div className="h-64">
                  <Doughnut data={chartData} options={chartOptions} />
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

          <RelatedTools currentTool="/tools/loan-calculator" category="finance" />
        </div>
      </div>

      <Footer />
      <AdPlaceholder type="mobile-sticky" />
    </div>
  );
}
