import { combineReducers } from '@reduxjs/toolkit';
import coreReducer from './core/coreSlice';
import favouritesReducer from './favourites/favouritesSlice';
import hiddenReducer from './hidden/hiddenSlice';

const rootReducer = combineReducers({
  core: coreReducer,
  favourites: favouritesReducer,
  hidden: hiddenReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
