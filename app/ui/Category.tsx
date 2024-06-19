import { cn } from '../lib/utils';
import { Button } from './elements/Button';
import React from 'react';
import { Image } from './elements/Image';

type CategoryProps = {
  allItemsQuantity: number;
  title: string;
  quantity?: number;
  className?: string;
  Icon: React.ElementType
  onClick: (str: React.MouseEvent<HTMLButtonElement>) => void;
};
export const Category: React.FC<CategoryProps> = ({ title = 'All', quantity, className, onClick, allItemsQuantity, Icon }) => {

  return (
    <Button
      value={title}
      onClick={(event) => onClick(event)}
      variantCss="outline"
      sizeCss="lg"
      className={cn(
        `relative hover:bg-transparent hover:text-orange hover:border hover:border-solid hover:border-orange p-[0.625rem] border border-solid border-transparent text-base font-lato font-bold leading-[160%] text-gray600 capitalize`,
        className
      )}
    >
      {Icon ? <Icon className='w-4 h-4 mr-[6px]' /> : <span className="absolute -top-[4px] right-[5px]">{title === 'All' ? allItemsQuantity : quantity}</span>}
      {title}
    </Button>
  );
};
