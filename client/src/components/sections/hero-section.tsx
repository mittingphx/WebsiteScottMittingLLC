import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 py-16 md:py-24 lg:py-32 transition-colors">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-10">
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-primary-200 dark:bg-primary-900 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-96 h-96 bg-teal-200 dark:bg-teal-900 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          {/* Hero content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-heading mb-6 leading-tight">
              <span className="block">AI-Powered Solutions</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-teal-500 dark:from-primary-400 dark:to-teal-400">For The Little Guy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Empowering small businesses with cutting-edge AI tools and automation solutions that were once only available to large corporations.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="inline-flex items-center justify-center shadow-lg hover:shadow-xl">
                <a href="#portfolio">
                  See My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Let's Talk</a>
              </Button>
            </div>
            
            {/* Social links */}
            <div className="mt-8">
              <div className="flex items-center justify-center lg:justify-start space-x-5">
                <a 
                  href="https://github.com/mittingphx" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/scottmitting" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="w-full lg:w-1/2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-xl shadow-2xl dark:shadow-none">
                <img
                  src="/images/scott-profile.jpg"
                  alt="Scott Mitting - AI Software Developer"
                  className="w-full h-auto object-cover rounded-xl"
                />
                
                {/* Decorative overlay elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/40 to-transparent mix-blend-multiply dark:mix-blend-overlay"></div>
                
                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center">
                      <p className="text-white text-2xl font-bold">50+</p>
                      <p className="text-gray-300 text-xs">Projects</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white text-2xl font-bold">30+</p>
                      <p className="text-gray-300 text-xs">Clients</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white text-2xl font-bold">15+</p>
                      <p className="text-gray-300 text-xs">Years Exp.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 md:bottom-12 md:right-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-xs transform rotate-2 hover:rotate-0 transition-transform">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-teal-500 dark:text-teal-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-medium text-sm">Latest AI Solutions</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">Custom AI tools that solve real business problems for clients just like you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
