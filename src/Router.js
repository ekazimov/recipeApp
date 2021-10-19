import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Categories from './screens/Categories';
import Meals from './screens/Meals';
import Details from './screens/Details';

const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesScreen"
          component={Categories}
          options={{
            title: 'Categories',
            headerTitleStyle: {color: '#FFA500'},
            contentStyle: {
              backgroundColor: '#FFA500',
            },
          }}
        />
        <Stack.Screen
          name="MealsScreen"
          component={Meals}
          options={{
            title: 'Meals',
            headerTitleStyle: {color: '#FFA500'},
            headerTintColor: '#FFA500',
            contentStyle: {
              backgroundColor: '#FFA500',
            },
          }}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={Details}
          options={{
            title: 'Details',
            headerTitleStyle: {color: '#FFA500'},
            headerTintColor: '#FFA500',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
