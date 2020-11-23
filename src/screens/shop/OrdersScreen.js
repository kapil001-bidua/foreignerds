import React from 'react';
import {FlatList, Text, Platform, View} from 'react-native';
import {useSelector} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import OrderItem from '../../components/shop/OrderItem';
import Toolbar from '../../components/Toolbar';
const OrdersScreen = (props) => {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <View>
      <Toolbar
        name={'Orders'}
        menu={'ios-menu'}
        openDrawer={() => {
          props.navigation.openDrawer();
        }}
        onSelect={() => {
          props.navigation.navigate('Cart');
        }}
      />

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <OrderItem
            amount={itemData.item.totalAmount}
            date={itemData.item.readableDate}
            items={itemData.item.items}
          />
        )}
      />
    </View>
  );
};

OrdersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Orders',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default OrdersScreen;
