import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Globe, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo, hero } from '@/data/resumeData';
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % hero.headlines.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const contactChips = [{
    icon: <Phone className="w-4 h-4" />,
    text: personalInfo.phone,
    href: `tel:${personalInfo.phone}`
  }, {
    icon: <Mail className="w-4 h-4" />,
    text: personalInfo.email,
    href: `mailto:${personalInfo.email}`
  }, {
    icon: <Globe className="w-4 h-4" />,
    text: personalInfo.website,
    href: `https://${personalInfo.websiteUrl}`,
    target: '_blank'
  }, {
    icon: <Linkedin className="w-4 h-4" />,
    text: 'LinkedIn',
    href: personalInfo.linkedinUrl,
    target: '_blank'
  }];
  return <div className="min-h-[calc(100vh-180px)] flex items-center">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div className="flex justify-center" initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8
      }}>
          <div className="relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
            <img className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-card" alt="Replace with Naweed photo" src="https://horizons-cdn.hostinger.com/3adf10b4-9830-475e-873a-1704004f9a60/a57i9335-kCK65.jpg" />
          </div>
        </motion.div>
        
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
            {personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
            {personalInfo.title}
          </p>
          <div className="h-8 mb-6 relative overflow-hidden">
            <AnimatePresence>
              <motion.p key={currentSlide} className="text-lg text-muted-foreground absolute w-full text-center md:text-left" initial={{
              y: 20,
              opacity: 0
            }} animate={{
              y: 0,
              opacity: 1
            }} exit={{
              y: -20,
              opacity: 0
            }} transition={{
              duration: 0.5
            }}>
                {hero.headlines[currentSlide]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            {contactChips.map((chip, index) => <a key={index} href={chip.href} {...chip.target && {
            target: chip.target,
            rel: "noopener noreferrer"
          }} className="inline-flex items-center space-x-2 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full text-sm hover:bg-secondary/80 transition-colors">
                {chip.icon}
                <span>{chip.text}</span>
              </a>)}
          </div>

          <Button asChild size="lg">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </div>;
};
export default Hero;