import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface GlassButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
}) => {
  const baseClasses = `
    relative overflow-hidden font-bold tracking-wide transition-all duration-300
    backdrop-blur-md border border-white/20 rounded-lg
    hover:scale-105 hover:shadow-lg hover:shadow-lime-400/25
    active:scale-95 focus:outline-none focus:ring-2 focus:ring-lime-400/50
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
  `;

  const variants = {
    primary: `
      bg-lime-400/90 text-black hover:bg-lime-400 hover:brightness-110
      shadow-lg shadow-lime-400/30
    `,
    secondary: `
      bg-magenta-500/20 text-magenta-400 hover:bg-magenta-500/30
      border-magenta-400/30 hover:border-magenta-400/50
    `,
    outline: `
      bg-white/10 text-gray-900 dark:text-white hover:bg-white/20
      border-white/30 hover:border-white/50
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <Loader2 className="animate-spin h-4 w-4 mr-2" />
          Loading...
        </div>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default GlassButton;