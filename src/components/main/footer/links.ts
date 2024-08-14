interface INavigationLink {
  name: string;
  url: '/' | '/about' | '/school' | '/contacts';
}

export const navigationLinks: INavigationLink[] = [
  { name: 'about', url: '/about' },
  { name: 'school', url: '/school' },
  { name: 'contacts', url: '/contacts' },
  { name: 'main', url: '/' },
];

export const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com',
    icon: '/icons/instagram.svg',
  },
  {
    name: 'Telegram',
    url: 'https://www.facebook.com',
    icon: '/icons/facebook.svg',
  },
];

export const associationLinks = [
  {
    name: 'red_nouses',
    url: 'https://www.facebook.com/red.noses.rivne/?eid=ARAFuOGs_a0ia0_MZIvY_bHcHnu3CaFw9wAGhDPbv1GPnDALaG7QdjdZMsGH1whDqEFYGGg1dJZG0ENZ&fref=mentions&__xts__[0]=68.ARBhKyQ8etPA8WCHKXnFGYMj8DnZMToLwk-ouezZHybeLq6Wm5UtSGfUhw5v7dVmQTAPCZo1V74SmRdGT4taPePoexyQMhsyM7zwLKSsBy1RAEsbUqBS4fQ8zevX5pfChW8W_imYfeqpaR2WR2fOLOYp9msCgCe0yickFPHdIqe3tvVuEl0_i1WqXNhw-GRFGApeOhoidC2LM-5aTi2as462HHeaaC-ExHUOMVGIKcS8o60M23h0MqqGUA_-AFx5uotDunV69g3uCmn1CHTG0DLaMCgNHRoeQBmAL_ia-3P-ZU6i53BoVqS9qcyhuEWWLjIdMt-oQUDQfZfUvovu0CjVeQ',
    openInNewTab: true,
  },
  {
    name: 'funny_nouses',
    url: 'https://www.facebook.com/groups/smehonosy/',
    openInNewTab: true,
  },
  {
    name: 'doctor_clown',
    url: 'https://www.facebook.com/pomogaem.DrClown',
    openInNewTab: true,
  },
  {
    name: 'smile_nouses',
    url: 'https://www.facebook.com/fayni.nosy.kharkiv',
    openInNewTab: true,
  },
];
