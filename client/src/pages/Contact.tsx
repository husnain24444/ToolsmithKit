import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact Us - ToolsHub | Get in Touch";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Contact ToolsHub for support, feedback, or inquiries. We're here to help you with our free online tools including calculators and developer utilities."
      );
    }
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission (in a real app, this would send to your backend)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Contact form submitted:", data);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center" data-testid="heading-contact">
          Contact Us
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Have questions, suggestions, or feedback? We'd love to hear from you! Fill out the form below or reach us directly via email.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Get in Touch</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                We're here to help! Whether you have a question about our tools, need technical support, 
                or want to provide feedback, our team is ready to assist you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                  <a 
                    href="mailto:husnainofficial0314@gmail.com" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    data-testid="link-email"
                  >
                    husnainofficial0314@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
                  <p className="text-gray-700 dark:text-gray-300">Available Online, Worldwide</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Response Time</h3>
                  <p className="text-gray-700 dark:text-gray-300">We typically respond within 24-48 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Be specific about which tool you're inquiring about</li>
                <li>• Include screenshots if reporting an issue</li>
                <li>• Check our About page for general information</li>
                <li>• Review our Privacy Policy for data-related questions</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Send Us a Message</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 dark:text-white">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 dark:text-white">Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="your.email@example.com" 
                          {...field} 
                          className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 dark:text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us how we can help you..." 
                          rows={5}
                          {...field} 
                          className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700"
                  disabled={isSubmitting}
                  data-testid="button-submit"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
