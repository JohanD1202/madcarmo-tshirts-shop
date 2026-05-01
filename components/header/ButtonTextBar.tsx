'use client'

import { useState } from 'react'

interface Props {
  text: string
  onClick: () => void
}

export default function ButtonTextBar({ text, onClick }: Props) {
  const [hover, setHover] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative"
    >
      <span
        className={`text-[15px] font-medium ${
          hover ? 'text-gray-500' : 'text-black'
        }`}
        style={{ fontFamily: 'Fredoka' }}
      >
        {text}
      </span>

      {/* Línea inferior (hover) */}
      {hover && (
        <div className="absolute left-0 right-0 bottom-[-4px] h-[1.5px] bg-gray-400" />
      )}
    </button>
  )
}