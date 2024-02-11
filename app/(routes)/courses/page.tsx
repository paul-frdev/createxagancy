import { CourseList } from '@/components/CourseList';
import courses from '@/app/courses.json'
import { CourseType } from '@/types';
import { Certificate } from '@/components/common/Certificate';
import { Reviews } from '@/components/common/Reviews';
import reviews from '@/app/reviews.json';
import { Subscribe } from '@/components/common/Subscribe';



const CoursesPage = () => {

  const coursesPreview: CourseType[] = courses.map(course => ({
    id: course.id,
    src: course.src,
    alt: course.alt,
    label: course.label,
    colorLabel: course.colorLabel,
    text: course.text,
    author: course.author,
    price: course.price[0].price || ''
  }));


  return (
    <>
      <CourseList coursesPreview={coursesPreview} />
      <Reviews items={reviews} className='pt-[5rem]' />
      <Certificate />
      <Subscribe />
    </>
  )
}

export default CoursesPage;