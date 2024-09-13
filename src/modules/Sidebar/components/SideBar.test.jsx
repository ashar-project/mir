import { Drawer, Button, List, ListItem, Box } from "@mui/material";
import { UserCard } from ".";
import { Logo } from "@/assets/icon";

export const Sidebar = () => {
  return (
    <>
      <Drawer open={true}>
        <DrawerList />
      </Drawer>
    </>
  );
};

const DrawerList = () => {
  return (
    <Box width="300px">
      <List>
        <ListItem>
          <Logo />
          {/* <UserCard /> */}
        </ListItem>

        <ListItem>
          <UserCard />
        </ListItem>

        <ListItem>
          <UserCard />
        </ListItem>
      </List>
    </Box>
  );
};
