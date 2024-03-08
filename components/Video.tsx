'use client';

import { Button } from './ui/Button';
import { useMyContext } from '@/context/useContextMenu';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import ReactPlayer from 'react-player';

export const Video = ({ videoId }: { videoId: string }) => {
  const { toggleShowVideo } = useMyContext();
  const isMobile = useMediaQuery('(max-width: 420px)');
  const isLaptop = useMediaQuery('(max-width: 600px)');

  const widthLaptop = isLaptop ? '310px' : '600px';
  const onError = (error: any) => {
    console.error('YouTube Player Error:', error);
  };

  return (
    <div className="absolute top-0 bottom-0 bg-black opacity-[1] w-full h-screen flex justify-center items-center  z-20 left-0 right-0 bottom-0">
      <div className="relative">
        <Button
          onClick={() => toggleShowVideo()}
          className="absolute top-[14px] w-fit -right-[6px] p-0 bg-transparent hover:border-none hover:bg-transparent border-none h-[24px]"
          variantCss="default"
        >
          <CloseIcon className="w-[34px] h-[34px]" />
        </Button>
        <ReactPlayer className="w-full z-30" url={videoId} playing width={widthLaptop} onError={onError} volume={0.277} light />
      </div>
    </div>
  );
};
