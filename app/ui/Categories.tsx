'use client';

import { Category } from './Category';
import { cn } from '@/app/lib/utils';
import { useQueryParams } from '@/hooks/useQueryParams';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type CategoriesProps = {
  categories?: { [label: string]: number };
  categoryTitle?: { id: number; title: string; icon?: React.ElementType; }[];
  allItems?: { id: number; label: string }[];
  quantityCourses?: number;
  filterItems?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};


export const Categories: React.FC<CategoriesProps> = ({ categories, quantityCourses, categoryTitle, allItems, filterItems, className }) => {
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [labelCounts, setLabelCounts] = useState<{ [label: string]: number }>({});
  const { setQueryParams } = useQueryParams();


  const params = useSearchParams();

  const title = params.get('filter')

  const handleOnclick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const element = event.target as HTMLButtonElement;
    const newCategory = element.value;
    setQueryParams('filter', newCategory);
  };

  useEffect(() => {
    if (title !== null) {
      setActiveCategory(title);
    } else {
      setActiveCategory('All')
    }
  }, [title]);


  useEffect(() => {
    let counts: { [label: string]: number; id: number } = { id: 0 };
    allItems?.forEach((course, index) => {
      counts[course.label] = counts[course.label] ? counts[course.label] + 1 : 1;
      counts.id = index + 1;
    });
    setLabelCounts(counts);
  }, []);

  return (
    <div className={cn(`flex w-full max-w-[815px] justify-between items-center`, className)}>
      {categoryTitle.map((item, index) => {
        const quantity = labelCounts ? Object.entries(labelCounts).map(([key, value]) => item.title === key && value) : null;
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
            allItemsQuantity={allItems?.length}
          />
        );
      })}
    </div>
  );
};
