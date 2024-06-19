'use client';

import { Category } from './Category';
import { cn } from '@/app/lib/utils';
import React from 'react';

type CategoriesProps = {
  categories?: { [label: string]: number };
  categoryTitle?: { id: number; title: string; icon?: React.ElementType; }[];
  quantityCourses?: number;
  filterItems: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};


export const Categories: React.FC<CategoriesProps> = ({ categories, quantityCourses, categoryTitle, filterItems, className }) => {
  const handleOnclick = (event: React.MouseEvent<HTMLButtonElement>) => {
    filterItems(event);
  };

  return (
    <div className={cn(`flex w-full max-w-[815px] justify-between items-center`, className)}>
      {categoryTitle.map((item, index) => {
        const quantity = categories ? Object.entries(categories).map(([key, value]) => item.title === key && value) : null;

        return (
          <Category
            Icon={item.icon}
            className={cn('focus:text-orange focus:border focus:border-solid focus:border-orange text-nowrap')}
            onClick={handleOnclick}
            key={item.id}
            title={item.title}
            quantity={quantity as any}
            allItemsQuantity={quantityCourses}
          />
        );
      })}
    </div>
  );
};
