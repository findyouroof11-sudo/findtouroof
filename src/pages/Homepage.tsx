import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Shield, DollarSign, CheckCircle, ArrowRight, Play } from 'lucide-react';
import GlassButton from '../components/GlassButton';
import PropertyCard from '../components/PropertyCard';
import TestimonialCard from '../components/TestimonialCard';

const Homepage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('rent');

  const highlights = [
    {
      icon: DollarSign,
      title: 'ZERO BROKERAGE',
      description: 'No hidden fees or commission charges'
    },
    {
      icon: Shield,
      title: 'DEPOSIT ASSISTANCE',
      description: 'Get loans for security deposits'
    },
    {
      icon: CheckCircle,
      title: 'VERIFIED PROPERTIES',
      description: 'Every listing is location-verified'
    }
  ];

  const featuredProperties = [
    {
      id: 1,
      title: '2BHK Modern Apartment',
      location: 'Koramangala, Bangalore',
      price: 25000,
      type: 'rent',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      amenities: ['Furnished', 'Parking', 'Gym']
    },
    {
      id: 2,
      title: '3BHK Luxury Villa',
      location: 'Whitefield, Bangalore',
      price: 45000,
      type: 'rent',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      amenities: ['Semi-Furnished', 'Garden', 'Security']
    },
    {
      id: 3,
      title: '1BHK Cozy Studio',
      location: 'Indiranagar, Bangalore',
      price: 18000,
      type: 'rent',
      image: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg',
      amenities: ['Furnished', 'Metro nearby', 'Pet-friendly']
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      content: 'Found my dream apartment in just 2 days! Zero brokerage made it so affordable.',
      rating: 5
    },
    {
      name: 'Raj Patel',
      role: 'Property Owner',
      content: 'Listing my property was seamless. Great platform for reaching genuine tenants.',
      rating: 5
    },
    {
      name: 'Ananya Singh',
      role: 'Marketing Manager',
      content: 'The deposit assistance loan was a game-changer. Moved in without stress!',
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="absolute inset-0 bg-lime-400/5"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-lime-400">ZERO BROKERAGE.</span><br />
            <span className="text-white">HASSLE-FREE HOMES.</span><br />
            <span className="text-magenta-400 text-3xl md:text-5xl lg:text-6xl">
              YOUR MOVE-IN, MADE SIMPLE.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col md:flex-row gap-6 justify-center mb-12"
          >
            <Link to="/signup/seeker">
              <GlassButton size="lg" className="w-full md:w-auto">
                FOR RENT SEEKERS
              </GlassButton>
            </Link>
            <Link to="/signup/owner">
              <GlassButton size="lg" variant="secondary" className="w-full md:w-auto">
                FOR PROPERTY OWNERS
              </GlassButton>
            </Link>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-effect backdrop-blur-xl bg-white/10 p-6 rounded-2xl border border-white/20">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex bg-white/10 rounded-lg p-1">
                  {['rent', 'lease', 'sale'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setSearchType(type)}
                      className={`px-6 py-2 rounded-md font-semibold text-sm transition-all ${
                        searchType === type
                          ? 'bg-lime-400 text-black'
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      {type.toUpperCase()}
                    </button>
                  ))}
                </div>
                <div className="flex-1 flex">
                  <input
                    type="text"
                    placeholder="Enter location, landmark, or area..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-white/10 border border-white/20 rounded-l-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-lime-400"
                  />
                  <Link to="/rent">
                    <GlassButton className="rounded-l-none border-l-0">
                      <Search size={20} />
                    </GlassButton>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="glass-effect backdrop-blur-md bg-white/10 dark:bg-gray-800/20 p-8 rounded-2xl border border-white/20 hover:border-lime-400/50 transition-all duration-300 hover:scale-105">
                  <Icon className="h-16 w-16 text-lime-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              FEATURED <span className="text-lime-400">PROPERTIES</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Handpicked homes ready for your next move
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/rent">
              <GlassButton size="lg">
                VIEW ALL PROPERTIES <ArrowRight className="ml-2 h-5 w-5" />
              </GlassButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              REAL <span className="text-magenta-400">STORIES</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              From our community of happy movers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Quiz CTA */}
      <section className="py-20 bg-gradient-to-r from-lime-400 to-green-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              CHECK YOUR DEPOSIT LOAN ELIGIBILITY
            </h2>
            <p className="text-xl text-black/80 mb-8">
              Take our 2-minute quiz to see if you qualify for deposit assistance
            </p>
            <GlassButton variant="outline" size="lg" className="bg-black/10 text-black border-black/30 hover:bg-black/20">
              START AFFORDABILITY QUIZ <ArrowRight className="ml-2 h-5 w-5" />
            </GlassButton>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Making India Easy to Move-In
            </h3>
            <p className="text-gray-400 mb-8">
              Join thousands who've found their perfect home with zero hassle
            </p>
            <div className="flex justify-center space-x-8">
              <Link to="/about" className="text-gray-400 hover:text-lime-400 transition-colors">
                About Us
              </Link>
              <Link to="/rent" className="text-gray-400 hover:text-lime-400 transition-colors">
                Find Homes
              </Link>
              <Link to="/signup/owner" className="text-gray-400 hover:text-lime-400 transition-colors">
                List Property
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;