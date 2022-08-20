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
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    getAnswerMiddleware,
  ],
});

export const persistor = persistStore(store);
