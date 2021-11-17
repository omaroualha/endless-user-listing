import React, {memo} from 'react';
import {Text, View, Image} from 'react-native';
import {UserModel} from '../../redux/types';
import {Styles} from './style';

interface CardProps {
  user: UserModel;
}

const UserCard = ({user}: CardProps): JSX.Element => {
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
const arePropsEqual = (prevProps: CardProps, nextProps: CardProps) =>
  nextProps.user.firstName === prevProps.user.firstName;

// Fix FlatList performance WARN `VirtualizedList:
// You have a large list that is slow to update`
// with React memo, fix found Here:
// https://stackoverflow.com/questions/63499934/using-react-memo-in-functional-component-to-renderitem-flatlist-to-minimize-re-r#answers
export default memo(UserCard, arePropsEqual);
