import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const challengesAdapter = createEntityAdapter({
  selectId: (challenge) => challenge.id,
  sortComparer: (preChallenge, nextChallenge) =>
    nextChallenge.id.localeCompare(preChallenge.id),
});

const { reducer } = createSlice({
  name: "challenge",
  initialState: challengesAdapter.getInitialState({
    status: "idle",
    error: null,
  }),
  reducers: {
    createChallenge: (state, { payload }) => {
      const { users } = payload;
      const { currentUser } = payload;
      const randomUserFinder = Math.ceil(Math.random() * users.length);
      const secondPart = users.find((user) => user.id === randomUserFinder);
      const { selectedLevel } = payload;
      let { counter } = selectedLevel;

      if (currentUser && secondPart) {
        const interval = setInterval(() => {
          if (counter > 0) {
            counter -= 1;
          } else {
            clearInterval(interval);
          }
        }, 1000);
      }
    },
  },
  extraReducers: {},
});

export const {
  selectAll: selectAllChallenges,
  selectById: selectChallengeById,
  selectIds: selectAllChallengeIds,
  selectEntities: selectChallengeEntities,
  selectTotal: selectTotalChallengeSlice,
} = challengesAdapter.getSelectors((state) => state.initialState);

export default reducer;
