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

export type DetailItem = { id: number; value: string };

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
export type CourseItem<T extends CourseType> = Omit<T, 'price'> & {
  description: string;
  study: string[];
  dates: { id: number; value: string }[];
  duration: { id: number; value: string }[];
  price: { id: number; value: string }[];
  socialLinks?: string[];
  position: string;
  rate: string;
  quantityCourses: string;
  quantityStudents: string;
  aboutAuthor: string;
};
