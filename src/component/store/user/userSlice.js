import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loading: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    changeName: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.value ++
    }
  },
  extraReducers: builder => {

  },
});

export const { changeName , logout } = userSlice.actions;

export default userSlice.reducer;
