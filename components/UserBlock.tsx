import person from '../public/svg/person.svg';
import { Button } from './ui/Button';
import { Image } from './ui/Image';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type UserBlockProps = {
  className?: string;
  buttonClasses?: string;
};
export const UserBlock: React.FC<UserBlockProps> = ({ className, buttonClasses }) => {
  const pathname = usePathname();
  return (
    <div className={cn(`hidden justify-end items-end lg:items-center gap-y-2`, className)}>
      <Button
        sizeCss="lg"
        className={cn(
          `text-nowrap border-transparent hover:border-orange transform-none py-0 h-[52px] text-base leading-[52px] tracking-[0.5px] order-2 lg:order-1`,
          buttonClasses,
          pathname !== '/courses' ? 'hover:bg-orange02' : 'hover:bg-transparent'
        )}
      >
        Get consultation
      </Button>
      <div className="flex justify-start items-center gap-x-2 order-1">
        <Image src={person} alt="person" />
        <div className="flex justify-start items-center ">
          <Link className="text-base text-nowrap text-black mr-[5px] font-latoBold font-[700]  hover:text-orange transition-colors duration-300" href="/">
            Log in
          </Link>
          /
          <Link className="text-base text-nowrap text-black ml-[5px] font-latoBold font-[700]  hover:text-orange transition-colors duration-300" href="/">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
