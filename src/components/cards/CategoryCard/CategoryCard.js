import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({category, selectHandler}) => {
  const {strCategory, strCategoryThumb} = category;
  return (
    <TouchableWithoutFeedback onPress={selectHandler}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: strCategoryThumb}} />
        <Text style={styles.title}>{strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
