export interface IBlog {
  id: number;
  imageUrl: string;
  imageId: string;
  createdAt: Date;
  location: string;
  titleUA: string;
  textUA: string;
  titleEN: string;
  textEN: string;
  titleIT: string;
  textIT: string;
}

export type BlogFormData = Omit<IBlog, 'id' | 'createdAt' | 'location'>;
