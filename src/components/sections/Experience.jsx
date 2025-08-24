
import React from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';
import { experience } from '@/data/resumeData';

const Experience = () => {
  return (
    <div>
      <h2 className="section-title"><span>Professional Experience</span></h2>
      <div className="relative max-w-4xl mx-auto border-l-2 border-primary/20 pl-8">
        {experience.map((job, index) => (
          <div key={index} className="mb-12 relative">
            <div className="absolute -left-[42px] top-1 bg-primary text-primary-foreground p-2 rounded-full">
              <Briefcase className="w-6 h-6" />
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md border">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{job.title}</h3>
                <span className="text-sm text-muted-foreground sm:mt-1">{job.period}</span>
              </div>
              <p className="text-lg font-semibold text-primary mb-4">{job.company}</p>
              <ul className="space-y-3">
                {job.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
