import { IconLinkProps } from '@/lib/types'
import React from 'react'

export default function IconLink({icon, href}: IconLinkProps) {
  return (
    <a
    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
    href={href}
    target="_blank"
  >
    {icon}
  </a>
  )
}
