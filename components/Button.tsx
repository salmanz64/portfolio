import { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

type MotionButtonProps = Omit<HTMLMotionProps<'button'>, 'onDrag' | 'onDragStart' | 'onDragEnd'>
type ButtonProps = MotionButtonProps & {
  variant?: 'primary' | 'secondary' | 'outline'
  icon?: LucideIcon
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  icon: Icon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 justify-center disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-electric-blue text-white hover:bg-electric-blue-dark shadow-glow hover:shadow-glow-hover',
    secondary: 'bg-electric-blue-light text-white hover:bg-electric-blue shadow-glow hover:shadow-glow-hover',
    outline: 'border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon size={20} />}
      {children}
    </motion.button>
  )
}

