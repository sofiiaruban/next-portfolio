import { navLinks } from './data'

export type SectionName = (typeof navLinks)[number]['name']

export interface ButtonLinkProps {
  href: string
  title: string
  clickHandler?: () => void
  icon?: React.ReactNode
}

export interface IconLinkProps {
  icon: React.ReactNode
  href: string
}
