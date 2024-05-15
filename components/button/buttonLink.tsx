import { ButtonLinkProps } from '@/lib/types'
import React from 'react'

export default function ButtonLink({ href, icon, title }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className="group bg-white text-sm border px-3 py-1 flex items-center gap-1 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
      target="_blank"
    >
      {title}
      {icon}
    </a>
  )
}
