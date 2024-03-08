import { cn } from '@/lib/utils';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
import React from 'react';

type SocialLinksProps = {
  socialLinks: string[];
  className?: string;
};
export const SocialLinks: React.FC<SocialLinksProps> = ({ socialLinks, className }) => {
  return (
    <div className={cn(`w-full max-w-[100px] flex justify-between items-center`, className)}>
      <Link href={socialLinks?.[0] as any} className="w-full h-auto flex justify-center items-center">
        <FacebookIcon className="w-6 h6 text-gray700 hover:text-primary" />
      </Link>
      <Link href={socialLinks?.[1] as any} className="w-full h-auto flex justify-center items-center">
        <TwitterIcon className="w-6 h6 text-gray700 hover:text-primary" />
      </Link>
      <Link href={socialLinks?.[2] as any} className="w-full h-auto flex justify-center items-center">
        <LinkedInIcon className="w-6 h6 text-gray700 hover:text-primary" />
      </Link>
    </div>
  );
};
