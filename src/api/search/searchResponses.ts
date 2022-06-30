export interface ISearch {
  id: string;
  resultType?: string;
  image: string;
  title: string;
  description: string;
  plot?: string;
}

export interface ISearchResponse {
  searchType: string;
  expression: string;
  errorMessage: string;
  results: ISearch[];
}

export interface IEntitiesSearchResponse {
  entities: ISearch[];
}
