/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { SessionState } from './types';
import { type RegisterRequest } from '../api/types';
import { sessionApi } from '../api/api';

const initialState: SessionState = {
  token: localStorage.getItem('token'),
};

export const registerUser = createAsyncThunk('session/register', async (body: RegisterRequest) => {
  const token = await sessionApi.register(body);
  return token;
});

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    logOut(state) {
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.token = action.payload;
        state.error = undefined;
        localStorage.setItem('token', action.payload);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { actions: sessionActions } = sessionSlice;
export const { reducer: sessionReducer } = sessionSlice;
