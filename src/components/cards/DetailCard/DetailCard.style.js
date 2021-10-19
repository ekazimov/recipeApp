import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
  },
  body_container: {
    padding: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#A5292A',
  },
  area: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A5292A',
  },
  hairline: {
    borderBottomColor: '#bdbdbd',
    borderBottomWidth: 1,
  },
  description: {
    padding: 5,
  },
  button_container: {
    padding: 12,
    margin: 10,
    backgroundColor: '#FF0000',
    borderRadius: 5,
  },
  button_title: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
