import Link from 'next/link'
import React from 'react'
import { Image } from '../ui/Image'


type SocialLinksProps = {
  socialLinks: string[]
}
export const SocialLinks: React.FC<SocialLinksProps> = ({ socialLinks }) => {
  return (
    <div className='w-full max-w-[168px] flex justify-between items-center'>
      <Link href={socialLinks?.[0] as any} className='w-full h-auto flex justify-center items-center'>
        <Image src='/svg/bacebook.svg' alt='behance' className='w-6 h-6' />
      </Link>
      <Link href={socialLinks?.[1] as any} className='w-full h-auto flex justify-center items-center'>
        <Image src='/svg/behance.svg' alt='behance' className='w-6 h-6' />
      </Link>
      <Link href={socialLinks?.[2] as any} className='w-full h-auto flex justify-center items-center'>
        <Image src='/svg/twitter.svg' alt='behance' className='w-6 h-6' />
      </Link>
      <Link href={socialLinks?.[3] as any} className='w-full h-auto text-gray700 flex justify-center items-center'>
        <Image src='/svg/linkedin.svg' alt='behance' className='w-6 h-6 text-gray700' />
      </Link>
    </div>
  )
}
