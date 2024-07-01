'use client';

import { Pagination } from '../pagination/Pagination';
import { PostItem } from '../posts/PostItem';
import { PostType } from '@/types';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

export const blogCategoryTitle = [
  {
    id: 1,
    title: 'All',
  },
  {
    id: 2,
    title: 'Articles',
    icon: FeedOutlinedIcon,
  },
  {
    id: 3,
    title: 'Videos',
    icon: PlayCircleOutlinedIcon,
  },
  {
    id: 4,
    title: 'Podcasts',
    icon: MicNoneOutlinedIcon,
  },
];

type BlogListProps = {
  posts: PostType[];
  totalPages: number;
};
const BlogList: React.FC<BlogListProps> = ({ posts, totalPages }) => {
  return (
    <>
      <div className=" grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 max-w-fit mx-auto gap-x-6 gap-y-4 my-10">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </>
  );
};

export default BlogList;
