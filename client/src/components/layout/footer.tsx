import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="text-primary-600 dark:text-primary-400 h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.9999 1.99902C6.47538 1.99902 1.99988 6.47452 1.99988 11.999C1.99988 17.5235 6.47538 21.999 11.9999 21.999C17.5244 21.999 21.9999 17.5235 21.9999 11.999C21.9999 6.47452 17.5244 1.99902 11.9999 1.99902ZM16.5999 8.99902H14.9999C14.8979 8.3962 14.7514 7.8258 14.5599 7.29902C15.1155 7.40002 15.6447 7.5665 16.1399 7.79902C16.3445 8.17592 16.4941 8.57972 16.5999 8.99902ZM11.9999 3.99902C12.4555 3.99902 13.1359 4.72762 13.6199 5.99902H10.3799C10.8639 4.72762 11.5441 3.99902 11.9999 3.99902ZM7.85988 7.79902C8.35508 7.5665 8.88428 7.4 9.43988 7.29902C9.24838 7.8258 9.10188 8.3962 8.99988 8.99902H7.39988C7.50568 8.57972 7.65528 8.17592 7.85988 7.79902ZM7.39988 14.999H8.99988C9.10188 15.6018 9.24838 16.1722 9.43988 16.699C8.88428 16.598 8.35508 16.4315 7.85988 16.199C7.65528 15.8221 7.50568 15.4183 7.39988 14.999ZM11.9999 19.999C11.5441 19.999 10.8639 19.2704 10.3799 17.999H13.6199C13.1359 19.2704 12.4555 19.999 11.9999 19.999ZM14.5599 16.699C14.7514 16.1722 14.8979 15.6018 14.9999 14.999H16.5999C16.4941 15.4183 16.3445 15.8221 16.1399 16.199C15.6447 16.4315 15.1155 16.598 14.5599 16.699ZM17.0599 12.999H14.9999C15.0363 12.6659 15.0555 12.33 15.0599 11.999C15.0555 11.668 15.0363 11.3321 14.9999 10.999H17.0599C17.1361 11.3264 17.1786 11.6644 17.1786 11.999C17.1786 12.3336 17.1361 12.6716 17.0599 12.999ZM9.00488 11.999C9.00348 11.668 9.02428 11.3322 9.06188 10.999H14.9379C14.9755 11.3322 14.9963 11.668 14.9949 11.999C14.9963 12.33 14.9755 12.6658 14.9379 12.999H9.06188C9.02428 12.6658 9.00348 12.33 9.00488 11.999ZM6.93988 10.999H8.99988C8.96348 11.3321 8.94428 11.668 8.94988 11.999C8.94428 12.33 8.96348 12.6659 8.99988 12.999H6.93988C6.86368 12.6716 6.82118 12.3336 6.82118 11.999C6.82118 11.6644 6.86368 11.3264 6.93988 10.999Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-gray-900 dark:text-white">Scott Mitting <span className="text-xs font-normal text-gray-600 dark:text-gray-400">LLC</span></h3>
              </div>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
              Empowering small businesses with AI-powered solutions and automation that were once only available to large corporations.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://github.com/mittingphx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/scottmitting" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#portfolio" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm">AI Development</a></li>
              <li><a href="#portfolio" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm">Custom Software</a></li>
              <li><a href="#portfolio" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm">Business Automation</a></li>
              <li><a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm">Technology Consulting</a></li>
              <li><a href="#ideas" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm">LLM Integration</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#portfolio" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm">Case Studies</a></li>
              <li><a href="#resume" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm">Resume</a></li>
              <li><a href="#media" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm">Media</a></li>
              <li><a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm">Contact</a></li>
              <li><a href="#ideas" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm">Upcoming Projects</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} Scott Mitting LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
