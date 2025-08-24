
import React from 'react';
import { Lightbulb } from 'lucide-react';
import { skillStories } from '@/data/resumeData';

const SkillStories = () => {
  return (
    <div className="bg-secondary dark:bg-card/50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="section-title"><span>Skill Stories</span></h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-8">
          {skillStories.map((story, index) => (
            <div key={index} className="flex items-start space-x-4 bg-card p-6 rounded-lg shadow-md border">
              <div className="bg-primary/10 p-3 rounded-full mt-1">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <p className="text-muted-foreground">{story}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillStories;
