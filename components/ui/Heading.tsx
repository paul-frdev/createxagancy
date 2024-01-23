import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

type HeadingProps = {
  variant?: TypographyProps['variant']; 
  children: string;
} & Omit<TypographyProps, 'variant'>;

export const Heading: React.FC<HeadingProps> = ({ variant, children, ...rest }) => {
  return (
    <Typography variant={variant || 'h1'} gutterBottom {...rest}>
      {children}
    </Typography>
  );
};