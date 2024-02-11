'use client'
import React from 'react'
import { Category } from './Category';
import { CourseType } from '@/types';
import { cn } from '@/lib/utils';


type CategoriesProps = {
  categories: { [label: string]: number };
  items: CourseType[];
  filterItems: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const Categories: React.FC<CategoriesProps> = ({ categories, items, filterItems }) => {


  const handleOnclick = (event: React.MouseEvent<HTMLButtonElement>) => {
    filterItems(event)
  }
  return (
    <div className='flex w-full max-w-[815px] justify-between items-center'>
      <Category
        className={cn(`focus:text-orange focus:border focus:border-solid focus:border-orange`)}
        onClick={filterItems}
        title='All'
        quantity={items.length}
      />
      {Object.entries(categories).map(([key, value]) => (
        <Category
          className='focus:text-orange focus:border focus:border-solid focus:border-orange'
          onClick={handleOnclick}
          key={key}
          title={key}
          quantity={value}
        />
      ))}
    </div>
  )
}
