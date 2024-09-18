import { useNavigate } from 'react-router-dom';
import {
  Stack,
  Drawer as DrawerMUI,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { LogoMobile } from '@/assets/icon';
import { useSidebar } from '@/modules/Sidebar';
import { SitePaths } from '@/routes/lib/UserRoutes';

import { MenuIcon } from '../..';

export const MobileSidebar = () => {
  const { open, setOpen } = useSidebar();
  const navigate = useNavigate();

  return (
    <DrawerMUI open={open} onClose={() => setOpen(false)}>
      <Stack
        width="100%"
        height="100px"
        justifyContent="center"
        alignItems="center"
      >
        <LogoMobile />
      </Stack>

      <List>
        <ListItem onClick={() => navigate(SitePaths.graduated)}>
          <ListItemButton>
            <ListItemIcon>
              <MenuIcon path={SitePaths.graduated} color="#818093" />
            </ListItemIcon>
            <ListItemText>Закончившие</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem onClick={() => navigate(SitePaths.about)}>
          <ListItemButton>
            <ListItemIcon>
              <MenuIcon path={SitePaths.about} color="#818093" />
            </ListItemIcon>
            <ListItemText>О нас</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem onClick={() => navigate(SitePaths.techSupport)}>
          <ListItemButton>
            <ListItemIcon>
              <MenuIcon path={SitePaths.techSupport} color="#818093" />
            </ListItemIcon>
            <ListItemText>Тех поддержка</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </DrawerMUI>
  );
};
