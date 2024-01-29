import React from 'react'
import SimpleContainer from '@mui/material/Container';
import { cn } from '@/lib/utils';


type ContainerProps = {
  children: React.ReactNode;
  className?: string;
}
export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <SimpleContainer className={cn(`w-full max-w-[1260px] px-3`, className)}>{children}</SimpleContainer>
  )
}
