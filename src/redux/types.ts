export type UserModel = {
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
};

export interface FetchUserListAction {
  readonly type: 'GET_USERS';
  payload: UserModel[];
}

export interface ErrorAction {
  readonly type: 'ON_ERROR';
  payload: any;
}

export type FetchUserAction = FetchUserListAction | ErrorAction;
