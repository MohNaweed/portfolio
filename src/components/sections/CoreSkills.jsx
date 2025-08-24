import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Skills() {
  const technicalSkills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL',
    'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'REST APIs',
    'Git', 'CI/CD', 'Microservices', 'System Design'
  ];

  const leadershipSkills = [
    'Team Leadership', 'Project Management', 'Agile/Scrum', 'Strategic Planning',
    'Cross-functional Collaboration', 'Mentoring', 'Stakeholder Management',
    'Product Strategy', 'Technical Architecture', 'Process Optimization'
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-cyan-600 dark:text-cyan-400">
            Technical Skills
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {technicalSkills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-cyan-600 dark:text-cyan-400">
            Leadership & Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {leadershipSkills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}