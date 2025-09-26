import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Sliders, Calculator } from 'lucide-react';
import GlassButton from '../components/GlassButton';
import PropertyCard from '../components/PropertyCard';

const RentPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    bhk: '',
    furnishing: '',
    amenities: []
  });

  const properties = [
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
    },
    {
      id: 4,
      title: '2BHK IT Hub Apartment',
      location: 'Electronic City, Bangalore',
      price: 22000,
      type: 'rent',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      amenities: ['Furnished', 'IT Hub', 'Swimming Pool']
    },
    {
      id: 5,
      title: '3BHK Family Home',
      location: 'Jayanagar, Bangalore',
      price: 35000,
      type: 'rent',
      image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
      amenities: ['Semi-Furnished', 'Couple-Friendly', 'Kids Play Area']
    },
    {
      id: 6,
      title: '1BHK Compact Living',
      location: 'Marathahalli, Bangalore',
      price: 16000,
      type: 'rent',
      image: 'https://images.pexels.com/photos/2635041/pexels-photo-2635041.jpeg',
      amenities: ['Furnished', 'Balcony', 'Power Backup']
    }
  ];

  const amenityOptions = [
    'Furnished', 'Semi-Furnished', 'Parking', 'Gym', 'Swimming Pool',
    'Security', 'Power Backup', 'Balcony', 'Garden', 'Pet-friendly',
    'Couple-Friendly', 'IT Hub', 'Metro nearby'
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-400/10 to-green-500/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              FIND YOUR NEXT HOME, <span className="text-lime-400">STRESS-FREE</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Browse verified properties with zero brokerage
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Search and Filter Bar */}
      <div className="sticky top-16 z-40 glass-effect backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-b border-white/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 flex">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by location, landmark, or area..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-white/20 rounded-l-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-lime-400"
                />
              </div>
              <GlassButton className="rounded-l-none border-l-0">
                <Search size={20} />
              </GlassButton>
            </div>
            
            <GlassButton
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={20} className="mr-2" />
              FILTERS
            </GlassButton>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-6 p-6 glass-effect backdrop-blur-md bg-white/80 dark:bg-gray-800/80 rounded-2xl border border-white/20"
            >
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    BUDGET RANGE
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="flex-1 px-3 py-2 bg-white/50 dark:bg-gray-700/50 border border-white/20 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-lime-400"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="flex-1 px-3 py-2 bg-white/50 dark:bg-gray-700/50 border border-white/20 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-lime-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    BHK TYPE
                  </label>
                  <select className="w-full px-3 py-2 bg-white/50 dark:bg-gray-700/50 border border-white/20 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-lime-400">
                    <option value="">Any</option>
                    <option value="1">1 BHK</option>
                    <option value="2">2 BHK</option>
                    <option value="3">3 BHK</option>
                    <option value="4">4+ BHK</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    FURNISHING
                  </label>
                  <select className="w-full px-3 py-2 bg-white/50 dark:bg-gray-700/50 border border-white/20 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-lime-400">
                    <option value="">Any</option>
                    <option value="furnished">Furnished</option>
                    <option value="semi-furnished">Semi-Furnished</option>
                    <option value="unfurnished">Unfurnished</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    SPECIAL FILTERS
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-lime-400 focus:ring-lime-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Near IT Hubs</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-lime-400 focus:ring-lime-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Couple-Friendly</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-4">
                <GlassButton variant="outline" onClick={() => setShowFilters(false)}>
                  CLEAR ALL
                </GlassButton>
                <GlassButton onClick={() => setShowFilters(false)}>
                  APPLY FILTERS
                </GlassButton>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>

          {/* Load More */}
          <div className="text-center mt-12">
            <GlassButton size="lg">
              LOAD MORE PROPERTIES
            </GlassButton>
          </div>
        </div>
      </section>

      {/* Deposit Calculator */}
      <section className="py-20 bg-lime-400/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Calculator className="h-16 w-16 text-lime-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              DEPOSIT ASSISTANCE <span className="text-lime-400">CALCULATOR</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Calculate your loan eligibility for security deposits
            </p>
            <GlassButton size="lg">
              CALCULATE ELIGIBILITY
            </GlassButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RentPage;