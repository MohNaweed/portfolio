
import React, { useState } from 'react';
import { Phone, Mail, Globe, Linkedin, Copy, Check, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { personalInfo } from '@/data/resumeData';

const Contact = ({ copyToClipboard, copiedField }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "This feature isn't implemented yet. ",
      description: "Your message has not been sent.",
    });
    setFormData({ name: '', email: '', message: '' });
  };
  
  const contactChips = [
    {
      icon: <Phone className="w-4 h-4" />,
      text: personalInfo.phone,
      copyValue: personalInfo.phone,
      label: 'Phone'
    },
    {
      icon: <Mail className="w-4 h-4" />,
      text: personalInfo.email,
      copyValue: personalInfo.email,
      label: 'Email'
    },
  ];

  return (
    <div>
      <h2 className="section-title"><span>Contact Me</span></h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground">
              I'm open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out using the form or contact details provided.
            </p>
          </div>
          <div className="space-y-4">
            {contactChips.map(chip => (
              <div key={chip.label} className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-full text-primary">{chip.icon}</div>
                <span className="text-muted-foreground">{chip.text}</span>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => copyToClipboard(chip.copyValue, chip.label)}>
                  {copiedField === chip.label ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            ))}
            <div className="flex items-center space-x-3">
              <a href={`https://${personalInfo.websiteUrl}`} target="_blank" rel="noopener noreferrer" className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary/20 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-md border">
          <Input 
            name="name" 
            type="text" 
            placeholder="Your Name" 
            required 
            value={formData.name}
            onChange={handleChange}
            className="bg-background"
          />
          <Input 
            name="email" 
            type="email" 
            placeholder="Your Email" 
            required 
            value={formData.email}
            onChange={handleChange}
            className="bg-background"
          />
          <Textarea 
            name="message" 
            placeholder="Your Message" 
            rows={5} 
            required
            value={formData.message}
            onChange={handleChange}
            className="bg-background"
          />
          <Button type="submit" className="w-full">
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
