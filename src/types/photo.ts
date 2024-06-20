export interface IPhoto {
  id: number;
  location: string;
  imageUrl: string;
  imageId: string;
  createdAt: Date;
}

export type PhotoFormData = Omit<IPhoto, 'id' | 'createdAt'>;
