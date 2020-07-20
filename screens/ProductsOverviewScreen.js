import React from 'react';
import { FlatList, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
//import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from '../components/shop/ProductItem';
import * as cartActions from '../store/actions/cart';
//import HeaderButton from '../components/UI/HeaderButton';

const ProductsOverviewScreen = ({ navigation, props }) => {
  
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

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
            onAddToCart={() => {
              dispatch(cartActions.addToCart(itemData.item));
            }}
        />
      )}
    />
  );
};

export default ProductsOverviewScreen;