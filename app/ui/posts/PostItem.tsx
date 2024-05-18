import { Button } from '../elements/Button';
import { Card } from '../elements/Card';
import { Heading } from '../elements/Heading';
import { Image } from '../elements/Image';
import { Typography } from '../elements/Typography';
import { PostsType } from '@/types';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';

type PostItemProps = {
  post: PostsType;
};
export const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const labels = post.labels;
  const checkedType = post.type === 'Podcast' ? 'Listen' : post.type === 'Video' ? 'Watch' : post.type === 'Article' ? 'Read' : 'Read';

  return (
    <Card classname="p-0 w-full max-w-[390px] md:max-w-[1000px] xl:max-w-[390px] md:h-[241px] xl:h-auto">
      <div className="w-full flex flex-col md:flex-row xl:flex-col justify-between">
        <div className="w-full relative mb-4 md:mb-0 xl:mb-4 md:max-w-[314px] xl:max-w-full">
          <span className=" bg-white  absolute top-[9px] px-2 left-[7px] h-[26px] rounded flex justify-center items-center gapx-[4px]">
            <Image src={post.icon} alt="icon" className="w-4 h-4" />
            <span className="text-sm leading-[150%] font-lato font-normal text-gray800"> {post.type}</span>
          </span>
          <Image src={post.image} alt="image" className="h-auto" />
        </div>
        <div className="flex flex-col justify-between items-start h-full">
          <div className="flex justify-start items-start text-sm mb-2 px-2 md:py-3">
            {labels?.map((label) => (
              <React.Fragment key={label.id}>
                {label.text ? <span className="pr-[12px] font-lato font-bold text-gray700">{label.text}</span> : null}
                {label.src && label.date ? (
                  <div className="flex justify-between items-center gap-x-[2.5px] px-[12px] border-x border-gray700 ">
                    <Image src={label.src as string} alt="icon" className="w-4 h-4 text-gray700" />
                    <span className=" font-lato font-normal text-gray700">{label.date}</span>
                  </div>
                ) : null}
                {label.icon && label.time ? (
                  <span className="flex items-center gap-x-[2.5px] pl-[12px]">
                    <Image src={label.icon} alt="icon" className="w-4 h-4 text-gray700" />
                    <span className=" font-lato font-bold text-gray700">{label.time}</span>
                  </span>
                ) : null}
              </React.Fragment>
            ))}
          </div>
          <div className="px-2">
            <Heading variant="h6" className="text-[1.25rem] text-gray900 mb-2">
              {post.title.length > 64 ? post.title.slice(0, 64) + '...' : post.title}
            </Heading>
            <Typography className=" normal-case text-base font-lato font-normal leading-[160%]">{post.text.length > 99 ? post.text.slice(0, 94) + '...' : post.text}</Typography>
          </div>
          <div className="h-full mt-auto flex justify-start items-end">
            <Button
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
