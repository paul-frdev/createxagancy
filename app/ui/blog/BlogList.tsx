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

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  /* set query params */
  const setParams = (key: string, value: string | number) => {
    params.set(key, value.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    setParams('page', '1');
    replace(`${pathname}?${params.toString()}`);
  }, []);

  const createPageURL = (pageNumber: number | string) => {
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`
  }

  return (
    < >
      <div className=' grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 max-w-fit mx-auto gap-x-6 gap-y-4 my-10'>
        {posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
      <Pagination currentPage={searchParams.get('page')} createPageURL={createPageURL} totalPages={totalPages} />
    </>
  )
}

export default BlogList;