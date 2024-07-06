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

export const BUTTON_TITLE = {
  partners: 'Партнера',
  friends: 'Друга',
};

export const ACTION_NAME = {
  Редагування: 'Редагування',
  Додавання: 'Додавання',
};

export const EDIT_TYPES = {
  partners: 'edit-partners',
  friends: 'edit-friends',
};

export const ADD_TYPES = {
  partners: 'add-partners',
  friends: 'add-friends',
};

export interface PropsPartnersFriends {
  title: string;
  section: keyof typeof SECTION_PARTNERS_FRIENDS;
  buttonTitle: keyof typeof BUTTON_TITLE;
  editType: keyof typeof EDIT_TYPES;
  addType: keyof typeof ADD_TYPES;
}
