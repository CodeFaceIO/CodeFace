import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

const commonsAdapter = createEntityAdapter({
  selectId: (alg) => alg.id,
  sortComparer: (pre, next) => pre.id.localeCompare(next.id),
});

export const fetchCommons = createAsyncThunk(
  "commons/fetchCommons",
  async () => {
    try {
      let request = await fetch("/api/commons/");
      return await request.json();
    } catch (error) {
      throw new Error(error);
    }
  }
);

const { reducer } = createSlice({
  name: "commons",
  initialState: commonsAdapter.getInitialState({
    status: "idle",
    error: null,
  }),
  reducers: {},
  extraReducers: {
    [fetchCommons.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCommons.fulfilled]: (state, action) => {
      state.status = "succeeded";
      commonsAdapter.setAll(state, action.payload);
    },
    [fetchCommons.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
  },
});

export const {
  selectIds: selectCommonIds,
  selectById: selectCommonById,
  selectEntities: selectCommonEntities,
  selectAll: selectALlCommonSlices,
} = commonsAdapter.getSelectors((state) => state.initialState);

export default reducer;
