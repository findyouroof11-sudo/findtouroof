import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Camera, Heart, Eye } from 'lucide-react';

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  type: string;
  image: string;
  amenities: string[];
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-effect backdrop-blur-md bg-white/10 dark:bg-gray-800/20 rounded-2xl border border-white/20 overflow-hidden group hover:border-lime-400/50 transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className="bg-lime-400 text-black px-3 py-1 rounded-full text-xs font-bold">
            {property.type.toUpperCase()}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/30 transition-colors">
            <Heart className="h-4 w-4 text-white" />
          </button>
          <button className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/30 transition-colors">
            <Camera className="h-4 w-4 text-white" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm flex items-center">
            <Eye className="h-3 w-3 mr-1" />
            360° Tour
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
        
        <div className="flex flex-wrap gap-2 mb-4">
          {property.amenities.map((amenity) => (
            <span
              key={amenity}
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-xs"
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-lime-400">₹{property.price.toLocaleString()}</span>
            <span className="text-gray-600 dark:text-gray-400 text-sm">/month</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-lime-400 text-black px-4 py-2 rounded-lg font-semibold text-sm hover:bg-lime-300 transition-colors"
          >
            VIEW DETAILS
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;