import {combineReducers, configureStore}  from '@reduxjs/toolkit';
import userSlice from './userSlice';
import messageSlice from './messageSlice';
import socketSlice from './socket';
import {
  
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  const rootReducer=combineReducers({
    Users:userSlice,
    Message:messageSlice,
    Socket:socketSlice,
    
})
  const persistedReducer = persistReducer(persistConfig, rootReducer)
const store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    
})
export default store;
