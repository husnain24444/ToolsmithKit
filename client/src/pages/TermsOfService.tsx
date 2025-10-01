import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service - ToolsHub | Legal Terms & Conditions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Read ToolsHub's terms of service and conditions of use. Understand your rights and responsibilities when using our free online tools and calculators."
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white" data-testid="heading-terms">
          Terms of Service
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Last Updated: October 1, 2025
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Welcome to ToolsHub. By accessing or using our website and online tools (collectively, the "Services"), 
              you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please 
              do not use our Services.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We reserve the right to modify these Terms at any time. Continued use of our Services after changes 
              constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">2. Description of Services</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              ToolsHub provides free online utility tools, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>EMI/Loan Calculators for financial planning</li>
              <li>JSON Formatters and Validators for developers</li>
              <li>Other utility tools and calculators</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300">
              All tools are provided free of charge and are accessible without registration. We may add, modify, 
              or remove tools at our discretion without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">3. User Responsibilities</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              By using our Services, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Use the Services only for lawful purposes and in accordance with these Terms</li>
              <li>Not use the Services in any way that could damage, disable, or impair our website</li>
              <li>Not attempt to gain unauthorized access to any portion of the Services</li>
              <li>Not use any automated systems (bots, scrapers, etc.) to access the Services without permission</li>
              <li>Not interfere with or disrupt the Services or servers connected to the Services</li>
              <li>Not use the Services to transmit any harmful code, viruses, or malicious software</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">4. Intellectual Property Rights</h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">4.1 Our Content</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              All content on ToolsHub, including but not limited to text, graphics, logos, code, and software, 
              is the property of ToolsHub or its content suppliers and is protected by international copyright, 
              trademark, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">4.2 Limited License</h3>
            <p className="text-gray-700 dark:text-gray-300">
              We grant you a limited, non-exclusive, non-transferable license to access and use our Services for 
              personal or commercial purposes. You may not reproduce, distribute, modify, or create derivative 
              works from our content without explicit written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">5. Disclaimer of Warranties</h2>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>IMPORTANT:</strong> THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES 
                OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We do not warrant that:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>The Services will meet your specific requirements</li>
              <li>The Services will be uninterrupted, timely, secure, or error-free</li>
              <li>The results obtained from using the Services will be accurate or reliable</li>
              <li>Any errors in the Services will be corrected</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">5.1 Financial Tools Disclaimer</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Our EMI/Loan Calculators and other financial tools are provided for informational and educational 
              purposes only. We are not financial advisors, and the results should not be considered as financial 
              advice. Always consult with a qualified financial professional before making any financial decisions.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">5.2 Developer Tools Disclaimer</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Our developer tools (JSON formatters, validators, etc.) are provided as-is. We do not guarantee the 
              accuracy of processing or output. Always verify results before using them in production environments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">6. Limitation of Liability</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, TOOLSHUB SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED 
              DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              This includes but is not limited to damages resulting from:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Use or inability to use the Services</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Errors, mistakes, or inaccuracies in the Services</li>
              <li>Reliance on any content or results from the Services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">7. Indemnification</h2>
            <p className="text-gray-700 dark:text-gray-300">
              You agree to indemnify, defend, and hold harmless ToolsHub, its officers, directors, employees, and 
              agents from any claims, liabilities, damages, losses, and expenses (including legal fees) arising 
              out of or in any way connected with your access to or use of the Services, your violation of these 
              Terms, or your violation of any rights of another party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">8. Third-Party Links and Services</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our Services may contain links to third-party websites or services that are not owned or controlled 
              by ToolsHub. We have no control over and assume no responsibility for the content, privacy policies, 
              or practices of any third-party websites or services. You acknowledge and agree that ToolsHub shall 
              not be liable for any damage or loss caused by your use of any third-party content or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">9. Privacy and Data Protection</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Your use of the Services is also governed by our Privacy Policy. Please review our{" "}
              <a href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">
                Privacy Policy
              </a>{" "}
              to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">10. Termination</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Terminate or suspend access to our Services immediately, without prior notice or liability, 
              for any reason, including if you breach these Terms</li>
              <li>Discontinue or modify the Services at any time without notice</li>
              <li>Refuse service to anyone for any reason at any time</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300">
              Upon termination, your right to use the Services will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">11. Governing Law and Jurisdiction</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in 
              which ToolsHub operates, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Any disputes arising from these Terms or your use of the Services shall be subject to the exclusive 
              jurisdiction of the courts in that jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">12. Dispute Resolution</h2>
            <p className="text-gray-700 dark:text-gray-300">
              In the event of any dispute, claim, or controversy arising from these Terms, you agree to first 
              contact us at husnainofficial0314@gmail.com to attempt to resolve the issue informally before 
              pursuing formal legal action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">13. Severability</h2>
            <p className="text-gray-700 dark:text-gray-300">
              If any provision of these Terms is found to be invalid or unenforceable by a court of competent 
              jurisdiction, the remaining provisions will continue in full force and effect. The invalid or 
              unenforceable provision will be deemed modified to the extent necessary to make it valid and 
              enforceable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">14. Entire Agreement</h2>
            <p className="text-gray-700 dark:text-gray-300">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and 
              ToolsHub regarding the use of our Services and supersede all prior agreements and understandings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">15. Contact Information</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Email:</strong> <a href="mailto:husnainofficial0314@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">husnainofficial0314@gmail.com</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">16. Acknowledgment</h2>
            <p className="text-gray-700 dark:text-gray-300">
              BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE, UNDERSTAND THEM, 
              AND AGREE TO BE BOUND BY THEM. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT USE OUR SERVICES.
            </p>
          </section>

          <section className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Legal Notice:</strong> These Terms of Service are provided for informational purposes and 
              should be reviewed by a qualified legal professional before being published on a live website. Legal 
              requirements vary by jurisdiction, and you may need to customize these terms based on your specific 
              circumstances, location, and applicable laws.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
