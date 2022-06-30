export enum MAIN_ROUTES {
  HOME = 'Home',
  ENTITY = 'Entity',
  SEARCH = 'Search',
}

export type MainRoutes = {
  Home: undefined;
  Entity: { id: string };
  Search: undefined;
};
