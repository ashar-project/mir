import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import { menuElements } from "@/modules/Sidebar";
import { MenuIcon } from "../MenuIcon";

export const MenuList = ({ open }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <List>
      {menuElements.map(({ label, navigation }) => {
        const isSelectedPage = navigation === pathname;

        return (
          <ListItem
            onClick={() => navigate(navigation)}
            key={label}
            sx={{ padding: "5px" }}
          >
            <ListItemButton
              px={2.5}
              // minHeight={48}
              // justifyContent={open ? "initial" : "center"}
              // Todo: сделать рефактор данного блока кода
              sx={{
                borderRadius: "3px",
                backgroundColor: isSelectedPage && "#637E7E",
                ":hover": {
                  backgroundColor: isSelectedPage && "#637E7E",
                },
              }}
            >
              <ListItemIcon
                // minWidth={0}
                // justifyContent="center"
                mr={open ? 3 : "auto"}
              >
                <MenuIcon
                  path={navigation}
                  color={isSelectedPage ? "white" : "black"}
                />
              </ListItemIcon>
              <ListItemText
                primary={label}
                opacity={open ? 1 : 0}
                sx={{
                  fontWeight: 500,
                  fontSize: "12px",
                  color: isSelectedPage ? "white" : "black",
                }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
