import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserList} from '../../redux/action';
import {UserModel} from '../../redux/types';
import UserCard from '../../components/UserCard';
import {Styles} from './style';

const UserList: React.FC<any> = (): JSX.Element => {
  const [userListToRender, setUserListToRender] = useState<UserModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const {userList, error} = useSelector((state: any) => state.userReducer);

  const renderRow: React.FC<{item: UserModel}> = ({item}) => {
    return <UserCard user={item} />;
  };

  const renderFooter: React.FC = () => {
    return isLoading ? (
      <View style={Styles.loader}>
        <ActivityIndicator size={'large'} />
      </View>
    ) : null;
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    dispatch(fetchUserList());
  };

  const initFetch = useCallback(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  useEffect(() => {
    if (userList.length !== 0 && !error) {
      setUserListToRender((prevState: any) => [...prevState, ...userList]);
      setIsLoading(false);
    }
  }, [userList, error]);

  return (
    <SafeAreaView>
      <StatusBar />
      <FlatList
        style={Styles.container}
        data={userListToRender}
        renderItem={renderRow}
        removeClippedSubviews
        disableVirtualization
        keyExtractor={(item, index) => index.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
};

export default UserList;
