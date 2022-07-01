import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppThunk, RootStoreInterface } from '~store/store';
import { getHiddenMoviesStorage, setHiddenMoviesStorage } from '~services/localstorage.service';
import { IHiddenInState, IHiddenSlice, IHiddenState, SetHiddenPayload } from '~store/hidden/hiddenSlice.interface';

const initialState: IHiddenState = {
  hidden: {},
};

export const hiddenSlice = createSlice({
  name: 'hidden',
  initialState,
  reducers: {
    setHidden: (state: IHiddenState, action: PayloadAction<SetHiddenPayload>): void => {
      state.hidden = action.payload.hidden;
    },
    resetHidden: (): IHiddenState => initialState,
  },
});

//////////////////////////////// USER ASYNC ACTIONS ////////////////////////////////

export const getHiddenAsync =
  (): AppThunk =>
  async (dispatch: AppDispatch): Promise<void> => {
    const hidden = await getHiddenMoviesStorage();
    dispatch(setHidden({ hidden }));
  };

export const addHiddenAsync =
  (id: string): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootStoreInterface): Promise<void> => {
    const hidden = { [id]: true, ...getState().hidden.hidden };
    dispatch(setHidden({ hidden }));
    setHiddenMoviesStorage(hidden);
  };

export const clearHiddenAsync =
  (): AppThunk =>
  async (dispatch: AppDispatch): Promise<void> => {
    const hidden = {};
    dispatch(setHidden({ hidden }));
    setHiddenMoviesStorage(hidden);
  };

//////////////////////////////// ACTIONS ////////////////////////////////
export const { setHidden, resetHidden } = hiddenSlice.actions;

//////////////////////////////// SELECTORS ////////////////////////////////
export const selectHidden = (state: IHiddenSlice): IHiddenInState => state.hidden.hidden;

export default hiddenSlice.reducer;
