import React, {memo} from 'react';
import {Text, View, Image} from 'react-native';
import {UserModel} from '../../redux/types';
import {Styles} from './style';

interface CardProps {
  user: UserModel;
}

const UserCard = ({user}: CardProps) => {
  return (
    <View style={Styles.container}>
      <Image source={{uri: user.picture}} style={Styles.profileImage} />
      <Text
        style={
          Styles.cardText
        }>{`${user.title} - ${user.firstName} ${user.lastName}`}</Text>
    </View>
  );
};

// Return true if passing nextProps to render would return
// the same result as passing prevProps to render,
// otherwise return false
function arePropsEqual(prevProps: any, nextProps: any) {
  return nextProps.user.firstName === prevProps.user.firstName;
}

// Fix FlatList performance WARN `VirtualizedList:
// You have a large list that is slow to update`
// with React memo
export default memo(UserCard, arePropsEqual);
