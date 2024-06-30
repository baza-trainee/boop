export interface IContact {
  id: string;
  phone: string;
  email: string;
  facebook: string;
  instagram: string;
  address: string;
}

export type ContactFormData = Omit<IContact, 'id'>;
