import AsyncStorage from '@react-native-async-storage/async-storage';
import { IEntityInState } from '~store/favourites/favouritesSlice.interface';
import { IHiddenInState } from '~store/hidden/hiddenSlice.interface';

export const setFavouritesStorage = async (favourites: IEntityInState): Promise<void> => {
  try {
    await AsyncStorage.setItem('favourites', JSON.stringify(favourites));
  } catch (e) {
    console.error('Error while saving favourite movies');
  }
};

export const getFavouritesStorage = async (): Promise<IEntityInState> => {
  try {
    const favourites = await AsyncStorage.getItem('favourites');
    return favourites !== null ? JSON.parse(favourites) : {};
  } catch (e) {
    console.error('Error while getting favourite movies');
    return {};
  }
};

export const setHiddenMoviesStorage = async (ids: IHiddenInState): Promise<void> => {
  try {
    await AsyncStorage.setItem('hiddenMovies', JSON.stringify(ids));
  } catch (e) {
    console.error('Error while saving hidden movies');
  }
};

export const getHiddenMoviesStorage = async (): Promise<IHiddenInState> => {
  try {
    const movies = await AsyncStorage.getItem('hiddenMovies');
    return movies !== null ? JSON.parse(movies) : {};
  } catch (e) {
    console.error('Error while getting hidden movies');
    return {};
  }
};

export const getRecentSearchesStorage = async (): Promise<string[]> => {
  try {
    return JSON.parse((await AsyncStorage.getItem('recentSearches')) || '[]');
  } catch (e) {
    console.error('Error while getting recent searches of shops');
    return [];
  }
};
