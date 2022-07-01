export interface IHiddenState {
  hidden: IHiddenInState;
}

export interface IHiddenSlice {
  hidden: IHiddenState;
}

export interface IHiddenInState {
  [key: string]: boolean;
}

export interface SetHiddenPayload {
  hidden: IHiddenInState;
}
