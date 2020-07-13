import React from 'react';
import { Text, View, Button } from 'react-native';

const ProductsOverviewScreen = ({ navigation }) => {

  return (
    <View>
    <Text>This is Products Screen</Text>
    <Button
      title="Go to Customers"
      onPress={() =>
        navigation.navigate('CustomersScreen')
      }
    />
    </View>
  );
};

export default ProductsOverviewScreen;