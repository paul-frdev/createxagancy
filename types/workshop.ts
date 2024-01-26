export type WorkshopPreview = {
  id: number;
  date: string;
  time: string[];
  title: string;
  type: string;
};

export type EventType = WorkshopPreview & {
  price: string;
  author: string;
  position: string;
  description: string;
  aboutAuthor: string;
  src: string;
};
