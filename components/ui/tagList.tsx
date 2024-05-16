import { Tag } from '@/lib/types'
import React from 'react'

type TagListProps = {
  tags: readonly Tag[]
}

export default function TagList({ tags }: TagListProps) {
  return (
    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
      {tags.map((tag, index) => (
        <li
          className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
          key={index}
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}
