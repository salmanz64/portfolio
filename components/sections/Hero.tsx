'use client'

import { motion } from 'framer-motion'
import { Download, Eye } from 'lucide-react'
import Button from '@/components/Button'
import personalData from '@/data/personal.json'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] animate-gradient" />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-electric-blue-light text-lg sm:text-xl mb-4 font-medium"
          >
            Hi, I'm
          </motion.p>

          {/* Name with gradient */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-gradient bg-gradient-to-r from-electric-blue via-electric-blue-light to-electric-blue bg-clip-text text-transparent">
              {personalData.name}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-white"
          >
            {personalData.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-muted-gray text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {personalData.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              variant="primary"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              icon={Eye}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                const link = document.createElement('a')
                link.href = personalData.resumeUrl
                link.download = 'resume.pdf'
                link.click()
              }}
              icon={Download}
            >
              Download Resume
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

