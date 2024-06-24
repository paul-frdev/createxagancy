import React, { Suspense } from 'react'
import { fetchPostsPages, filterPosts, getPosts } from '../actions/getPosts'
import { SubscribeItem } from '../ui/SubscribeItem'
import BlogList from '../ui/blog/BlogList'

const BlogPage = async ({
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

  const filter = searchParams.filter !== 'All' ? searchParams.filter?.slice(0, -1) : searchParams.filter || 'All';
  const limit = searchParams.limit || '6';
  const query = searchParams.query || '';
  const page = searchParams.page || '1';
  const type = searchParams.type || 'All'


  const posts = await filterPosts(limit, filter, query, page, type)
  const pages = await fetchPostsPages(filter, query, type)

  const countTotalPages = Math.round(pages / +limit);

  return (
    <>
      <Suspense>
        <BlogList posts={posts} totalPages={countTotalPages} />
      </Suspense>
      <SubscribeItem
        src='/blog/articles.svg'
        color='bg-gray200'
        className=' flex-col lg:flex-row gap-y-6 lg:gap-y-0'
      />
    </>
  )
}

export default BlogPage;