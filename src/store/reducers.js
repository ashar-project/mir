import { combineReducers, createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });
    },
    todoToggled(state, action) {
      const todo = state.find(todo => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
});

export const rootReducer = combineReducers({
  todos: testSlice.reducer,
});
