import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

const leadersAdapter = createEntityAdapter({
  selectIds: (leader) => leader.id,
  sortComparer: (a, b) => b.score.localeCompare(a.score),
});

export const fetchLeaders = createAsyncThunk(
  "leaders/fetchLeaders",
  async () => {
    try {
      const response = await fetch("/api/leaders");
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const addLeader = createAsyncThunk(
  "leaders/addLeader",
  async (leader) => {
    try {
      const response = await fetch("/api/leaders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leader),
      });
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const updateLeader = createAsyncThunk(
  "leaders/updateLeader",
  async (leader) => {
    try {
      const response = await fetch(`/api/leaders/${leader.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leader),
      });
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const deleteLeader = createAsyncThunk(
  "leaders/deleteLeader",
  async (leader) => {
    try {
      const response = await fetch(`/api/leaders/${leader.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leader),
      });
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }
);

const { reducer } = createSlice({
  name: "leaders",
  initialState: leadersAdapter.getInitialState({
    status: "idle",
    error: null,
  }),
  reducers: {},
  extraReducers: {
    [fetchLeaders.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchLeaders.fulfilled]: (state, action) => {
      state.status = "succeeded";
      leadersAdapter.setAll(state, action.payload);
    },
    [fetchLeaders.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [addLeader.pending]: (state, action) => {
      state.status = "loading";
    },
    [addLeader.fulfilled]: (state, action) => {
      state.status = "succeeded";
      leadersAdapter.addOne(state, action.payload);
    },
    [addLeader.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [updateLeader.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateLeader.fulfilled]: (state, action) => {
      state.status = "succeeded";
      leadersAdapter.updateOne(state, action.payload);
    },
    [updateLeader.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [deleteLeader.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteLeader.fulfilled]: (state, action) => {
      state.status = "succeeded";
      leadersAdapter.removeOne(state, action.payload.id);
    },
    [deleteLeader.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const {
  selectIds: selectLeaderIds,
  selectEntities: selectLeaderEntities,
  selectAll: selectAllLeaders,
  selectTotal: selectTotalLeaders,
  selectById: selectLeaderById,
} = leadersAdapter.getInitialState((state) => state.leaders);

export default reducer;
