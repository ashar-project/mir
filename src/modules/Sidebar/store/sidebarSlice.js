import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: true,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleOpen: state => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleOpen } = sidebarSlice.actions;
export const sidebarReducer = sidebarSlice.reducer;
