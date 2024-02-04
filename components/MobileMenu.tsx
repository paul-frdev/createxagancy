'use client'
import React from 'react'
import { useEffect, useRef } from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";
import { useMyContext } from '@/context/useContextMenu';
import { navbar } from '@/constants';
import Link from 'next/link';
import { UserBlock } from './UserBlock';

export const MobileMenu = () => {

  const { toggleOpen, isOpen } = useMyContext()

  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => toggleOpen());

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);

  const closeMenu = () => {
    toggleOpen();
  }


  return (
    <div className='block md:hidden'>
      <Hamburger toggled={isOpen} toggle={toggleOpen} size={40} color={'#fff'} />
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className='fixed pt-16 flex flex-col justify-start items-start shadow-xl left-0 right-0 top-[4.6rem] bg-orange02 z-10 h-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, backgroundColor: '#feddd1' }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            transition={{ duration: 0.3 }}
          >
            <ul className='w-full flex flex-col justify-center items-center'>
              {navbar.map((item) => (
                <li key={item.id} className=' mb-4 last:mb-8 text-[1.5rem] text-nowrap transition-colors duration-300 font-latoBold font-extrabold'>
                  <Link href='/' className='text-black  hover:text-orange'>{item.title}</Link>
                </li>
              ))}
            </ul>
            <UserBlock className='flex md:hidden flex-col w-full justify-center items-center gap-y-6' buttonClasses='px-16' />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
