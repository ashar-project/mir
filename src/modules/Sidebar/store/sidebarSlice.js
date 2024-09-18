import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: true,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    toggleOpen: state => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setOpen, toggleOpen } = sidebarSlice.actions;
export const sidebarReducer = sidebarSlice.reducer;
