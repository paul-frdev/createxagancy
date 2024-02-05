import React, { ReactNode } from 'react';
import BaseCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { cn } from '@/lib/utils';

export const Card = ({ children, classname }: { children: ReactNode, classname?: string, width?: string }) => {
  return (
    <BaseCard sx={{ minWidth: 275 }} className={classname}>
      <CardContent className='p-0'>{children}</CardContent>
    </BaseCard>
  )
}
