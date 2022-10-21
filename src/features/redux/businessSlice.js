import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const businessAdapter = createEntityAdapter({
  selectId: (item) => item.id,
  sortComparer: (preItem, nextItem) => preItem.localeCompare(nextItem.id),
});

export const fetchBusiness = createAsyncThunk('business/fetchBusiness', async () => {
  try {
    const request = await fetch('/api/business');
    return await request.json();
  } catch (error) {
    throw new Error(error);
  }
});

const { reducer } = createSlice({
  name: 'business',
  initialState: businessAdapter.getInitialState({
    error: null,
    status: 'idle',
  }),
  reducers: {
    setBusiness: (state, action) => {
      let message = action.type;
    },
  },
  extraReducers: {
    [fetchBusiness.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchBusiness.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      businessAdapter.setAll(state, action.payload);
    },
    [fetchBusiness.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const {
  selectAll: selectAllItems,
  selectById: selectItemById,
  selectIds: selectBusinessSliceIds,
  selectEntities: selectBusinessSliceEntitites,
  selectTotal: selectTotalBusinessSlice,
} = businessAdapter.getSelectors((state) => state.initialState);

export default reducer;
