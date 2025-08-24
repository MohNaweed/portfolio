
import React from 'react';
import { personalInfo } from '@/data/resumeData';

const Footer = () => {
  return (
    <footer className="bg-card border-t mt-16 print-hidden">
      <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p className="text-sm mt-2">{personalInfo.title}</p>
      </div>
    </footer>
  );
};

export default Footer;
