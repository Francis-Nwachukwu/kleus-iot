import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { injectStore } from "api";
import authReducer from "appstate/features/auth/authSlice";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "Emini-platform",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
injectStore(store);

export const persistor = persistStore(store);
export default store;
