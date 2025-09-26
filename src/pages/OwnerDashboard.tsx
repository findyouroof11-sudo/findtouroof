import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Eye, MessageSquare, TrendingUp, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import GlassButton from '../components/GlassButton';

const OwnerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('properties');

  const properties = [
    {
      id: 1,
      title: '2BHK Modern Apartment',
      location: 'Koramangala, Bangalore',
      price: 25000,
      status: 'live',
      views: 234,
      inquiries: 12,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
    },
    {
      id: 2,
      title: '3BHK Luxury Villa',
      location: 'Whitefield, Bangalore',
      price: 45000,
      status: 'pending',
      views: 0,
      inquiries: 0,
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'live':
        return <CheckCircle className="h-5 w-5 text-green-400" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-400" />;
      default:
        return <AlertCircle className="h-5 w-5 text-red-400" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live':
        return 'VERIFIED & LIVE';
      case 'pending':
        return 'PENDING VERIFICATION';
      default:
        return 'ACTION REQUIRED';
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-br from-magenta-500/10 to-purple-500/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                PROPERTY <span className="text-magenta-400">DASHBOARD</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Manage your listings and track performance
              </p>
            </div>
            <GlassButton size="lg" variant="secondary">
              <Plus className="mr-2 h-5 w-5" />
              ADD NEW LISTING
            </GlassButton>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { label: 'Total Properties', value: '2', icon: TrendingUp, color: 'lime' },
              { label: 'Total Views', value: '234', icon: Eye, color: 'magenta' },
              { label: 'Inquiries', value: '12', icon: MessageSquare, color: 'blue' },
              { label: 'Response Rate', value: '95%', icon: CheckCircle, color: 'green' }
            ].map(({ label, value, icon: Icon, color }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect backdrop-blur-md bg-white/10 dark:bg-gray-800/20 p-6 rounded-2xl border border-white/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className={`h-8 w-8 text-${color}-400`} />
                  <span className={`text-3xl font-bold text-${color}-400`}>{value}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-semibold">{label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Property Listings */}
          <div className="glass-effect backdrop-blur-md bg-white/10 dark:bg-gray-800/20 rounded-2xl border border-white/20 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                MY PROPERTIES
              </h2>
              <div className="flex space-x-2">
                {['properties', 'analytics'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                      activeTab === tab
                        ? 'bg-magenta-400 text-white'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {tab.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {properties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect backdrop-blur-md bg-white/10 dark:bg-gray-700/20 rounded-xl border border-white/20 overflow-hidden hover:border-magenta-400/50 transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold ${
                        property.status === 'live' 
                          ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                      }`}>
                        {getStatusIcon(property.status)}
                        <span>{getStatusText(property.status)}</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-magenta-400">
                        ₹{property.price.toLocaleString()}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">/month</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Eye className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-lg font-bold text-gray-900 dark:text-white">
                            {property.views}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Views</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <MessageSquare className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-lg font-bold text-gray-900 dark:text-white">
                            {property.inquiries}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Inquiries</p>
                      </div>
                    </div>

                    {property.status === 'pending' && (
                      <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-3 mb-4">
                        <p className="text-yellow-400 text-sm">
                          Our team is verifying the property location. This usually takes a few hours.
                        </p>
                      </div>
                    )}

                    <div className="flex space-x-3">
                      <GlassButton variant="outline" className="flex-1 text-xs">
                        EDIT
                      </GlassButton>
                      <GlassButton variant="secondary" className="flex-1 text-xs">
                        VIEW
                      </GlassButton>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OwnerDashboard;