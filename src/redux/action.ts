import axios from 'axios';
import {Dispatch} from 'react';
import {getUserDataList} from './helper';
import {ApiResponse, ErrorAction, FetchUserListAction} from './types';

// Endpoint to fetch mock user data
const API_URL = 'https://randomuser.me/api/?results=8';

export const fetchUserList = () => {
  return async (dispatch: Dispatch<FetchUserListAction | ErrorAction>) => {
    try {
      const response = await axios.get(API_URL);
      const data: ApiResponse = response.data;

      if (!response) {
        dispatch({
          type: 'ON_ERROR',
          payload: 'Unable to fetch users list!',
        });
      } else {
        dispatch({
          type: 'GET_USERS',
          payload: getUserDataList(data),
        });
      }
    } catch (error) {
      dispatch({
        type: 'ON_ERROR',
        payload: error,
      });
    }
  };
};
