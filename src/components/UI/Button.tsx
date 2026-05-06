import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-slate-deep text-white hover:bg-slate-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-gold text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-slate-deep text-slate-deep hover:bg-slate-deep hover:text-white',
  };

  return (
    <motion.button
      type={type}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
