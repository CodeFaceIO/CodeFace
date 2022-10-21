import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const alghoritmsAdapter = createEntityAdapter({
  selectId: (alghoritm) => alghoritm.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id)
});

export const fetchAlghoritms = createAsyncThunk("alghoritms/fetchAlghoritms", async () => {
  try {
    const response = await fetch("/api/alghoritms");
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
});

export const addAlghoritm = createAsyncThunk("alghoritms/addAlghoritm", async (alghoritm) => {
  try {
    const response = await fetch("/api/alghoritms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(alghoritm)
    });
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
});

export const updateAlghoritm = createAsyncThunk("alghoritms/updateAlghoritm", async (alghoritm) => {
  const { id } = alghoritm;
  try {
    const response = await fetch(`/api/alghoritms/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(alghoritm)
    });
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteAlghoritm = createAsyncThunk("alghoritms/deleteAlghoritm", async (id) => {
  try {
    const response = await fetch(`/api/alghoritms/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
});

const { reducer } = createSlice({
  name: "alghoritms",
  initialState: alghoritmsAdapter.getInitialState({
    status: "idle",
    error: null
  }),
  reducers: {},
  extraReducers: {
    [fetchAlghoritms.pending]: (state) => {
      state.status = "loading";
    },
    [fetchAlghoritms.fulfilled]: (state, action) => {
      state.status = "succeeded";
      alghoritmsAdapter.setAll(state, action.payload);
    },
    [fetchAlghoritms.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [addAlghoritm.pending]: (state, action) => {
      state.status = "loading";
    },
    [addAlghoritm.fulfilled]: (state, action) => {
      state.status = "succeeded";
      alghoritmsAdapter.addOne(state, action.payload);
    },
    [addAlghoritm.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [updateAlghoritm.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateAlghoritm.fulfilled]: (state, action) => {
      state.status = "succeeded";
      alghoritmsAdapter.updateOne(state, action.payload);
    },
    [updateAlghoritm.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [deleteAlghoritm.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteAlghoritm.fulfilled]: (state, action) => {
      state.status = "succeeded";
      alghoritmsAdapter.removeOne(state, action.payload);
    },
    [deleteAlghoritm.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    }
  }
});

export const {
  selectIds: selectAlghoritmsIds,
  selectEntities: selectAlghoritmsEntities,
  selectAll: selectAllAlghoritms,
  selectTotal: selectAlghoritmsTotal,
  selectById: selectAlghoritmById
} = alghoritmsAdapter.getInitialState((state) => state.initialState);

// reducer is a function that takes the state and action and returns the new state
export default reducer;
