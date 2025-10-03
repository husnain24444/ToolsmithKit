import { Link } from "wouter";
import { Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">ToolsHub</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Professional online tools for finance calculations and development tasks.
              Free, fast, and reliable.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
                data-testid="link-github"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Finance Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tools/loan-calculator">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-emi-calculator">
                    EMI Calculator
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/tools/sip-calculator">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-sip-calculator">
                    SIP Calculator
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/tools/fd-calculator">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-fd-calculator">
                    FD Calculator
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/tools/tax-calculator">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-tax-calculator">
                    Tax Calculator
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Developer Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tools/json-formatter">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-json-formatter">
                    JSON Formatter
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/tools/base64">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-base64-encoder">
                    Base64 Encoder
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/tools/url-encoder">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-url-encoder">
                    URL Encoder
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/tools/hash-generator">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-hash-generator">
                    Hash Generator
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-about">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-privacy">
                    Privacy Policy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-terms">
                    Terms of Service
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-contact">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ToolsHub. All rights reserved. Built with React and TailwindCSS.</p>
        </div>
      </div>
    </footer>
  );
}
