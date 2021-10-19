import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image_container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    position: 'relative',
  },
  image: {
    width: deviceSize.width / 1.08,
    height: deviceSize.height / 4.7,
    borderRadius: 10,
  },
  title_container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 15,
    right: 14,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    marginBottom: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 35,
  },
  title: {fontSize: 25, color: '#fff', fontWeight: 'bold'},
});
