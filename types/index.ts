export type ReviewsType = {
  id: number;
  text: string;
  src: string;
  author: string;
  course: string;
};

export type LabelPost = {
  id: number;
  icon?: string;
  src?: string;
  date?: string;
  time?: string;
  text?: string;
};
export type PostsType = {
  id: number;
  icon: string;
  type: string;
  image: string;
  labels: LabelPost[];
  title: string;
  text: string;
};

export type CourseType = {
  id: number;
  src: string;
  alt: string;
  label: string;
  colorLabel: string;
  text: string;
  price: string;
  author: string;
};
export type CourseItem = CourseType & {
  description: string;
  study: string[];
  dates: [{ id: number; dates: string }, { id: number; description: string }];
  duration: [{ id: number; duration: string }, { id: number; description: string }];
  price: [{ id: number; price: string }, { id: number; description: string }];
  position: string;
  rate: string;
  quantityCourses: string;
  quantityStudents: string;
  aboutAuthor: string;
};
