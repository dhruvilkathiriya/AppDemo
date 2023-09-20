import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './rootNavigator';

import {routes} from './Routes';
import LoginScreen from '../screens/Login/Login';
import ProductListScreen from '../screens/ProductListScreen/ProductListScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen/CartScreen';

/* Screens */

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={routes.LoginScreen}
        screenOptions={{headerShown: false, gestureEnabled: false}}>
        <Stack.Screen name={routes.LoginScreen} component={LoginScreen} />
        <Stack.Screen
          name={routes.ProductListScreen}
          component={ProductListScreen}
        />
        <Stack.Screen
          name={routes.ProductDetailsScreen}
          component={ProductDetailsScreen}
        />
        <Stack.Screen name={routes.CartScreen} component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
