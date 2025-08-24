
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { achievements } from '@/data/resumeData';

function AnimatedNumber({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: n },
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.span>{number.to(val => Math.floor(val))}</animated.span>;
}

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref}>
      <h2 className="section-title"><span>Key Metrics</span></h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {achievements.metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-card p-6 rounded-lg shadow-md border"
          >
            <div className="text-4xl font-bold text-primary mb-2">
              {isInView && <AnimatedNumber n={metric.value} />}{metric.suffix}
            </div>
            <p className="text-muted-foreground">{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
