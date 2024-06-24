'use client';

import { UserBlock } from './UserBlock';
import { navbar } from '@/constants';
import { useMyContext } from '@/context/useContextMenu';
import { AnimatePresence, motion } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';
import { useEffect, useRef } from 'react';
import { useClickAway } from 'react-use';

export const MobileMenu = () => {
  const { toggleOpen, isOpen } = useMyContext();
  const pathname = usePathname();
  const params = useParams()

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
  };

  const isWhiteBg = pathname === '/courses' || pathname === '/events' || pathname === '/about' || pathname === '/contacts' || pathname === '/blog' || pathname === `/blog/${params.articleId}`;

  return (
    <div className="block md:hidden">
      <Hamburger toggled={isOpen} toggle={closeMenu} size={40} color={isWhiteBg ? '#fc4b26' : '#fff'} />
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            ref={ref}
            className="fixed pt-16 flex flex-col justify-start items-start shadow-xl left-0 right-0 top-[4.6rem] bg-orange02 z-10 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, backgroundColor: '#feddd1' }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            transition={{ duration: 0.3 }}
          >
            <ul className="w-full flex flex-col justify-center items-center">
              {navbar.map((item) => (
                <li key={item.id} onClick={closeMenu} className=" mb-4 last:mb-8 text-[1.5rem] text-nowrap transition-colors duration-300 font-lato font-black">
                  <Link href={item.src} className="text-black hover:text-orange">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <UserBlock className="flex md:hidden flex-col w-full justify-center items-center gap-y-6" buttonClasses="px-16" />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};