import React, { Suspense } from 'react'
import { countPosts, fetchPostsPages, filterPosts, getPosts } from '../actions/getPosts'
import { SubscribeItem } from '../ui/SubscribeItem'
import BlogList from '../ui/blog/BlogList'
import { Metadata } from 'next';
import { Container } from '../ui/elements/Container';
import { Head } from '../ui/Head';
import { CategorySkeleton } from '../ui/skeletons/CategorySkeleton';
import ClientCategoriesBlog from '../ui/blog/ClientCategoriesBlog';
import { BaseSelect } from '../ui/elements/BaseSelect';
import { categoryItems } from '@/constants';

export const metadata: Metadata = {
  title: 'Blog',
};

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
  const getPosts = await countPosts()

  const countTotalPages = Math.round(pages / +limit);

  let counts: { [label: string]: number; id: number } = { id: 0 };
  getPosts.forEach((post, index) => {
    counts[post.type] = counts[post.type] ? counts[post.type] + 1 : 1;
    counts.id = index + 1;
  });

  return (
    <>
      <section className='w-full my-5 xmd:my-10'>
        <Container className='py-5 xmd:py-10'>
          <Head text='Our blog' title='Createx School Journal' />
          <div className='flex justify-between w-full max-w-[90%] h-[56px] items-center'>
            <Suspense key={searchParams.filter} fallback={<CategorySkeleton maxWidth='480px' counts={counts} />}>
              <ClientCategoriesBlog filter={filter} type={type} query={query} />
            </Suspense>
            <BaseSelect query='type' items={categoryItems} />
          </div>
          <BlogList posts={posts} totalPages={countTotalPages} />
        </Container>
      </section>
      <SubscribeItem
        src='/blog/articles.svg'
        color='bg-gray200'
        className=' flex-col lg:flex-row gap-y-6 lg:gap-y-0'
      />
    </>
  )
}

export default BlogPage;