import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const codefaceWarriorsAdapter = createEntityAdapter({
  selectId: (war) => war.id,
  sortComparer: (preWar, nextWar) => preWar.id.localeCompare(nextWar.id),
});

export const fetchCodefaceWarriors = createAsyncThunk(
  'codefaceWarriors/fetchCodefaceWarriors',
  async () => {
    try {
      let request = await fetch('/api/codefaceWarriors');
      return await request.json();
    } catch (error) {
      throw new Error(error);
    }
  }
);

const { reducer } = createSlice({
  name: 'codefaceWarriors',
  initialState: codefaceWarriorsAdapter.getInitialState({
    state: 'idle',
    error: 'null',
  }),
  reducers: {
    codefaceWarriorAdded: codefaceWarriorsAdapter.addOne,
    codefaceWarriorUpdated: codefaceWarriorsAdapter.updateOne,
    codefaceWarriorRemoved: codefaceWarriorsAdapter.removeOne,
    codefaceWarriorsRemoved: codefaceWarriorsAdapter.removeAll,
  },
  extraReducers: {
    [fetchCodefaceWarriors.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchCodefaceWarriors.fulfilled]: (state, action) => {
      state.status = 'success';
      codefaceWarriorsAdapter.setAll(state, action.payload);
    },
    [fetchCodefaceWarriors.rejected]: (state, action) => {
      state.status = 'error';
      state.error = action.error.message;
    },
  },
});

export const {
  selectById: selectCodeFaceWarriorById,
  selectIds: selectCodeFaceWarriorsIds,
  selectTotal: selectTotalCodeFaceWarriors,
  selectEntities: selectCodeFaceWarriorsEntities,
} = codefaceWarriorsAdapter.getSelectors((state) => state.initialState);

export default reducer;
