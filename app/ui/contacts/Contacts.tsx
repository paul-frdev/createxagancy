import React from 'react'
import { Heading } from '../elements/Heading';
import { Image } from '../elements/Image';
import { Typography } from '../elements/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link'
import { contactList } from '@/constants';

export const Contacts = () => {
  return (
    <div className="flex flex-col justify-start items-start">
      <Typography className=" font-bold">Contact info</Typography>
      <Heading variant="h2" className=" text-[2.875rem] mb-10">
        Get in touch
      </Heading>
      <ul className="mb-6">
        {contactList.map((item) => (
          <li key={item.id} className=" flex justify-start items-center gap-x-4 mb-4">
            <Image className="w-[22px] h-[22px]" src={item.src} alt={item.label} />
            <div className=" flex flex-col justify-start items-start">
              <span className=" text-[0.875rem] font-lato font-bold text-gray700">{item.label}:</span>
              <Link className="text-[1.125rem] font-lato font-normal text-gray900" href={item.type}>
                {item.desc}
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <Typography className="font-bold">Follow us:</Typography>
      <div className=" flex justify-between items-center w-full max-w-[270px]">
        <FacebookIcon className=" cursor-pointer hover:text-orange transition-all duration-300" />
        <TwitterIcon className=" cursor-pointer hover:text-orange transition-all duration-300" />
        <YouTubeIcon className=" cursor-pointer hover:text-orange transition-all duration-300" />
        <TelegramIcon className=" cursor-pointer hover:text-orange transition-all duration-300" />
        <InstagramIcon className=" cursor-pointer hover:text-orange transition-all duration-300" />
        <LinkedInIcon className=" cursor-pointer hover:text-orange transition-all duration-300" />
      </div>
    </div>
  )
}
