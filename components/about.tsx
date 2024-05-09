'use client'

import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from './sectionHeading'
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
        After 6 years of working as a{' '}
        <span className="font-medium">cost estimator</span>, I decided to pursue
        my passion for programming. I enrolled in a Levi9 Frontend Boost program
        and learned <span className="font-medium"> web development</span>.{' '}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">TypeScript, React</span>. I am also
        familiar with Next. I am always looking to learn new technologies. I am
        currently looking for a{' '}
        <span className="font-medium">full-time position</span> as a frontend
        developer.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy doing
        yoga, traveling. I also enjoy{' '}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  )
}