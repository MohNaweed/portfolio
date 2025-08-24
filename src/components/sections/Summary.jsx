
import React from 'react';
import { personalInfo } from '@/data/resumeData';

const Summary = () => {
  return (
    <div className="bg-secondary dark:bg-card/50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title"><span>Professional Summary</span></h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {personalInfo.summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
