import { fetchPostsPages, filterPosts } from '@/app/actions/getPosts';
import React from 'react'
import BlogList from './BlogList';

const BlogListClient = async ({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
    topic?: string;
    page?: string;
    query?: string;
    limit?: string;
    type?: string;
  };
}) => {
  const posts = await filterPosts(searchParams.limit, searchParams.filter, searchParams.query, searchParams.page, searchParams.type);
  const pages = await fetchPostsPages(searchParams.filter, searchParams.query, searchParams.type)
  const countTotalPages = Math.round(pages / +searchParams.limit);
  return (
    <BlogList posts={posts} totalPages={countTotalPages} />
  )
}

export default BlogListClient