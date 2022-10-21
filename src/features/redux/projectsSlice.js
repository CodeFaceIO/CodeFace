import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const projectsAdapter = createEntityAdapter({
  selectId: (project) => project.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const projectsSlice = createSlice({
  name: 'projects',
  initialState: projectsAdapter.getInitialState({
    status: 'idle',
    error: null,
  }),
  reducers: {
    projectAdded(state, action) {
      projectsAdapter.addOne(state, action.payload);
    },
    projectUpdated(state, action) {
      projectsAdapter.updateOne(state, action.payload);
    },
    projectDeleted(state, action) {
      projectsAdapter.removeOne(state, action.payload);
    }
  },
  extraReducers: {},
});

export const {
  selectAll: selectAllProjects,
  selectById: selectProjectById,
  selectIds: selectProjectIds,
} = projectsAdapter.getSelectors((state) => state.projects);

export const {
    projectAdded,
    projectUpdated,
    projectDeleted,
} = projectsSlice.actions;

export default projectsSlice.reducer;
