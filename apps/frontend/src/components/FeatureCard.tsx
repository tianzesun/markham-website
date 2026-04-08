import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Globe, Server } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  iconType: 'shield' | 'lock' | 'globe' | 'server';
  index: number;
}

const iconMap = {
  lock: <Lock className="text-primary-500 dark:text-primary-400 w-5 h-5" />,
  globe: <Globe className="text-primary-500 dark:text-primary-400 w-5 h-5" />,
  shield: <Shield className="text-primary-500 dark:text-primary-400 w-5 h-5" />,
  server: <Server className="text-primary-500 dark:text-primary-400 w-5 h-5" />,
};

export const FeatureCard: React.FC<FeatureProps> = ({ title, description, iconType, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ 
        y: -6,
        transition: { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }
      }}
      className="p-6 rounded-2xl glass-card card-hover group"
    >
      <motion.div 
        className="mb-4 p-3 w-fit rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 group-hover:from-primary-100 group-hover:to-primary-200 transition-all duration-300"
        whileHover={{ 
          scale: 1.05,
          rotate: 3,
          transition: { duration: 0.3 }
        }}
      >
        {iconMap[iconType]}
      </motion.div>
      <h3 className="font-semibold text-slate-900 text-lg mb-2 group-hover:text-primary-700 transition-colors duration-300">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};
