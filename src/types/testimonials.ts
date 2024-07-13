export interface ITestimonial {
  id: string;
  nameUa: string;
  nameEn: string;
  nameIt: string;
  reviewUa: string;
  reviewEn: string;
  reviewIt: string;
  imageUrl: string;
  imageId: string;
  createdAt: Date;
}

export type TestimonialFormData = Omit<ITestimonial, 'id' | 'createdAt'>;
