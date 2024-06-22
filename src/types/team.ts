export interface ITeamMember {
  id: string;
  nameUa: string;
  nameEn: string;
  nameIt: string;
  imageUrl: string;
  imageId: string;
}

export type TeamFormData = Omit<ITeamMember, 'id'>;
