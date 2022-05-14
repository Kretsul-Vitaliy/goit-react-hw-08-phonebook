/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { signUp, logIn, logOut, refresh } from "./userOperations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [signUp.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [logIn.rejected](state) {
      state.isLoggedIn = false;
    },

    [signUp.rejected](state) {
      state.isLoggedIn = false;
    },

    [logOut.fulfilled](state) {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = initialState.isLoggedIn;
    },
    [refresh.pending](state) {
      state.isRefreshing = true;
    },
    [refresh.fulfilled](state, action) {
      state.user = action.payload;
      state.isRefreshing = false;
      state.isLoggedIn = true;
    },
    [refresh.rejected](state) {
      state.isRefreshing = false;
      state.isLoggedIn = false;
    },
  },
  // extraReducers(builder) {
  //   builder
  //     .addCase(signUp.fulfilled, (state, action) => ({
  //       ...state,
  //       user: { ...action.payload.user },
  //       token: action.payload.token,
  //       isLoggedIn: true,
  //     }))
  //     .addCase(logIn.fulfilled, (state, action) => ({
  //       ...state,
  //       user: { ...action.payload.user },
  //       token: action.payload.token,
  //       isLoggedIn: true,
  //     }))
  //     .addCase(logIn.rejected, state => ({
  //       ...state,
  //       isLoggedIn: false,
  //     }))
  //     .addCase(signUp.rejected, state => ({
  //       ...state,
  //       isLoggedIn: false,
  //     }))
  //     .addCase(logOut.fulfilled, state => ({
  //       ...state,
  //       user: { ...initialState.user },
  //       token: initialState.token,
  //       isLoggedIn: initialState.isLoggedIn,
  //     }))
  //     .addCase(refresh.pending, state => ({
  //       ...state,
  //       isRefreshing: true,
  //     }))
  //     .addCase(refresh.fulfilled, (state, action) => ({
  //       ...state,
  //       user: { ...action.payload.user },
  //       isRefreshing: false,
  //       isLoggedIn: true,
  //     }))
  //     .addCase(refresh.rejected, state => ({
  //       ...state,
  //       isRefreshing: false,
  //       isLoggedIn: false,
  //     }));
  // },
});

// const contactsReducer = combineReducers({
//   [userSlice.name]: userSlice.reducer,
// });
export default userSlice;
