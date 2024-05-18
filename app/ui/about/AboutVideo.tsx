import React from 'react'
import { Container } from '../elements/Container'
import { Showreel } from '../Showreel'
import { Image } from '../elements/Image'
import { listVideo } from '@/constants'

export const AboutVideo = () => {
  return (
    <section className='w-full my-10'>
      <Container className=' flex justify-between items-center py-10'>
        <div className=' w-full max-w-[810px]'>
          <Showreel text='Watch Video' />
          <Image src='/assets/work.png' alt='work' />
        </div>
        <ul>
          {listVideo.map((item) => (
            <li key={item.id} className=' flex justify-start items-center gap-x-4'>
              <span className=' text-list font-lato font-black text-[3rem] leading-[130%] tracking-[1px]'>{item.numbers}</span>
              <span className=' text-[1.125rem] font-lato font-bold'>{item.text}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
