import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    document.title = "About Us - ToolsHub | Free Online Tools Platform";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about ToolsHub - your trusted platform for free online tools including EMI calculators, JSON formatters, and more. Discover our mission to simplify your digital tasks."
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white" data-testid="heading-about">
          About ToolsHub
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Who We Are</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              ToolsHub is a free online tools platform designed to make your life easier. We provide a 
              comprehensive suite of professional-grade utilities that help you with everyday tasks—from 
              financial calculations to developer tools—all accessible directly from your browser.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our platform is built by a team passionate about creating simple, efficient, and user-friendly 
              online tools that save you time and effort. Whether you're calculating loan payments, formatting 
              JSON data, or using any of our other free calculators and utilities, we're here to help.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our mission is simple: to provide fast, reliable, and completely free online tools that anyone 
              can use without registration, downloads, or hidden costs. We believe that essential digital 
              utilities should be accessible to everyone, everywhere.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We're committed to:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Maintaining 100% free access to all our tools</li>
              <li>Ensuring data privacy and security for all users</li>
              <li>Continuously improving and adding new tools based on user feedback</li>
              <li>Providing mobile-responsive, SEO-optimized tools that work on any device</li>
              <li>Delivering accurate results with user-friendly interfaces</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Why We Built ToolsHub</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We noticed that many online tools platforms are cluttered with ads, require unnecessary 
              registrations, or charge fees for basic functionality. We wanted to create a better 
              alternative—a clean, modern platform where you can access professional tools instantly.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Every tool on ToolsHub is designed with simplicity and effectiveness in mind. Whether you're 
              a student calculating loan payments, a developer formatting code, or a professional needing 
              quick calculations, our tools are built for you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Our Tools</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Currently, ToolsHub offers:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li><strong>EMI/Loan Calculator:</strong> Calculate your monthly loan payments with detailed 
              amortization schedules and visual breakdowns</li>
              <li><strong>JSON Formatter & Validator:</strong> Format, validate, and beautify JSON data 
              with syntax highlighting</li>
              <li>And many more tools coming soon!</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Our Commitment to You</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We're dedicated to maintaining ToolsHub as a trusted resource for online tools. Your privacy 
              is our priority—we don't collect personal data, and all calculations happen securely in your 
              browser. We're constantly working to improve our existing tools and develop new ones based on 
              your needs.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Thank you for choosing ToolsHub. We're here to make your digital tasks simpler, faster, and 
              completely free.
            </p>
          </section>

          <section className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Get in Touch</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Have questions, suggestions, or feedback? We'd love to hear from you! Visit our{" "}
              <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
                Contact Page
              </a>{" "}
              to reach out to our team.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
