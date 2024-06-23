export interface IContact {
  id: string;
  phone: string;
  email: string;
  facebook: string;
  instagram: string;
  addressUa: string;
  addressEn: string;
  latitude: string;
  longitude: string;
}

export type ContactFormData = Omit<IContact, 'id'>;
export type UpdateContactDto = Partial<ContactFormData>;
