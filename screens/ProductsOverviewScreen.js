import React from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../components/shop/ProductItem';

const ProductsOverviewScreen = ({ navigation, props }) => {
  
  const products = useSelector(state => state.products.availableProducts);

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem 
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onViewDetail={() => {
              navigation.navigate('Details', {
                productId: itemData.item.id,
                productTitle: itemData.item.title
              });
            }}
            onAddToCart={() => {}}
        />
      )}
    />
  );
};

export default ProductsOverviewScreen;