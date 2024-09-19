import { SitePaths } from "@/routes/lib/UserRoutes";

export const menuElements = [
  {
    label: "Мир",
    navigation: SitePaths.world,
  },
  {
    label: "Получившие",
    navigation: SitePaths.received,
  },
  {
    label: "Закончившие",
    navigation: SitePaths.graduated,
  },
  {
    label: "Сдался",
    navigation: SitePaths.gaveUp,
  },
  {
    label: "Оплатить",
    navigation: SitePaths.pay,
  },
  {
    label: "О нас",
    navigation: SitePaths.about,
  },
  {
    label: "Тех поддержка",
    navigation: SitePaths.techSupport,
  },
];

export const pageLabels = {
  [SitePaths.world]: "Мир",
  [SitePaths.received]: "Полученные",
  [SitePaths.graduated]: "Закончившие",
  [SitePaths.pay]: "Оплатить",
  [SitePaths.techSupport]: "Тех поддержка",
  [SitePaths.about]: "О нас",
};
