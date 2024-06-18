/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  likes: Record<number, boolean>;
}

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
