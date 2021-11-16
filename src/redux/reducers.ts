import {ErrorAction, FetchUserListAction, UserModel} from './types';

type UserState = {
  userList: UserModel[];
  error: string | undefined;
};

const initialState = {
  userList: [],
  error: undefined,
};

const userReducer = (
  state: UserState = initialState,
  action: FetchUserListAction | ErrorAction,
) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        userList: action.payload,
      };
    case 'ON_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export {userReducer};
