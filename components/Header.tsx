'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import logo from '../public/svg/logo.svg'
import { navbar } from '@/constants';
import { Container } from './ui/Container';
import { MobileMenu } from './MobileMenu';
import { UserBlock } from './UserBlock';


export const Header = () => {
  return (
    <header className='w-full bg-orange02 pt-[1.25rem]'>
      <Container className='pb-2 lg:pb-0'>
        <div className='flex justify-between items-center'>
          <div className='flex justify-start items-center gap-x-[2.75em] lg:gap-x-[3.75em]'>
            <Link href='/' className='flex justify-center items-center'>
              <Image
                src={logo}
                width={130}
                height={32}
                alt='logo'
              />
            </Link>
            <nav className='hidden md:block'>
              <ul className='flex justify-start items-center gap-x-[1.5em] lg:gap-x-[2.5em]'>
                {navbar.map(item => (
                  <li key={item.id}>
                    <Link href="/" className='text-[1em] text-nowrap text-black hover:text-orange transition-colors duration-300 font-latoBold font-extrabold'>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <UserBlock className='md:flex flex-col lg:flex-row lg:gap-x-[2.25rem]'/>
          <MobileMenu />
        </div>
      </Container>
    </header>
  )
}