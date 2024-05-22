import { Showreel } from '../Showreel';
import { Container } from '../elements/Container';
import { Image } from '../elements/Image';
import { listVideo } from '@/constants';
import React from 'react';

export const AboutVideo = () => {
  return (
    <section className="w-full my-5 xmd:my-10">
      <Container className=" flex flex-col xmd:flex-row justify-between items-center gap-x-4 py-5 xmd:py-10">
        <div className=" w-full max-w-[810px]">
          <Showreel text="Watch Video" />
          <Image src="/assets/work.png" alt="work" className='w-full max-w-[810px] h-full' />
        </div>
        <ul className='flex flex-col justify-center xmd:justify-start items-center xmd:items-start gap-y-4'>
          {listVideo.map((item) => (
            <li key={item.id} className=" flex flex-col xmd:flex-row justify-center xmd:justify-start items-center gap-x-6">
              <span className=" text-list font-lato font-black text-[3rem] leading-[130%] tracking-[1px]">{item.numbers}</span>
              <span className=" text-[1.125rem] font-lato font-bold text-nowrap">{item.text}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
