export const translateDocs = (title: string) => {
  if (title === 'terms_of_use') {
    return 'Правила користування сайтом';
  }
  if (title === 'privacy_policy') {
    return 'Політика конфіденційності';
  }
  if (title === 'accounting') {
    return 'Звітність';
  }
  if (title === 'regulations') {
    return 'Статут';
  }
  return title;
};
