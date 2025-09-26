import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Shield, Award, ArrowRight } from 'lucide-react';
import GlassButton from '../components/GlassButton';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Arjun Mehta',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: 'Former real estate broker turned tech entrepreneur'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Product',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      bio: 'UX expert passionate about simplifying home search'
    },
    {
      name: 'Raj Patel',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg',
      bio: 'Full-stack developer building the future of PropTech'
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: '50K+',
      label: 'Happy Users',
      description: 'Trusted by thousands of families'
    },
    {
      icon: Shield,
      number: '10K+',
      label: 'Verified Properties',
      description: 'Every listing location-verified'
    },
    {
      icon: Heart,
      number: '₹100Cr+',
      label: 'Brokerage Saved',
      description: 'Money saved by our community'
    },
    {
      icon: Award,
      number: '98%',
      label: 'Satisfaction Rate',
      description: 'Customer satisfaction score'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 via-magenta-500/10 to-purple-500/10"></div>
        
        {/* Brutalist Design Elements */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-lime-400/5 rounded-none"
              style={{
                width: Math.random() * 200 + 100,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 45 - 22.5}deg)`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              MAKING INDIA <br />
              <span className="text-lime-400">EASY TO MOVE-IN</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to eliminate brokerage fees and make home-finding 
              a joyful, transparent experience for every Indian family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
                OUR <span className="text-magenta-400">STORY</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  It started with frustration. Our founder, Arjun, was charged ₹25,000 
                  in brokerage for a simple 1BHK apartment. That's when he realized 
                  millions of Indians were being overcharged for something that should be simple.
                </p>
                <p>
                  We built FindYouRoof to democratize real estate. No hidden fees. 
                  No inflated prices. Just honest, transparent home-finding that puts 
                  families first.
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Today, we've saved our community over ₹100 crores in unnecessary 
                  brokerage fees. But we're just getting started.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-effect backdrop-blur-md bg-white/10 dark:bg-gray-700/20 p-8 rounded-2xl border border-white/20">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="Team collaboration"
                  className="w-full h-80 object-cover rounded-lg mb-6"
                />
                <blockquote className="text-lg italic text-gray-700 dark:text-gray-300">
                  "Every family deserves a home without the burden of unnecessary fees. 
                  That's the future we're building, one listing at a time."
                </blockquote>
                <cite className="block mt-4 text-sm font-semibold text-magenta-400">
                  — Arjun Mehta, Founder
                </cite>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              BY THE <span className="text-lime-400">NUMBERS</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our impact on India's rental ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map(({ icon: Icon, number, label, description }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="glass-effect backdrop-blur-md bg-white/10 dark:bg-gray-800/20 p-8 rounded-2xl border border-white/20 hover:border-lime-400/50 transition-all duration-300 hover:scale-105">
                  <Icon className="h-16 w-16 text-lime-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                    {number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              MEET THE <span className="text-magenta-400">REBELS</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The team disrupting India's real estate industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="glass-effect backdrop-blur-md bg-white/10 dark:bg-gray-700/20 p-6 rounded-2xl border border-white/20 hover:border-magenta-400/50 transition-all duration-300 hover:scale-105">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-magenta-400 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lime-400 to-green-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              JOIN THE MOVEMENT
            </h2>
            <p className="text-xl text-black/80 mb-8">
              Be part of the revolution that's making home-finding fair for everyone
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <GlassButton 
                variant="outline" 
                size="lg" 
                className="bg-black/10 text-black border-black/30 hover:bg-black/20"
              >
                FIND YOUR HOME <ArrowRight className="ml-2 h-5 w-5" />
              </GlassButton>
              <GlassButton 
                variant="outline" 
                size="lg" 
                className="bg-black/10 text-black border-black/30 hover:bg-black/20"
              >
                LIST YOUR PROPERTY <ArrowRight className="ml-2 h-5 w-5" />
              </GlassButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;