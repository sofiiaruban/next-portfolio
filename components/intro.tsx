'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/activeSectionContext'
import ButtonInternalLink from './ui/buttonInternalLink'
import IconLink from './ui/iconLink'
import { link } from '@/lib/data'
import DownloadButton from './ui/downloadButton'

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2
            }}
          >
            <Image
              src="/photo.jpg"
              alt="Sofiia portrait"
              width={144}
              height={144}
              quality="95"
              priority={true}
              className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-5 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Sofiia</span> - a{' '}
        <span className="font-bold">frontend developer</span> passionate about
        crafting <span className="italic"> sites & apps</span>. My primary focus
        is <span className="font-bold">React (Next.js)</span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
      >
        <ButtonInternalLink
          href="#contact"
          title="Contact me here"
          clickHandler={() => {
            setActiveSection('Contact')
            setTimeOfLastClick(Date.now())
          }}
          icon={
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          }
        />
        <DownloadButton />
        <IconLink icon={<BsLinkedin />} href={link.linkedIn} />
        <IconLink icon={<FaGithubSquare />} href={link.gitHub} />
      </motion.div>
    </section>
  )
}
