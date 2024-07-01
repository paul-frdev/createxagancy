import { EmptyState } from '../EmptyState';
import BlogList from './BlogList';
import { fetchPostsPages, filterPosts } from '@/app/actions/getPosts';
import React from 'react';

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
  const pages = await fetchPostsPages(searchParams.filter, searchParams.query, searchParams.type);
  const countTotalPages = Math.round(pages / +searchParams.limit);

  return <>{posts.length ? <BlogList posts={posts} totalPages={countTotalPages} /> : <EmptyState title="There are no posts" message="try to use another filters" />}</>;
};

export default BlogListClient;
