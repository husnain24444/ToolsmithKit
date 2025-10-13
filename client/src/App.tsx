import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useEffect, useState, lazy, Suspense, type ReactNode } from "react";

const NotFound = lazy(() => import("@/pages/not-found"));
const Home = lazy(() => import("@/pages/Home"));
const LoanCalculator = lazy(() => import("@/pages/LoanCalculator"));
const SIPCalculator = lazy(() => import("@/pages/SIPCalculator"));
const FDCalculator = lazy(() => import("@/pages/FDCalculator"));
const TaxCalculator = lazy(() => import("@/pages/TaxCalculator"));
const CompoundInterestCalculator = lazy(() => import("@/pages/CompoundInterestCalculator"));
const ROICalculator = lazy(() => import("@/pages/ROICalculator"));
const JsonFormatter = lazy(() => import("@/pages/JsonFormatter"));
const Base64Tool = lazy(() => import("@/pages/Base64Tool"));
const HashGenerator = lazy(() => import("@/pages/HashGenerator"));
const URLEncoder = lazy(() => import("@/pages/URLEncoder"));
const WordCounter = lazy(() => import("@/pages/WordCounter"));
const PasswordGenerator = lazy(() => import("@/pages/PasswordGenerator"));
const QRCodeGenerator = lazy(() => import("@/pages/QRCodeGenerator"));
const PercentageCalculator = lazy(() => import("@/pages/PercentageCalculator"));
const AgeCalculator = lazy(() => import("@/pages/AgeCalculator"));
const BlogFinance = lazy(() => import("@/pages/BlogFinance"));
const BlogDeveloper = lazy(() => import("@/pages/BlogDeveloper"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const AboutUs = lazy(() => import("@/pages/AboutUs"));
const Contact = lazy(() => import("@/pages/Contact"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "light" | "dark") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div data-theme={theme}>
      {children}
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tools/loan-calculator" component={LoanCalculator} />
      <Route path="/tools/sip-calculator" component={SIPCalculator} />
      <Route path="/tools/fd-calculator" component={FDCalculator} />
      <Route path="/tools/tax-calculator" component={TaxCalculator} />
      <Route path="/tools/compound-interest" component={CompoundInterestCalculator} />
      <Route path="/tools/roi-calculator" component={ROICalculator} />
      <Route path="/tools/json-formatter" component={JsonFormatter} />
      <Route path="/tools/base64" component={Base64Tool} />
      <Route path="/tools/hash-generator" component={HashGenerator} />
      <Route path="/tools/url-encoder" component={URLEncoder} />
      <Route path="/tools/word-counter" component={WordCounter} />
      <Route path="/tools/password-generator" component={PasswordGenerator} />
      <Route path="/tools/qr-code-generator" component={QRCodeGenerator} />
      <Route path="/tools/percentage-calculator" component={PercentageCalculator} />
      <Route path="/tools/age-calculator" component={AgeCalculator} />
      <Route path="/blog/finance" component={BlogFinance} />
      <Route path="/blog/developer" component={BlogDeveloper} />
      <Route path="/faq" component={FAQ} />
      <Route path="/about" component={AboutUs} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
            <Router />
          </Suspense>
          <Analytics />
          <SpeedInsights />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
