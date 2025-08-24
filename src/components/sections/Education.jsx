
import React from 'react';
import { GraduationCap } from 'lucide-react';
import { education } from '@/data/resumeData';

const Education = () => {
  return (
    <div>
      <h2 className="section-title"><span>Education</span></h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="flex items-start space-x-4 bg-card p-6 rounded-lg shadow-md border">
            <div className="bg-primary/10 p-3 rounded-full mt-1">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-muted-foreground">{edu.institution}</p>
              <p className="text-sm text-primary font-medium mt-1">{edu.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
