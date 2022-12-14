import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import messagesReducer from "./messagesSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import getAnswerMiddleware from "./getAnswerMiddleware";
import authReducer from "./authSlice";
import syncFirestoreMiddleware from "./syncFirestoreMiddlware";
import isLoadingReducer from "./isLoadingSlice";

const persistConfig = {
  key: "test-chat",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    contacts: contactsReducer,
    messages: messagesReducer,
    auth: authReducer,
  })
);

export const store = configureStore({
  reducer: { persisted: persistedReducer, isLoading: isLoadingReducer },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    getAnswerMiddleware,
    syncFirestoreMiddleware,
  ],
});

export const persistor = persistStore(store);
