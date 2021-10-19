import React from 'react';
import {View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import styles from './DetailCard.style';

const DetailCard = ({details}) => {
  const {strMealThumb, strMeal, strArea, strInstructions, strYoutube} = details;

  const redirectToYoutube = () => Linking.openURL(strYoutube);

  return (
    <View>
      <Image style={styles.image} source={{uri: strMealThumb}} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{strMeal}</Text>
        <Text style={styles.area}>{strArea}</Text>
      </View>
      <View style={styles.hairline} />
      <Text style={styles.description}>{strInstructions}</Text>
      <TouchableOpacity
        style={styles.button_container}
        onPress={redirectToYoutube}>
        <Text style={styles.button_title}>Watch on Youtube</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailCard;
