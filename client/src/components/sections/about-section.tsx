import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Column */}
          <div className="w-full lg:w-2/5 mb-12 lg:mb-0">
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/images/scott/scott-casual.jpg" 
                  alt="Scott Mitting - AI Software Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Skills floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-xs">
                <h3 className="text-gray-900 dark:text-white font-medium text-sm mb-2">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 hover:bg-primary-100 dark:hover:bg-primary-900">AI/ML</Badge>
                  <Badge variant="secondary" className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 hover:bg-teal-100 dark:hover:bg-teal-900">LLM Prompting</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900">Full-Stack</Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 hover:bg-yellow-100 dark:hover:bg-yellow-900">React</Badge>
                  <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 hover:bg-red-100 dark:hover:bg-red-900">Low-Level Systems</Badge>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="w-full lg:w-3/5 lg:pl-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold font-heading mb-6 text-gray-900 dark:text-white">
                About <span className="text-primary-600 dark:text-primary-400">Scott Mitting</span>
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                I'm a freelance software developer and entrepreneur specializing in AI solutions that help small businesses compete with larger corporations.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                With a background in computer science from Purdue University and years of experience in full-stack development, AI/ML model development, and low-level systems, I bring a unique blend of technical expertise and business acumen to every project.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-md bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300">
                    <strong className="font-medium text-gray-900 dark:text-white">Full-stack development</strong> with a focus on creating elegant solutions that solve real problems.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-md bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300">
                    <strong className="font-medium text-gray-900 dark:text-white">AI/ML model development</strong> tailored to your specific business needs and use cases.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-md bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300">
                    <strong className="font-medium text-gray-900 dark:text-white">LLM prompting expertise</strong> to get the most out of AI language models for your business applications.
                  </p>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="mt-8">
                <Button asChild size="lg" className="inline-flex items-center">
                  <a href="#contact">
                    Work with me
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
