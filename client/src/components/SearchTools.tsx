import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Tool {
  href: string;
  label: string;
  category: string;
  keywords: string[];
}

const allTools: Tool[] = [
  { href: "/tools/loan-calculator", label: "EMI / Loan Calculator", category: "Finance", keywords: ["emi", "loan", "mortgage", "payment"] },
  { href: "/tools/compound-interest", label: "Compound Interest Calculator", category: "Finance", keywords: ["compound", "interest", "investment", "growth"] },
  { href: "/tools/roi-calculator", label: "ROI Calculator", category: "Finance", keywords: ["roi", "return", "investment", "profit"] },
  { href: "/tools/sip-calculator", label: "SIP Calculator", category: "Finance", keywords: ["sip", "systematic", "mutual", "fund"] },
  { href: "/tools/fd-calculator", label: "FD Calculator", category: "Finance", keywords: ["fd", "fixed", "deposit", "bank"] },
  { href: "/tools/tax-calculator", label: "Tax Calculator", category: "Finance", keywords: ["tax", "income", "salary", "deduction"] },
  { href: "/tools/json-formatter", label: "JSON Formatter", category: "Developer", keywords: ["json", "format", "beautify", "validate"] },
  { href: "/tools/base64", label: "Base64 Encoder/Decoder", category: "Developer", keywords: ["base64", "encode", "decode", "converter"] },
  { href: "/tools/hash-generator", label: "Hash Generator", category: "Developer", keywords: ["hash", "sha", "md5", "checksum"] },
  { href: "/tools/url-encoder", label: "URL Encoder/Decoder", category: "Developer", keywords: ["url", "encode", "decode", "percent"] },
  { href: "/tools/word-counter", label: "Word Counter", category: "General", keywords: ["word", "count", "character", "text", "essay"] },
  { href: "/tools/password-generator", label: "Password Generator", category: "General", keywords: ["password", "generate", "secure", "random"] },
  { href: "/tools/qr-code-generator", label: "QR Code Generator", category: "General", keywords: ["qr", "code", "barcode", "generate"] },
  { href: "/tools/percentage-calculator", label: "Percentage Calculator", category: "General", keywords: ["percentage", "percent", "calculate", "discount"] },
  { href: "/tools/age-calculator", label: "Age Calculator", category: "General", keywords: ["age", "birthday", "calculate", "years", "days"] },
];

export default function SearchTools() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [, setLocation] = useLocation();
  const [filteredTools, setFilteredTools] = useState<Tool[]>([]);

  useEffect(() => {
    if (query.trim()) {
      const lowercaseQuery = query.toLowerCase();
      const results = allTools.filter(
        (tool) =>
          tool.label.toLowerCase().includes(lowercaseQuery) ||
          tool.keywords.some((keyword) => keyword.includes(lowercaseQuery)) ||
          tool.category.toLowerCase().includes(lowercaseQuery)
      );
      setFilteredTools(results);
    } else {
      setFilteredTools(allTools);
    }
  }, [query]);

  const handleToolClick = (href: string) => {
    setOpen(false);
    setQuery("");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLocation(href);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground"
          data-testid="button-search-tools"
        >
          <Search className="h-4 w-4" />
          <span className="text-sm">Search tools...</span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Search Tools</DialogTitle>
          <DialogDescription>
            Search through all available tools by name, category, or keywords.
          </DialogDescription>
        </DialogHeader>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type to search tools..."
            className="pl-10 pr-10"
            data-testid="input-search-tools"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
              data-testid="button-clear-search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <div className="mt-4 max-h-[400px] overflow-y-auto">
          {filteredTools.length > 0 ? (
            <div className="space-y-1">
              {filteredTools.map((tool) => (
                <button
                  key={tool.href}
                  onClick={() => handleToolClick(tool.href)}
                  className="w-full text-left px-4 py-3 rounded-md hover:bg-accent transition-colors flex items-center justify-between group"
                  data-testid={`search-result-${tool.href.split("/").pop()}`}
                >
                  <div>
                    <div className="font-medium text-foreground group-hover:text-accent-foreground">
                      {tool.label}
                    </div>
                    <div className="text-sm text-muted-foreground">{tool.category}</div>
                  </div>
                  <div className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    Press Enter
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              No tools found matching "{query}"
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
