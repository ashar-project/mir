import { combineReducers } from '@reduxjs/toolkit';

import { sidebarReducer } from '@/modules/Sidebar/store';
import { authSlice } from './slice/auth/authSlice';
import { userSlice } from './slice/userSlice/userSlice';
import { receivedSlice } from './slice/receivedSlice/receivedSlice';
import { graduatadSlice } from './slice/graduatadSlice/graduatadSlice';
import { gaveUpSlice } from './slice/gaveUpSlice/gaveUpSlice';

export const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  auth: authSlice.reducer,
  user: userSlice.reducer,
  received: receivedSlice.reducer,
  graduatad: graduatadSlice.reducer,
  gaveUp: gaveUpSlice.reducer,
});
