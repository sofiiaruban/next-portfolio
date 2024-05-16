'use client'

import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from './ui/sectionHeading'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After six years of working as a{' '}
        <span className="font-medium">cost estimator</span>, I made the decision
        to follow my passion for programming. I enrolled in a Levi9 Frontend
        Boost program and delved into{' '}
        <span className="font-medium"> web development</span>.{' '}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I love the feeling of finally figuring out a
        solution to a problem. My core stack is{' '}
        <span className="font-medium">TypeScript, React</span>. I am also
        familiar with Next. I am always looking to learn new technologies.
        Currently, I am actively seeking a
        <span className="font-medium"> full-time position</span> as a frontend
        developer.
      </p>
      <p>
        <span className="italic">Outside of coding,</span> I find joy in
        practicing yoga, traveling,and continuously seeking opportunities for
        <span className="font-medium">and personal growth.</span>.
      </p>
    </motion.section>
  )
}
