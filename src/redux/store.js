
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./counterSlice";
import { setAuthToken } from "../api/apiClient";



const rootReducer = combineReducers({ auth: authSlice});

const persistConfig = {
  key: 'root',
  storage,
//   whitelist: ['auth'], // Specify which slices you want to persist (auth in this case)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
  	serializableCheck: {
  		ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  	},
  }),
});



const persistor = persistStore(store);

  export {store,persistor}