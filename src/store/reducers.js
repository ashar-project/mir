import { combineReducers } from '@reduxjs/toolkit';

import { sidebarReducer } from '@/modules/Sidebar/store';
import { authSlice } from './slice/authSlice';

export const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  authSlice: authSlice.reducer,
});
