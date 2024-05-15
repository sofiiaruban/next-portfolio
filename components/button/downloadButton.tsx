import { link } from '@/lib/data'
import React from 'react'
import { HiDownload } from 'react-icons/hi'

export default function DownloadButton() {
  return (
    <a
      className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
      href={link.CV}
      download
    >
      Download CV
      <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
    </a>
  )
}
