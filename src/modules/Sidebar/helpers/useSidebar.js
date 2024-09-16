import { useState } from 'react';

export const useSidebar = () => {
  if (localStorage.getItem('open') === null) {
    localStorage.setItem('open', JSON.stringify(true));
  }

  const initialSidebarState = JSON.parse(localStorage.getItem('open'));

  const [open, setOpen] = useState(initialSidebarState);

  const toggleOpen = () => {
    setOpen(prev => !prev);
    localStorage.setItem('open', JSON.stringify(!open));
  };

  return { open, toggleOpen };
};
