import React, { ReactNode } from 'react';
import BaseCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { cn } from '@/lib/utils';

export const Card = ({ children, classname, styles }: { children: ReactNode, classname?: string, width?: string, styles?: React.CSSProperties }) => {
  return (
    <BaseCard sx={{ minWidth: 275 }} style={styles}>
      <CardContent className={classname}>{children}</CardContent>
    </BaseCard>
  )
}
