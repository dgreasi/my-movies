import { ISearch } from '~api/search/searchResponses';

export interface IFavouritesState {
  loading: boolean;
  favourites: IEntityInState;
}

export interface IFavouritesSlice {
  favourites: IFavouritesState;
}

export interface SetFavouritesPayload {
  favourites: IEntityInState;
}

export interface AddFavouritesPayload {
  entity: ISearch;
}

export interface DeleteFavouritesPayload {
  id: string;
}

export interface IEntityInState {
  [key: string]: ISearch;
}
