import { configureStore } from '@reduxjs/toolkit';
import toyReducer from '../features/toys/toySlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  toys: toyReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import toyReducer from '../features/toys/toySlice';

// export const store = configureStore({
//   reducer: {
//     toys: toyReducer,
//   },
// });
