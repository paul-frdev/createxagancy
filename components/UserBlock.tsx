'use client';

import person from '../public/svg/person.svg';
import { LoginDialog } from './dialogs/LoginDialog';
import { SignUpDialog } from './dialogs/SignUpDialog';
import { Button } from './ui/Button';
import { Image } from './ui/Image';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import React from 'react';

type UserBlockProps = {
  className?: string;
  buttonClasses?: string;
};
export const UserBlock: React.FC<UserBlockProps> = ({ className, buttonClasses }) => {
  const pathname = usePathname();
  const [openSignUp, setOpenSignUp] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);

  const bgWhite = pathname !== '/courses' && pathname !== '/events';

  const handleClickOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const element = event.target as HTMLButtonElement;

    if (element.innerText === 'Log in') {
      setOpenLogin(true);
    } else {
      setOpenSignUp(true);
    }
  };

  const handleClose = () => {
    setOpenSignUp(false);
    setOpenLogin(false);
  };

  return (
    <div className={cn(`hidden justify-end items-end lg:items-center gap-y-2`, className)}>
      <Button
        sizeCss="lg"
        className={cn(
          `text-nowrap border-transparent hover:border-orange transform-none py-0 h-[52px] text-base leading-[52px] tracking-[0.5px] order-2 lg:order-1`,
          buttonClasses,
          bgWhite ? 'hover:bg-orange02' : 'hover:bg-transparent'
        )}
      >
        Get consultation
      </Button>
      <div className="flex justify-start items-center gap-x-2 order-1">
        <Image src={person} alt="person" />
        <div className="flex justify-start items-center ">
          <Button
            onClick={handleClickOpen}
            variantCss="link"
            sizeCss="icon"
            className="text-base hover:bg-transparent text-nowrap text-black hover:no-underline mr-[5px] font-latoBold font-[700]  hover:text-orange transition-colors duration-300"
            href="/"
          >
            Log in
          </Button>
          /
          <Button
            onClick={handleClickOpen}
            variantCss="link"
            sizeCss="icon"
            className="text-base hover:bg-transparent hover:no-underline text-nowrap text-black ml-[5px] font-latoBold font-[700]  hover:text-orange transition-colors duration-300"
            href="/"
          >
            Register
          </Button>
        </div>
      </div>
      <SignUpDialog open={openSignUp} close={handleClose} />
      <LoginDialog open={openLogin} close={handleClose} />
    </div>
  );
};
