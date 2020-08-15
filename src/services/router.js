import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MoviesHome } from '../pages';
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
          },
          headerTitleAlign: 'center',
          headerTitle: (props) => <LogoTitle {...props} />,
        }}>
        <Stack.Screen name="Home" component={MoviesHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
