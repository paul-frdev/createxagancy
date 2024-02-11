import { cn } from '@/lib/utils';
import Typography, { TypographyProps } from '@mui/material/Typography';
import React from 'react';

type HeadingProps = {
  variant?: TypographyProps['variant'];
  children: string;
  className?: string;
} & Omit<TypographyProps, 'variant'>;

export const Heading: React.FC<HeadingProps> = ({ variant, children, className, ...rest }) => {
  return (
    <Typography variant={variant || 'h1'} gutterBottom {...rest} className={cn(`text-gray900 font-latoBold font-[900] tracking-[1px] leading-[130%]`, className)}>
      {children}
    </Typography>
  );
};
