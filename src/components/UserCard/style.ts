import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  profileImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    padding: 10,
  },
  cardText: {
    fontSize: 22,
    padding: 20,
    flex: 1,
  },
});
