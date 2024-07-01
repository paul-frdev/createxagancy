'use client';

import { cn } from '../lib/utils';
import { UserBlock } from './UserBlock';
import { navbar } from '@/constants';
import { useMyContext } from '@/context/useContextMenu';
import { AnimatePresence, motion } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import { useClickAway } from 'react-use';

export const MobileMenu = () => {
  const { toggleOpen, isOpen } = useMyContext();
  const pathname = usePathname();
  const params = useParams();
  const ref = useRef(null);

  useClickAway(ref, () => toggleOpen());

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'visible';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);

  const isWhiteBg = ['/courses', '/events', '/about', '/contacts', '/blog', `/blog/${params.articleId}`].includes(pathname);

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: any) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <div className="block md:hidden">
      <div className={cn(`w-[48px] h-[48px] z-20 absolute top-[7px] right-[14px]`)}>
        <Hamburger toggled={isOpen} toggle={toggleOpen} size={40} color={isWhiteBg ? '#fc4b26' : '#fff'} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div ref={ref} className={cn(`fixed inset-0 z-50 pt-20 px-4 z-10  bg-orange02`)} initial="closed" animate="open" exit="closed" variants={menuVariants}>
            <motion.ul className="flex flex-col items-center space-y-6">
              {navbar.map((item, i) => (
                <motion.li key={item.id} custom={i} variants={itemVariants} className="text-2xl font-bold">
                  <Link href={item.src} className="text-black hover:text-orange transition-colors duration-300" onClick={toggleOpen}>
                    {item.title}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-10">
              <UserBlock className="flex flex-col items-center space-y-4" buttonClasses="px-16 py-2" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
