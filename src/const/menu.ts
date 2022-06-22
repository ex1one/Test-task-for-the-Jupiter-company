interface IMenu {
  title: string;
  path: string;
}

const menu: IMenu[] = [
  { title: 'About', path: '/about' },
  { title: 'Services ', path: '/services' },
  { title: 'Pricing', path: '/pricing' },
  { title: 'Blog', path: '/blog' },
];

export default menu;
