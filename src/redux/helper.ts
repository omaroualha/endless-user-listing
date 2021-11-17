import {ApiResponse, UserModel} from './types';

export const getUserDataList = (data: ApiResponse): UserModel[] =>
  data.results.map(user => ({
    firstName: user.name.first,
    lastName: user.name.last,
    title: user.name.title,
    picture: user.picture.medium,
  }));
