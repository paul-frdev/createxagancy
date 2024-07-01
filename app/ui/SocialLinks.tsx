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
  isShare?: boolean;
  width?: string;
};
export const SocialLinks: React.FC<SocialLinksProps> = ({ socialLinks, className, isShare = false, width = '190px' }) => {
  return (
    <div className={cn(`flex justify-start items-start h-auto`, className)} style={{ width: width }}>
      <span className=" text-base font-lato font-bold text-gray900 text-nowrap">{isShare ? 'Share :' : null}</span>
      {socialLinks.map((link, index) => (
        <Link key={index} href={link.url} className="w-full h-auto flex justify-start items-start">
          {index === 0 && <FacebookIcon className="w-6 h-6 text-gray700 hover:text-primary" />}
          {index === 1 && <TwitterIcon className="w-6 h-6 text-gray700 hover:text-primary" />}
          {index === 2 && <LinkedInIcon className="w-6 h-6 text-gray700 hover:text-primary" />}
          {index === 3 && <LinkedInIcon className="w-6 h-6 text-gray700 hover:text-primary" />}
          {index === 4 && <LinkedInIcon className="w-6 h-6 text-gray700 hover:text-primary" />}
        </Link>
      ))}
    </div>
  );
};
