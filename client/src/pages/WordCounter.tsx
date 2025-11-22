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
import { Copy, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function WordCounter() {
  const [text, setText] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    setSEO({
      title: "Word Counter - Count Words, Characters, Sentences & Paragraphs Online | toolsmith",
      description: "Free online word counter tool. Count words, characters, sentences, and paragraphs instantly. Perfect for essays, articles, and content writing with real-time statistics.",
      keywords: "word counter, character counter, word count, character count, text counter, sentence counter, paragraph counter, essay word count",
    });

    // Add FAQ structured data for rich snippets
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a word counter tool?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A word counter is an online tool that automatically counts the number of words, characters, sentences, and paragraphs in your text. It helps writers and students track their writing progress and meet specific length requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate is this word counter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our word counter is highly accurate and uses standard word counting algorithms. It counts words by splitting text on whitespace characters, which is the same method used by popular word processors like Microsoft Word and Google Docs."
          }
        },
        {
          "@type": "Question",
          "name": "Does this tool count characters with or without spaces?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our tool provides both! You can see the total character count (including spaces) and the character count without spaces. This is useful for different platforms that have varying character limit rules."
          }
        },
        {
          "@type": "Question",
          "name": "Is my text stored or saved anywhere?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, your privacy is protected. All text processing happens in your browser. We do not store, save, or transmit your text to any server. Your content remains completely private and secure."
          }
        }
      ]
    };

    // Add FAQ schema to page
    const existingFAQScript = document.querySelector('script[data-schema-type="faq"]');
    if (existingFAQScript) {
      existingFAQScript.textContent = JSON.stringify(faqSchema);
    } else {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema-type', 'faq');
      script.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(script);
    }

    addRecentTool({
      href: "/tools/word-counter",
      label: "Word Counter",
      category: "general",
    });
  }, []);

  const countWords = (text: string): number => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };

  const countCharacters = (text: string): number => {
    return text.length;
  };

  const countCharactersNoSpaces = (text: string): number => {
    return text.replace(/\s/g, "").length;
  };

  const countSentences = (text: string): number => {
    return text.trim() ? text.split(/[.!?]+/).filter(s => s.trim()).length : 0;
  };

  const countParagraphs = (text: string): number => {
    return text.trim() ? text.split(/\n\n+/).filter(p => p.trim()).length : 0;
  };

  const countLines = (text: string): number => {
    return text.trim() ? text.split(/\n/).filter(l => l.trim()).length : 0;
  };

  const getReadingTime = (words: number): string => {
    const minutes = Math.ceil(words / 200); // Average reading speed: 200 words/min
    return minutes === 1 ? "1 minute" : `${minutes} minutes`;
  };

  const getSpeakingTime = (words: number): string => {
    const minutes = Math.ceil(words / 130); // Average speaking speed: 130 words/min
    return minutes === 1 ? "1 minute" : `${minutes} minutes`;
  };

  const handleClear = () => {
    setText("");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: "Text copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy text",
        variant: "destructive",
      });
    }
  };

  const words = countWords(text);
  const characters = countCharacters(text);
  const charactersNoSpaces = countCharactersNoSpaces(text);
  const sentences = countSentences(text);
  const paragraphs = countParagraphs(text);
  const lines = countLines(text);

  return (
    <div className="min-h-screen bg-background dark:bg-background text-foreground dark:text-foreground">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <AdPlaceholder type="banner" />

        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground mb-4">
              Word Counter
            </h1>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Count words, characters, sentences, and paragraphs in real-time. Perfect for essays, articles, and content writing.
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-primary dark:text-primary" data-testid="text-word-count">
                {words}
              </div>
              <div className="text-sm text-muted-foreground dark:text-muted-foreground">Words</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-foreground dark:text-foreground" data-testid="text-character-count">
                {characters}
              </div>
              <div className="text-sm text-muted-foreground dark:text-muted-foreground">Characters</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-foreground dark:text-foreground" data-testid="text-character-no-spaces">
                {charactersNoSpaces}
              </div>
              <div className="text-sm text-muted-foreground dark:text-muted-foreground">No Spaces</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-foreground dark:text-foreground" data-testid="text-sentence-count">
                {sentences}
              </div>
              <div className="text-sm text-muted-foreground dark:text-muted-foreground">Sentences</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-foreground dark:text-foreground" data-testid="text-paragraph-count">
                {paragraphs}
              </div>
              <div className="text-sm text-muted-foreground dark:text-muted-foreground">Paragraphs</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-foreground dark:text-foreground" data-testid="text-line-count">
                {lines}
              </div>
              <div className="text-sm text-muted-foreground dark:text-muted-foreground">Lines</div>
            </Card>
          </div>

          {/* Time Estimates */}
          {words > 0 && (
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground dark:text-muted-foreground mb-1">Reading Time</div>
                    <div className="text-lg font-semibold text-foreground dark:text-foreground" data-testid="text-reading-time">
                      {getReadingTime(words)}
                    </div>
                  </div>
                  <FileText className="w-8 h-8 text-primary dark:text-primary opacity-50" />
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground dark:text-muted-foreground mb-1">Speaking Time</div>
                    <div className="text-lg font-semibold text-foreground dark:text-foreground" data-testid="text-speaking-time">
                      {getSpeakingTime(words)}
                    </div>
                  </div>
                  <FileText className="w-8 h-8 text-accent dark:text-accent opacity-50" />
                </div>
              </Card>
            </div>
          )}

          {/* Text Input */}
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="text-input" className="text-foreground dark:text-foreground">
                  Enter or Paste Your Text
                </Label>
                <Textarea
                  id="text-input"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Start typing or paste your text here..."
                  className="mt-2 min-h-[300px] font-mono text-foreground dark:text-foreground bg-background dark:bg-background"
                  data-testid="textarea-word-counter"
                />
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={handleCopy}
                  variant="outline"
                  disabled={!text}
                  data-testid="button-copy-text"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Text
                </Button>
                <Button
                  onClick={handleClear}
                  variant="outline"
                  disabled={!text}
                  data-testid="button-clear-text"
                >
                  Clear
                </Button>
              </div>
            </div>
          </Card>

          <AdPlaceholder type="inline" className="mt-8" />

          {/* SEO Content */}
          <Card className="p-6 mt-8">
            <h2 className="text-2xl font-semibold text-foreground dark:text-foreground mb-4">
              About Word Counter Tool
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Our free online word counter tool helps you track important text statistics in real-time. Whether you're writing an essay, article, blog post, or any other content, this tool provides instant feedback on word count, character count, and more.
              </p>
              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mt-6 mb-3">
                Key Features:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground dark:text-muted-foreground mb-6">
                <li>Real-time word counting as you type</li>
                <li>Character count with and without spaces</li>
                <li>Sentence and paragraph counting</li>
                <li>Reading time estimation (200 words/minute)</li>
                <li>Speaking time estimation (130 words/minute)</li>
                <li>Line count for code or formatted text</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mt-6 mb-3">
                Who Uses Word Counter?
              </h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-3">
                Our word counter tool is perfect for various professionals and students:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground dark:text-muted-foreground mb-6">
                <li><strong>Students:</strong> Track essay and assignment word counts to meet academic requirements</li>
                <li><strong>Writers & Bloggers:</strong> Monitor article length for SEO optimization and readability</li>
                <li><strong>Content Marketers:</strong> Ensure content meets platform-specific character limits</li>
                <li><strong>Social Media Managers:</strong> Verify posts stay within character limits for Twitter, Facebook, etc.</li>
                <li><strong>Copywriters:</strong> Track ad copy and meta description lengths</li>
                <li><strong>Translators:</strong> Calculate word counts for pricing and project estimation</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mt-6 mb-3">
                How to Use the Word Counter
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground dark:text-muted-foreground mb-6">
                <li>Type or paste your text into the text area above</li>
                <li>Watch the statistics update automatically as you type</li>
                <li>View word count, character count, sentences, and paragraphs</li>
                <li>Check estimated reading and speaking times</li>
                <li>Use the Copy button to copy your text to clipboard</li>
                <li>Click Clear to start fresh with new text</li>
              </ol>

              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mt-6 mb-3">
                Why Accurate Word Counting Matters
              </h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-6">
                Accurate word counting is essential for meeting writing requirements, optimizing content for SEO, 
                staying within platform limits, and professional communication. Our tool uses precise algorithms 
                to count words, characters, and sentences, ensuring you get reliable statistics every time.
              </p>
            </div>
          </Card>

          {/* FAQ Section */}
          <Card className="p-6 mt-8">
            <h2 className="text-2xl font-semibold text-foreground dark:text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground dark:text-foreground mb-2">
                  What is a word counter tool?
                </h3>
                <p className="text-muted-foreground dark:text-muted-foreground">
                  A word counter is an online tool that automatically counts the number of words, characters, sentences, 
                  and paragraphs in your text. It helps writers and students track their writing progress and meet specific 
                  length requirements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground dark:text-foreground mb-2">
                  How accurate is this word counter?
                </h3>
                <p className="text-muted-foreground dark:text-muted-foreground">
                  Our word counter is highly accurate and uses standard word counting algorithms. It counts words by 
                  splitting text on whitespace characters, which is the same method used by popular word processors 
                  like Microsoft Word and Google Docs.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground dark:text-foreground mb-2">
                  Does this tool count characters with or without spaces?
                </h3>
                <p className="text-muted-foreground dark:text-muted-foreground">
                  Our tool provides both! You can see the total character count (including spaces) and the character 
                  count without spaces. This is useful for different platforms that have varying character limit rules.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground dark:text-foreground mb-2">
                  What is the average reading time calculation based on?
                </h3>
                <p className="text-muted-foreground dark:text-muted-foreground">
                  Reading time is calculated at an average reading speed of 200 words per minute, which is the typical 
                  reading speed for adults. Speaking time is based on 130 words per minute, the average speaking pace 
                  for presentations.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground dark:text-foreground mb-2">
                  Is my text stored or saved anywhere?
                </h3>
                <p className="text-muted-foreground dark:text-muted-foreground">
                  No, your privacy is protected. All text processing happens in your browser. We do not store, save, 
                  or transmit your text to any server. Your content remains completely private and secure.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground dark:text-foreground mb-2">
                  Can I use this for academic writing?
                </h3>
                <p className="text-muted-foreground dark:text-muted-foreground">
                  Absolutely! This tool is perfect for students working on essays, research papers, and assignments with 
                  specific word count requirements. It helps ensure you meet minimum or maximum word limits set by your 
                  professors or institutions.
                </p>
              </div>
            </div>
          </Card>

          <RelatedTools currentTool="/tools/word-counter" category="general" />
        </div>
      </div>

      <Footer />
      <AdPlaceholder type="mobile-sticky" />
    </div>
  );
}
