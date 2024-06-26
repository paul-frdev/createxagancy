'use client';

import logo from '../../public/svg/logo.svg';
import { MobileMenu } from './MobileMenu';
import { UserBlock } from './UserBlock';
import { Container } from './elements/Container';
import { cn } from '@/app/lib/utils';
import { navbar } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';

export const Header = () => {
  const pathname = usePathname();
  const params = useParams();

  const bgWhite = ['/courses', '/events', '/about', '/contacts', '/blog', `/blog/${params.articleId}`].includes(pathname);

  return (
    <header className={cn(`w-full pt-[1.25rem]`, !bgWhite ? 'bg-gradient-to-r from-[rgba(255,63,58,.2)_0%] to-[rgba(247,94,5,.2)_100%]' : 'bg-white')}>
      <Container className="pb-2 lg:pb-0">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-x-[2.75em] lg:gap-x-[3.75em]">
            <Link href="/" className="flex justify-center items-center">
              <Image src={logo} width={130} height={32} alt="logo" />
            </Link>
            <nav className="hidden md:block">
              <ul className="flex justify-start items-center gap-x-[1.5em] lg:gap-x-[2.5em]">
                {navbar.map((item) => (
                  <li key={item.id}>
                    <Link href={item.src} className="text-[1rem] text-nowrap text-black hover:text-orange transition-colors duration-300 font-lato font-bold">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <UserBlock className="md:flex flex-col lg:flex-row lg:gap-x-[1rem]" />
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
};
