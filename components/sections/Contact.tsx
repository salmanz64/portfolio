'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin } from 'lucide-react'
import Section from '@/components/Section'
import Button from '@/components/Button'
import personalData from '@/data/personal.json'

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's connect and discuss opportunities">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background-secondary rounded-2xl p-8 md:p-12 border border-muted-blue"
        >
          <p className="text-muted-gray text-lg mb-8 text-center leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a
              href={`mailto:${personalData.email}`}
              className="flex items-center gap-3 px-6 py-3 bg-muted-blue/30 rounded-xl border border-electric-blue/20 hover:border-electric-blue hover:bg-electric-blue/10 transition-all duration-300 group"
            >
              <Mail className="text-electric-blue" size={20} />
              <span className="text-white font-medium group-hover:text-electric-blue-light transition-colors duration-300 text-sm sm:text-base">
                {personalData.email}
              </span>
            </a>

            <div className="flex items-center gap-3 px-6 py-3 bg-muted-blue/30 rounded-xl border border-electric-blue/20">
              <MapPin className="text-electric-blue" size={20} />
              <span className="text-white font-medium text-sm sm:text-base">{personalData.location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-6">
            <p className="text-muted-gray">Connect with me</p>
            <div className="flex items-center gap-6">
              <motion.a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-muted-blue/30 rounded-xl border border-electric-blue/20 hover:border-electric-blue hover:bg-electric-blue/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="text-electric-blue" size={28} />
              </motion.a>
              <motion.a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-muted-blue/30 rounded-xl border border-electric-blue/20 hover:border-electric-blue hover:bg-electric-blue/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-electric-blue" size={28} />
              </motion.a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 text-center">
            <Button
              variant="primary"
              icon={Mail}
              onClick={() => {
                window.location.href = `mailto:${personalData.email}`
              }}
            >
              Send Email
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

