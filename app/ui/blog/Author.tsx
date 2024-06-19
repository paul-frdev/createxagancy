import React from 'react'
import { Image } from '../elements/Image'
import { Heading } from '../elements/Heading'
import { Typography } from '../elements/Typography'
import { ILink, SocialLinks } from '../SocialLinks';

type AuthorProps = {
  links: ILink[];
};
export const Author = ({ links }: AuthorProps) => {
  return (
    <div className='my-16'>
      <Heading variant='h3' className='mb-6 font-bold text-[1rem]'>Author</Heading>
      <div className=' flex justify-between items-center w-full max-w-[342px] gap-x-4'>

        <Image src='/event/speaker.png' alt='author' className='w-[100px] h-[100px] rounded' />
        <div className='flex flex-col'>
          <Heading variant='h4' className=' text-[1.25rem] font-bold text-gray800 mb-2'>Kristin Watson</Heading>
          <Typography className=' text-gray700 text-sm normal-case'>Curator of Marketing Course</Typography>
          <SocialLinks socialLinks={links} width='140px' />
        </div>
      </div>
    </div>
  )
}
