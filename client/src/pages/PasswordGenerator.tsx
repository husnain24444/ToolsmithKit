import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import RelatedTools from "@/components/RelatedTools";
import { setSEO } from "@/lib/seo";
import { addRecentTool } from "@/lib/recentTools";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Copy, RefreshCw, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    setSEO({
      title: "Password Generator - Create Strong & Secure Passwords Online | ToolsHub",
      description: "Generate strong, random, and secure passwords instantly. Customize length and character types for maximum security. Free online password generator tool.",
      keywords: "password generator, random password, strong password, secure password, password creator, password maker, generate password",
    });

    addRecentTool({
      href: "/tools/password-generator",
      label: "Password Generator",
      category: "general",
    });

    generatePassword();
  }, []);

  const generatePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let charset = "";
    if (includeUppercase) charset += uppercase;
    if (includeLowercase) charset += lowercase;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;

    if (charset === "") {
      charset = lowercase; // Default to lowercase if nothing selected
    }

    let newPassword = "";
    const crypto = window.crypto || (window as any).msCrypto;
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
      newPassword += charset[array[i] % charset.length];
    }

    setPassword(newPassword);
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      toast({
        title: "Copied!",
        description: "Password copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy password",
        variant: "destructive",
      });
    }
  };

  const getPasswordStrength = (): { strength: string; color: string; percentage: number } => {
    let score = 0;
    if (length >= 12) score += 25;
    if (length >= 16) score += 25;
    if (includeUppercase) score += 12.5;
    if (includeLowercase) score += 12.5;
    if (includeNumbers) score += 12.5;
    if (includeSymbols) score += 12.5;

    if (score < 40) return { strength: "Weak", color: "text-red-500", percentage: score };
    if (score < 70) return { strength: "Medium", color: "text-yellow-500", percentage: score };
    return { strength: "Strong", color: "text-green-500", percentage: score };
  };

  const strength = getPasswordStrength();

  return (
    <div className="min-h-screen bg-background dark:bg-background text-foreground dark:text-foreground">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <AdPlaceholder type="banner" />

        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground mb-4">
              Password Generator
            </h1>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Create strong, random, and secure passwords to protect your online accounts.
            </p>
          </div>

          {/* Generated Password */}
          <Card className="p-6 mb-6">
            <Label className="text-foreground dark:text-foreground mb-2 block">
              Generated Password
            </Label>
            <div className="flex gap-2">
              <Input
                value={password}
                readOnly
                className="font-mono text-lg bg-muted dark:bg-muted"
                data-testid="input-generated-password"
              />
              <Button onClick={handleCopy} size="icon" data-testid="button-copy-password">
                <Copy className="w-4 h-4" />
              </Button>
              <Button onClick={generatePassword} size="icon" variant="outline" data-testid="button-regenerate">
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>

            {/* Password Strength */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground dark:text-muted-foreground">
                  Password Strength:
                </span>
                <span className={`text-sm font-semibold ${strength.color}`} data-testid="text-password-strength">
                  {strength.strength}
                </span>
              </div>
              <div className="w-full bg-muted dark:bg-muted rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${
                    strength.strength === "Weak"
                      ? "bg-red-500"
                      : strength.strength === "Medium"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                  style={{ width: `${strength.percentage}%` }}
                />
              </div>
            </div>
          </Card>

          {/* Settings */}
          <Card className="p-6 mb-6">
            <h2 className="text-xl font-semibold text-foreground dark:text-foreground mb-4">
              Customize Your Password
            </h2>

            {/* Password Length */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label className="text-foreground dark:text-foreground">
                    Password Length
                  </Label>
                  <span className="text-sm font-semibold text-primary dark:text-primary" data-testid="text-password-length">
                    {length}
                  </span>
                </div>
                <Slider
                  value={[length]}
                  onValueChange={(value) => setLength(value[0])}
                  min={4}
                  max={64}
                  step={1}
                  className="mt-2"
                  data-testid="slider-password-length"
                />
              </div>

              {/* Character Options */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="uppercase"
                    checked={includeUppercase}
                    onCheckedChange={(checked) => setIncludeUppercase(checked as boolean)}
                    data-testid="checkbox-uppercase"
                  />
                  <Label htmlFor="uppercase" className="cursor-pointer text-foreground dark:text-foreground">
                    Include Uppercase Letters (A-Z)
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="lowercase"
                    checked={includeLowercase}
                    onCheckedChange={(checked) => setIncludeLowercase(checked as boolean)}
                    data-testid="checkbox-lowercase"
                  />
                  <Label htmlFor="lowercase" className="cursor-pointer text-foreground dark:text-foreground">
                    Include Lowercase Letters (a-z)
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="numbers"
                    checked={includeNumbers}
                    onCheckedChange={(checked) => setIncludeNumbers(checked as boolean)}
                    data-testid="checkbox-numbers"
                  />
                  <Label htmlFor="numbers" className="cursor-pointer text-foreground dark:text-foreground">
                    Include Numbers (0-9)
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="symbols"
                    checked={includeSymbols}
                    onCheckedChange={(checked) => setIncludeSymbols(checked as boolean)}
                    data-testid="checkbox-symbols"
                  />
                  <Label htmlFor="symbols" className="cursor-pointer text-foreground dark:text-foreground">
                    Include Symbols (!@#$%^&*)
                  </Label>
                </div>
              </div>
            </div>
          </Card>

          <AdPlaceholder type="inline" />

          {/* SEO Content */}
          <Card className="p-6 mt-8">
            <h2 className="text-2xl font-semibold text-foreground dark:text-foreground mb-4">
              <Shield className="inline w-6 h-6 mr-2 text-primary dark:text-primary" />
              Why Use a Password Generator?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Creating strong, unique passwords for every account is essential for online security. Our password generator creates cryptographically secure random passwords that are virtually impossible to crack.
              </p>
              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mt-6 mb-3">
                Password Security Tips:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground dark:text-muted-foreground">
                <li>Use at least 12-16 characters for strong security</li>
                <li>Include a mix of uppercase, lowercase, numbers, and symbols</li>
                <li>Never reuse passwords across multiple accounts</li>
                <li>Use a password manager to store passwords securely</li>
                <li>Change passwords regularly, especially for sensitive accounts</li>
                <li>Avoid common words, names, or predictable patterns</li>
              </ul>
            </div>
          </Card>

          <RelatedTools currentTool="/tools/password-generator" category="general" />
        </div>
      </div>

      <Footer />
      <AdPlaceholder type="mobile-sticky" />
    </div>
  );
}
