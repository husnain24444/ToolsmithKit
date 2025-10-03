import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { setSEO } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function URLEncoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const { toast } = useToast();

  useEffect(() => {
    setSEO({
      title: "URL Encoder/Decoder - Encode & Decode URLs Online | ToolsHub",
      description: "Free online URL encoder and decoder tool. Encode special characters for URLs or decode URL-encoded strings instantly.",
      keywords: "URL encoder, URL decoder, encode URL, decode URL, percent encoding, URL escape",
    });
  }, []);

  const handleProcess = () => {
    try {
      if (mode === "encode") {
        setOutput(encodeURIComponent(input));
      } else {
        setOutput(decodeURIComponent(input));
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid input for " + mode + " operation",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    if (input) {
      handleProcess();
    } else {
      setOutput("");
    }
  }, [input, mode]);

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    toast({
      title: "Copied!",
      description: "Output copied to clipboard",
    });
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  const handleSwap = () => {
    setInput(output);
    setMode(mode === "encode" ? "decode" : "encode");
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background text-foreground dark:text-foreground">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground mb-4">
              URL Encoder / Decoder
            </h1>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Encode or decode URLs and special characters for web development
            </p>
          </div>

          <AdPlaceholder type="banner" />

          <div className="mt-8 space-y-6">
            <Card className="p-6">
              <div className="flex gap-4 mb-6">
                <Button
                  variant={mode === "encode" ? "default" : "outline"}
                  onClick={() => setMode("encode")}
                  className="flex-1"
                  data-testid="button-encode"
                >
                  Encode
                </Button>
                <Button
                  variant={mode === "decode" ? "default" : "outline"}
                  onClick={() => setMode("decode")}
                  className="flex-1"
                  data-testid="button-decode"
                >
                  Decode
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Label htmlFor="input">Input</Label>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleClear}
                      data-testid="button-clear"
                    >
                      Clear
                    </Button>
                  </div>
                  <Textarea
                    id="input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={mode === "encode" ? "Enter text to encode..." : "Enter URL-encoded text to decode..."}
                    className="min-h-[200px] font-mono"
                    data-testid="textarea-input"
                  />
                </div>

                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleSwap}
                    disabled={!output}
                    data-testid="button-swap"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Swap & {mode === "encode" ? "Decode" : "Encode"}
                  </Button>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Label htmlFor="output">Output</Label>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopy}
                      disabled={!output}
                      data-testid="button-copy"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                  <Textarea
                    id="output"
                    value={output}
                    readOnly
                    placeholder="Output will appear here..."
                    className="min-h-[200px] font-mono bg-muted"
                    data-testid="textarea-output"
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-muted/50">
              <h3 className="text-lg font-semibold mb-3">About URL Encoding</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  URL encoding converts characters into a format that can be transmitted over the Internet. 
                  URLs can only be sent over the Internet using the ASCII character-set.
                </p>
                <p>
                  <strong>Common encoded characters:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Space → %20</li>
                  <li>! → %21</li>
                  <li># → %23</li>
                  <li>$ → %24</li>
                  <li>& → %26</li>
                  <li>@ → %40</li>
                </ul>
              </div>
            </Card>
          </div>

          <AdPlaceholder type="banner" className="mt-8" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
