export interface INews {
  id: number;
  imageUrl: string;
  imageId: string;
  sourceLink: string;
  createdAt: Date;
  location: string;
  titleUA: string;
  textUA: string;
  titleEN: string;
  textEN: string;
  titleIT: string;
  textIT: string;
}

export type NewsFormData = Omit<INews, 'id' | 'createdAt'>;
