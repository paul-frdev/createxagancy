
import { PostType } from '@/types';
import React from 'react';
import { Container } from '../elements/Container';
import { Typography } from '../elements/Typography';
import { Heading } from '../elements/Heading';
import { Button } from '../elements/Button';
import { PostItem } from './PostItem';

type PostsProps = {
  items: PostType[];
};
export const Posts: React.FC<PostsProps> = ({ items }) => {

  return (
    <section className=" w-full bg-white mb-16">
      <Container>
        <div className="py-[2rem]  md:py-[3.75rem] flex flex-col xsm:flex-row justify-between items-start xsm:items-center">
          <div>
            <Typography className="mb-0">Our blog</Typography>
            <Heading variant="h3" className="text-[2.3rem] md:text-[2.875rem]">
              Latest posts
            </Heading>
          </div>
          <Button href='/blog' sizeCss="lg">Go to blog</Button>
        </div>
        <div className="flex flex-col xl:flex-row  gap-x-4 flex-nowrap xl:flex-wrap gap-y-4 justify-between items-center xl:items-start">
          {items.map((item) => (
            <PostItem key={item.id} post={item} classContainer="md:flex-row xl:flex-col" className="md:max-w-[1000px] xl:max-w-[390px] md:h-[241px] xl:h-auto" classImage="md:mb-0 xl:mb-4 md:max-w-[314px] xl:max-w-full" />
          ))}
        </div>
      </Container>
    </section>
  );
};
