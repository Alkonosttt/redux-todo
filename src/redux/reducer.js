import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  
  initialState,
  
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
   
  },
  
});

export const { addToDoWrapper } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;