import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
    backgroundColor: '#fff',
    margin: 8,
    borderTopLeftRadius: 70,
    borderBottomLeftRadius: 70,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  image_container: {},
  image: {
    width: 90,
    height: 70,
    resizeMode: 'contain',
  },
  title: {fontSize: 19, marginLeft: 10},
});
