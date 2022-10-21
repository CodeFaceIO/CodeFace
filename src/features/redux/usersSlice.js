import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter({
  selectId: (user) => user.id,
  sortComparer: (previousUser, nextUser) =>
    nextUser.exp.localeCompare(previousUser.exp),
});

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (userId) => {
    let url = "/api/users";
    if (userId) {
      url += `/${userId}`;
    }
    try {
      let request = await fetch(url);
      return await request.json();
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const addUsers = createAsyncThunk(
  "users/addUsers",
  async (paramsUser) => {
    try {
      let request = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(paramsUser),
        headers: { "content-type": "application/json" },
      });
      return await request.json();
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const updateUser = createAsyncThunk("users/updateUser", async (user) => {
  const response = await fetch(`/api/users/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return await response.json();
});

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    const response = await fetch(`/api/users/${userId}`, {
      method: "DELETE",
    });
    return await response.json();
  }
);

const { reducer } = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState({
    status: "idle",
    error: null,
  }),
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      usersAdapter.setAll(state, action.payload);
    },
    [fetchUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload.error.message;
    },
    [addUsers.fulfilled]: (state, action) => {
      usersAdapter.addOne(state, action.payload);
    },
    [addUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [addUsers.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.paylaod.error.message;
    },
    [updateUser.fulfilled]: (state, action) => {
      usersAdapter.updateOne(state, action.payload);
    },
    [updateUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateUser.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.paylaod.error.message;
    },
    [deleteUser.fulfilled]: (state, action) => {
      usersAdapter.removeOne(state, action.payload.id);
    },
    [deleteUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteUser.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.paylaod.error.message;
    },
  },
});

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectAllUserIds,
  selectEntities: selectUserEntities,
  selectTotal: selectTotalSlice,
} = usersAdapter.getSelectors((state) => state.users);

export default reducer;
