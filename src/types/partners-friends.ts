export interface PartnersFriends {
  id: string;
  logoUrl: string;
  logoId: string;
  link: string;
  section: string;
  createdAt: Date;
}
export type PartnersFriendsFormData = Omit<PartnersFriends, 'id' | 'createdAt'>;

export const SECTION_PARTNERS_FRIENDS = {
  friends: 'friends',
  partners: 'partners',
};
