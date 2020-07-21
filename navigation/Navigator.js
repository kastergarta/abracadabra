import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProductsOverviewScreen from '../screens/ProductsOverviewScreen';
import CartScreen from '../screens/CartScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import OrdersScreen from '../screens/OrdersScreen';
import UserProductsScreen from '../screens/UserProductsScreen';

import HeaderButton from '../components/UI/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Platform } from 'react-native';


import { enableScreens } from 'react-native-screens';
enableScreens();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AllProducts" component={ProductsOverviewScreen} options={{
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item
                                title="Menu"
                                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                                onPress={() => {
                                    navigation.toggleDrawer();
                                }}
                            />
                        </HeaderButtons>
                      ),
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item
                                title="Cart"
                                iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                                onPress={() => {
                                    navigation.navigate('CartScreen')
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
            <Stack.Screen name="CartScreen" component={CartScreen} options={{ title: 'Cart' }} />
            <Stack.Screen name="OrdersScreen" component={OrdersScreen} options={{ title: 'Orders' }} />
        </Stack.Navigator>
    );
};

const Navigation = ( ) => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="ProductsScreen">
                <Drawer.Screen name="ProductsScreen" component={HomeStack} options={{
                    drawerIcon: drawerConfig => (
                        <Ionicons
                          name={Platform.OS === 'android' ? 'md-clipboard' : 'ios-clipboard'}
                          size={23}
                          color={drawerConfig.tintColor}
                        />
                      ),
                }}/>
                <Drawer.Screen name="CartScreen" component={CartScreen} options={{
                    drawerIcon: drawerConfig => (
                        <Ionicons
                          name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                          size={23}
                          color={drawerConfig.tintColor}
                        />
                      ),
                }}/>
                <Stack.Screen name="OrdersScreen" component={OrdersScreen} options={{ title: 'Orders' }} options={{
                    drawerIcon: drawerConfig => (
                        <Ionicons
                          name={Platform.OS === 'android' ? 'md-body' : 'ios-body'}
                          size={23}
                          color={drawerConfig.tintColor}
                        />
                      ),
                }}/>
                <Stack.Screen name="UserProductsScreen" component={UserProductsScreen} options={{ title: 'User Products' }} options={{
                    drawerIcon: drawerConfig => (
                        <Ionicons
                          name={Platform.OS === 'android' ? 'md-body' : 'ios-body'}
                          size={23}
                          color={drawerConfig.tintColor}
                        />
                      ),
                }}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;