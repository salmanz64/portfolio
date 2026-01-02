import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  id: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
}: SectionProps) {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            {title && (
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-gradient">{title}</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-muted-gray text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}

