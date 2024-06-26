import { countPosts, filterPosts } from '../actions/getPosts';
import { Head } from '../ui/Head';
import { Search } from '../ui/Search';
import { SubscribeItem } from '../ui/SubscribeItem';
import BlogListClient from '../ui/blog/BlogListClient';
import ClientCategoriesBlog from '../ui/blog/ClientCategoriesBlog';
import { BaseSelect } from '../ui/elements/BaseSelect';
import { Container } from '../ui/elements/Container';
import { CardSkeleton } from '../ui/skeletons/CardSkeleton';
import { CategorySkeleton } from '../ui/skeletons/CategorySkeleton';
import { categoryItems } from '@/constants';
import { Metadata } from 'next';
import React, { Suspense } from 'react';

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
  const type = searchParams.type || 'All';

  const posts = await filterPosts(limit, filter, query, page, type);
  const getPosts = await countPosts();
  const isKey = `${filter}-${limit}-${query}-${page}-${type}`;

  let counts: { [label: string]: number; id: number } = { id: 0 };
  getPosts.forEach((post, index) => {
    counts[post.type] = counts[post.type] ? counts[post.type] + 1 : 1;
    counts.id = index + 1;
  });

  return (
    <>
      <section className="w-full my-5 xmd:my-10">
        <Container className="py-5 xmd:py-10">
          <Head text="Our blog" title="Createx School Journal" />
          <div className="flex flex-col lg:flex-row justify-between w-full lg:h-[56px] items-start lg:items-center gap-y-4 lg:gap-y-0">
            <div className=" flex justify-start gap-x-4 items-center w-full">
              <Suspense key={searchParams.filter} fallback={<CategorySkeleton maxWidth="480px" counts={counts} />}>
                <ClientCategoriesBlog filter={filter} type={type} query={query} />
              </Suspense>
              <BaseSelect query="type" items={categoryItems} />
            </div>
            <Search className="w-[380px]" />
          </div>
          <Suspense key={isKey} fallback={<CardSkeleton items={posts} />}>
            <BlogListClient searchParams={{ query, filter, limit, page, type }} />
          </Suspense>
        </Container>
      </section>
      <SubscribeItem src="/blog/articles.svg" color="bg-gray200" className=" flex-col lg:flex-row gap-y-6 lg:gap-y-0" />
    </>
  );
};

export default BlogPage;
