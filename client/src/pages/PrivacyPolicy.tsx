import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy - toolsmith | Your Data Privacy Matters";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Read toolsmith's privacy policy to understand how we protect your data. We prioritize user privacy with no personal data collection and browser-based calculations."
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white" data-testid="heading-privacy">
          Privacy Policy
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Last Updated: October 1, 2025
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">1. Introduction</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Welcome to toolsmith ("we," "our," or "us"). We are committed to protecting your privacy and 
              ensuring you have a positive experience when using our online tools platform. This Privacy 
              Policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              By using toolsmith, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">2.1 Information You Provide</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We only collect information that you voluntarily provide to us, such as:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li><strong>Contact Information:</strong> When you contact us via our contact form, we collect your name, email address, and message content.</li>
              <li><strong>Tool Usage Data:</strong> The data you input into our tools (loan amounts, JSON code, etc.) is processed locally in your browser and is not stored on our servers.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">2.2 Automatically Collected Information</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We may automatically collect certain technical information when you visit our website:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li><strong>Usage Data:</strong> Information about how you use our website, such as pages visited, time spent, and features used.</li>
              <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers.</li>
              <li><strong>Cookies and Tracking:</strong> We use cookies and similar technologies to enhance user experience (see Section 4).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">3. How We Use Your Information</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li><strong>To Provide Services:</strong> Enable you to use our free online tools effectively</li>
              <li><strong>To Respond to Inquiries:</strong> Answer your questions and provide customer support</li>
              <li><strong>To Improve Our Platform:</strong> Analyze usage patterns to enhance our tools and user experience</li>
              <li><strong>To Ensure Security:</strong> Protect against fraud, abuse, and security threats</li>
              <li><strong>To Comply with Legal Obligations:</strong> Meet regulatory requirements and respond to lawful requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">4. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Remember your preferences (such as dark/light theme settings)</li>
              <li>Understand how you interact with our website</li>
              <li>Improve website functionality and performance</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300">
              You can control cookie settings through your browser preferences. However, disabling cookies may 
              affect your ability to use certain features of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">5. Data Storage and Processing</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Important:</strong> All calculations and data processing on toolsmith happen directly in 
              your browser. This means:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Your input data (loan amounts, JSON code, etc.) is not sent to our servers</li>
              <li>We do not store or have access to the data you enter into our tools</li>
              <li>Your information remains private and secure on your device</li>
              <li>No user accounts or registration are required to use our tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">6. Data Sharing and Disclosure</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our website (e.g., hosting, analytics)</li>
              <li><strong>Legal Compliance:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">7. Third-Party Services</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our website may contain links to third-party websites or services. We are not responsible for the 
              privacy practices of these external sites. We encourage you to review their privacy policies before 
              providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">8. Data Security</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">9. Your Privacy Rights</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to the processing of your personal information</li>
              <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300">
              To exercise these rights, please contact us at husnainofficial0314@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">10. Children's Privacy</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our services are not directed to individuals under the age of 13. We do not knowingly collect 
              personal information from children. If you believe we have inadvertently collected information 
              from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">11. International Data Transfers</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Your information may be transferred to and processed in countries other than your country of 
              residence. These countries may have different data protection laws. By using our services, you 
              consent to such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to 
              review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">13. Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please contact us:
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Email:</strong> <a href="mailto:husnainofficial0314@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">husnainofficial0314@gmail.com</a>
              </p>
            </div>
          </section>

          <section className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Legal Notice:</strong> This privacy policy is provided for informational purposes and should 
              be reviewed by a qualified legal professional before being published on a live website. Privacy laws 
              vary by jurisdiction, and you may need to customize this policy based on your specific circumstances 
              and applicable regulations (such as GDPR, CCPA, etc.).
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
