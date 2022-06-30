import AsyncStorage from '@react-native-async-storage/async-storage';
import { IEntityInState } from '~store/favourites/favouritesSlice.interface';

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

export const setSeenMoviesStorage = async (movies: any): Promise<void> => {
  try {
    await AsyncStorage.setItem('seenMovies', JSON.stringify(movies));
  } catch (e) {
    console.error('Error while saving seen movies');
  }
};

export const getSeenMoviesStorage = async (): Promise<any | null> => {
  try {
    const movies = await AsyncStorage.getItem('seenMovies');
    return movies !== null ? JSON.parse(movies) : null;
  } catch (e) {
    console.error('Error while getting seen movies');
    return null;
  }
};
