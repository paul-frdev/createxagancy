import React from 'react'
import { countCourses } from '../../actions/getCourses';
import { Categories } from '../Categories';
import { categoryTitle } from '@/constants';

export default async function CategoryClientPage() {
  const quantity = await countCourses();
  return (
    <Categories className=' flex-wrap md:flex-nowrap gap-x-2 gap-y-4 md:gap-y-0 justify-start md:justify-between' categoryTitle={categoryTitle} allItems={quantity} />
  )
}

