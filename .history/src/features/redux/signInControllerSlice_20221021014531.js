/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: null,
  isCompleted: false,
  selectedUser: {},
};

const signInControllerSlice = createSlice({
  name: 'signin',
  initialState,
  reducers: {
    signInCompleted: (state, action) => {
      state.isCompleted = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    signOutCompleted: (state, action) => {
      state.isCompleted = action.payload;
    },
    signInHasError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: {},
});

export const selectSelectedUser = (state) => state.signInController.selectedUser;

export const selectIsCompleted = (state) => state.signInController.isCompleted;

export const { signInCompleted, setSelectedUser,
    signOutCompleted, signInHasError } = signInControllerSlice.actions;
} = signInControllerSlice.actions;

export default signInControllerSlice.reducer;
