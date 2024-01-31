import React from 'react'
import { Container } from '../ui/Container'
import { Typography } from '../ui/Typography'
import { Heading } from '../ui/Heading'
import { Button } from '../ui/Button'
import { PostsType } from '@/types'
import { PostItem } from '../PostItem'


type PostsProps = {
  items: PostsType[]
}
export const Posts: React.FC<PostsProps> = ({ items }) => {

  const labelBtns = ['Listen', 'Watch', 'Read'];

  return (
    <section className=' w-full bg-white mb-16'>
      <Container>
        <div className='py-[3.75rem] flex justify-between items-center'>
          <div>
            <Typography className='mb-0'>Our blog</Typography>
            <Heading variant='h3' className='text-[2.875rem]'>Latest posts</Heading>
          </div>
          <Button sizeCss='lg'>Go to blog</Button>
        </div>
        <div className='flex justify-between items-start'>
          {items.map((item) => (
            <PostItem key={item.id} post={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}
