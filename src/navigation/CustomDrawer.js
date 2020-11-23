//This is an example code for Navigation Drawer with Custom Side bar//
import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import Color from '../constants/Colors';
const CustomDrawer = (props) => {
  const proileImage =
    'https://aboutreact.com/wp-content/uploads/2018/07/sample_img.png';

  const items = [
    {
      navOptionThumb: 'camera',
      navOptionName: 'Products',
      screenToNavigate: 'TabsNavigator',
    },
    {
      navOptionThumb: 'image',
      navOptionName: 'Orders',
      screenToNavigate: 'Orders',
    },
    {
      navOptionThumb: 'image',
      navOptionName: 'Profile',
      screenToNavigate: 'Profile',
    },
    {
      navOptionThumb: 'image',
      navOptionName: 'Admin',
      screenToNavigate: 'Admin',
    },
    {
      navOptionThumb: 'image',
      navOptionName: 'Satting',
      screenToNavigate: 'Satting',
    },
  ];
  return (
    <View style={styles.sideMenuContainer}>
      {/*Top Large Image */}
      <Image
        source={{
          uri:
            'http://i2.cdn.turner.com/cnnnext/dam/assets/140926165711-john-sutter-profile-image-large-169.jpg',
        }}
        style={styles.sideMenuProfileIcon}
      />
      {/*Divider between Top Image and Sidebar Option*/}

      {/*Setting up Navigation Options from option array using loop*/}
      <View style={{width: '100%'}}>
        {items.map((item, key) => (
          <View
            style={{
              borderColor: Color.red,
              borderWidth: 1,
              alignItems: 'center',
              paddingBottom: 10,
              paddingTop: 10,
              backgroundColor:
                global.currentScreenIndex === key ? '#ffffff' : '#ffffff',
            }}
            key={key}>
            <View style={{marginRight: 10, marginLeft: 20}}>
              <Text
                style={{
                  fontSize: 15,
                  color: global.currentScreenIndex === key ? 'black' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: '100%',
    height: 100,
    borderColor: Color.red,
    borderWidth: 1,
  },
});
