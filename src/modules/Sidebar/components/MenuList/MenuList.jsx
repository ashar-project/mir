import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import { menuElements, useSidebar } from '@/modules/Sidebar';
import { MenuIcon } from '..';

export const MenuList = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { open } = useSidebar();

  return (
    <List>
      {menuElements.map(({ label, navigation }) => {
        const isSelectedPage = navigation === pathname;

        return (
          <ListItem
            key={label}
            onClick={() => navigate(navigation)}
            sx={{ padding: '5px' }}
          >
            <ListItemButton
              sx={{
                borderRadius: '3px',
                backgroundColor: isSelectedPage && '#637E7E',
                ':hover': {
                  backgroundColor: isSelectedPage && '#637E7E',
                },
              }}
            >
              <ListItemIcon>
                <MenuIcon
                  path={navigation}
                  color={isSelectedPage ? 'white' : 'black'}
                />
              </ListItemIcon>
              <ListItemText
                primary={label}
                sx={{
                  fontWeight: 500,
                  fontSize: '12px',
                  opacity: open ? 1 : 0,
                  color: isSelectedPage ? 'white' : 'black',
                }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
