
import React from 'react';
import { Languages as LanguagesIcon } from 'lucide-react';
import { languages } from '@/data/resumeData';

const Languages = () => {
  return (
    <div>
      <h2 className="section-title"><span>Languages</span></h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {languages.map((lang, index) => (
          <div key={index} className="bg-card p-6 rounded-lg shadow-md border flex flex-col items-center justify-center">
            <LanguagesIcon className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg">{lang.language}</h3>
            <p className="text-sm text-muted-foreground">{lang.proficiency}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
