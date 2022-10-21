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

const selectSelectedUser = (state) => state.signInController.selectedUser;

export default signInControllerSlice.reducer;
