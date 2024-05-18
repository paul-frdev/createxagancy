import { cn } from '@/app/lib/utils';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
import React from 'react';

type ILink = { id: number; url: string; courseId: number };
type SocialLinksProps = {
  socialLinks: ILink[];
  className?: string;
};
export const SocialLinks: React.FC<SocialLinksProps> = ({ socialLinks, className }) => {
  return (
    <div className={cn(`w-full max-w-[100px] flex justify-between items-center`, className)}>
      {socialLinks.map((link) => (
        <Link key={link.id} href={link.url} className="w-full h-auto flex justify-center items-center">
          {link.id === 1 && <FacebookIcon className="w-6 h6 text-gray700 hover:text-primary" />}
          {link.id === 2 && <TwitterIcon className="w-6 h6 text-gray700 hover:text-primary" />}
          {link.id === 3 && <LinkedInIcon className="w-6 h6 text-gray700 hover:text-primary" />}
        </Link>
      ))}
    </div>
  );
};
