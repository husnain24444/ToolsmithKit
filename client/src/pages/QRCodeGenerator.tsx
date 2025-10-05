import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import RelatedTools from "@/components/RelatedTools";
import { setSEO } from "@/lib/seo";
import { addRecentTool } from "@/lib/recentTools";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Download, QrCode } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function QRCodeGenerator() {
  const [text, setText] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    setSEO({
      title: "QR Code Generator - Create Free QR Codes Online | ToolsHub",
      description: "Generate QR codes instantly for URLs, text, contact information, and more. Free online QR code generator with download option. Create QR codes in seconds.",
      keywords: "QR code generator, create QR code, QR code maker, generate QR code, free QR code, QR code creator, barcode generator",
    });

    addRecentTool({
      href: "/tools/qr-code-generator",
      label: "QR Code Generator",
      category: "general",
    });
  }, []);

  const generateQRCode = () => {
    if (!text.trim()) {
      toast({
        title: "Error",
        description: "Please enter text or URL to generate QR code",
        variant: "destructive",
      });
      return;
    }

    const encodedText = encodeURIComponent(text);
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodedText}`;
    setQrCodeUrl(url);
  };

  useEffect(() => {
    if (text.trim()) {
      const timeoutId = setTimeout(() => {
        generateQRCode();
      }, 500);
      return () => clearTimeout(timeoutId);
    } else {
      setQrCodeUrl("");
    }
  }, [text]);

  const handleDownload = () => {
    if (!qrCodeUrl) return;

    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Downloaded!",
      description: "QR code saved to your device",
    });
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background text-foreground dark:text-foreground">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <AdPlaceholder type="banner" />

        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground mb-4">
              QR Code Generator
            </h1>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Create QR codes instantly for URLs, text, contact information, and more. Free and easy to use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Input Section */}
            <Card className="p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="qr-text" className="text-foreground dark:text-foreground">
                    Enter Text or URL
                  </Label>
                  <Textarea
                    id="qr-text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="https://example.com or any text..."
                    className="mt-2 min-h-[150px]"
                    data-testid="textarea-qr-input"
                  />
                </div>

                <Button
                  onClick={generateQRCode}
                  className="w-full"
                  disabled={!text.trim()}
                  data-testid="button-generate-qr"
                >
                  <QrCode className="w-4 h-4 mr-2" />
                  Generate QR Code
                </Button>
              </div>
            </Card>

            {/* QR Code Display */}
            <Card className="p-6">
              <div className="flex flex-col items-center justify-center space-y-4">
                {qrCodeUrl ? (
                  <>
                    <div className="bg-white p-4 rounded-lg">
                      <img
                        src={qrCodeUrl}
                        alt="Generated QR Code"
                        className="w-64 h-64"
                        data-testid="img-qr-code"
                      />
                    </div>
                    <Button
                      onClick={handleDownload}
                      variant="outline"
                      className="w-full"
                      data-testid="button-download-qr"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download QR Code
                    </Button>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-center">
                    <QrCode className="w-16 h-16 text-muted-foreground dark:text-muted-foreground opacity-50 mb-4" />
                    <p className="text-muted-foreground dark:text-muted-foreground">
                      Your QR code will appear here
                    </p>
                  </div>
                )}
              </div>
            </Card>
          </div>

          <AdPlaceholder type="inline" className="mt-8" />

          {/* SEO Content */}
          <Card className="p-6 mt-8">
            <h2 className="text-2xl font-semibold text-foreground dark:text-foreground mb-4">
              About QR Code Generator
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                QR codes (Quick Response codes) are two-dimensional barcodes that can store various types of information. Our free QR code generator creates high-quality QR codes that can be scanned by any smartphone camera.
              </p>
              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mt-6 mb-3">
                Common Uses for QR Codes:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground dark:text-muted-foreground">
                <li>Share website URLs and landing pages</li>
                <li>Connect to WiFi networks</li>
                <li>Share contact information (vCard)</li>
                <li>Display text messages or instructions</li>
                <li>Link to social media profiles</li>
                <li>Product information and packaging</li>
                <li>Event tickets and registrations</li>
                <li>Payment and banking information</li>
              </ul>
            </div>
          </Card>

          <RelatedTools currentTool="/tools/qr-code-generator" category="general" />
        </div>
      </div>

      <Footer />
      <AdPlaceholder type="mobile-sticky" />
    </div>
  );
}
