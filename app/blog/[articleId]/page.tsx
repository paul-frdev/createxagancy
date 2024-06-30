import { getPostById, getPosts } from '@/app/actions/getPosts';
import { SubscribeItem } from '@/app/ui/SubscribeItem';
import { AboutArticle } from '@/app/ui/blog/AboutArticle';
import React from 'react';
import { parse } from 'date-fns';
import { Metadata } from 'next';
import { MayLikeCarousel } from '@/app/ui/blog/MayLikeCarousel';



export const metadata: Metadata = {
  title: 'Article',
};

const CoursePage = async ({ params }: { params: { articleId: string } }) => {
  const { articleId } = params;

  const post = await getPostById({ articleId: articleId });
  const posts = await getPosts({ number: 19 });
  const postsCarousel = await getPosts({ number: 6 })

  const formattedPost = {
    ...post,
    tags: post.tags.map(tag => (tag.text)),
  }


  const trendingPosts = posts
    .sort((a, b) => parse(b.date, 'MMMM dd, yyyy', new Date()).getTime() - parse(a.date, 'MMMM dd, yyyy', new Date()).getTime())
    .slice(0, 3);

  return (
    <>
      <AboutArticle post={formattedPost} trendingPosts={trendingPosts} />
      <SubscribeItem src='/blog/articles.svg' color='bg-gray200' className=' flex-col lg:flex-row gap-y-6 lg:gap-y-0' />
      <MayLikeCarousel items={postsCarousel} />
    </>
  );
};

export default CoursePage;
