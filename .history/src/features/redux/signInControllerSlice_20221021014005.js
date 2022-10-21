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
    
    extraReducers: {}
