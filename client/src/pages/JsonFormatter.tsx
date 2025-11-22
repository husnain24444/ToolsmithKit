import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-json";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { setSEO } from "@/lib/seo";
import { formatJSON, minifyJSON, validateJSON, downloadJSON } from "@/lib/jsonUtils";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Copy, Download, Upload, Trash2, CheckCircle, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function JsonFormatter() {
  const [input, setInput] = useState('{"name":"John","age":30,"city":"New York","skills":["JavaScript","React","Node.js"]}');
  const [output, setOutput] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [error, setError] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    setSEO({
      title: "JSON Formatter & Validator - Online JSON Beautifier | toolsmith",
      description: "Free online JSON formatter and validator. Format, validate, minify, and beautify JSON data with syntax highlighting. Copy or download formatted JSON instantly.",
      keywords: "JSON formatter, JSON validator, JSON beautifier, JSON minify, JSON parser, format JSON online",
    });
  }, []);

  useEffect(() => {
    if (output) {
      Prism.highlightAll();
    }
  }, [output]);

  const handleFormat = () => {
    const validation = validateJSON(input);
    setIsValid(validation.valid);
    setError(validation.error || "");

    if (validation.valid) {
      const formatted = formatJSON(input);
      setOutput(formatted);
      toast({
        title: "JSON Formatted Successfully",
        description: "Your JSON has been formatted and validated.",
      });
    } else {
      setOutput("");
      toast({
        title: "Invalid JSON",
        description: validation.error,
        variant: "destructive",
      });
    }
  };

  const handleMinify = () => {
    const validation = validateJSON(input);
    setIsValid(validation.valid);
    setError(validation.error || "");

    if (validation.valid) {
      const minified = minifyJSON(input);
      setOutput(minified);
      toast({
        title: "JSON Minified Successfully",
        description: "Your JSON has been minified.",
      });
    } else {
      setOutput("");
      toast({
        title: "Invalid JSON",
        description: validation.error,
        variant: "destructive",
      });
    }
  };

  const handleCopy = async () => {
    if (output) {
      try {
        await navigator.clipboard.writeText(output);
        toast({
          title: "Copied to Clipboard",
          description: "JSON has been copied to your clipboard.",
        });
      } catch (err) {
        toast({
          title: "Copy Failed",
          description: "Failed to copy to clipboard.",
          variant: "destructive",
        });
      }
    }
  };

  const handleDownload = () => {
    if (output) {
      downloadJSON(output);
      toast({
        title: "Download Started",
        description: "JSON file has been downloaded.",
      });
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInput(text);
      toast({
        title: "Pasted from Clipboard",
        description: "Content has been pasted.",
      });
    } catch (err) {
      toast({
        title: "Paste Failed",
        description: "Failed to read from clipboard.",
        variant: "destructive",
      });
    }
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        setInput(content);
        toast({
          title: "File Uploaded",
          description: `${file.name} has been loaded.`,
        });
      };
      reader.readAsText(file);
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setIsValid(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background text-foreground dark:text-foreground">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground mb-4">
              JSON Formatter & Validator
            </h1>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Format, validate, and beautify JSON data with syntax highlighting and error detection
            </p>
          </div>

          <AdPlaceholder type="banner" />

          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            {/* Input Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-foreground dark:text-foreground text-lg font-semibold">Input JSON</Label>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePaste}
                    className="border-border dark:border-border text-foreground dark:text-foreground"
                    data-testid="button-paste"
                  >
                    Paste
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => document.getElementById("file-upload")?.click()}
                    className="border-border dark:border-border text-foreground dark:text-foreground"
                    data-testid="button-upload"
                  >
                    <Upload className="w-4 h-4" />
                  </Button>
                  <input
                    id="file-upload"
                    type="file"
                    accept=".json"
                    onChange={handleUpload}
                    className="hidden"
                  />
                </div>
              </div>

              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='{"name": "John", "age": 30}'
                className="h-64 font-mono text-sm bg-input dark:bg-input border-border dark:border-border text-foreground dark:text-foreground resize-none"
                data-testid="textarea-json-input"
              />

              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={handleFormat}
                  className="bg-primary dark:bg-primary text-primary-foreground dark:text-primary-foreground hover:bg-primary/90 dark:hover:bg-primary/90"
                  data-testid="button-format"
                >
                  Format & Validate
                </Button>
                <Button
                  onClick={handleMinify}
                  variant="secondary"
                  className="bg-secondary dark:bg-secondary text-secondary-foreground dark:text-secondary-foreground"
                  data-testid="button-minify"
                >
                  Minify
                </Button>
                <Button
                  onClick={handleClear}
                  variant="outline"
                  className="border-border dark:border-border text-foreground dark:text-foreground"
                  data-testid="button-clear"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear
                </Button>
              </div>
            </div>

            {/* Output Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-foreground dark:text-foreground text-lg font-semibold">Formatted Output</Label>
                <div className="flex gap-2 items-center">
                  {isValid !== null && (
                    <span
                      className={`text-xs px-2 py-1 rounded flex items-center gap-1 ${
                        isValid
                          ? "bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent"
                          : "bg-destructive/10 dark:bg-destructive/20 text-destructive dark:text-destructive"
                      }`}
                      data-testid={isValid ? "status-valid" : "status-invalid"}
                    >
                      {isValid ? (
                        <>
                          <CheckCircle className="w-3 h-3" /> Valid JSON
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3 h-3" /> Invalid JSON
                        </>
                      )}
                    </span>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopy}
                    disabled={!output}
                    className="border-border dark:border-border text-foreground dark:text-foreground"
                    data-testid="button-copy"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDownload}
                    disabled={!output}
                    className="border-border dark:border-border text-foreground dark:text-foreground"
                    data-testid="button-download"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <Card className="bg-muted dark:bg-muted border-border dark:border-border p-4 h-64 overflow-auto">
                {output ? (
                  <pre className="json-container text-sm">
                    <code className="language-json" data-testid="code-output">
                      {output}
                    </code>
                  </pre>
                ) : error ? (
                  <div className="text-destructive dark:text-destructive text-sm" data-testid="text-error">
                    {error}
                  </div>
                ) : (
                  <div className="text-muted-foreground dark:text-muted-foreground text-sm">
                    Formatted JSON will appear here...
                  </div>
                )}
              </Card>
            </div>
          </div>

          <AdPlaceholder type="inline" className="mt-8" />

          {/* Info Section */}
          <Card className="mt-8 p-6 bg-card dark:bg-card border-border dark:border-border">
            <h2 className="text-xl font-semibold text-foreground dark:text-foreground mb-4">About JSON Formatter</h2>
            <p className="text-muted-foreground dark:text-muted-foreground mb-4">
              Our JSON formatter and validator helps you quickly format, validate, and beautify JSON data.
              All processing happens locally in your browser, ensuring complete privacy and security.
            </p>
            <ul className="list-disc list-inside text-muted-foreground dark:text-muted-foreground space-y-2">
              <li>Format and beautify JSON with proper indentation</li>
              <li>Validate JSON syntax with detailed error messages</li>
              <li>Minify JSON to reduce file size</li>
              <li>Copy formatted JSON to clipboard instantly</li>
              <li>Download formatted JSON as a file</li>
              <li>Upload JSON files for formatting</li>
            </ul>
          </Card>
        </div>
      </div>

      <Footer />
      <AdPlaceholder type="mobile-sticky" />
    </div>
  );
}
