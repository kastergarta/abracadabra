import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
// import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';

import ProductsOverviewScreen from './screens/ProductsOverviewScreen';
import CustomersOverviewScreen from './screens/CustomersOverviewScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default function App() {


  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ProductsScreen">
        <Drawer.Screen name="ProductsScreen" component={ProductsOverviewScreen} options={{ title: 'Products' }} />
        <Drawer.Screen name="CustomersScreen" component={CustomersOverviewScreen} options={{ title: 'Customers' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

