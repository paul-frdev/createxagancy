import { Heading } from './elements/Heading';
import { Image } from './elements/Image';
import { Typography } from './elements/Typography';
import { Team as TeamType } from '@/types/team';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import React from 'react';

const social = [
  {
    id: 1,
    icon: <FacebookIcon />,
    src: '/',
  },
  {
    id: 2,
    icon: <InstagramIcon />,
    src: '/',
  },
  {
    id: 3,
    icon: <LinkedInIcon />,
    src: '/',
  },
];

export type TeamProps = {
  item: TeamType;
};

export const TeamItem: React.FC<TeamProps> = ({ item }) => {
  return (
    <div className="w-full max-w-[285px] h-[416px] group mx-auto">
      <div className="w-full flex justify-center items-center mb-4 relative">
        <Image src={item.src} alt="person" className="w-full h-[320px] bg-cover bg-center" />
        <div className="opacity-0 group-hover:opacity-[1] flex justify-end items-end gap-x-4 bg-hoverCard absolute bottom-0 left-0 right-0 w-full h-[200px] transition-opacity delay-[35] duration-300">
          {social.map((link) => (
            <Link key={link.id} href={link.src} className=" transition-opacity duration-300 last:mr-4 mb-1 text-white opacity-[0.6] hover:opacity-[1]">
              <span className="w-[20px] h-[20px]">{link.icon}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Heading variant="h6" className="text-[1.25rem]">
          {item.author}
        </Heading>
        <Typography className=" text-gray700 font-lato font-normal normal-case text-center">{item.position}</Typography>
      </div>
    </div>
  );
};
