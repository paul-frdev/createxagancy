'use client'

import Link from 'next/link'
import React from 'react'
import { Image } from './elements/Image'
import play from '/public/svg/large.svg';
import { useMyContext } from '@/context/useContextMenu';

export const Showreel = ({ text }: { text: string }) => {
  const { toggleShowVideo } = useMyContext();


  return (
    <Link href="/" onClick={() => toggleShowVideo()} className="flex justify-center md:justify-start items-center gap-x-3 mb-[1.5em] text-black">
      <Image src={play} alt="play" className="animation-pulse rounded-full w-[52px] h-[52px]" />
      <span className="text-sm font-lato font-bold">{text}</span>
    </Link>
  )
}
