/* eslint-disable no-param-reassign */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type UserState } from './types';

const initialState: UserState = {
  likes: {},
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    toggleLike(state, action: PayloadAction<number>) {
      state.likes[action.payload] = !state.likes[action.payload];
    },
  },
});

export const { actions: usersActions } = usersSlice;
export const { reducer: usersReducer } = usersSlice;
