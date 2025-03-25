import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { IdeasSection } from "@/components/sections/ideas-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { MediaSection } from "@/components/sections/media-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <IdeasSection />
        <ResumeSection />
        <MediaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
