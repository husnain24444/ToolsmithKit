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
import { Button } from "@/components/ui/button";
import { Calendar, Cake } from "lucide-react";

interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  totalMonths: number;
  nextBirthday: string;
  daysUntilBirthday: number;
}

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState<AgeResult | null>(null);

  useEffect(() => {
    setSEO({
      title: "Age Calculator - Calculate Your Exact Age Online | ToolsHub",
      description: "Free online age calculator. Calculate your exact age in years, months, days, and more. Find out days until your next birthday and other fun age statistics.",
      keywords: "age calculator, calculate age, age in days, age in months, how old am I, birthday calculator, days until birthday",
    });

    addRecentTool({
      href: "/tools/age-calculator",
      label: "Age Calculator",
      category: "general",
    });
  }, []);

  const calculateAge = () => {
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const totalDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;

    const nextBirthdayYear =
      today.getMonth() > birth.getMonth() ||
      (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate())
        ? today.getFullYear() + 1
        : today.getFullYear();

    const nextBirthday = new Date(nextBirthdayYear, birth.getMonth(), birth.getDate());
    const daysUntilBirthday = Math.ceil(
      (nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );

    setResult({
      years,
      months,
      days,
      totalDays,
      totalWeeks,
      totalMonths,
      nextBirthday: nextBirthday.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      daysUntilBirthday,
    });
  };

  useEffect(() => {
    if (birthDate) {
      calculateAge();
    }
  }, [birthDate]);

  return (
    <div className="min-h-screen bg-background dark:bg-background text-foreground dark:text-foreground">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <AdPlaceholder type="banner" />

        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground mb-4">
              Age Calculator
            </h1>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Calculate your exact age in years, months, days, and more. Find out when your next birthday is!
            </p>
          </div>

          {/* Input Section */}
          <Card className="p-6 mb-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="birth-date" className="text-foreground dark:text-foreground">
                  Enter Your Birth Date
                </Label>
                <Input
                  id="birth-date"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  max={new Date().toISOString().split("T")[0]}
                  className="mt-2"
                  data-testid="input-birth-date"
                />
              </div>

              <Button
                onClick={calculateAge}
                className="w-full"
                disabled={!birthDate}
                data-testid="button-calculate-age"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Calculate Age
              </Button>
            </div>
          </Card>

          {/* Results */}
          {result && (
            <>
              {/* Main Age */}
              <Card className="p-6 mb-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-2">
                    Your Age
                  </p>
                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    <div>
                      <span className="text-4xl font-bold text-primary dark:text-primary" data-testid="text-age-years">
                        {result.years}
                      </span>
                      <span className="text-lg text-muted-foreground dark:text-muted-foreground ml-2">
                        years
                      </span>
                    </div>
                    <div>
                      <span className="text-4xl font-bold text-foreground dark:text-foreground" data-testid="text-age-months">
                        {result.months}
                      </span>
                      <span className="text-lg text-muted-foreground dark:text-muted-foreground ml-2">
                        months
                      </span>
                    </div>
                    <div>
                      <span className="text-4xl font-bold text-foreground dark:text-foreground" data-testid="text-age-days">
                        {result.days}
                      </span>
                      <span className="text-lg text-muted-foreground dark:text-muted-foreground ml-2">
                        days
                      </span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Additional Statistics */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <Card className="p-4 text-center">
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-1">
                    Total Days
                  </p>
                  <p className="text-2xl font-bold text-foreground dark:text-foreground" data-testid="text-total-days">
                    {result.totalDays.toLocaleString()}
                  </p>
                </Card>
                <Card className="p-4 text-center">
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-1">
                    Total Weeks
                  </p>
                  <p className="text-2xl font-bold text-foreground dark:text-foreground" data-testid="text-total-weeks">
                    {result.totalWeeks.toLocaleString()}
                  </p>
                </Card>
                <Card className="p-4 text-center">
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-1">
                    Total Months
                  </p>
                  <p className="text-2xl font-bold text-foreground dark:text-foreground" data-testid="text-total-months">
                    {result.totalMonths.toLocaleString()}
                  </p>
                </Card>
              </div>

              {/* Next Birthday */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <Cake className="w-5 h-5 text-primary dark:text-primary mr-2" />
                      <p className="font-semibold text-foreground dark:text-foreground">Next Birthday</p>
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-1" data-testid="text-next-birthday">
                      {result.nextBirthday}
                    </p>
                    <p className="text-lg font-semibold text-primary dark:text-primary" data-testid="text-days-until-birthday">
                      {result.daysUntilBirthday === 0
                        ? "🎉 Happy Birthday!"
                        : `${result.daysUntilBirthday} days to go`}
                    </p>
                  </div>
                  <div className="text-6xl">🎂</div>
                </div>
              </Card>
            </>
          )}

          <AdPlaceholder type="inline" className="mt-8" />

          {/* SEO Content */}
          <Card className="p-6 mt-8">
            <h2 className="text-2xl font-semibold text-foreground dark:text-foreground mb-4">
              How to Use the Age Calculator
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Our age calculator provides detailed information about your age, including years, months, days, and interesting statistics like total days lived and days until your next birthday.
              </p>
              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mt-6 mb-3">
                Why Calculate Your Age?
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground dark:text-muted-foreground">
                <li>Find your exact age for official documents and forms</li>
                <li>Track milestone birthdays and anniversaries</li>
                <li>Calculate eligibility for age-restricted activities</li>
                <li>Plan retirement and financial goals</li>
                <li>Know exactly when your next birthday is</li>
                <li>Fun way to track how many days you've lived</li>
              </ul>
            </div>
          </Card>

          <RelatedTools currentTool="/tools/age-calculator" category="general" />
        </div>
      </div>

      <Footer />
      <AdPlaceholder type="mobile-sticky" />
    </div>
  );
}
