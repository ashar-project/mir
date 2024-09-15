import { useState } from "react";
import { Stack } from "@mui/material";

import {
  FaChevronRight as RightArrow,
  FaChevronLeft as LeftArrow,
} from "react-icons/fa";

import { LogoDesktop } from "@/assets/icon";
import { UserCard, Drawer, MenuList } from "..";

const useSidebar = () => {
  if (localStorage.getItem("open") === null) {
    localStorage.setItem("open", JSON.stringify(true));
  }

  const initialSidebarState = JSON.parse(localStorage.getItem("open"));

  const [open, setOpen] = useState(initialSidebarState);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
    localStorage.setItem("open", JSON.stringify(!open));
  };

  return { open, toggleOpen };
};

export const Sidebar = () => {
  const { open, toggleOpen } = useSidebar();

  return (
    <Drawer open={open} variant="permanent">
      <SidebarTop open={open} onClick={toggleOpen} />
      <MenuList open={open} />
    </Drawer>
  );
};

const SidebarTop = ({ open, onClick }) => {
  return (
    <Stack alignItems="center" spacing={2.5}>
      <LogoDesktop />
      <UserCard isFullWidth={open} />

      <button
        onClick={onClick}
        style={{
          backgroundColor: "#BBBBBB",
          borderRadius: "8px 0px 0px 8px",
          position: "absolute",
          top: "100px",
          right: "0px",
          width: "20px",
          height: "40px",
          border: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        {open ? <LeftArrow /> : <RightArrow />}
      </button>
    </Stack>
  );
};
