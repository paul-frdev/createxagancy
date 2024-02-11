import { cn } from '@/lib/utils';
import SimpleContainer from '@mui/material/Container';
import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <SimpleContainer className={cn(`w-full max-w-[1260px] px-3`, className)}>{children}</SimpleContainer>;
};
