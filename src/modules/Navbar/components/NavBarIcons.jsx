import { arrow, line, raiting, user } from '@/assets/icon';

export const MenuIcon = ({ path, color = 'white' }) => {
  const menuIcons = {
    [SitePaths.world]: <WorldIcon color={color} size={26} />,
    [SitePaths.received]: <ReceivedIcon color={color} size={26} />,
    [SitePaths.graduated]: <GraduatedIcon color={color} size={26} />,
    [SitePaths.gaveUp]: <GaveUpIcon color={color} size={26} />,
    [SitePaths.pay]: <PayIcon color={color} size={26} />,
    [SitePaths.user]: <AboutUsIcon color={color} size={26} />,
    [SitePaths.techSupport]: <HeadphonesIcon color={color} size={26} />,
  };

  return menuIcons[path];
};
