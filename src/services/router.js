import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { PopularMovies, MovieDetails } from '../pages';
import { LogoTitle } from '../components';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0B253F',
            //style to remove faint white line on ios, that is visible between header and image on movie details page
            shadowOpacity: 0,
          },
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerTintColor: '#fff',
          headerTitle: (props) => <LogoTitle {...props} />,
        }}>
        <Stack.Screen name="PopularMovies" component={PopularMovies} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
