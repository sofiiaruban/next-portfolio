import { ButtonLinkProps } from '@/lib/types'
import Link from 'next/link'
import React from 'react'

export default function ButtonInternalLink({
  href,
  clickHandler,
  icon,
  title
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
      onClick={clickHandler}
    >
      {title}
      {icon}
    </Link>
  )
}
