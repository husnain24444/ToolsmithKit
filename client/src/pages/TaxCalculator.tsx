import { useState, useEffect } from "react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface TaxResult {
  grossIncome: number;
  totalDeductions: number;
  taxableIncome: number;
  totalTax: number;
  netIncome: number;
}

function calculateTax(income: number, deductions: number, regime: "old" | "new"): TaxResult {
  const taxableIncome = Math.max(0, income - deductions);
  let tax = 0;

  if (regime === "new") {
    if (taxableIncome <= 300000) {
      tax = 0;
    } else if (taxableIncome <= 600000) {
      tax = (taxableIncome - 300000) * 0.05;
    } else if (taxableIncome <= 900000) {
      tax = 15000 + (taxableIncome - 600000) * 0.10;
    } else if (taxableIncome <= 1200000) {
      tax = 45000 + (taxableIncome - 900000) * 0.15;
    } else if (taxableIncome <= 1500000) {
      tax = 90000 + (taxableIncome - 1200000) * 0.20;
    } else {
      tax = 150000 + (taxableIncome - 1500000) * 0.30;
    }
  } else {
    if (taxableIncome <= 250000) {
      tax = 0;
    } else if (taxableIncome <= 500000) {
      tax = (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome <= 1000000) {
      tax = 12500 + (taxableIncome - 500000) * 0.20;
    } else {
      tax = 112500 + (taxableIncome - 1000000) * 0.30;
    }
  }

  const cess = tax * 0.04;
  const totalTax = tax + cess;

  return {
    grossIncome: income,
    totalDeductions: deductions,
    taxableIncome,
    totalTax,
    netIncome: income - totalTax,
  };
}

export default function TaxCalculator() {
  const [income, setIncome] = useState(1000000);
  const [deductions, setDeductions] = useState(50000);
  const [regime, setRegime] = useState<"old" | "new">("new");
  const [result, setResult] = useState(calculateTax(1000000, 50000, "new"));

  useEffect(() => {
    setSEO({
      title: "Income Tax Calculator - Calculate Tax Online | toolsmith",
      description: "Free online income tax calculator for India. Calculate your tax liability under old and new tax regimes with accurate projections.",
      keywords: "income tax calculator, tax calculator India, new tax regime, old tax regime, tax planning",
    });
  }, []);

  const handleCalculate = () => {
    const newResult = calculateTax(income, deductions, regime);
    setResult(newResult);
  };

  useEffect(() => {
    handleCalculate();
  }, [income, deductions, regime]);

  const downloadReport = () => {
    const reportData = `
Income Tax Calculation Report
==============================

Gross Annual Income: ${formatCurrency(income)}
Total Deductions: ${formatCurrency(deductions)}
Tax Regime: ${regime === "new" ? "New Tax Regime" : "Old Tax Regime"}

Results:
--------
Taxable Income: ${formatCurrency(result.taxableIncome)}
Total Tax (incl. 4% cess): ${formatCurrency(result.totalTax)}
Net Income: ${formatCurrency(result.netIncome)}

Generated on: ${new Date().toLocaleDateString()}
    `;

    const blob = new Blob([reportData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `tax-report-${Date.now()}.txt`;
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
              Income Tax Calculator
            </h1>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Calculate your income tax for India under old and new tax regimes
            </p>
          </div>

          <AdPlaceholder type="banner" />

          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Income Details</h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="income">Gross Annual Income (₹)</Label>
                  <Input
                    id="income"
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                    className="mt-2"
                    data-testid="input-income"
                  />
                  <input
                    type="range"
                    min="0"
                    max="10000000"
                    step="10000"
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                    className="w-full mt-2"
                    data-testid="slider-income"
                  />
                </div>

                <div>
                  <Label htmlFor="deductions">Total Deductions (₹)</Label>
                  <Input
                    id="deductions"
                    type="number"
                    value={deductions}
                    onChange={(e) => setDeductions(Number(e.target.value))}
                    className="mt-2"
                    data-testid="input-deductions"
                  />
                  <input
                    type="range"
                    min="0"
                    max="200000"
                    step="5000"
                    value={deductions}
                    onChange={(e) => setDeductions(Number(e.target.value))}
                    className="w-full mt-2"
                    data-testid="slider-deductions"
                  />
                </div>

                <div>
                  <Label>Tax Regime</Label>
                  <RadioGroup
                    value={regime}
                    onValueChange={(value) => setRegime(value as "old" | "new")}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="new" id="new" data-testid="radio-new-regime" />
                      <Label htmlFor="new" className="cursor-pointer">New Tax Regime</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="old" id="old" data-testid="radio-old-regime" />
                      <Label htmlFor="old" className="cursor-pointer">Old Tax Regime</Label>
                    </div>
                  </RadioGroup>
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
                <h2 className="text-2xl font-semibold mb-6">Tax Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="text-muted-foreground">Gross Income</span>
                    <span className="text-xl font-bold" data-testid="text-gross-income">
                      {formatCurrency(result.grossIncome)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="text-muted-foreground">Total Deductions</span>
                    <span className="text-xl font-bold" data-testid="text-deductions">
                      {formatCurrency(result.totalDeductions)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="text-muted-foreground">Taxable Income</span>
                    <span className="text-xl font-bold" data-testid="text-taxable-income">
                      {formatCurrency(result.taxableIncome)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-destructive/10 rounded-lg">
                    <span className="text-muted-foreground">Total Tax</span>
                    <span className="text-xl font-bold text-destructive" data-testid="text-total-tax">
                      {formatCurrency(result.totalTax)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg">
                    <span className="text-muted-foreground">Net Income</span>
                    <span className="text-2xl font-bold text-primary" data-testid="text-net-income">
                      {formatCurrency(result.netIncome)}
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-muted/50">
                <h3 className="text-lg font-semibold mb-3">Note</h3>
                <p className="text-sm text-muted-foreground">
                  This calculator provides an estimate based on standard tax slabs. 
                  Actual tax liability may vary based on additional factors like rebates, 
                  surcharges, and specific deductions applicable to your situation.
                </p>
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
