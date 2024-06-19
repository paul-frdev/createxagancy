import React from 'react'
import { Container } from '../elements/Container'
import { PostType } from '@/types'
import { Breadcrumbs } from './Breadcrums';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import { Heading } from '../elements/Heading';
import { Image } from '../elements/Image';
import { PostLabels } from '../posts/PostLabels';
import { SocialLinks } from '../SocialLinks';
import Link from 'next/link';
import { Search } from '../Search';
import { Author } from './Author';
import { TrendingArticles } from './TrendingArticles';


type AboutArticleProps = {
  post: PostType;
  trendingPosts: PostType[]
}
export const AboutArticle: React.FC<AboutArticleProps> = ({ post, trendingPosts }) => {

  const strOfTags = post.tags.join(' ')
  const links = post.socialLinks.map((link, index) => ({
    id: index + 1,
    url: link.url
  }))

  return (
    <section className=' w-full'>
      <Container className='w-full flex justify-between items-start pt-20 pb-10'>
        <div className=' w-full max-w-[810px]'>
          <Breadcrumbs breadcrumbs={[
            { label: 'blog', href: '/blog' },
            {
              label: strOfTags.length > 10 ? strOfTags.slice(0, 20) + '...' : strOfTags,
              href: `blog/${post.id}`,
              active: true,
            },
          ]}
            Icon={<FeedOutlinedIcon />}
          />
          <Heading className='text-[2rem] xmd:text-[2.875rem] mb-6' variant='h3'>{post.title}</Heading>
          <div className='flex justify-between items-start w-full'>
            <div className=' w-full max-w-[810px]'>
              <div className='flex justify-between items-center w-full mb-10'>
                <PostLabels labels={post.labels} className=' w-full max-w-[340px]' />
                <SocialLinks socialLinks={post.socialLinks} isShare />
              </div>
              <Image src={post.image} className=' w-full' alt='image' />
              <div className='mb-10'>
                {/* Main text */}
              </div>
              <div className='flex justify-between items-center w-full'>
                <div className=' w-full max-w-[380px] flex justify-start items-center flex-nowrap gap-x-3'>
                  <span className='text-base font-lato font-bold text-gray900 text-nowrap'>Tags :</span>
                  {post.tags.map((tag, index) => (
                    <Link className=' text-nowrap rounded hover:bg-gray300 transition-all duration-300 text-[0.875rem] px-4 py-2 font-lato font-bold text-gray700 border border-solid border-gray200' key={index} href={tag}>
                      #{tag}
                    </Link>
                  ))}
                </div>
                <SocialLinks socialLinks={post.socialLinks} isShare />
              </div>
            </div>
          </div>
        </div>
        <div className=' flex flex-col justify-start items-start mt-6'>
          <Search />
          <Author links={links} />
          <div className='flex flex-col justify-start items-start gap-y-6'>
            {trendingPosts.map(post => (
              <TrendingArticles key={post.id} trendingPost={post} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
