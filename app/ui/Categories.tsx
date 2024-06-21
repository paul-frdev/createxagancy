'use client';

import { Category } from './Category';
import { cn } from '@/app/lib/utils';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type CategoriesProps = {
  categories?: { [label: string]: number };
  categoryTitle?: { id: number; title: string; icon?: React.ElementType; }[];
  quantityCourses?: number;
  filterItems?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};


export const Categories: React.FC<CategoriesProps> = ({ categories, quantityCourses, categoryTitle, filterItems, className }) => {
  const [activeCategory, setActiveCategory] = useState<string>('');

  const params = useSearchParams();
  const title = params.get('filter')

  const handleOnclick = (event: React.MouseEvent<HTMLButtonElement>) => {
    filterItems(event);
  };

  useEffect(() => {
    if (title !== null) {
      setActiveCategory(title);
    } else {
      setActiveCategory('All')
    }
  }, [title])

  return (
    <div className={cn(`flex w-full max-w-[815px] justify-between items-center`, className)}>
      {categoryTitle.map((item, index) => {
        const quantity = categories ? Object.entries(categories).map(([key, value]) => item.title === key && value) : null;
        const active = item.title === activeCategory;
        return (
          <Category
            isActive={active}
            Icon={item.icon}
            className=''
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
