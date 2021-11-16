import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import UserList from './src/screens/UserList';

export default function App() {
  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  );
}
