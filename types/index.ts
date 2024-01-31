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
