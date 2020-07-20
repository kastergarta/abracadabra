import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProductsOverviewScreen from '../screens/ProductsOverviewScreen';
import CartScreen from '../screens/CartScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';


import HeaderButton from '../components/UI/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Platform } from 'react-native';


import { enableScreens } from 'react-native-screens';
enableScreens();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AllProducts" component={ProductsOverviewScreen} options={{
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          onPress={() => {
              navData.navigation.navigate('Cart')
          }}
        />
      </HeaderButtons>
                      ),
                  }}
                />
            <Stack.Screen name="Details" component={ProductDetailScreen} options={{
                headerTitle: 'UUUUUU'
            }}
            />
        </Stack.Navigator>
    );
};

const Navigation = ( ) => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="ProductsScreen">
                <Drawer.Screen name="ProductsScreen" component={HomeStack} />
                <Drawer.Screen name="CartScreen" component={CartScreen} options={{ title: 'Cart' }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;