import { arrow, line, raiting, user } from '@/assets/icon';
import { SitePaths } from '@/routes/lib/UserRoutes';

export const userPath = [
  {
    img: user,
    to: SitePaths.world,
  },
  {
    img: line,
    to: SitePaths.received,
  },
  {
    img: raiting,
    to: SitePaths.gaveUp,
  },
  {
    img: arrow,
    to: SitePaths.pay,
  },
];

export const adminPath = [
  {
    img: user,
    to: SitePaths.admin,
  },
  {
    img: line,
    to: SitePaths.adminReceived,
  },
  {
    img: raiting,
    to: SitePaths.adminGraduated,
  },
  {
    img: arrow,
    to: SitePaths.adminGaveUp,
  },
];
