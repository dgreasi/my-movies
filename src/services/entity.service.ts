import { IEntity } from '~interfaces/entity.interface';
import { apiRQ } from '~api';
import Config from 'react-native-config';
import { ISearch, ISearchResponse } from '~api/search/searchResponses';
import { ShowAlert } from '~utils/alert';
import en from '~translations/en.json';

export const getEntityService = async (id: string): Promise<IEntity> => {
  const resp = await apiRQ.get<IEntity>(`/en/API/Title/${Config.API_KEY}/${id}`);
  return resp.data;
};

export const getEntitiesService = async (search: string): Promise<ISearch[]> => {
  const resp = await apiRQ.get<ISearchResponse>(`/API/Search/${Config.API_KEY}/${search}`);
  const { results } = resp.data;

  if (resp?.data?.errorMessage) {
    ShowAlert({
      message: en.ERRORS.SOMETHING_WENT_WRONG,
      description: resp?.data?.errorMessage,
      type: 'danger',
    });
  }

  return results || [];
};
