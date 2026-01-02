'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, MapPin } from 'lucide-react'
import Section from '@/components/Section'
import personalData from '@/data/personal.json'
import skillsData from '@/data/skills.json'
import educationData from '@/data/education.json'
import achievementsData from '@/data/achievements.json'
import { Skill, Education, Achievement } from '@/types'

// Group skills by category
const groupedSkills = skillsData.reduce((acc, skill: Skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = []
  }
  acc[skill.category].push(skill)
  return acc
}, {} as Record<string, Skill[]>)

const categories = ['Frontend', 'Backend', 'Mobile', 'Databases', 'Tools']
const education = educationData as Education[]
const achievements = achievementsData as Achievement[]

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="Get to know me better">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Bio, Education, Achievements */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Bio */}
          <div className="bg-background-secondary rounded-2xl p-8 border border-muted-blue">
            <h3 className="text-2xl font-bold mb-4 text-white">Bio</h3>
            <p className="text-muted-gray leading-relaxed text-lg">
              {personalData.bio}
            </p>
          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-background-secondary rounded-2xl p-6 border border-muted-blue"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-electric-blue/20 rounded-lg">
                <MapPin className="text-electric-blue" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Location</h3>
            </div>
            <p className="text-muted-gray text-base ml-11">{personalData.location}</p>
          </motion.div>

          {/* Education */}
          {education.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background-secondary rounded-2xl p-6 border border-muted-blue"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-electric-blue/20 rounded-lg">
                  <GraduationCap className="text-electric-blue" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-electric-blue/30 pl-4">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-electric-blue-light text-sm mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-muted-gray text-sm mb-1">{edu.period}</p>
                    {edu.gpa && (
                      <p className="text-muted-gray text-sm">GPA: {edu.gpa}</p>
                    )}
                    {edu.description && (
                      <p className="text-muted-gray text-sm mt-2">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Achievements */}
          {achievements.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background-secondary rounded-2xl p-6 border border-muted-blue"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-electric-blue/20 rounded-lg">
                  <Award className="text-electric-blue" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Achievements</h3>
              </div>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-electric-blue mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">
                        {achievement.title}
                      </h4>
                      {achievement.description && (
                        <p className="text-muted-gray text-sm mb-1">
                          {achievement.description}
                        </p>
                      )}
                      <div className="flex items-center gap-2 text-xs text-muted-gray">
                        {achievement.year && <span>{achievement.year}</span>}
                        {achievement.issuer && (
                          <>
                            <span>•</span>
                            <span>{achievement.issuer}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold mb-6 text-white">Skills</h3>
          
          <div className="space-y-6">
            {categories.map((category, categoryIndex) => {
              const skills = groupedSkills[category] || []
              if (skills.length === 0) return null

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="bg-background-secondary rounded-2xl p-6 border border-muted-blue"
                >
                  <h4 className="text-lg font-semibold mb-4 text-electric-blue-light">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-4 py-2 text-sm font-medium bg-muted-blue text-electric-blue-light rounded-lg border border-electric-blue/30 hover:border-electric-blue hover:bg-electric-blue/10 transition-all duration-300"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

