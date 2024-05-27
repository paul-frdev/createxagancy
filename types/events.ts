type IFaq = {
  id: number;
  title: string;
  text: string;
  pannel: string;
};

type ISocial = {
  id: number;
  url: string;
};

export type IEvent = {
  id: number;
  time: string[];
  date: string;
  title: string;
  type: string;
  price: string;
  author: string;
  position: string;
  description: string;
  aboutAuthor: string;
  photo: string;
  faq: IFaq[];
  socialLinks: ISocial[];
};
