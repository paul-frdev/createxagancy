import { Heading } from '../../app/ui/elements/Heading';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';

type AuthSocialMediaProps = {
  title: string;
};
export const AuthSocialMedia: React.FC<AuthSocialMediaProps> = ({ title }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-8 mb-4">
      <Heading variant="h6" className=" text-gray700 text-[0.875rem] font-lato font-normal mb-4">
        {title}
      </Heading>
      <div className="w-full max-w-[116px] flex justify-center items-center gap-x-3">
        <FacebookIcon className=" text-gray700 hover:text-orange cursor-pointer" />
        <TwitterIcon className=" text-gray700 hover:text-orange cursor-pointer" />
        <GoogleIcon className=" text-gray700 hover:text-orange cursor-pointer" />
        <LinkedInIcon className=" text-gray700 hover:text-orange cursor-pointer" />
      </div>
    </div>
  );
};
