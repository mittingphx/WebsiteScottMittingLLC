import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Idea } from "@/types";
import ideasData from "@/data/ideas.json";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function IdeasSection() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Subscribed successfully!",
        description: "You'll be notified when these ideas launch.",
        duration: 5000,
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  const handleRegisterInterest = (idea: Idea) => {
    toast({
      title: `Interest registered for "${idea.title}"`,
      description: "Thanks for your interest! We'll keep you updated on the progress.",
      duration: 5000,
    });
  };

  return (
    <section id="ideas" className="py-16 lg:py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold font-heading mb-4 text-gray-900 dark:text-white">Product Ideas</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Upcoming innovations in the pipeline
          </p>
        </div>
        
        {/* Ideas cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ideasData.ideas.map((idea) => (
            <div key={idea.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow relative overflow-hidden">
              {/* Decorative element */}
              <div className={`absolute -right-4 -top-4 h-24 w-24 ${
                idea.id % 2 === 0 
                  ? "bg-primary-100 dark:bg-primary-900/30" 
                  : "bg-teal-100 dark:bg-teal-900/30"
              } rounded-full opacity-50`}></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{idea.title}</h3>
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                    {idea.status}
                  </Badge>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {idea.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {idea.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className={`
                        ${tag === "SaaS" ? "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200" : ""} 
                        ${tag === "LLM" ? "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200" : ""}
                        ${tag === "ML" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : ""}
                        ${tag === "Marketing" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : ""}
                        ${tag === "Finance" ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" : ""}
                      `}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="link" className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:text-primary-700 dark:hover:text-primary-300 p-0" onClick={() => handleRegisterInterest(idea)}>
                  Register Interest
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Subscribe section */}
        <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-primary-600 to-teal-600 dark:from-primary-700 dark:to-teal-700 rounded-xl shadow-xl overflow-hidden">
          <div className="px-8 py-10 sm:px-12 relative z-10">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Stay Updated on New Ideas</h3>
              <p className="text-primary-100 dark:text-primary-200 mb-6">
                Be the first to know when these ideas launch and get early access.
              </p>
              
              <form className="sm:flex justify-center" onSubmit={handleSubscribe}>
                <div className="flex-grow sm:max-w-xs">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="w-full px-5 py-3 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
                  />
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
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
