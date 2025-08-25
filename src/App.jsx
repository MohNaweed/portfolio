
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { useTheme } from '@/hooks/useTheme';
import { useScrollspy } from '@/hooks/useScrollspy';

import { personalInfo, sections } from '@/data/resumeData';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import Hero from '@/components/sections/Hero';
import Summary from '@/components/sections/Summary';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Portfolio from '@/components/sections/Portfolio';
import SkillStories from '@/components/sections/SkillStories';
import Achievements from '@/components/sections/Achievements';
import Education from '@/components/sections/Education';
import Certifications from '@/components/sections/Certifications';
import Languages from '@/components/sections/Languages';
import Faqs from '@/components/sections/Faqs';
import Contact from '@/components/sections/Contact';

const SectionWrapper = ({ id, children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      {children}
    </motion.section>
  );
};

function App() {
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();
  const [copiedField, setCopiedField] = useState('');
  
  const sectionIds = sections.map(s => s.id);
  const activeSection = useScrollspy(sectionIds, {
    rootMargin: "-100px 0px -40%",
  });

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast({
        title: "Copied!",
        description: `${field} copied to clipboard`,
      });
      setTimeout(() => setCopiedField(''), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Unable to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>{personalInfo.name} - {personalInfo.title}</title>
        <meta name="description" content={personalInfo.summary} />
        <meta property="og:title" content={`${personalInfo.name} - ${personalInfo.title}`} />
        <meta property="og:description" content={personalInfo.summary} />
        <meta property="og:type" content="profile" />
        <meta name="keywords" content="Software Engineer, CEO, Technology Strategist, Full Stack Developer, Afghanistan, Digital Transformation, Fintech, E-commerce, Blockchain" />
        <meta name="author" content={personalInfo.name} />
      </Helmet>
      
      <script type="application/ld+json" className="schema-markup">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": personalInfo.name,
          "jobTitle": personalInfo.title,
          "email": personalInfo.email,
          "telephone": personalInfo.phone,
          "url": `https://${personalInfo.website}`,
          "sameAs": [personalInfo.linkedinUrl],
          "knowsAbout": ["Software Engineering", "Technology Strategy", "Digital Transformation", "Full Stack Development", "Cloud Architecture", "Fintech", "E-commerce", "Blockchain"]
        })}
      </script>

      <div className="min-h-screen bg-background text-foreground">
        <Header 
          navItems={sections} 
          activeSection={activeSection} 
          theme={theme} 
          toggleTheme={toggleTheme} 
        />
        
        <main className="container mx-auto px-4 max-w-6xl">
          <SectionWrapper id="hero"><Hero /></SectionWrapper>
          <SectionWrapper id="summary"><Summary /></SectionWrapper>
          <SectionWrapper id="skills"><Skills /></SectionWrapper>
          {/* <SectionWrapper id="core-skills"><CoreSkills /></SectionWrapper> */}
          <SectionWrapper id="experience"><Experience /></SectionWrapper>
          <SectionWrapper id="portfolio"><Portfolio /></SectionWrapper>
          <SectionWrapper id="skill-stories"><SkillStories /></SectionWrapper>
          <SectionWrapper id="achievements"><Achievements /></SectionWrapper>
          <SectionWrapper id="education"><Education /></SectionWrapper>
          <SectionWrapper id="certifications"><Certifications /></SectionWrapper>
          <SectionWrapper id="languages"><Languages /></SectionWrapper>
          {/* <SectionWrapper id="faqs"><Faqs /></SectionWrapper> */}
          <SectionWrapper id="contact"><Contact copyToClipboard={copyToClipboard} copiedField={copiedField} /></SectionWrapper>
        </main>
        
        <Footer />
        <BackToTop />
        <Toaster />
      </div>
    </>
  );
}

export default App;
