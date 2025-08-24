
import React from 'react';
import { Award } from 'lucide-react';
import { certifications } from '@/data/resumeData';

const Certifications = () => {
  return (
    <div>
      <h2 className="section-title"><span>Certifications & Courses</span></h2>
      <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-md border">
        <ul className="space-y-4">
          {certifications.map((cert, index) => (
            <li key={index} className="flex items-start">
              <Award className="w-5 h-5 text-primary mt-1 mr-4 flex-shrink-0" />
              <div>
                <p className="font-semibold">{cert.title}</p>
                <p className="text-sm text-muted-foreground">{cert.source}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Certifications;
