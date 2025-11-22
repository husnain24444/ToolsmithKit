import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { setSEO } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  useEffect(() => {
    setSEO({
      title: "Frequently Asked Questions - toolsmith FAQ | Online Tools Help",
      description: "Find answers to common questions about toolsmith's financial and developer tools. Learn how to use EMI calculators, JSON formatters, and more.",
      keywords: "FAQ, help, support, questions, how to use, calculator help, tool guide",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background dark:bg-background text-foreground dark:text-foreground">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-8 h-8 text-primary dark:text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground">
                Frequently Asked Questions
              </h1>
            </div>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Find answers to common questions about our tools and services
            </p>
          </div>

          <AdPlaceholder type="banner" />

          <Card className="p-6 mt-8">
            <h2 className="text-2xl font-semibold text-foreground dark:text-foreground mb-6">General Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">What is toolsmith?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-muted-foreground">
                  toolsmith is a free online platform providing professional-grade tools for financial calculations and development tasks. All tools are web-based, requiring no installation or registration.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">Are the tools really free?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-muted-foreground">
                  Yes, all our tools are completely free to use. We support the platform through non-intrusive advertisements, which help us keep the tools free for everyone.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">Do I need to create an account?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-muted-foreground">
                  No account is required. All tools work instantly in your browser without any registration or login.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">Is my data secure and private?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-muted-foreground">
                  Yes. All calculations and data processing happen entirely in your browser. We don't store, transmit, or collect any of your data. Your information never leaves your device.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">Can I use these tools on mobile devices?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-muted-foreground">
                  Absolutely! All our tools are fully responsive and work seamlessly on smartphones, tablets, and desktop computers.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <Card className="p-6 mt-8">
            <h2 className="text-2xl font-semibold text-foreground dark:text-foreground mb-6">Financial Tools Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="finance-1">
                <AccordionTrigger className="text-left">How accurate is the EMI calculator?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-muted-foreground">
                  Our EMI calculator uses the standard mathematical formula used by banks and financial institutions. The calculations are 100% accurate. However, actual EMIs may vary slightly based on your lender's specific terms and processing fees.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="finance-2">
                <AccordionTrigger className="text-left">What's the difference between EMI and compound interest calculators?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-muted-foreground">
                  The EMI calculator is for loans where you pay back monthly installments. The compound interest calculator is for investments where your money grows over time. EMI helps you plan debt repayment, while compound interest helps you plan investments.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="finance-3">
                <AccordionTrigger className="text-left">Can I download my calculation results?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-muted-foreground">
                  Yes! All financial calculators include a "Download Report" button that lets you save your calculations as a text file for future reference.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="finance-4">
                <AccordionTrigger className="text-left">What is ROI and how do I calculate it?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-muted-foreground">
                  ROI (Return on Investment) measures the profitability of an investment. It's calculated as: (Final Value - Initial Investment) / Initial Investment × 100. A positive ROI means profit, while negative ROI indicates a loss.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="finance-5">
                <AccordionTrigger className="text-left">Should I choose monthly or annual compounding?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-muted-foreground">
                  Higher frequency compounding (monthly or daily) generates slightly better returns than annual compounding because interest is calculated more often. The difference becomes more significant over longer periods and with larger amounts.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <Card className="p-6 mt-8">
            <h2 className="text-2xl font-semibold text-foreground dark:text-foreground mb-6">Developer Tools Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="dev-1">
                <AccordionTrigger className="text-left">Why should I format my JSON?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-muted-foreground">
                  Formatted JSON is easier to read and debug. Our JSON formatter adds proper indentation and syntax highlighting, making it simple to spot errors and understand data structure.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dev-2">
                <AccordionTrigger className="text-left">Is Base64 encryption?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-muted-foreground">
                  No, Base64 is encoding, not encryption. It converts binary data to text format but doesn't provide security. Anyone can easily decode Base64. Use proper encryption for sensitive data.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dev-3">
                <AccordionTrigger className="text-left">Which hash algorithm should I use?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-muted-foreground">
                  For general purposes, use SHA-256 or higher. Avoid SHA-1 for security applications as it's considered weak. For password hashing, use specialized algorithms like bcrypt or Argon2 instead of SHA.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dev-4">
                <AccordionTrigger className="text-left">Can I use these tools for production applications?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-muted-foreground">
                  Our tools are great for development, testing, and debugging. For production applications, integrate cryptographic functions directly into your codebase for better performance and security.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dev-5">
                <AccordionTrigger className="text-left">How do I validate JSON?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-muted-foreground">
                  Our JSON Formatter automatically validates your JSON as you type or paste it. If there's an error, you'll see a clear error message indicating what's wrong and where the error is located.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <Card className="p-6 mt-8">
            <h2 className="text-2xl font-semibold text-foreground dark:text-foreground mb-6">Technical Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="tech-1">
                <AccordionTrigger className="text-left">Which browsers are supported?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-muted-foreground">
                  toolsmith works on all modern browsers including Chrome, Firefox, Safari, Edge, and Opera. We recommend keeping your browser updated for the best experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tech-2">
                <AccordionTrigger className="text-left">Do the tools work offline?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-muted-foreground">
                  Once a page loads, most calculations work offline since they run in your browser. However, you need an internet connection to initially load the tools.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tech-3">
                <AccordionTrigger className="text-left">Why is the site showing ads?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-muted-foreground">
                  We use non-intrusive advertisements to cover hosting costs and keep all tools free for everyone. The ads help us maintain and improve the platform without charging users.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tech-4">
                <AccordionTrigger className="text-left">Can I suggest new features or tools?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-muted-foreground">
                  Yes! We welcome suggestions. Please use our contact form to share your ideas. We're constantly working to add new tools based on user feedback.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <Card className="p-6 mt-8 bg-primary/5 dark:bg-primary/10 border-primary/20 dark:border-primary/30">
            <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-3">Still have questions?</h3>
            <p className="text-muted-foreground dark:text-muted-foreground mb-4">
              If you couldn't find the answer you're looking for, feel free to reach out to us through our contact page. We typically respond within 24-48 hours.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary dark:bg-primary text-primary-foreground dark:text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 dark:hover:bg-primary/90 transition-colors"
              data-testid="link-contact"
            >
              Contact Us
            </a>
          </Card>

          <AdPlaceholder type="inline" className="mt-8" />
        </div>
      </div>

      <Footer />
      <AdPlaceholder type="mobile-sticky" />
    </div>
  );
}
