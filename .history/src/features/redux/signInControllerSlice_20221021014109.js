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
  reducers: {},
  extraReducers: {},
});

export const selectSelectedUser = (state) => state.signInController.selectedUser;

export const selectIsCompleted = (state) => state.signInController.isCompleted;

export default signInControllerSlice.reducer;
