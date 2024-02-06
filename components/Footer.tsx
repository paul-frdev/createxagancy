import React from 'react'
import { Container } from './ui/Container'
import Link from 'next/link'
import { Image } from './ui/Image'
import logo from '../public/svg/logoFooter.svg'
import { Typography } from './ui/Typography'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Heading } from './ui/Heading'
import { footerLinks, navbar } from '@/constants'
import { EmailForm } from './forms/EmailForm'
import heardIcon from '../public/svg/heard.svg'
import { Button } from './ui/Button'

const socials = [
  {
    id: 1,
    icon: <FacebookIcon />
  },
  {
    id: 2,
    icon: <TwitterIcon />
  },
  {
    id: 3,
    icon: <YouTubeIcon />
  },
  {
    id: 4,
    icon: <TelegramIcon />
  },
  {
    id: 5,
    icon: <InstagramIcon />
  },
  {
    id: 6,
    icon: <LinkedInIcon />
  }
]

export const Footer = () => {
  return (
    <footer className=' bg-gray900 w-full pt-14'>
      <Container className='flex flex-col xsm:flex-row flex-wrap w-full justify-between items-center xsm:items-start mb-12'>
        <div className='flex flex-col gap-y-6 justify-start items-center xsm:items-start w-full max-w-[286px]'>
          <Link href='/' className='max-w-[280px]'>
            <Image src={logo} alt='logo' className='w-[130px] h-[22px] !text-white' />
          </Link>
          <Typography className='text-white text-center xsm:text-left text-[0.75rem] normal-case opacity-[0.6] font-latoRegular font-[400]'>Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country. </Typography>
          <div className='flex justify-between items-center gap-x-6'>
            {socials.map(item => (
              <Link key={item.id} href='/' className='w-6 h-6 text-bgIcon hover:text-white transition-all duration-300'>{item.icon}</Link>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-y-6 justify-start items-center xsm:items-start w-full max-w-[160px] [@media(max-width:501px)]:mt-6'>
          <Heading variant='h6' className='text-base uppercase leading-[150%] tracking-[1px] text-white text-nowrap'>
            SITE MAP
          </Heading>
          <ul className='flex flex-col justify-start items-center xsm:items-start gap-y-[0.7rem]'>
            {navbar.map(item => (
              <li key={item.id}>
                <Link href='/' className='text-base hover:opacity-[1] transition-all duration-300 text-white opacity-[0.6] leading-[160%] tracking-[1px] font-latoRegular font-[400]'>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col gap-y-6 justify-start items-center xsm:items-start w-full max-w-[160px] [@media(max-width:629px)]:mt-6'>
          <Heading variant='h6' className='text-base uppercase leading-[150%] tracking-[1px] text-white text-nowrap'>
            COURSES
          </Heading>
          <ul className='flex flex-col justify-start items-center xsm:items-start gap-y-[0.7rem]'>
            {footerLinks.map(item => (
              <li key={item.id}>
                <Link href='/' className='text-base text-nowrap text-white opacity-[0.6] hover:opacity-[1] transition-all duration-300 leading-[160%] tracking-[1px] font-latoRegular font-[400]'>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col gap-y-6 justify-start items-center xsm:items-start w-full max-w-[160px] [@media(max-width:789px)]:mt-6'>
          <Heading variant='h6' className='text-base uppercase leading-[150%] tracking-[1px] text-white text-nowrap'>
            CONTACT US
          </Heading>
          <Link href='tel:4055550128' className='flex justify-start items-center gap-x-2 text-bgIcon hover:text-white opacity-[0.6] transition-colors divide-purple-3'>
            <SmartphoneIcon className='w-4 h-4'/>
            <span className=' text-nowrap'>(405) 555-0128</span>
          </Link>
          <Link href='mailto:hello@createx.com' className='flex justify-start items-center gap-x-2 text-bgIcon hover:text-white opacity-[0.6] transition-colors divide-purple-300'>
            <MailOutlineIcon className='w-4 h-4' />
            <span>hello@createx.com</span>
          </Link>
        </div>
        <div className='flex flex-col gap-y-6 justify-start items-center xsm:items-start w-full max-w-[286px] [@media(max-width:1073px)]:mt-6'>
          <Heading variant='h6' className='text-base uppercase leading-[150%] tracking-[1px] text-white text-nowrap'>
            SIGN UP TO OUR NEWSLETTER
          </Heading>
          <EmailForm />
          <span className='text-[0.625rem] text-center xsm:text-left text-white opacity-[0.6] font-latoRegular font-[400] leading-[150%]'>
            *Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.
          </span>
        </div>
      </Container>
      <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center w-full h-auto py-3 sm:py-0 sm:h-[58px] bg-bgFooter'>
        <div className='flex  justify-center sm:justify-start items-center'>
          <Typography className=' text-nowrap text-[0.75rem] font-latoRegular font-[400] normal-case text-white sm:ml-20 mb-0 mr-2'>© All rights reserved.</Typography>
          <Typography className=' text-nowrap text-[0.75rem] font-latoRegular font-[400] normal-case text-white mb-0 mr-1'>Made with</Typography>
          <Image src={heardIcon} alt='icon' className='w-4 h-4' />
          <Typography className=' text-nowrap text-[0.75rem] font-latoRegular font-[400] normal-case text-white mb-0 ml-1'>by Createx Studio</Typography>
        </div>
        <Button className='text-nowrap p-0 py-2 px-6 bg-transparent border-none hover:bg-transparent hover:border-none opacity-[0.6]'>GO TO TOP</Button>
      </div>
    </footer>
  )
}