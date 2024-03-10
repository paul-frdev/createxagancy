'use client';

import { Category } from './Category';
import { cn } from '@/lib/utils';
import { CourseType } from '@/types';
import React from 'react';

type CategoriesProps = {
  categories: { [label: string]: number };
  items: CourseType[];
  filterItems: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

const categoryTitle = [
  {
    id: 1,
    title: 'All',
  },
  {
    id: 2,
    title: 'Marketing',
  },
  {
    id: 3,
    title: 'Management',
  },
  {
    id: 4,
    title: 'HR & Recruting',
  },
  {
    id: 5,
    title: 'Design',
  },
  {
    id: 6,
    title: 'Development',
  },
];

export const Categories: React.FC<CategoriesProps> = ({ categories, items, filterItems, className }) => {
  const handleOnclick = (event: React.MouseEvent<HTMLButtonElement>) => {
    filterItems(event);
  };

  return (
    <div className={cn(`flex w-full max-w-[815px] justify-between items-center`, className)}>
      {categoryTitle.map((item) => {
        const quantity = Object.entries(categories).map(([key, value]) => item.title === key && value);
        return (
          <Category
            className="focus:text-orange focus:border focus:border-solid focus:border-orange text-nowrap"
            onClick={handleOnclick}
            key={item.id}
            title={item.title}
            quantity={quantity as any}
            allItemsQuantity={items.length}
          />
        );
      })}
    </div>
  );
};
