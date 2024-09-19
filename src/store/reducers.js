import { combineReducers } from '@reduxjs/toolkit';

import { sidebarReducer } from '@/modules/Sidebar/store';

export const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});
