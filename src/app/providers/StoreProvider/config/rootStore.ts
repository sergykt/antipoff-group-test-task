import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { sessionReducer } from '@/entities/Session/model/slice';
import { usersReducer } from '@/entities/User';
import { rtkApi } from '@/shared/api/rtkApi';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['users'],
};

const rootReducer = combineReducers({
  users: usersReducer,
  session: sessionReducer,
  [rtkApi.reducerPath]: rtkApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(rtkApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
