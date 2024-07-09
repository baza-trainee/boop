export interface IApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  social: string;
  isProcessed: boolean;
  createdAt: Date;
}

export type ApplicationFormData = Omit<
  IApplication,
  'id' | 'isProcessed' | 'createdAt'
>;
