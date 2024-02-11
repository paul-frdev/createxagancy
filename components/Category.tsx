import { Button } from './ui/Button';
import { cn } from '@/lib/utils';
import React from 'react';

type CategoryProps = {
  title: string;
  quantity?: number;
  className?: string;
  onClick: (str: React.MouseEvent<HTMLButtonElement>) => void;
};
export const Category: React.FC<CategoryProps> = ({ title, quantity, className, onClick }) => {
  return (
    <Button
      value={title}
      onClick={(event) => onClick(event)}
      variantCss="outline"
      sizeCss="lg"
      className={cn(
        `relative hover:bg-transparent hover:text-orange hover:border hover:border-solid hover:border-orange p-[0.625rem] border border-solid border-transparent text-base font-latoBold font-[700] leading-[160%] text-gray600`,
        className
      )}
    >
      <span className="absolute -top-[4px] right-[5px]">{quantity}</span>
      {title}
    </Button>
  );
};
