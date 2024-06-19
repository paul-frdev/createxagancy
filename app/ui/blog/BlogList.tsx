'use client'

import React, { useEffect, useState } from 'react'
import { Container } from '../elements/Container'
import { Head } from '../Head'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Filters } from '../Filters';
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
    title: 'all',
  },
  {
    id: 2,
    title: 'articles',
    icon: FeedOutlinedIcon,
  },
  {
    id: 3,
    title: 'videos',
    icon: PlayCircleOutlinedIcon,
  },
  {
    id: 4,
    title: 'podcasts',
    icon: MicNoneOutlinedIcon,
  },
];


const articleType = ['all', 'articles', 'videos', 'podcasts'];

type BlogListProps = {
  posts: PostType[]
}
const BlogList: React.FC<BlogListProps> = ({ posts }) => {


  const [type, setType] = useState(articleType[0])
  const [category, setCategory] = useState('all')

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  const setParams = (key: string, value: string | number) => {
    params.set(key, value.toString());
  };

  useEffect(() => {
    setParams('type', type);
    setParams('category', category);
    setParams('page', '1');
    replace(`${pathname}?${params.toString()}`);
  }, [type, category]);

  const createPageURL = (pageNumber: number | string) => {
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };



  const filterItems = () => {

  }

  return (
    <section className='w-full my-5 xmd:my-10 '>
      <Container className='py-5 xmd:py-10'>
        <Head text='Our blog' title='Createx School Journal' />
        <div className='flex justify-between w-full max-w-[90%] items-center mb-10'>
          <Categories className='justify-start gap-x-12 w-fit' filterItems={filterItems} categoryTitle={blogCategoryTitle} />
          <BaseSelect items={categoryItems} setQuery={setCategory} />
          {/* <Search /> */}
        </div>
        <div className=' grid grid-cols-3 gap-x-6 gap-y-4 mb-12'>
          {posts.map(post => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
        <Pagination createPageURL={createPageURL} totalPages={4} currentPage={searchParams.get('page')} />
      </Container>
    </section>
  )
}

export default BlogList;