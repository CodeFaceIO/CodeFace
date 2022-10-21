import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

const coursesAdapter = createEntityAdapter({
  selectId: (course) => course.id,
  sortComparer: (preCourse, nextCourse) =>
    preCourse.id.localeCompare(nextCourse.id),
});

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    try {
      let request = await fetch("/api/courses");
      return await request.json();
    } catch (error) {
      throw new Error(error);
    }
  }
);

const { reducer } = createSlice({
  name: "courses",
  initialState: coursesAdapter.getInitialState({
    status: "idle",
    error: null,
  }),
  reducers: {},
  extraReducers: {
    [fetchCourses.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCourses.fulfilled]: (state, action) => {
      state.status = "succeeded";
      coursesAdapter.setAll(state, action.payload);
    },
    [fetchCourses.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const {
  selectIds: selectCoursesIds,
  selectById: selectCourseById,
  selectAll: selectAllCoursesState,
  selectEntities: selectCourseEntities,
  selectTotal: selectIdsAndEntities,
} = coursesAdapter.getSelectors((state) => state.initialState);

export default reducer;
