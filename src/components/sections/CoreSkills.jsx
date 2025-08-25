import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Skills() {
  const technicalSkills = [
    "JavaScript, Python, PHP, Dart, Java",
  "Postgres, MySQL, MongoDB, Redis",
  "Laravel, Django, NodeJS",
  "React Native, Flutter, Unity",
  "RestAPI, GraphQL",
  "React JS, Next JS, VueJS, jQuery",
  "Redux, Redux-toolkit, Zustand, Tanstack Query, SWR",
  "Wordpress, Strapi, Shopify",
  "Sass, Ant Design, Material UI, TailwindCss, Bootstrap",
  "Git - Github, Docker - Dockerhub, Kubernetes, Jenkins",
  "Apache2, Nginx web Services",
  "Adobe (XD, Photoshop, Illustrator), Figma",
  "Firebase, AWS (S3, CloudFront, Cloud Formation, IAM, SES, EC2, Route 53, ...)",
  "Power Apps, Power Automate, Power BI, Dataverse, Microsoft Flow, SharePoint Integration"
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