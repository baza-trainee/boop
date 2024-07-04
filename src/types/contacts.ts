export interface IContact {
  id: string;
  phone: string;
  email: string;
  facebook: string;
  instagram: string;
  addressUa: string;
  addressEn: string;
  addressIt: string;
}

export type ContactFormData = Omit<IContact, 'id'>;
