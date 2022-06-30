import { useQuery } from 'react-query';
import { getEntitiesService } from '~services/entity.service';
import { ISearch } from '~api/search/searchResponses';

const getEntitiesSearchScreenService = async (search: string): Promise<ISearch[]> => {
  if (!search) return [];
  return await getEntitiesService(search);
};

export const useSearch = (search: string) => {
  return useQuery<ISearch[], Error>(['entitiesSearch', search], () => getEntitiesSearchScreenService(search), {
    cacheTime: 2000,
  });
};
