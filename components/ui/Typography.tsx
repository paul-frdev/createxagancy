import { cn } from '@/lib/utils';
import React from 'react';

export const Typography = ({ children, className }: { children: string; className?: string }) => {
  return <p className={cn(`text-base font-latoBold font-[700] uppercase leading-[150%] tracking-[1px] mb-4`, className)}>{children}</p>;
};
