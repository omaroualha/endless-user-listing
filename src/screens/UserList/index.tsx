import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  View,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserList} from '../../redux/action';
import {UserModel} from '../../redux/types';
import UserCard from '../../components/UserCard';
import {Styles} from './style';

const UserList = (): JSX.Element => {
  const [userListToRender, setUserListToRender] = useState<UserModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const {userList, error} = useSelector((state: any) => state.userReducer);

  const handleLoadMore = () => {
    setIsLoading(true);
    dispatch(fetchUserList());
  };

  const initialFetch = useCallback(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);

  useEffect(() => {
    if (error) {
      Alert.alert('Oops, seems like your are not connected to the internet. 😀');
      return;
    }

    if (!userListToRender && !userList.length) {
      Alert.alert('Oops, seems like your list is empty. 😀');
      return;
    }

    setUserListToRender(prevState => [...prevState, ...userList]);
    setIsLoading(false);
  }, [userList, error]);

  return (
    <SafeAreaView>
      <StatusBar />
      <FlatList
        style={Styles.container}
        data={userListToRender}
        renderItem={list => <UserCard user={list.item} />}
        removeClippedSubviews
        disableVirtualization
        keyExtractor={(item, index) => index.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() =>
          isLoading ? (
            <View style={Styles.loader}>
              <ActivityIndicator size={'large'} />
            </View>
          ) : null
        }
      />
    </SafeAreaView>
  );
};

export default UserList;
