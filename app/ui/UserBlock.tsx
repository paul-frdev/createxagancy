'use client';

import { cn } from '../lib/utils';
import { LoginDialog } from './dialogs/LoginDialog';
import { SignUpDialog } from './dialogs/SignUpDialog';
import { Button } from './elements/Button';
import { Image } from './elements/Image';
import person from '@/public/svg/person.svg';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';

type UserBlockProps = {
  className?: string;
  buttonClasses?: string;
};
export const UserBlock: React.FC<UserBlockProps> = ({ className, buttonClasses }) => {
  const pathname = usePathname();
  const params = useParams()

  const [openSignUp, setOpenSignUp] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);

  const bgWhite = pathname === '/courses' || pathname === '/events' || pathname === '/about' || pathname === '/contacts' || pathname === '/blog' || pathname === `/blog/${params.articleId}`;

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
          bgWhite ? 'hover:bg-transparent' : 'hover:bg-orange02'
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
            className="text-base hover:bg-transparent text-nowrap text-black hover:no-underline mr-[5px] font-lato font-bold  hover:text-orange transition-colors duration-300"
            href="/"
          >
            Log in
          </Button>
          /
          <Button
            onClick={handleClickOpen}
            variantCss="link"
            sizeCss="icon"
            className="text-base hover:bg-transparent hover:no-underline text-nowrap text-black ml-[5px] font-lato font-bold  hover:text-orange transition-colors duration-300"
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
