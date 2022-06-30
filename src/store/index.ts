import { combineReducers } from '@reduxjs/toolkit';
import coreReducer from './core/coreSlice';
import favouritesReducer from './favourites/favouritesSlice';

const rootReducer = combineReducers({
  core: coreReducer,
  favourites: favouritesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
