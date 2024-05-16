import { ButtonLinkProps } from '@/lib/types'
import React from 'react'

export default function ButtonLink({ href, icon, title }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className="group text-sm borderBlack bg-white border  border-black px-2 py-1 flex items-center gap-1 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer dark:bg-white/10"
      target="_blank"
    >
      {title}
      {icon}
    </a>
  )
}
