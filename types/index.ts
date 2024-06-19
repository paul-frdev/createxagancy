import { ILink } from '@/app/ui/SocialLinks';

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
  text?: string;
  src?: string;
  date?: string;
  icon?: string;
  time?: string;
  postId: number;
};
export type PostType = {
  id: number;
  icon: string;
  type: string;
  image: string;
  title: string;
  text: string;
  date: string;
  read: string;
  author: string;
  socialLinks?: ILink[];
  labels?: LabelPost[];
  tags?: string[];
};

export type DetailItem = { id: number; value: string };
