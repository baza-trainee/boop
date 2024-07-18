export interface INews {
  id: number;
  sourceLink: string;
  imageLink: string;
  imageId: string;
  createdAt: Date;
  titleUA: string;
  textUA: string;
  titleEN: string;
  textEN: string;
  titleIT: string;
  textIT: string;
}

export type NewsFormData = Omit<INews, 'id' | 'createdAt'>;
