import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { setSEO } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Copy, Hash } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

async function generateHash(algorithm: string, data: string): Promise<string> {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  
  const hashBuffer = await crypto.subtle.digest(algorithm, dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
  return hashHex;
}

export default function HashGenerator() {
  const [input, setInput] = useState("");
  const [hashes, setHashes] = useState({
    sha1: "",
    sha256: "",
    sha384: "",
    sha512: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    setSEO({
      title: "Hash Generator - Generate SHA-1, SHA-256, SHA-512 Hashes | toolsmith",
      description: "Free online hash generator. Generate SHA-1, SHA-256, SHA-384, and SHA-512 hashes instantly in your browser. Secure and private.",
      keywords: "hash generator, SHA-1, SHA-256, SHA-512, hash calculator, checksum generator, cryptographic hash",
    });
  }, []);

  const handleGenerate = async () => {
    if (!input) {
      toast({
        title: "Error",
        description: "Please enter some text to hash",
        variant: "destructive",
      });
      return;
    }

    try {
      const [sha1, sha256, sha384, sha512] = await Promise.all([
        generateHash("SHA-1", input),
        generateHash("SHA-256", input),
        generateHash("SHA-384", input),
        generateHash("SHA-512", input),
      ]);

      setHashes({ sha1, sha256, sha384, sha512 });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate hashes",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    if (input) {
      handleGenerate();
    } else {
      setHashes({ sha1: "", sha256: "", sha384: "", sha512: "" });
    }
  }, [input]);

  const handleCopy = (hash: string, algorithm: string) => {
    navigator.clipboard.writeText(hash);
    toast({
      title: "Copied!",
      description: `${algorithm} hash copied to clipboard`,
    });
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background text-foreground dark:text-foreground">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Hash className="w-8 h-8 text-primary dark:text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground">
                Hash Generator
              </h1>
            </div>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Generate cryptographic hashes (SHA-1, SHA-256, SHA-384, SHA-512) instantly
            </p>
          </div>

          <AdPlaceholder type="banner" />

          <div className="mt-8">
            <Card className="p-6">
              <div className="mb-6">
                <Label htmlFor="inputText" className="text-foreground dark:text-foreground mb-2 block">
                  Text to Hash
                </Label>
                <Textarea
                  id="inputText"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter text to generate hashes..."
                  className="min-h-[150px] font-mono text-sm bg-input dark:bg-input border-border dark:border-border text-foreground dark:text-foreground"
                  data-testid="textarea-input"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="text-foreground dark:text-foreground text-sm mb-2 block">SHA-1</Label>
                  <div className="flex gap-2">
                    <Input
                      value={hashes.sha1}
                      readOnly
                      placeholder="SHA-1 hash will appear here..."
                      className="font-mono text-xs bg-muted dark:bg-muted border-border dark:border-border text-foreground dark:text-foreground"
                      data-testid="input-sha1"
                    />
                    <Button
                      onClick={() => handleCopy(hashes.sha1, "SHA-1")}
                      variant="outline"
                      size="sm"
                      disabled={!hashes.sha1}
                      data-testid="button-copy-sha1"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="text-foreground dark:text-foreground text-sm mb-2 block">SHA-256</Label>
                  <div className="flex gap-2">
                    <Input
                      value={hashes.sha256}
                      readOnly
                      placeholder="SHA-256 hash will appear here..."
                      className="font-mono text-xs bg-muted dark:bg-muted border-border dark:border-border text-foreground dark:text-foreground"
                      data-testid="input-sha256"
                    />
                    <Button
                      onClick={() => handleCopy(hashes.sha256, "SHA-256")}
                      variant="outline"
                      size="sm"
                      disabled={!hashes.sha256}
                      data-testid="button-copy-sha256"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="text-foreground dark:text-foreground text-sm mb-2 block">SHA-384</Label>
                  <div className="flex gap-2">
                    <Input
                      value={hashes.sha384}
                      readOnly
                      placeholder="SHA-384 hash will appear here..."
                      className="font-mono text-xs bg-muted dark:bg-muted border-border dark:border-border text-foreground dark:text-foreground"
                      data-testid="input-sha384"
                    />
                    <Button
                      onClick={() => handleCopy(hashes.sha384, "SHA-384")}
                      variant="outline"
                      size="sm"
                      disabled={!hashes.sha384}
                      data-testid="button-copy-sha384"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="text-foreground dark:text-foreground text-sm mb-2 block">SHA-512</Label>
                  <div className="flex gap-2">
                    <Input
                      value={hashes.sha512}
                      readOnly
                      placeholder="SHA-512 hash will appear here..."
                      className="font-mono text-xs bg-muted dark:bg-muted border-border dark:border-border text-foreground dark:text-foreground"
                      data-testid="input-sha512"
                    />
                    <Button
                      onClick={() => handleCopy(hashes.sha512, "SHA-512")}
                      variant="outline"
                      size="sm"
                      disabled={!hashes.sha512}
                      data-testid="button-copy-sha512"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 mt-8">
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground mb-4">About Hash Functions</h3>
              <div className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                <p>
                  <strong>What are Cryptographic Hashes?</strong> Hash functions convert data of any size into a fixed-size string of characters, which is typically a hexadecimal number.
                </p>
                <p>
                  <strong>Common Uses:</strong> Password storage, file integrity verification, digital signatures, blockchain, and data deduplication.
                </p>
                <p>
                  <strong>Security Note:</strong> SHA-1 is considered weak for security purposes. Use SHA-256 or higher for cryptographic applications.
                </p>
                <p>
                  <strong>Privacy:</strong> All hashing happens in your browser. No data is sent to any server.
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
