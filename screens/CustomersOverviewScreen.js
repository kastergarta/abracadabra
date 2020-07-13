import React from 'react';
import { Text, View, Button } from 'react-native';

const CustomersOverviewScreen = ({ navigation }) => {
    
  return (
    <View>
    <Text>This is Customers Screen</Text>
    <Button
      title="Go to Products"
      onPress={() =>
        navigation.navigate('ProductsScreen')
      }
    /> 
    </View>
  );
};

export default CustomersOverviewScreen;