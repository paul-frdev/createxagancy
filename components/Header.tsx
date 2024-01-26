'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import logo from '../public/svg/logo.svg'
import { navbar } from '@/constants';
import { Button } from './ui/Button';
import person from '../public/svg/person.svg'
import { Container } from './ui/Container';


export const Header = () => {
  return (
    <header className='w-full'>
      <Container>
        <div className='flex justify-between items-center'>
          <div className='flex justify-start items-center gap-x-[3.75em]'>
            <Link href='/' className='flex justify-center items-center'>
              <Image
                src={logo}
                width={130}
                height={32}
                alt='logo'
              />
            </Link>
            <nav>
              <ul className='flex justify-start items-center gap-x-[2.5em]'>
                {navbar.map(item => (
                  <li key={item.id}>
                    <Link href="/" className='text-[1em] text-black font-latoBold font-extrabold'>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className='flex justify-end items-center gap-x-[2.25em]'>
            <Button sizeCss='lg' className=' hover:bg-redLight capitalize py-0 h-[52px] text-base leading-[52px] tracking-[0.5px]'>Get consultation</Button>
            <div className='flex justify-start items-center gap-x-2'>
              <Image src={person} alt='person' />
              <div className='flex justify-start items-center'>
                <Link className='text-base text-black mr-[5px] font-latoBold font-[700]' href='/'>Log in</Link>/
                <Link className='text-base text-black ml-[5px] font-latoBold font-[700]' href='/'>Register</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
