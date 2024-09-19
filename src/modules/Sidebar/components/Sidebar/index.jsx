import { useCheckClient } from '@/helpers';
import { MobileSidebar } from './MobileSidebar';
import { DesktopSidebar } from './DesktopSidebar';

export const Sidebar = () => {
  const { isMobile } = useCheckClient();

  return isMobile ? <MobileSidebar /> : <DesktopSidebar />;
};
