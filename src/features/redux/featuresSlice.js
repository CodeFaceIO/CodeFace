import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

const featuresAdapter = createEntityAdapter({
  selectId: (feature) => feature.id,
  sortComparer: (preF, nextF) => preF.id.sortComparer(nextF.id),
});

export const fetchFeatures = createAsyncThunk(
  "features/fetchFeatures",
  async () => {
    try {
      let request = await fetch("/api/features");
      return await request.json();
    } catch (error) {
      throw new Error(error);
    }
  }
);

const sliceInvoker = () => {
  return {
    name: "features",
    initialState: featuresAdapter.getInitialState({
      status: "idle",
      error: null,
    }),
    reducers: {},
    extraReducers: {
      [fetchFeatures.pending]: (state, action) => {
        state.status = "loading";
      },
      [fetchFeatures.fulfilled]: (state, action) => {
        state.status = "succeeded";
        featuresAdapter.setAll(state, action.payload);
      },
      [fetchFeatures.rejected]: (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      },
    },
  };
};

const featuresSlice = createSlice(sliceInvoker());

export const {
  selectById: selectFeatureById,
  selectAll: selectAllFeatures,
  selectTotal: selectTotalFeatureSlice,
  selectIds: selectAllFeatureIds,
  selectEntities: selectAllFeatureEntities,
} = featuresAdapter.getInitialState((state) => state.initialState);

export default featuresSlice.reducer;
