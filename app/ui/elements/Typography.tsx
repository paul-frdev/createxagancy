import { cn } from '@/app/lib/utils';
import React from 'react';

export const Typography = ({ children, className }: { children: string; className?: string }) => {
  return <p className={cn(` text-[1rem] font-lato font-normal uppercase leading-[160%] tracking-[1px] mb-4`, className)}>{children}</p>;
};
