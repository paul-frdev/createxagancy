import React from 'react'
import { countCourses } from '../../actions/getCourses';
import { Categories } from '../Categories';
import { categoryTitle } from '@/constants';

export default async function CategoryClientPage() {
  const quantity = await countCourses();
  return (
    <Categories categoryTitle={categoryTitle} allItems={quantity} />
  )
}

