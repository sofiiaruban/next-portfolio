import zdravelifeImg from '@/public/zdrave-life-app.png'
import taskImg from '@/public/task-app.png'
import mindImg from '@/public/mind-lab.png'
import forecastImg from '@/public/forecast-app.png'
import roco from '@/public/roko_practicum_logo.jpg'
import baza from '@/public/baza_trainee_ukraine_logo.png'
import technorely from '@/public/technorely_logo.jpg'

export const navLinks = [
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
    date: '12/2023 - 05/2024'
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
      'i18n',
      'Team Project'
    ],
    imageUrl: mindImg,
    siteUrl: 'https://mindlab-landing.vercel.app/ua',
    gitHubUrl: 'https://github.com/coldXIII/mindlab'
  },
  {
    title: 'Zdrave Zhittya Cows Shelter',
    description: 'Multilingual Website for Cow Shelters with Admin Panel',
    tags: ['React', 'Redux', 'TypeScript', 'Tailwind', 'i18n', 'Team Project'],
    imageUrl: zdravelifeImg,
    siteUrl: 'https://zdrave-zyttia.site/',
    gitHubUrl: 'https://github.com/baza-trainee/cows-shelter-frontend'
  },
  {
    title: 'The Trip Forecasting Weather App',
    description:
      'The Trip Weather App helps you monitor weather conditions for your planned trips',
    tags: [
      'React',
      'TS',
      'Redux',
      'RTK Query',
      'Redux-persist',
      'Vite',
      'Jest',
      'Personal Project'
    ],
    imageUrl: forecastImg,
    siteUrl: 'https://sofiiaruban.github.io/trip-app/',
    gitHubUrl: 'https://github.com/sofiiaruban/trip-app'
  },
  {
    title: 'Task Manager App',
    description: 'Task management application',
    tags: [
      'React',
      'TypeScript',
      'React-Bootstrap',
      'Redux',
      'Personal Project'
    ],
    imageUrl: taskImg,
    siteUrl: ' https://sofiiaruban.github.io/task-manager-app',
    gitHubUrl: 'https://github.com/sofiiaruban/task-manager-app'
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

export enum link {
  linkedIn = 'https://www.linkedin.com/in/sofiiaruban/',
  gitHub = 'https://github.com/sofiiaruban/',
  CV = '/CV_Sofiia_Ruban_Front-end_Developer_(React JS).pdf'
}
