import { arrow, line, raiting, user } from '@/assets/icon';

export const userPath = [
  {
    img: user,
    to: '/',
  },
  {
    img: line,
    to: '/graduated',
  },
  {
    img: raiting,
    to: '/gave-up',
  },
  {
    img: arrow,
    to: '/pay',
  },
];
export const adminPath = [
  {
    img: user,
    to: '/admin', 
  },
  {
    img: line,
    to: '/admin/received-page', // Обратите внимание, что тут полный путь с '/admin'
  },
  {
    img: raiting,
    to: '/admin/graduated-page',
  },
  {
    img: arrow,
    to: '/admin/gave-page',
  },
];
