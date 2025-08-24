
import React from 'react';
import { Code, Users, CheckCircle } from 'lucide-react';
import { skills } from '@/data/resumeData';

const SkillCategory = ({ title, icon, skillList, colorClass }) => (
  <div className="bg-card p-8 rounded-lg shadow-md border">
    <div className={`flex items-center mb-6 text-${colorClass}`}>
      {icon}
      <h3 className="text-2xl font-bold ml-3">{title}</h3>
    </div>
    <ul className="space-y-3">
      {skillList.map((skill, index) => (
        <li key={index} className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
          <span className="text-muted-foreground">{skill}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <div>
      <h2 className="section-title"><span>Core Competencies</span></h2>
      <div className="grid md:grid-cols-2 gap-8">
        <SkillCategory
          title="Technical Skills"
          icon={<Code className="w-8 h-8" />}
          skillList={skills.technical}
          colorClass="primary"
        />
        <SkillCategory
          title="Leadership & Management"
          icon={<Users className="w-8 h-8" />}
          skillList={skills.management}
          colorClass="cyan-500"
        />
      </div>
    </div>
  );
};

export default Skills;
