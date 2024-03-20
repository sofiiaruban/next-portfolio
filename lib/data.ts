import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
//import { FaReact } from 'react-icons/fa'
//import { LuGraduationCap } from 'react-icons/lu'
import zdravelifeImg from '@/public/zdrave-life-app.png'
import beerImg from '@/public/beer-app.png'
import taskImg from '@/public/task-app.png'
import mindImg from '@/public/mind-lab.png'
import roco from '@/public/roko_practicum_logo.jpg'
import baza from '@/public/baza_trainee_ukraine_logo.png'
import technorely from '@/public/technorely_logo.jpg'
export const links = [
  {
    name: 'Home',
    hash: '#home'
  },
  {
    name: 'About',
    hash: '#about'
  },
  {
    name: 'Projects',
    hash: '#projects'
  },
  {
    name: 'Skills',
    hash: '#skills'
  },
  {
    name: 'Experience',
    hash: '#experience'
  },
  {
    name: 'Contact',
    hash: '#contact'
  }
] as const

export const experiencesData = [
  {
    title: 'Front-End Developer',
    company: 'Roqo Practicum',
    description: 'Internship on real life project',
    icon: roco,
    date: '12/2023 - present'
  },
  {
    title: 'Full-Stack Developer',
    company: 'Technorely Inc.',
    description:
      'The internship program includes a combination of theory sessions and a final project',
    icon: technorely,
    date: '11/2023 - 12/2023'
  },
  {
    title: 'Front-End Developer',
    company: 'Baza Trainee Ukraine',
    description: 'I worked as a front-end developer',
    icon: baza,
    date: '10/2023 - 12/2023'
  }
] as const

export const projectsData = [
  {
    title: 'MIND LAB',
    description: 'Multilingual educational platform website',
    tags: [
      'Next',
      'Zustand',
      'SWR',
      'TypeScript',
      'Framer Motion',
      'Lottie',
      'i18n'
    ],
    imageUrl: mindImg
  },
  {
    title: 'Zdrave Zhittya Cows Shelter',
    description: 'Multilingual Website for Cow Shelters with Admin Panel',
    tags: ['React', 'Redux', 'TypeScript', 'Tailwind', 'i18n'],
    imageUrl: zdravelifeImg
  },
  {
    title: 'Beers App',
    description: 'App displays a list of beers',
    tags: ['React', 'TypeScript', 'React-Query', 'Zustand'],
    imageUrl: beerImg
  },
  {
    title: 'Task Manager App',
    description: 'Task management application',
    tags: ['React', 'TypeScript', 'React-Bootstrap', 'Redux'],
    imageUrl: taskImg
  }
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'React-Bootstrap',
  'Styled-Components',
  'Redux',
  'Zustand',
  'Framer Motion'
] as const
