import {UserModel} from './types';

export const getUserDataList = (users: any): UserModel[] => {
  var userList: UserModel[] = [];
  users.map((user: any) =>
    userList.push({
      firstName: user.name.first,
      lastName: user.name.last,
      title: user.name.title,
      picture: user.picture.medium,
    }),
  );
  return userList;
};
