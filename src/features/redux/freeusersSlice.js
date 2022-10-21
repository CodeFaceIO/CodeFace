import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';

const freeUsersAdapter = createEntityAdapter({
  selectId: (user) => user.id,
  sortComparer: (pre, next) => pre.id.localeCompare(next.id),
});

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    let request = await fetch('/api/freeUsers');
    return await request.json();
  } catch (error) {
    throw new Error(error);
  }
});

const { reducer } = createSlice({
  name: 'freeusers',
  initialState: freeUsersAdapter.getInitialState({
    error: null,
    status: 'idle',
  }),
  reducers: {},
  extraReducers: {},
});

export const { selectById: selectUserById } = freeUsersAdapter.getInitialState(
  (state) => state.initialState
);

export default reducer;
