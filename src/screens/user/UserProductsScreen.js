import React from 'react';
import {FlatList, Button, Platform, Alert, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import ProductItem from '../../components/shop/ProductItem';
import Colors from '../../constants/Colors';
import * as productsActions from '../../store/actions/products';
import Toolbar from '../../components/Toolbar';
const UserProductsScreen = (props) => {
  const userProducts = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();

  const editProductHandler = (id, title, imageUrl, price, description) => {
    props.navigation.navigate('EditProduct', {
      productId: id,
      productTitle: title,
      imageUrl: imageUrl,
      price: price,
      description: description,
    });
  };

  const deleteHandler = (id) => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      {text: 'No', style: 'default'},
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(productsActions.deleteProduct(id));
        },
      },
    ]);
  };

  return (
    <View>
      <Toolbar
        name={'Product'}
        menu={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
        card={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
        openDrawer={() => {
          props.navigation.openDrawer();
        }}
        onSelect={() => {
          props.navigation.navigate('EditProduct');
        }}
      />
      <FlatList
        data={userProducts}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onSelect={() => {
              editProductHandler(
                itemData.item.id,
                itemData.item.title,
                itemData.item.imageUrl,
                itemData.item.price,
                itemData.item.description,
              );
            }}>
            <Button
              color={Colors.primary}
              title="Edit"
              onPress={() => {
                editProductHandler(
                  itemData.item.id,
                  itemData.item.title,
                  itemData.item.imageUrl,
                  itemData.item.price,
                  itemData.item.description,
                );
              }}
            />
            <Button
              color={Colors.primary}
              title="Delete"
              onPress={deleteHandler.bind(this, itemData.item.id)}
            />
          </ProductItem>
        )}
      />
    </View>
  );
};

UserProductsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Products',
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
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add"
          iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
          onPress={() => {
            navData.navigation.navigate('EditProduct');
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default UserProductsScreen;
