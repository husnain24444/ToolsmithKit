import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { setSEO } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Download, Upload, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const { toast } = useToast();

  useEffect(() => {
    setSEO({
      title: "Base64 Encoder/Decoder - Free Online Tool | toolsmith",
      description: "Free online Base64 encoder and decoder. Convert text to Base64 and decode Base64 strings instantly in your browser.",
      keywords: "base64 encoder, base64 decoder, base64 converter, encode base64, decode base64, online encoder",
    });
  }, []);

  const handleEncode = () => {
    try {
      const encoded = btoa(input);
      setOutput(encoded);
    } catch (error) {
      toast({
        title: "Encoding Error",
        description: "Invalid input for Base64 encoding",
        variant: "destructive",
      });
    }
  };

  const handleDecode = () => {
    try {
      const decoded = atob(input);
      setOutput(decoded);
    } catch (error) {
      toast({
        title: "Decoding Error",
        description: "Invalid Base64 string",
        variant: "destructive",
      });
    }
  };

  const handleProcess = () => {
    if (mode === "encode") {
      handleEncode();
    } else {
      handleDecode();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    toast({
      title: "Copied!",
      description: "Output copied to clipboard",
    });
  };

  const handleDownload = () => {
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `base64-${mode}-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        setInput(content);
      };
      reader.readAsText(file);
    }
  };

  const handleSwap = () => {
    setInput(output);
    setOutput("");
    setMode(mode === "encode" ? "decode" : "encode");
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background text-foreground dark:text-foreground">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground mb-4">
              Base64 Encoder / Decoder
            </h1>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Convert text to Base64 encoding or decode Base64 strings instantly
            </p>
          </div>

          <AdPlaceholder type="banner" />

          <div className="mt-8">
            <Card className="p-6">
              <div className="flex gap-4 mb-6">
                <Button
                  onClick={() => setMode("encode")}
                  variant={mode === "encode" ? "default" : "outline"}
                  className="flex-1"
                  data-testid="button-encode-mode"
                >
                  Encode
                </Button>
                <Button
                  onClick={() => setMode("decode")}
                  variant={mode === "decode" ? "default" : "outline"}
                  className="flex-1"
                  data-testid="button-decode-mode"
                >
                  Decode
                </Button>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label className="text-foreground dark:text-foreground">
                      {mode === "encode" ? "Text to Encode" : "Base64 to Decode"}
                    </Label>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => document.getElementById("fileInput")?.click()}
                        data-testid="button-upload"
                      >
                        <Upload className="w-4 h-4" />
                      </Button>
                      <input
                        id="fileInput"
                        type="file"
                        accept=".txt"
                        className="hidden"
                        onChange={handleFileUpload}
                      />
                    </div>
                  </div>
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={mode === "encode" ? "Enter text to encode..." : "Enter Base64 string to decode..."}
                    className="min-h-[300px] font-mono text-sm bg-input dark:bg-input border-border dark:border-border text-foreground dark:text-foreground"
                    data-testid="textarea-input"
                  />
                  <div className="flex gap-2 mt-4">
                    <Button
                      onClick={handleProcess}
                      className="flex-1 bg-primary dark:bg-primary text-primary-foreground dark:text-primary-foreground"
                      data-testid="button-process"
                    >
                      {mode === "encode" ? "Encode to Base64" : "Decode from Base64"}
                    </Button>
                    <Button
                      onClick={handleClear}
                      variant="outline"
                      data-testid="button-clear"
                    >
                      Clear
                    </Button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label className="text-foreground dark:text-foreground">Output</Label>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleSwap}
                      disabled={!output}
                      data-testid="button-swap"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </Button>
                  </div>
                  <Textarea
                    value={output}
                    readOnly
                    placeholder="Result will appear here..."
                    className="min-h-[300px] font-mono text-sm bg-muted dark:bg-muted border-border dark:border-border text-foreground dark:text-foreground"
                    data-testid="textarea-output"
                  />
                  <div className="flex gap-2 mt-4">
                    <Button
                      onClick={handleCopy}
                      variant="outline"
                      className="flex-1"
                      disabled={!output}
                      data-testid="button-copy"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                    <Button
                      onClick={handleDownload}
                      variant="outline"
                      className="flex-1"
                      disabled={!output}
                      data-testid="button-download"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 mt-8">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground mb-4">About Base64 Encoding</h3>
              <div className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                <p>
                  <strong>What is Base64?</strong> Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format.
                </p>
                <p>
                  <strong>Common Uses:</strong> Email attachments, data URLs, embedding images in HTML/CSS, API tokens, and storing complex data in text format.
                </p>
                <p>
                  <strong>Privacy:</strong> All encoding and decoding happens in your browser. No data is sent to any server.
                </p>
              </div>
            </Card>
          </div>

          <AdPlaceholder type="inline" className="mt-8" />
        </div>
      </div>

      <Footer />
      <AdPlaceholder type="mobile-sticky" />
    </div>
  );
}
