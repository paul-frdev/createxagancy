import { Image } from '../elements/Image';
import { Typography } from '../elements/Typography';
import { PostLabels } from '../posts/PostLabels';
import { PostType } from '@/types';
import Link from 'next/link';
import React from 'react';

type TrendingArticlesProps = {
  trendingPost: PostType;
};
export const TrendingArticles = ({ trendingPost }: TrendingArticlesProps) => {
  return (
    <Link href={trendingPost.id.toString()} className="flex justify-between items-center w-full max-w-[342px] gap-x-4">
      <Image src={trendingPost.image} alt="author" className="w-[100px] h-[100px] rounded" />
      <div className="flex flex-col">
        <PostLabels labels={trendingPost.labels} className=" w-full max-w-[340px] px-0" />
        <Typography className=" hover:text-primary text-gray700 text-sm normal-case">Curator of Marketing Course</Typography>
      </div>
    </Link>
  );
};
