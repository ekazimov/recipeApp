import React from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';
import CategoryCard from '../../components/cards/CategoryCard';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import useFetch from '../../hooks/useFetch/useFetch';

const Categories = ({navigation}) => {
  const selectHandler = categoryName => {
    navigation.navigate('MealsScreen', {categoryName});
  };
  const {loading, data, error} = useFetch(Config.CATEGORIES_URL);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const renderCategory = ({item}) => (
    <CategoryCard
      category={item}
      selectHandler={() => selectHandler(item.strCategory)}
    />
  );

  return (
    <FlatList
      data={data.categories}
      renderItem={renderCategory}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Categories;
