'use client'
import React from 'react';
import ReactPlayer from 'react-player';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from './ui/Button';
import { useMyContext } from '@/context/useContextMenu';

export const Video = ({ videoId }: { videoId: string }) => {

  const { toggleShowVideo } = useMyContext()

  const onError = (error: any) => {
    console.error('YouTube Player Error:', error);
  };

  return (
    <div className='absolute top-[50%] bg-black opacity-[0.8] w-full h-screen flex justify-center items-center  z-20 left-[50%] -translate-y-1/2 -translate-x-1/2 right-0 bottom-0'>
      <div className='relative'>
        <Button
          onClick={() => toggleShowVideo()}
          className='absolute top-[14px] w-fit -right-[6px] p-0 bg-transparent hover:border-none hover:bg-transparent border-none h-[24px]' variantCss='default'>
          <CloseIcon className='w-[34px] h-[34px]' />
        </Button>
        <ReactPlayer
          className='w-full max-w-[600px] h-auto z-30'
          url={videoId}
          playing
          onError={onError}
          
        />
      </div>
    </div>
  );
}
