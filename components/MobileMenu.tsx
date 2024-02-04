'use client'
import React from 'react'
import { useEffect, useRef } from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";
import { useMyContext } from '@/context/useContextMenu';

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
    </div>
  )
}
