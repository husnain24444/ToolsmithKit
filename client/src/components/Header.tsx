import { Link, useLocation } from "wouter";
import { Moon, Sun, Menu, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import SearchTools from "@/components/SearchTools";

export default function Header() {
  const [location] = useLocation();
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

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const financeTools = [
    { href: "/tools/loan-calculator", label: "EMI / Loan Calculator" },
    { href: "/tools/compound-interest", label: "Compound Interest Calculator" },
    { href: "/tools/roi-calculator", label: "ROI Calculator" },
    { href: "/tools/sip-calculator", label: "SIP Calculator" },
    { href: "/tools/fd-calculator", label: "FD Calculator" },
    { href: "/tools/tax-calculator", label: "Tax Calculator" },
  ];

  const developerTools = [
    { href: "/tools/json-formatter", label: "JSON Formatter" },
    { href: "/tools/base64", label: "Base64 Encoder/Decoder" },
    { href: "/tools/hash-generator", label: "Hash Generator" },
    { href: "/tools/url-encoder", label: "URL Encoder/Decoder" },
  ];

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <h1 className="text-2xl font-bold text-primary cursor-pointer" data-testid="logo">
                ToolsHub
              </h1>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/">
                <span
                  className={`transition-colors cursor-pointer ${
                    location === "/"
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  data-testid="nav-home"
                >
                  Home
                </span>
              </Link>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground" data-testid="nav-finance-tools">
                      Finance Tools
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-2 p-4 md:grid-cols-2">
                        {financeTools.map((tool) => (
                          <li key={tool.href}>
                            <NavigationMenuLink asChild>
                              <Link href={tool.href}>
                                <span 
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                                  data-testid={`link-finance-${tool.href.split('/').pop()}`}
                                >
                                  <div className="text-sm font-medium leading-none">{tool.label}</div>
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground" data-testid="nav-developer-tools">
                      Developer Tools
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-2 p-4 md:grid-cols-2">
                        {developerTools.map((tool) => (
                          <li key={tool.href}>
                            <NavigationMenuLink asChild>
                              <Link href={tool.href}>
                                <span 
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                                  data-testid={`link-developer-${tool.href.split('/').pop()}`}
                                >
                                  <div className="text-sm font-medium leading-none">{tool.label}</div>
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link href="/blog/finance">
                <span
                  className={`transition-colors cursor-pointer ${
                    location.startsWith("/blog")
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  data-testid="nav-blog"
                >
                  Blog
                </span>
              </Link>

              <Link href="/faq">
                <span
                  className={`transition-colors cursor-pointer ${
                    location === "/faq"
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  data-testid="nav-faq"
                >
                  FAQ
                </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <SearchTools />
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden"
                  data-testid="button-mobile-menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/">
                    <span className="text-lg text-muted-foreground hover:text-foreground cursor-pointer" data-testid="mobile-nav-home">
                      Home
                    </span>
                  </Link>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Finance Tools</p>
                    {financeTools.map((tool) => (
                      <Link key={tool.href} href={tool.href}>
                        <span 
                          className="block py-2 text-muted-foreground hover:text-foreground cursor-pointer"
                          data-testid={`mobile-link-finance-${tool.href.split('/').pop()}`}
                        >
                          {tool.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Developer Tools</p>
                    {developerTools.map((tool) => (
                      <Link key={tool.href} href={tool.href}>
                        <span 
                          className="block py-2 text-muted-foreground hover:text-foreground cursor-pointer"
                          data-testid={`mobile-link-developer-${tool.href.split('/').pop()}`}
                        >
                          {tool.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <Link href="/blog/finance">
                    <span className="text-lg text-muted-foreground hover:text-foreground cursor-pointer" data-testid="mobile-nav-blog">
                      Blog
                    </span>
                  </Link>
                  <Link href="/faq">
                    <span className="text-lg text-muted-foreground hover:text-foreground cursor-pointer" data-testid="mobile-nav-faq">
                      FAQ
                    </span>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
