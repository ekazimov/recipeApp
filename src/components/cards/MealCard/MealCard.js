import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './MealCard.style';

const MealCard = ({meal, selectHandler}) => {
  const {strMeal, strMealThumb} = meal;
  return (
    <TouchableWithoutFeedback onPress={selectHandler}>
      <View styles={styles.container}>
        <View style={styles.image_container}>
          <Image style={styles.image} source={{uri: strMealThumb}} />
        </View>
        <View style={styles.title_container}>
          <Text style={styles.title}>{strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
