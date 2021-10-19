import React from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';
import DetailCard from '../../components/cards/DetailCard';
import useFetch from '../../hooks/useFetch/useFetch';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Details = ({route}) => {
  const {id} = route.params;
  const {loading, data, error} = useFetch(`${Config.DETAILS_URL}${id}`);

  const renderDetail = ({item}) => <DetailCard details={item} />;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <FlatList
      data={data.meals}
      renderItem={renderDetail}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Details;
