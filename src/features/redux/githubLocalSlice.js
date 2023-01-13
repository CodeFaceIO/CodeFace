<<<<<<< HEAD
import { createSlice, createEntityAdapter, createSelector } from '@reduxjs/toolkit';
=======
import { createSlice, createEntityAdapter,createSelector } from '@reduxjs/toolkit';
>>>>>>> main
import { githubApiSlice } from './githubApiSlice';

const githubAdapter = createEntityAdapter({
  selectId: (githubUser) => githubUser.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const initialState = githubAdapter.getInitialState({
  status: 'idle',
  error: null,
  selectId: null,
});

const githubLocalSlice = createSlice({
  name: 'githubData',
  initialState,
  reducers: {
    githubUserSelected: (state, action) => {
      githubAdapter.addOne(state, action.payload);
    },
    githubUserUnselected: (state, action) => {
      githubAdapter.removeOne(state, action.payload);
    },
    githubRepoSelected: (state, action) => {
      githubAdapter.addOne(state, action.payload);
    },
    githubRepoUnselected: (state, action) => {
      githubAdapter.removeOne(state, action.payload);
    },
  },
  extraReducers: {},
});

export const githubDataSlice = githubApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGithubUsers: builder.query({
      query: () => 'users',
      transformResponse: (response) => {
        let ids = [];
        let entities = {};
        response.map((githubUser) => {
          ids.push(githubUser.id);
          entities[githubUser.id] = githubUser;
        });
        const data = { ids, entities };
        return githubAdapter.setAll(initialState, data);
      },
      providesTags: ['GithubUsers'],
    }),
    getGithubRepos: builder.query({
      query: () => 'repositories',
      transformResponse: (response) => {
        let ids = [];
        let entities = {};
        response.map((githubRepo) => {
          ids.push(githubRepo.id);
          entities[githubRepo.id] = githubRepo;
        });
        const data = { ids, entities };
        return githubAdapter.setAll(initialState, data);
      },
<<<<<<< HEAD
      providesTags: ['GithubRepos'],
=======
        providesTags: ['GithubRepos'],
>>>>>>> main
    }),
  }),
});

export const selectUsersResult = githubApiSlice.endpoints.getGithubUsers.select();

const selectUsersData = createSelector(selectUsersResult, (result) => result.data);
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectAllIds,
} = githubAdapter.getSelectors((state) => selectUsersData(state) ?? initialState);

<<<<<<< HEAD
=======
 

>>>>>>> main
export const loggedGithubUser = (state) => state.githubUsers.selectId;

export const { githubUserSelected, githubUserUnselected } = githubLocalSlice.actions;

export default githubLocalSlice.reducer;
