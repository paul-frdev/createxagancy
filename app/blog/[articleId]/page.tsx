import { getPostById, getPosts } from '@/app/actions/getPosts';
import { SubscribeItem } from '@/app/ui/SubscribeItem';
import { AboutArticle } from '@/app/ui/blog/AboutArticle';
import React from 'react';
import { parse } from 'date-fns';


const CoursePage = async ({ params }: { params: { articleId: string } }) => {
  const { articleId } = params;

  const post = await getPostById({ articleId: articleId });
  const posts = await getPosts({ number: 19 })

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
      <SubscribeItem src='/blog/articles.svg' bg='' color='bg-gray200' />
    </>
  );
};

export default CoursePage;
