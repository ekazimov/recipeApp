import React from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';
import MealCard from '../../components/cards/MealCard';
import useFetch from '../../hooks/useFetch/useFetch';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Meals = ({navigation, route}) => {
  const {categoryName} = route.params;
  const {loading, data, error} = useFetch(`${Config.MEALS_URL}${categoryName}`);

  const selectHandler = id => {
    navigation.navigate('DetailsScreen', {id});
  };

  const renderMeal = ({item}) => (
    <MealCard meal={item} selectHandler={() => selectHandler(item.idMeal)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <FlatList
      data={data.meals}
      renderItem={renderMeal}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Meals;
