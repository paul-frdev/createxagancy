import { Button } from '../elements/Button';
import { Container } from '../elements/Container';
import { Heading } from '../elements/Heading';
import { Typography } from '../elements/Typography';
import { PostItem } from '../posts/PostItem';
import { PostsType } from '@/types';
import React from 'react';

type PostsProps = {
  items: PostsType[];
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
          <Button sizeCss="lg">Go to blog</Button>
        </div>
        <div className="flex flex-col xl:flex-row  gap-x-4 flex-nowrap xl:flex-wrap gap-y-0 xl:gap-y-4 justify-between items-center xl:items-start">
          {items.map((item) => (
            <PostItem key={item.id} post={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};
