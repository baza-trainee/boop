export const PHOTO_LOCATION_VALUES = [
  'Головна сторінка. Галерея',
  'Школа клоунів. Світлини',
  'Модальне вікно. Посмішки',
];

export const CONTACT_INFO = {
  address: '01135, м. Київ, вул. В.Чорновола, 28/1',
  email: 'bulkina.ola@gmail.com',
  phone: '+380 67 596 1600',
  instagramUrl: 'https://instagram.com/boop.ukraine',
  instagramText: 'boop.ukraine',
  facebookUrl: 'https://facebook.com/Boop.ukraine/',
  facebookText: 'facebook.com/Boop.ukraine',
};

export const ENCODED_ADDRESS = encodeURIComponent(CONTACT_INFO.address);
export const MAP_URL = `https://www.google.com/maps?q=${ENCODED_ADDRESS}&output=embed&z=17`;
