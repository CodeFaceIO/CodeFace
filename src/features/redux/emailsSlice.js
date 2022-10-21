import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

const emailsAdapter = createEntityAdapter({
  selectIds: (email) => email.id,
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

export const fetchEmails = createAsyncThunk("emails/fetchEmails", async () => {
  try {
    const response = await fetch("/api/emails");
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
});

export const addEmail = createAsyncThunk("emails/addEmail", async (email) => {
  try {
    const response = await fetch("/api/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
});

export const updateEmail = createAsyncThunk(
  "emails/updateEmail",
  async (email) => {
    try {
      const response = await fetch(`/api/emails/${email.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const deleteEmail = createAsyncThunk(
  "emails/deleteEmail",
  async (id) => {
    try {
      const response = await fetch(`/api/emails/${id}`, {
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
  name: "emails",
  initialState: emailsAdapter.getInitialState({
    status: "idle",
    error: null,
  }),
  reducers: {},
  extraReducers: {
    [fetchEmails.pending]: (state) => {
      state.status = "loading";
    },
    [fetchEmails.fulfilled]: (state, action) => {
      state.status = "succeeded";
      emailsAdapter.setAll(state, action.payload);
    },
    [fetchEmails.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload.error.message;
    },
    [addEmail.pending]: (state, action) => {
      state.status = "loading";
    },
    [addEmail.fulfilled]: (state, action) => {
      state.status = "succeeded";
      emailsAdapter.addOne(state, action.payload);
    },
    [addEmail.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload.error.message;
    },
    [updateEmail.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateEmail.fulfilled]: (state, action) => {
      state.status = "succeeded";
      emailsAdapter.updateOne(state, action.payload);
    },
    [updateEmail.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload.error.message;
    },
    [deleteEmail.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteEmail.fulfilled]: (state, action) => {
      state.status = "succeeded";
      emailsAdapter.removeOne(state, action.payload.id);
    },
    [deleteEmail.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload.error.message;
    },
  },
});

export const {
  selectIds: selectEmailsIds,
  selectEntities: selectEmailsEntities,
  selectAll: selectAllEmails,
  selectTotal: selectTotalEmails,
  selectById: selectEmailById,
} = emailsAdapter.getSelectors((state) => state.emails);

export default reducer;
