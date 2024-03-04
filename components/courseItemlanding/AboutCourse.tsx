import React from 'react'
import { Container } from '../ui/Container';
import { Typography } from '../ui/Typography';
import { Heading } from '../ui/Heading';
import { CourseItem, CourseType } from '@/types';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StarIcon from '@mui/icons-material/Star';
import { Card } from '../ui/Card';
import { Outline } from './Outline';
import { Image } from '../ui/Image';
import { SocialLinks } from './SocialLinks';

type AboutCourseProps = {
  course: CourseItem<CourseType>;
}
export const AboutCourse: React.FC<AboutCourseProps> = ({ course }) => {
  return (
    <section className='w-full'>
      <div className='w-full bg-orange02 py-24'>
        <Container className='w-full max-w-[1060px] px-4 mx-auto'>
          <Typography className='text-primary text-center'>course</Typography>
          <Heading variant='h3' className='text-center text-[2.875rem]'>
            User Experience. Principles of Human-Centered Design
          </Heading>
        </Container>
      </div>
      <Container className='my-[3.75rem]'>
        <div className='flex justify-between items-center mb-[10rem]'>
          <div className='flex-col justify-start items-start w-full max-w-[600px]'>
            <div className='mb-[3rem]'>
              <Heading variant='h4' className='text-[3.75rem] mb-[2.5rem]'>About the course</Heading>
              <Typography className=' normal-case text-base text-gray800 font-latoRegular font-[400] mb-0'>{course.description}</Typography>
            </div>
            <div>
              <Heading variant='h5' className=' font-latoBold font-[700] text-[1.75rem] mb-6'>You will learn:</Heading>
              {course.study.map(item => (
                <div className='flex justify-start items-center gap-x-2 mb-1' key={item}>
                  <CheckCircleOutlineIcon className='text-orange w-4 h-4' />
                  <Typography className='mb-0 normal-case text-base text-gray800 font-latoRegular font-[400]'>{item}</Typography>
                </div>
              ))}
            </div>
          </div>
          <Card classname='max-w-[495px] w-full py-[2.5rem] px-8 border border-solid border-light shadow-xl'>
            <Outline className='mb-14' title='Dates' date={course.dates[0].value} desc={course.dates[1].value} />
            <Outline className='mb-14' title='Duration' date={course.duration[0].value} desc={course.duration[1].value} />
            <Outline title='Duration' date={course.price[0].value} desc={course.price[1].value} />
          </Card>
        </div>
        <div className='flex justify-between items-start'>
          <Image src={course.src} alt='person' className='w-full max-w-[458px] h-auto' />
          <div className='w-full max-w-[600px] pt-4'>
            <Heading variant='h5' className='text-base font-latoBold font-[700] uppercase tracking-[1px] mb-2'>Course curator</Heading>
            <Heading variant='h5' className='text-[2.875rem] mb-4'>{course.author.slice(2)}</Heading>
            <Typography className=' normal-case text-rgbGray text-[1.25rem] font-latoRegular font-[400] leading-[150%] mb-8'>{course.position}</Typography>
            <div className='mb-8'>
              <div className='flex justify-start items-center gap-x-2 mb-1'>
                <StarIcon className='text-primary' />
                <Typography className='mb-0 normal-case text-base text-gray700'>{course.rate}</Typography>
              </div>
              <div className='flex justify-start items-center gap-x-2 mb-1'>
                <PlayCircleOutlineIcon className='text-primary' />
                <Typography className='mb-0 normal-case text-base text-gray700'>{course.quantityCourses}</Typography>
              </div>
              <div className='flex justify-start items-center gap-x-2'>
                <PersonOutlineIcon className='text-primary' />
                <Typography className='mb-0 normal-case text-base text-gray700'>{course.quantityStudents}</Typography>
              </div>
            </div>
            <Typography className=' normal-case text-base font-latoRegular font-[400] text-rgbGray mb-10'>{course.aboutAuthor}</Typography>
            <SocialLinks socialLinks={course.socialLinks!} />
          </div>
        </div>
      </Container>
    </section>
  )
}
