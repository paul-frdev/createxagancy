'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { Container } from '../elements/Container'
import { Head } from '../Head'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Categories } from '../Categories';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import { BaseSelect } from '../elements/BaseSelect';
import { Search } from '../Search';
import { categoryItems } from '@/constants';
import { PostType } from '@/types';
import { PostItem } from '../posts/PostItem';
import { Pagination } from '../pagination/Pagination';

const blogCategoryTitle = [
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

  const [type, setType] = useState('All')
  const [filter, setFilter] = useState('All')

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
    setParams('type', type);
    setParams('filter', filter);
    setParams('page', '1');
    replace(`${pathname}?${params.toString()}`);
  }, [filter, type]);

  const filterItems = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const element = event.target as HTMLButtonElement;
    setFilter(element.value as any);
  }

  const createPageURL = (pageNumber: number | string) => {
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`
  }

  return (
    <section className='w-full my-5 xmd:my-10 '>
      <Container className='py-5 xmd:py-10'>
        <Head text='Our blog' title='Createx School Journal' />
        <div className='flex justify-between w-full max-w-[90%] items-center mb-10'>
          <Categories className='justify-start gap-x-12 w-fit' filterItems={filterItems} categoryTitle={blogCategoryTitle} />
          <BaseSelect items={categoryItems} setQuery={setType} />
          {/* <Search /> */}
        </div>
        <div className=' grid grid-cols-3 gap-x-6 gap-y-4 mb-12'>
          {posts.map(post => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
        <Pagination currentPage={searchParams.get('page')} createPageURL={createPageURL} totalPages={totalPages} />
      </Container>
    </section>
  )
}

export default BlogList;