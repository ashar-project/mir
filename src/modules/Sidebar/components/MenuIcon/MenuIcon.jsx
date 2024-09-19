import { SitePaths } from "@/routes/lib/UserRoutes";

import {
  PiTrayArrowDown as ReceivedIcon,
  PiFlagBold as GaveUpIcon,
  PiWallet as PayIcon,
} from "react-icons/pi";

import {
  TbUserCheck as GraduatedIcon,
  TbWorld as WorldIcon,
  TbUsers as AboutUsIcon,
  TbHeadphones as HeadphonesIcon,
} from "react-icons/tb";

export const MenuIcon = ({ path, color = "white" }) => {
  const menuIcons = {
    [SitePaths.world]: <WorldIcon color={color} size={26} />,
    [SitePaths.received]: <ReceivedIcon color={color} size={26} />,
    [SitePaths.graduated]: <GraduatedIcon color={color} size={26} />,
    [SitePaths.gaveUp]: <GaveUpIcon color={color} size={26} />,
    [SitePaths.pay]: <PayIcon color={color} size={26} />,
    [SitePaths.about]: <AboutUsIcon color={color} size={26} />,
    [SitePaths.techSupport]: <HeadphonesIcon color={color} size={26} />,
  };

  return menuIcons[path];
};
