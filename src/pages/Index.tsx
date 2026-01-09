import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { personalInfo } from "@/data/portfolioData";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{personalInfo.name} | {personalInfo.title}</title>
        <meta
          name="description"
          content={`${personalInfo.name} - ${personalInfo.title}. ${personalInfo.summary}`}
        />
        <meta name="keywords" content="computer engineer, web developer, react developer, portfolio, software engineer" />
        <meta property="og:title" content={`${personalInfo.name} | ${personalInfo.title}`} />
        <meta property="og:description" content={personalInfo.summary} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${personalInfo.name} | ${personalInfo.title}`} />
        <meta name="twitter:description" content={personalInfo.summary} />
        <link rel="canonical" href="https://alexjohnson.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Education />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
