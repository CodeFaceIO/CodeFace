import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

const premiumsAdapter = createEntityAdapter({
  selectId: (premium) => premium.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

export const fetchPremiums = createAsyncThunk(
  "premiums/fetchPremiums",
  async () => {
    try {
      const response = await fetch("/api/premiums");
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const addPremium = createAsyncThunk(
  "premiums/addPremium",
  async (premium) => {
    try {
      const response = await fetch("/api/premiums", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(premium),
      });
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const updatePremium = createAsyncThunk(
  "premiums/updatePremium",
  async (premium) => {
    try {
      const response = await fetch(`/api/premiums/${premium.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(premium),
      });
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const deletePremium = createAsyncThunk(
  "premiums/deletePremium",
  async (id) => {
    try {
      const response = await fetch(`/api/premiums/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }
);

const { reducer } = createSlice({
  name: "premiums",
  initialState: premiumsAdapter.getInitialState({
    status: "idle",
    error: null,
  }),
  reducers: {},
  extraReducers: {
    [fetchPremiums.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPremiums.fulfilled]: (state, action) => {
      premiumsAdapter.setAll(state, action.payload);
      state.status = "succeeded";
    },
    [fetchPremiums.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default reducer;
