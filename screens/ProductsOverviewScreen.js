import React from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const ProductsOverviewScreen = ({ navigation, props }) => {
  
  const products = useSelector(state => state.products.availableProducts);

  return (
    <View>
    <Text>This is Products Screen</Text>
    <Button
      title="Go to Customers"
      onPress={() =>
        navigation.navigate('CustomersScreen')
      }
    />
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => <Text>{itemData.item.title}</Text>}
    />
    </View>
  );
};

export default ProductsOverviewScreen;