import { cn } from '@/app/lib/utils';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
import React from 'react';

export type ILink = { id: number; url: string };
type SocialLinksProps = {
  socialLinks: ILink[];
  className?: string;
};
export const SocialLinks: React.FC<SocialLinksProps> = ({ socialLinks, className }) => {
  return (
    <div className={cn(`w-full max-w-[150px] gap-x-4 flex justify-start items-center h-auto`, className)}>
      {socialLinks.map((link, index) => (
        <Link key={link.id} href={link.url} className="w-full h-auto flex justify-center items-center">
          {index === 0 && <FacebookIcon className="w-6 h-6 text-gray700 hover:text-primary" />}
          {index === 1 && <TwitterIcon className="w-6 h-6 text-gray700 hover:text-primary" />}
          {index === 3 && <LinkedInIcon className="w-6 h-6 text-gray700 hover:text-primary" />}
          {index === 4 && <LinkedInIcon className="w-6 h-6 text-gray700 hover:text-primary" />}
        </Link>
      ))}
    </div>
  );
};
