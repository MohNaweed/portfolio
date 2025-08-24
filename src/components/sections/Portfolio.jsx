
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { portfolio } from '@/data/resumeData';

const PortfolioCarousel = ({ highlights }) => {
  const [index, setIndex] = useState(0);

  const paginate = (newDirection) => {
    setIndex((prevIndex) => (prevIndex + newDirection + highlights.length) % highlights.length);
  };
  
  const { toast } = useToast();

  return (
    <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-lg shadow-xl mb-12 border">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.5 } }}
        >
          <img 
            className="w-full h-full object-cover"
            alt={highlights[index].title}
           src="https://images.unsplash.com/photo-1702995598997-3f9ab7c2a149" />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8">
            <h3 className="text-3xl font-bold text-white mb-2">{highlights[index].title}</h3>
            <p className="text-white/80 mb-4">{highlights[index].description}</p>
            <Button
              variant="secondary"
              size="sm"
              className="w-fit"
              onClick={() => toast({ title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀" })}
            >
              <ExternalLink className="w-4 h-4 mr-2" /> View Highlight
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
        <Button size="icon" variant="secondary" className="rounded-full" onClick={() => paginate(-1)}>
          <ArrowLeft />
        </Button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
        <Button size="icon" variant="secondary" className="rounded-full" onClick={() => paginate(1)}>
          <ArrowRight />
        </Button>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {highlights.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-white' : 'bg-white/50 hover:bg-white'}`}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const { toast } = useToast();
  return (
    <motion.div
      className="bg-card rounded-lg overflow-hidden shadow-md border group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="overflow-hidden h-48">
        <img 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          alt={project.title}
         src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => toast({ title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀" })}
        >
          <ExternalLink className="w-4 h-4 mr-2" /> View Project
        </Button>
      </div>
    </motion.div>
  );
};


const Portfolio = () => {
  return (
    <div>
      <h2 className="section-title"><span>Portfolio</span></h2>
      <PortfolioCarousel highlights={portfolio.highlights} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
