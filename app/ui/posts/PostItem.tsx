import { PostType } from '@/types';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';
import { Card } from '../elements/Card';
import { Image } from '../elements/Image';
import { Heading } from '../elements/Heading';
import { Typography } from '../elements/Typography';
import { Button } from '../elements/Button';
import { PostLabels } from './PostLabels';
import { cn } from '@/app/lib/utils';

type PostItemProps = {
  post: PostType;
  className?: string;
  classContainer?: string;
  classImage?: string
};
export const PostItem: React.FC<PostItemProps> = ({ post, className, classContainer, classImage }) => {
  const labels = post.labels;
  const checkedType = post.type === 'Podcast' ? 'Listen' : post.type === 'Video' ? 'Watch' : post.type === 'Article' ? 'Read' : 'Read';

  return (
    <Card classname={cn(`p-0 w-full max-w-[390px]`, className)}>
      <div className={cn(`w-full flex flex-col justify-between`, classContainer)}>
        <div className={cn(`w-full relative mb-4`, classImage)}>
          <span className=" bg-white  absolute top-[9px] px-2 left-[7px] h-[26px] rounded flex justify-center items-center gapx-[4px]">
            <Image src={post.icon} alt="icon" className="w-4 h-4" />
            <span className="text-sm leading-[150%] font-lato font-normal text-gray800"> {post.type}</span>
          </span>
          <Image src={post.image} alt="image" className="h-auto" />
        </div>
        <div className="flex flex-col justify-between items-start h-full">
          <PostLabels labels={labels} />
          <div className="px-2">
            <Heading variant="h6" className="text-[1.25rem] text-gray900 mb-2">
              {post.title.length > 64 ? post.title.slice(0, 64) + '...' : post.title}
            </Heading>
            <Typography className=" normal-case text-base font-lato font-normal leading-[160%]">{post.text.length > 99 ? post.text.slice(0, 94) + '...' : post.text}</Typography>
          </div>
          <div className="h-full mt-auto flex justify-start items-end">
            <Button
              href={`/blog/${post.id}`}
              variantCss="outline"
              sizeCss="lg"
              className="border-none text-base text-gray900 hover:bg-transparent hover:text-orange flex justify-between items-center gap-x-2 hover:svg"
            >
              {checkedType}
              <ArrowForwardIcon className="text-orange hover:scale-100 w-[24px] h-[24px]" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
