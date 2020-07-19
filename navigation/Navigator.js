import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProductsOverviewScreen from '../screens/ProductsOverviewScreen';
import CustomersOverviewScreen from '../screens/CustomersOverviewScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

import { enableScreens } from 'react-native-screens';
enableScreens();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="ProductsScreen">
                <Drawer.Screen name="ProductsScreen" component={ProductsOverviewScreen} options={{ title: 'Products' }} />
                <Drawer.Screen name="CustomersScreen" component={CustomersOverviewScreen} options={{ title: 'Customers' }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;