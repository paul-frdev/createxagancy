export type ReviewsType = {
  id?: number;
  createdAt: Date;
  updatedAt: Date;
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
  createdAt: Date;
  updatedAt: Date;
  icon: string;
  type: string;
  image: string;
  labels?: LabelPost[];
  title: string;
  text: string;
};

export type DetailItem = { id: number; value: string };
