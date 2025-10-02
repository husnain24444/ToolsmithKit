import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { setSEO } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogFinance() {
  useEffect(() => {
    setSEO({
      title: "Smart Financial Planning: EMI & Investment Strategies | ToolsHub Blog",
      description: "Learn about EMI calculations, compound interest strategies, and smart investment planning. Expert financial tips and calculator usage guides.",
      keywords: "financial planning, EMI strategies, investment tips, compound interest, loan management, financial literacy",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background dark:bg-background text-foreground dark:text-foreground">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground mb-4">
              <Link href="/"><span className="hover:text-primary cursor-pointer" data-testid="link-breadcrumb-home">Home</span></Link>
              <span>→</span>
              <span>Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground mb-4">
              Smart Financial Planning: EMI & Investment Strategies
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground dark:text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>October 2, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>ToolsHub Team</span>
              </div>
            </div>
          </div>

          <AdPlaceholder type="banner" />

          <Card className="p-8 mt-8">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">Understanding EMI Calculations</h2>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Equated Monthly Installment (EMI) is a crucial concept for anyone taking a loan. Whether it's a home loan, car loan, or personal loan, understanding how EMI is calculated helps you make informed financial decisions.
              </p>

              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-3">The EMI Formula</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                EMI is calculated using the formula: <code className="bg-muted dark:bg-muted px-2 py-1 rounded">EMI = [P × R × (1+R)^N] / [(1+R)^N-1]</code> where:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground dark:text-muted-foreground mb-4">
                <li>P = Principal loan amount</li>
                <li>R = Monthly interest rate (Annual rate / 12 / 100)</li>
                <li>N = Number of monthly installments</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-3">Tips for Managing Loan EMIs</h3>
              <ol className="list-decimal pl-6 text-muted-foreground dark:text-muted-foreground mb-4">
                <li className="mb-2"><strong>Keep EMI under 40% of income:</strong> Financial experts recommend that your total EMIs should not exceed 40% of your monthly income.</li>
                <li className="mb-2"><strong>Compare interest rates:</strong> Even a 0.5% difference in interest rate can save lakhs over the loan tenure.</li>
                <li className="mb-2"><strong>Consider prepayment:</strong> Making partial prepayments can significantly reduce your total interest burden.</li>
                <li className="mb-2"><strong>Choose the right tenure:</strong> Longer tenure means lower EMI but higher total interest. Balance both based on your financial situation.</li>
              </ol>

              <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4 mt-8">The Power of Compound Interest</h2>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Albert Einstein allegedly called compound interest the "eighth wonder of the world." Understanding and leveraging compound interest is key to building wealth over time.
              </p>

              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-3">Why Compound Interest Matters</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Unlike simple interest, compound interest earns returns on both your principal and previously earned interest. This creates an exponential growth effect that becomes more powerful over time.
              </p>

              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-3">Investment Strategies</h3>
              <ul className="list-disc pl-6 text-muted-foreground dark:text-muted-foreground mb-4">
                <li className="mb-2"><strong>Start Early:</strong> Time is your biggest asset when it comes to compound interest. Starting 10 years earlier can double your returns.</li>
                <li className="mb-2"><strong>Reinvest Returns:</strong> Always reinvest dividends and interest to maximize compounding effects.</li>
                <li className="mb-2"><strong>Choose Higher Frequency:</strong> Monthly compounding is better than quarterly, which is better than annual.</li>
                <li className="mb-2"><strong>Stay Consistent:</strong> Regular investments through SIPs (Systematic Investment Plans) help build wealth steadily.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4 mt-8">Calculating ROI: Measuring Your Success</h2>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Return on Investment (ROI) is a critical metric for evaluating the profitability of your investments. Whether you're investing in stocks, real estate, or business ventures, ROI helps you make data-driven decisions.
              </p>

              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-3">Using ROI Effectively</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                A positive ROI indicates profit, while a negative ROI shows a loss. However, ROI should be evaluated in context:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground dark:text-muted-foreground mb-4">
                <li>Compare ROI across different investment options</li>
                <li>Consider the time period - a 10% ROI over 1 year is different from 10% over 5 years</li>
                <li>Account for inflation when calculating real returns</li>
                <li>Factor in taxes and fees that affect net returns</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4 mt-8">Practical Tools for Financial Planning</h2>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Use online financial calculators to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground dark:text-muted-foreground mb-6">
                <li>Plan your loan EMIs before taking the loan</li>
                <li>Calculate the future value of your investments</li>
                <li>Compare different investment scenarios</li>
                <li>Make informed decisions about prepayments</li>
              </ul>

              <div className="bg-primary/10 dark:bg-primary/20 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-3">Ready to Plan Your Finances?</h3>
                <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                  Use our free online calculators to make informed financial decisions and achieve your financial goals.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild data-testid="link-emi-calculator">
                    <Link href="/tools/loan-calculator">
                      EMI Calculator <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" data-testid="link-compound-calculator">
                    <Link href="/tools/compound-interest">
                      Compound Interest Calculator <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          </Card>

          <AdPlaceholder type="inline" className="mt-8" />
        </div>
      </div>

      <Footer />
      <AdPlaceholder type="mobile-sticky" />
    </div>
  );
}
