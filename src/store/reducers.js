import { combineReducers } from '@reduxjs/toolkit';

import { sidebarReducer } from '@/modules/Sidebar/store';
import { authSlice } from './slice/auth/authSlice';
import { userSlice } from './slice/userSlice/userSlice';
import { receivedSlice } from './slice/receivedSlice/receivedSlice';
import { graduatadSlice } from './slice/graduatadSlice/graduatadSlice';
import { gaveUpSlice } from './slice/gaveUpSlice/gaveUpSlice';
import { userAdminSlice } from './admin/adminWorld/adminWorldSlice';
import { adminReceivedSlice } from './admin/adminReceived/adminReceivedSlice';
import { adminGraduatedSlice } from './admin/adminGraduated/adminGraduatedSlice';
import { adminGaveUpSlice } from './admin/adminGaveUp/adminGaveUpSlice';

export const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  auth: authSlice.reducer,
  user: userSlice.reducer,
  received: receivedSlice.reducer,
  graduatad: graduatadSlice.reducer,
  gaveUp: gaveUpSlice.reducer,
  userAdmin: userAdminSlice.reducer,
  adminReceived: adminReceivedSlice.reducer,
  adminGraduated: adminGraduatedSlice.reducer,
  adminGaveUp: adminGaveUpSlice.reducer,
});
