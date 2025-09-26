import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-effect backdrop-blur-md bg-white/10 dark:bg-gray-800/20 rounded-2xl border border-white/20 p-6 hover:border-magenta-400/50 transition-all duration-300"
    >
      <Quote className="h-8 w-8 text-magenta-400 mb-4" />
      
      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        "{testimonial.content}"
      </p>

      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
        ))}
      </div>

      <div>
        <h4 className="font-bold text-gray-900 dark:text-white">
          {testimonial.name}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {testimonial.role}
        </p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;