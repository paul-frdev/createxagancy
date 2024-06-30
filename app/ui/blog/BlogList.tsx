'use client'

import React, { useEffect } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import { PostType } from '@/types';
import { PostItem } from '../posts/PostItem';
import { Pagination } from '../pagination/Pagination';

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
}
const BlogList: React.FC<BlogListProps> = ({ posts, totalPages }) => {

  return (
    < >
      <div className=' grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 max-w-fit mx-auto gap-x-6 gap-y-4 my-10'>
        {posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
      <Pagination  totalPages={totalPages} />
    </>
  )
}

export default BlogList;