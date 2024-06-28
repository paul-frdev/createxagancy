import React from 'react'
import { Categories } from '../Categories'
import { blogCategoryTitle } from './BlogList'
import { fetchPostsPages } from '@/app/actions/getPosts'

const ClientCategoriesBlog = async ({ filter, query, type }: { filter: string, query: string, type: string }) => {

  const pages = await fetchPostsPages(filter, query, type)

  return (
    <Categories className=' hidden md:flex justify-start xmd:gap-x-12 w-fit' categoryTitle={blogCategoryTitle} />
  )
}

export default ClientCategoriesBlog
