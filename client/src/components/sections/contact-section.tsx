import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/lib/send-email";
import { MessageSquare } from "lucide-react";
import { useChatContext } from "@/contexts/chat-context";

export function ContactSection() {
  const { toast } = useToast();
  const { chatTopic, userEditedContactMessage, setUserEditedContactMessage } = useChatContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: ""
  });
  
  // Update the message field with chat topic when available and user hasn't edited it
  useEffect(() => {
    if (chatTopic && !userEditedContactMessage && !formData.message) {
      setFormData(prev => ({ ...prev, message: chatTopic }));
    }
  }, [chatTopic, userEditedContactMessage]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // If user is editing the message field, mark it as user-edited
    if (name === 'message') {
      setUserEditedContactMessage(true);
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await sendContactEmail(formData);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      
      // Reset form and editing state
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: ""
      });
      // Reset the user edit flag so future chat topics can auto-populate
      setUserEditedContactMessage(false);
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold font-heading mb-4 text-gray-900 dark:text-white">Get in Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Ready to transform your business with AI? Let's discuss how we can work together.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {/* Contact form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <MessageSquare className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Have a quick question? Try our AI assistant by clicking the chat button in the corner.
                    </p>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      First name
                    </label>
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      autoComplete="given-name"
                      className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Last name
                    </label>
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      autoComplete="family-name"
                      className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Company
                  </label>
                  <Input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    autoComplete="organization"
                    className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md"
                  />
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      How can I help you?
                    </label>
                    {chatTopic && !userEditedContactMessage && formData.message && (
                      <span className="text-xs text-primary-600 dark:text-primary-400 flex items-center">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        Added from your chat
                      </span>
                    )}
                  </div>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md ${
                      chatTopic && !userEditedContactMessage && formData.message ? "border-l-4 border-l-primary-500 pl-3" : ""
                    }`}
                  />
                </div>
                
                <div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
