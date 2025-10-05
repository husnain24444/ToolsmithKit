import { Link } from "wouter";
import { Twitter, Github, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToolClick = (e: React.MouseEvent) => {
    scrollToTop();
  };

  const financeTools = [
    { href: "/tools/loan-calculator", label: "EMI Calculator", testId: "link-emi-calculator" },
    { href: "/tools/compound-interest", label: "Compound Interest", testId: "link-compound-interest" },
    { href: "/tools/roi-calculator", label: "ROI Calculator", testId: "link-roi-calculator" },
    { href: "/tools/sip-calculator", label: "SIP Calculator", testId: "link-sip-calculator" },
    { href: "/tools/fd-calculator", label: "FD Calculator", testId: "link-fd-calculator" },
    { href: "/tools/tax-calculator", label: "Tax Calculator", testId: "link-tax-calculator" },
  ];

  const developerTools = [
    { href: "/tools/json-formatter", label: "JSON Formatter", testId: "link-json-formatter" },
    { href: "/tools/base64", label: "Base64 Encoder", testId: "link-base64-encoder" },
    { href: "/tools/hash-generator", label: "Hash Generator", testId: "link-hash-generator" },
    { href: "/tools/url-encoder", label: "URL Encoder", testId: "link-url-encoder" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">ToolsHub</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Professional online tools for finance calculations and development tasks.
              Free, fast, and reliable.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
                data-testid="link-github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@toolshub.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
                data-testid="link-email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Finance Tools</h4>
            <ul className="space-y-2.5 text-sm">
              {financeTools.map((tool) => (
                <li key={tool.href}>
                  <Link href={tool.href}>
                    <span 
                      onClick={handleToolClick}
                      className="text-muted-foreground hover:text-primary transition-colors cursor-pointer inline-flex items-center group"
                      data-testid={tool.testId}
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{tool.label}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Developer Tools</h4>
            <ul className="space-y-2.5 text-sm">
              {developerTools.map((tool) => (
                <li key={tool.href}>
                  <Link href={tool.href}>
                    <span 
                      onClick={handleToolClick}
                      className="text-muted-foreground hover:text-primary transition-colors cursor-pointer inline-flex items-center group"
                      data-testid={tool.testId}
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{tool.label}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer inline-flex items-center group" data-testid="link-about">
                    <span className="group-hover:translate-x-1 transition-transform">About Us</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer inline-flex items-center group" data-testid="link-privacy">
                    <span className="group-hover:translate-x-1 transition-transform">Privacy Policy</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer inline-flex items-center group" data-testid="link-terms">
                    <span className="group-hover:translate-x-1 transition-transform">Terms of Service</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer inline-flex items-center group" data-testid="link-contact">
                    <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; 2024 ToolsHub. All rights reserved. Built with React and TailwindCSS.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            aria-label="Scroll to top"
            data-testid="button-scroll-to-top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
