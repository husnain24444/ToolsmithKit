import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { setSEO } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogDeveloper() {
  useEffect(() => {
    setSEO({
      title: "Essential Developer Tools: JSON, Base64, and Hashing Guide | ToolsHub Blog",
      description: "Master essential developer tools including JSON formatting, Base64 encoding, and cryptographic hashing. Practical guides and best practices for developers.",
      keywords: "developer tools, JSON formatter, Base64 encoding, hash functions, web development, programming tools",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background dark:bg-background text-foreground dark:text-foreground">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground mb-4">
              <Link href="/"><span className="hover:text-primary cursor-pointer" data-testid="link-breadcrumb-home">Home</span></Link>
              <span>→</span>
              <span>Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground mb-4">
              Essential Developer Tools: JSON, Base64, and Hashing Guide
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground dark:text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>October 2, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>ToolsHub Team</span>
              </div>
            </div>
          </div>

          <AdPlaceholder type="banner" />

          <Card className="p-8 mt-8">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4">Working with JSON: Best Practices</h2>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                JSON (JavaScript Object Notation) has become the de facto standard for data interchange in modern web development. Understanding how to work with JSON effectively is essential for every developer.
              </p>

              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-3">Why Format JSON?</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Unformatted JSON can be difficult to read and debug. Proper formatting improves:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground dark:text-muted-foreground mb-4">
                <li>Code readability and maintainability</li>
                <li>Debugging efficiency</li>
                <li>API response analysis</li>
                <li>Configuration file management</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-3">Common JSON Mistakes to Avoid</h3>
              <ol className="list-decimal pl-6 text-muted-foreground dark:text-muted-foreground mb-4">
                <li className="mb-2"><strong>Trailing commas:</strong> JSON doesn't allow trailing commas in arrays or objects.</li>
                <li className="mb-2"><strong>Single quotes:</strong> JSON requires double quotes for strings, not single quotes.</li>
                <li className="mb-2"><strong>Comments:</strong> Pure JSON doesn't support comments (though some parsers allow it).</li>
                <li className="mb-2"><strong>Undefined values:</strong> Use <code className="bg-muted dark:bg-muted px-1 py-0.5 rounded">null</code> instead of <code className="bg-muted dark:bg-muted px-1 py-0.5 rounded">undefined</code>.</li>
              </ol>

              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-3">JSON in APIs</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                When working with REST APIs, JSON is the standard format for request and response bodies. Best practices include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground dark:text-muted-foreground mb-4">
                <li>Use consistent naming conventions (camelCase or snake_case)</li>
                <li>Keep structure flat when possible</li>
                <li>Include appropriate error messages in JSON responses</li>
                <li>Validate JSON schemas on both client and server</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4 mt-8">Base64 Encoding Explained</h2>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Base64 is a binary-to-text encoding scheme that's essential for transmitting binary data over text-based protocols.
              </p>

              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-3">When to Use Base64</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Base64 encoding is commonly used for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground dark:text-muted-foreground mb-4">
                <li className="mb-2"><strong>Email Attachments:</strong> MIME email format uses Base64 to encode binary attachments.</li>
                <li className="mb-2"><strong>Data URLs:</strong> Embedding images directly in HTML or CSS using data URIs.</li>
                <li className="mb-2"><strong>API Authentication:</strong> Basic authentication headers use Base64 encoding.</li>
                <li className="mb-2"><strong>Storing Binary Data:</strong> When you need to store binary data in text-based formats like JSON or XML.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-3">Base64 Best Practices</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                While Base64 is useful, remember these important points:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground dark:text-muted-foreground mb-4">
                <li>Base64 increases data size by approximately 33%</li>
                <li>It's encoding, not encryption - don't use it for security</li>
                <li>Always validate decoded data before using it</li>
                <li>Consider URL-safe Base64 for URLs (uses - and _ instead of + and /)</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-4 mt-8">Understanding Cryptographic Hash Functions</h2>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Hash functions are fundamental to modern security. They convert data of any size into a fixed-size string that uniquely represents the original data.
              </p>

              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-3">SHA Algorithm Comparison</h3>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border border-border dark:border-border">
                  <thead>
                    <tr className="bg-muted dark:bg-muted">
                      <th className="border border-border dark:border-border p-2 text-left">Algorithm</th>
                      <th className="border border-border dark:border-border p-2 text-left">Hash Length</th>
                      <th className="border border-border dark:border-border p-2 text-left">Security</th>
                      <th className="border border-border dark:border-border p-2 text-left">Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground dark:text-muted-foreground">
                    <tr>
                      <td className="border border-border dark:border-border p-2">SHA-1</td>
                      <td className="border border-border dark:border-border p-2">160 bits</td>
                      <td className="border border-border dark:border-border p-2">Weak</td>
                      <td className="border border-border dark:border-border p-2">Legacy systems only</td>
                    </tr>
                    <tr>
                      <td className="border border-border dark:border-border p-2">SHA-256</td>
                      <td className="border border-border dark:border-border p-2">256 bits</td>
                      <td className="border border-border dark:border-border p-2">Strong</td>
                      <td className="border border-border dark:border-border p-2">General purpose, blockchain</td>
                    </tr>
                    <tr>
                      <td className="border border-border dark:border-border p-2">SHA-384</td>
                      <td className="border border-border dark:border-border p-2">384 bits</td>
                      <td className="border border-border dark:border-border p-2">Strong</td>
                      <td className="border border-border dark:border-border p-2">Higher security needs</td>
                    </tr>
                    <tr>
                      <td className="border border-border dark:border-border p-2">SHA-512</td>
                      <td className="border border-border dark:border-border p-2">512 bits</td>
                      <td className="border border-border dark:border-border p-2">Very Strong</td>
                      <td className="border border-border dark:border-border p-2">Maximum security</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-3">Common Use Cases for Hashing</h3>
              <ul className="list-disc pl-6 text-muted-foreground dark:text-muted-foreground mb-4">
                <li className="mb-2"><strong>Password Storage:</strong> Never store passwords in plain text. Always hash them (preferably with bcrypt or Argon2).</li>
                <li className="mb-2"><strong>File Integrity:</strong> Verify downloaded files haven't been tampered with by comparing hashes.</li>
                <li className="mb-2"><strong>Digital Signatures:</strong> Create and verify digital signatures for documents and code.</li>
                <li className="mb-2"><strong>Blockchain:</strong> Each block contains a hash of the previous block, creating an immutable chain.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-3">Hash Security Best Practices</h3>
              <ol className="list-decimal pl-6 text-muted-foreground dark:text-muted-foreground mb-6">
                <li className="mb-2">Use SHA-256 or higher for new applications (avoid SHA-1)</li>
                <li className="mb-2">For passwords, use specialized functions like bcrypt, scrypt, or Argon2</li>
                <li className="mb-2">Add salt to hashes to prevent rainbow table attacks</li>
                <li className="mb-2">Hash client-side only for integrity checks, not security</li>
              </ol>

              <div className="bg-accent/10 dark:bg-accent/20 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-3">Try Our Developer Tools</h3>
                <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                  All tools work entirely in your browser. Your data never leaves your device, ensuring complete privacy.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild data-testid="link-json-formatter">
                    <Link href="/tools/json-formatter">
                      JSON Formatter <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" data-testid="link-base64-tool">
                    <Link href="/tools/base64">
                      Base64 Tool <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" data-testid="link-hash-generator">
                    <Link href="/tools/hash-generator">
                      Hash Generator <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          </Card>

          <AdPlaceholder type="inline" className="mt-8" />
        </div>
      </div>

      <Footer />
      <AdPlaceholder type="mobile-sticky" />
    </div>
  );
}
