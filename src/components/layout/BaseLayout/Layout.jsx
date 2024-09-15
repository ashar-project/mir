import { Outlet } from "react-router-dom";
import { Stack, Box } from "@mui/material";

import { Sidebar } from "@/modules/Sidebar";

export const Layout = () => {
  return (
    <Stack direction="row">
      <Sidebar />
      <Box width="100%" height="100vh" padding="30px">
        <Outlet />
      </Box>
    </Stack>
  );
};
