import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Project, ProjectCategory } from "@/types";
import portfolioData from "@/data/projects.json";

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = activeFilter === "all" 
    ? portfolioData.projects
    : portfolioData.projects.filter(project => project.category === activeFilter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const handleFilterChange = (filter: ProjectCategory | "all") => {
    setActiveFilter(filter);
    setVisibleProjects(6); // Reset visible count when changing filters
  };

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold font-heading mb-4 text-gray-900 dark:text-white">Portfolio Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Innovative solutions I've built for businesses just like yours
          </p>
        </div>
        
        {/* Portfolio filter */}
        <div className="flex flex-wrap justify-center mb-10">
          <Button 
            variant={activeFilter === "all" ? "default" : "outline"} 
            className={`m-2 px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === "all" ? "bg-primary-600 text-white" : "text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800"
            }`}
            onClick={() => handleFilterChange("all")}
          >
            All Projects
          </Button>
          <Button 
            variant={activeFilter === "ai" ? "default" : "outline"} 
            className={`m-2 px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === "ai" ? "bg-primary-600 text-white" : "text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800"
            }`}
            onClick={() => handleFilterChange("ai")}
          >
            AI Solutions
          </Button>
          <Button 
            variant={activeFilter === "web" ? "default" : "outline"} 
            className={`m-2 px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === "web" ? "bg-primary-600 text-white" : "text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800"
            }`}
            onClick={() => handleFilterChange("web")}
          >
            Web Applications
          </Button>
          <Button 
            variant={activeFilter === "automation" ? "default" : "outline"} 
            className={`m-2 px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === "automation" ? "bg-primary-600 text-white" : "text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800"
            }`}
            onClick={() => handleFilterChange("automation")}
          >
            Automation
          </Button>
        </div>
        
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project: Project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="outline" 
                    className={`
                      ${project.category === "ai" ? "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200" : ""} 
                      ${project.category === "web" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : ""}
                      ${project.category === "automation" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : ""}
                    `}
                  >
                    {project.categoryLabel}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.link && (
                  <Button variant="link" className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:text-primary-700 dark:hover:text-primary-300 p-0" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* View more button */}
        {filteredProjects.length > visibleProjects && (
          <div className="mt-12 text-center">
            <Button 
              variant="outline" 
              onClick={handleLoadMore}
              className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              View More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
