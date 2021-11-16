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

export default UserCard
