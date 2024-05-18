export type ICourseId = {
  courseId: string;
};

export type PriceCourse = { id: number; value: string; courseId: number };
export type ValueCourse = { id: number; value: string };


export type CourseType = {
  id?: number;
  createdAt: Date;
  updatedAt: Date;
  src: string;
  alt: string;
  label: string;
  colorLabel: string;
  text: string;
  price: PriceCourse[];
  author: string;
  description: string; 
  study?: string[];
  dates?: ValueCourse[];
  durations?: ValueCourse[];
  socialLinks?: { id: number; url: string }[];
  position: string;
  rate: string;
  quantityCourses: string;
  quantityStudents: string;
  aboutAuthor: string;
};

export type CourseItem = Omit<CourseType, 'study'> & {
  study: string[]; 
};
