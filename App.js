import React from 'react';
import { createStore, combineReducers } from 'redux';
//import 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import productsReducer from './store/reducers/products';
import { enableScreens } from 'react-native-screens';

import ProductsOverviewScreen from './screens/ProductsOverviewScreen';
import CustomersOverviewScreen from './screens/CustomersOverviewScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

enableScreens();


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);


export default function App() {


  return (
    <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ProductsScreen">
        <Drawer.Screen name="ProductsScreen" component={ProductsOverviewScreen} options={{ title: 'Products' }} />
        <Drawer.Screen name="CustomersScreen" component={CustomersOverviewScreen} options={{ title: 'Customers' }} />
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

