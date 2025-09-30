import { useEffect } from "react";
import { Link } from "wouter";
import { DollarSign, Code2, Zap, CheckCircle, Smartphone, Package } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { setSEO } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  useEffect(() => {
    setSEO({
      title: "ToolsHub - Free Online Tools for Finance & Development | EMI Calculator, JSON Formatter",
      description: "Professional online tools including EMI/Loan Calculator and JSON Formatter & Validator. Free, fast, and SEO-optimized utilities for finance and development.",
      keywords: "EMI calculator, loan calculator, JSON formatter, JSON validator, online tools, finance calculator, developer tools",
    });
  }, []);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized for speed with instant calculations and real-time results",
      color: "primary",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "100% Accurate",
      description: "Precise calculations using industry-standard formulas and algorithms",
      color: "accent",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Friendly",
      description: "Responsive design that works perfectly on all devices and screen sizes",
      color: "primary",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "No Installation",
      description: "Web-based tools that work instantly without downloads or installations",
      color: "accent",
    },
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-background text-foreground dark:text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 dark:from-primary/10 to-accent/5 dark:to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground dark:text-foreground mb-6">
            Professional Online Tools
          </h2>
          <p className="text-xl text-muted-foreground dark:text-muted-foreground mb-8 max-w-2xl mx-auto">
            Free, fast, and reliable tools for finance calculations and development tasks.
            SEO-optimized and mobile-friendly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" data-testid="button-explore-tools">
              <a href="#tools">Explore Tools</a>
            </Button>
            <Button asChild variant="outline" size="lg" data-testid="button-learn-more">
              <a href="#features">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      <AdPlaceholder type="banner" />

      {/* Tools Section */}
      <section id="tools" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground mb-4">Featured Tools</h2>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto">
              Powerful calculators and formatters designed for professionals and enthusiasts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Loan Calculator Card */}
            <Card className="p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg mr-4">
                  <DollarSign className="w-8 h-8 text-primary dark:text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground dark:text-foreground">EMI/Loan Calculator</h3>
                  <p className="text-muted-foreground dark:text-muted-foreground">Calculate monthly payments and interest breakdown</p>
                </div>
              </div>
              <p className="text-muted-foreground dark:text-muted-foreground mb-6">
                Get instant EMI calculations with detailed breakdowns of principal and interest. View interactive charts
                and download comprehensive amortization schedules.
              </p>
              <Button asChild className="w-full" data-testid="button-open-loan-calculator">
                <Link href="/tools/loan-calculator">Open Full Calculator →</Link>
              </Button>
            </Card>

            {/* JSON Formatter Card */}
            <Card className="p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-accent/10 dark:bg-accent/20 p-3 rounded-lg mr-4">
                  <Code2 className="w-8 h-8 text-accent dark:text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground dark:text-foreground">JSON Formatter & Validator</h3>
                  <p className="text-muted-foreground dark:text-muted-foreground">Format, validate, and beautify JSON data</p>
                </div>
              </div>
              <p className="text-muted-foreground dark:text-muted-foreground mb-6">
                Format and validate JSON with syntax highlighting, error detection, and one-click copy/download.
                All processing happens locally in your browser.
              </p>
              <Button asChild className="w-full" data-testid="button-open-json-formatter">
                <Link href="/tools/json-formatter">Open Full Formatter →</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <AdPlaceholder type="inline" />

      {/* Features Section */}
      <section id="features" className="py-16 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground mb-4">Why Choose ToolsHub?</h2>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto">
              Built with modern web technologies for speed, accuracy, and user experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-md transition-shadow">
                <div className={`bg-${feature.color}/10 dark:bg-${feature.color}/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <span className={`text-${feature.color}`}>{feature.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground dark:text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground dark:text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <AdPlaceholder type="mobile-sticky" />
    </div>
  );
}
