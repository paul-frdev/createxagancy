import React from 'react'
import SimpleContainer from '@mui/material/Container';


type ContainerProps = {
  children: React.ReactNode;
}
export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <SimpleContainer className='w-full max-w-[1260px] px-3'>{children}</SimpleContainer>
  )
}
