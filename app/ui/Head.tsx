import React from 'react'
import { Typography } from './elements/Typography';
import { Heading } from './elements/Heading';

type IHead = {
  text: string;
  title: string;
}
export const Head: React.FC<IHead> = ({ text, title }) => {
  return (
    <>
      <Typography className=' font-bold text-center'>
        {text}
      </Typography>
      <Heading variant='h3' className=' text-[2.875rem] mb-12 text-center'>
        {title}
      </Heading>
    </>
  )
}
