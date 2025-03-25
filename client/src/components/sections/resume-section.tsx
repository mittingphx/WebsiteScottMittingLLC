import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Globe, Link2, Info, Zap, GraduationCap, Briefcase } from "lucide-react";
import resumeData from "@/data/resume.json";

export function ResumeSection() {
  const generatePDF = () => {
    // This would generate a PDF in a real implementation
    alert("PDF generation would happen here in a real implementation");
  };

  return (
    <section id="resume" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold font-heading mb-4 text-gray-900 dark:text-white">Resume</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Professional experience and qualifications
          </p>
        </div>
        
        {/* Resume content */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Resume header */}
          <div className="p-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{resumeData.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1">{resumeData.title}</p>
              </div>
              
              <div className="mt-4 md:mt-0">
                <Button variant="outline" onClick={generatePDF} className="inline-flex items-center">
                  <Download className="h-5 w-5 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
          
          {/* Resume sections */}
          <div className="p-8">
            {/* Contact info */}
            <div className="mb-8">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary-600 dark:text-primary-400" />
                Contact Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">{resumeData.contact.email}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">{resumeData.contact.location}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">{resumeData.contact.website}</span>
                </div>
                <div className="flex items-center">
                  <Link2 className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
                  <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">
                    {resumeData.contact.github.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>
            
            {/* Summary */}
            <div className="mb-8">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
                <Info className="h-5 w-5 mr-2 text-primary-600 dark:text-primary-400" />
                Summary
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {resumeData.summary}
              </p>
            </div>
            
            {/* Skills */}
            <div className="mb-8">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
                <Zap className="h-5 w-5 mr-2 text-primary-600 dark:text-primary-400" />
                Skills
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-3">Technical Skills</h5>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                    {resumeData.skills.technical.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-3">Business Skills</h5>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                    {resumeData.skills.business.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Education */}
            <div className="mb-8">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-primary-600 dark:text-primary-400" />
                Education
              </h4>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white">{resumeData.education.institution}</h5>
                    <p className="text-gray-600 dark:text-gray-300">{resumeData.education.degree}</p>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                    <p>GPA: {resumeData.education.gpa}</p>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{resumeData.education.details}</p>
                </div>
              </div>
            </div>
            
            {/* Professional Experience */}
            <div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-primary-600 dark:text-primary-400" />
                Professional Experience
              </h4>
              <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">{exp.company}</h5>
                        <p className="text-gray-600 dark:text-gray-300">{exp.position}</p>
                      </div>
                      <div className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                        <p>{exp.period}</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
