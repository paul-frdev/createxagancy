import { Search } from '../Search';
import { SocialLinks } from '../SocialLinks';
import { Container } from '../elements/Container';
import { Heading } from '../elements/Heading';
import { Image } from '../elements/Image';
import { PostLabels } from '../posts/PostLabels';
import { Author } from './Author';
import { Breadcrumbs } from './Breadcrums';
import { Tags } from './Tags';
import { TrendingArticles } from './TrendingArticles';
import { PostType } from '@/types';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import React from 'react';

type AboutArticleProps = {
  post: PostType;
  trendingPosts: PostType[];
};

const tags = ['marketing', 'recruiting', 'coding', 'learning', 'HR', 'self-development'];
export const AboutArticle: React.FC<AboutArticleProps> = ({ post, trendingPosts }) => {
  const strOfTags = post.tags.join(' ');
  const links = post.socialLinks.map((link, index) => ({
    id: index + 1,
    url: link.url,
  }));

  return (
    <section className=" w-full">
      <Container className="w-full flex justify-between xmd:gap-x-4 items-start pt-20 pb-10">
        <div className=" w-full xmd:max-w-[810px]">
          <Breadcrumbs
            breadcrumbs={[
              { label: 'blog', href: '/blog' },
              {
                label: strOfTags.length > 10 ? strOfTags.slice(0, 20) + '...' : strOfTags,
                href: `blog/${post.id}`,
                active: true,
              },
            ]}
            Icon={<FeedOutlinedIcon />}
          />
          <Heading className="text-[2rem] xmd:text-[2.875rem] text-center xmd:text-left mb-6" variant="h3">
            {post.title}
          </Heading>
          <div className="flex justify-between items-start w-full">
            <div className=" w-full xmd:max-w-[810px]">
              <div className="flex justify-between items-center w-full mb-10">
                <PostLabels labels={post.labels} className=" w-full max-w-[340px] mb-0" />
                <SocialLinks socialLinks={post.socialLinks} isShare />
              </div>
              <Image src={post.image} className=" w-full h-[360px] object-cover object-center rounded" alt="image" />
              <div className="mb-10">{/* Main text */}</div>
              <div className="flex gap-y-3 sm:gap-y-0 flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center w-full">
                <Tags tags={post.tags} className="flex-col xsm:flex-row justify-start xsm:justify-center items-start xsm:items-center gap-y-1 xsm:gap-y-0" />
                <SocialLinks socialLinks={post.socialLinks} isShare />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden xmd:flex flex-col justify-start items-start">
          <Search className="w-full min-w-[300px] max-w-[342px]" />
          <Author links={links} />
          <div className="flex flex-col justify-start items-start gap-y-6 mb-16">
            {trendingPosts.map((post) => (
              <TrendingArticles key={post.id} trendingPost={post} />
            ))}
          </div>
          <div>
            <Heading variant="h3" className=" uppercase text-base mb-8 text-gray900 font-bold">
              Tags:
            </Heading>
            <Tags tags={tags} isTitle={false} className="flex-wrap gap-y-4" />
          </div>
        </div>
      </Container>
    </section>
  );
};
