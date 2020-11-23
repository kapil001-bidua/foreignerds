import React from 'react';

import {Platform, Dimensions} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import Colors from '../constants/Colors';
import Profile from '../screens/shop/Profile';
import AuthScreen from '../screens/user/AuthScreen';

import CustomerDrawer from './CustomDrawer';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import Satting from '../screens/shop/Satting';
const ScreenWidth = Dimensions.get('window').width;
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
};
const ProductsNavigator = createStackNavigator();
const ProductsNavigatorScreen = () => {
  return (
    <ProductsNavigator.Navigator>
      <ProductsNavigator.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
        options={{headerShown: false}}
      />
      <ProductsNavigator.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{headerShown: false}}
      />
      <ProductsNavigator.Screen
        name="Cart"
        component={CartScreen}
        options={{headerShown: false}}
      />
    </ProductsNavigator.Navigator>
  );
};
const OrdersNavigatorScreen = createStackNavigator();
const OrdersNavigator = () => {
  return (
    <OrdersNavigatorScreen.Navigator>
      <OrdersNavigatorScreen.Screen
        name="Orders"
        component={OrdersScreen}
        options={{title: 'Welcome', headerShown: false}}
      />
    </OrdersNavigatorScreen.Navigator>
  );
};

const AdminNavigatorScreen = createStackNavigator();
const AdminNavigator = () => {
  return (
    <AdminNavigatorScreen.Navigator>
      <AdminNavigatorScreen.Screen
        name="UserProducts"
        component={UserProductsScreen}
        options={{title: 'Welcome', headerShown: false}}
      />
      <AdminNavigatorScreen.Screen
        name="Orders"
        component={OrdersScreen}
        options={{title: 'Welcome', headerShown: false}}
      />
      <AdminNavigatorScreen.Screen
        name="EditProduct"
        component={EditProductScreen}
        options={{title: 'Welcome', headerShown: false}}
      />
    </AdminNavigatorScreen.Navigator>
  );
};
function Dreawer() {
  return (
    <Drawer.Navigator
      drawerContent={CustomerDrawer}
      drawerStyle={{width: ScreenWidth / 1.6, shadowColor: 'black'}}>
      <Drawer.Screen name="TabsNavigator" component={TabsNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Satting" component={Satting} />
      <Drawer.Screen name="Orders" component={OrdersNavigator} />
      <Drawer.Screen name="Admin" component={AdminNavigator} />
    </Drawer.Navigator>
  );
}
const Tabs = AnimatedTabBarNavigator();
const TabsNavigator = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'white',
      }}>
      <Tabs.Screen
        name="Products"
        component={ProductsNavigatorScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name="ios-home"
              size={size ? size : 24}
              color={focused ? color : '#fff'}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name="ios-person"
              size={size ? size : 24}
              color={focused ? color : '#FFF'}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dreawer"
          component={Dreawer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const ProductsNavigator = createStackNavigator(
//   {
//     ProductsOverview: ProductsOverviewScreen,
//     ProductDetail: ProductDetailScreen,
//     Cart: CartScreen,
//   },
//   {
//     navigationOptions: {
//       drawerIcon: (drawerConfig) => (
//         <Ionicons
//           name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
//           size={23}
//           color={drawerConfig.tintColor}
//         />
//       ),
//     },
//     defaultNavigationOptions: defaultNavOptions,
//   }
// );

// const OrdersNavigator = createStackNavigator(
//   {
//     Orders: OrdersScreen,
//   },
//   {
//     navigationOptions: {
//       drawerIcon: (drawerConfig) => (
//         <Ionicons
//           name={Platform.OS === "android" ? "md-list" : "ios-list"}
//           size={23}
//           color={drawerConfig.tintColor}
//         />
//       ),
//     },
//     defaultNavigationOptions: defaultNavOptions,
//   }
// );

// const AdminNavigator = createStackNavigator(
//   {
//     UserProducts: UserProductsScreen,
//     EditProduct: EditProductScreen,
//   },
//   {
//     navigationOptions: {
//       drawerIcon: (drawerConfig) => (
//         <Ionicons
//           name={Platform.OS === "android" ? "md-create" : "ios-create"}
//           size={23}
//           color={drawerConfig.tintColor}
//         />
//       ),
//     },
//     defaultNavigationOptions: defaultNavOptions,
//   }
// );

// const ShopNavigator = createDrawerNavigator(
//   {
//     Products: ProductsNavigator,
//     Orders: OrdersNavigator,
//     Admin: AdminNavigator,
//   },
//   {
//     contentOptions: {
//       activeTintColor: Colors.primary,
//     },
//   }
// );

export default App;

// import React from 'react';

// import {Platform} from 'react-native';

// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import {createDrawerNavigator} from 'react-navigation-drawer';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
// import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
// import CartScreen from '../screens/shop/CartScreen';
// import OrdersScreen from '../screens/shop/OrdersScreen';
// import UserProductsScreen from '../screens/user/UserProductsScreen';
// import EditProductScreen from '../screens/user/EditProductScreen';
// import Colors from '../constants/Colors';
// const ScreenWidth = Dimensions.get('window').width;
// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
// const defaultNavOptions = {
//   headerStyle: {
//     backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
//   },
//   headerTitleStyle: {
//     fontFamily: 'open-sans-bold',
//   },
//   headerBackTitleStyle: {
//     fontFamily: 'open-sans',
//   },
//   headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
// };
// const ProductsNavigator = createStackNavigator();
// const ProductsNavigatorScreen = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />

//       <ProductsNavigator.Navigator>
//         <ProductsNavigator.Screen
//           name="ProductsOverview"
//           component={ProductsOverviewScreen}
//           options={{headerShown: false}}
//         />
//         <ProductsNavigator.Screen
//           name="ProductDetail"
//           component={ProductDetailScreen}
//           options={{headerShown: false}}
//         />
//         <ProductsNavigator.Screen
//           name="Cart"
//           component={CartScreen}
//           options={{headerShown: false}}
//         />
//       </ProductsNavigator.Navigator>
//     </>
//   );
// };
// const OrdersNavigatorScreen = createStackNavigator();
// const OrdersNavigator = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />

//       <OrdersNavigatorScreen.Navigator>
//         <OrdersNavigatorScreen.Screen
//           name="Orders"
//           component={OrdersScreen}
//           options={{title: 'Welcome', headerShown: false}}
//         />
//       </OrdersNavigatorScreen.Navigator>
//     </>
//   );
// };

// const AdminNavigatorScreen = createStackNavigator();
// const AdminNavigator = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />

//       <AdminNavigatorScreen.Navigator>
//         <AdminNavigatorScreen.Screen
//           name="UserProducts"
//           component={UserProductsScreen}
//           options={{title: 'Welcome', headerShown: false}}
//         />
//         <AdminNavigatorScreen.Screen
//           name="Orders"
//           component={OrdersScreen}
//           options={{title: 'Welcome', headerShown: false}}
//         />
//         <AdminNavigatorScreen.Screen
//           name="EditProduct"
//           component={EditProductScreen}
//           options={{title: 'Welcome', headerShown: false}}
//         />
//       </AdminNavigatorScreen.Navigator>
//     </>
//   );
// };
// function Dreawer() {
//   return (
//     <Drawer.Navigator
//       initialRouteName="StackDreaewerScreen"
//       drawerContent={CustomerDrawer}
//       drawerStyle={{width: ScreenWidth / 1.6, shadowColor: 'black'}}>
//       <Drawer.Screen name="Products" component={ProductsNavigatorScreen} />

//       <Drawer.Screen name="Orders" component={OrdersNavigator} />
//       <Drawer.Screen name="Admin" component={AdminNavigator} />
//     </Drawer.Navigator>
//   );
// }

// const App = () => {
//   return (
//     <>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="Dreawer"
//             component={Dreawer}
//             options={{headerShown: false}}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </>
//   );
// };

// const ProductsNavigator = createStackNavigator(
//   {
//     ProductsOverview: ProductsOverviewScreen,
//     ProductDetail: ProductDetailScreen,
//     Cart: CartScreen,
//   },
//   {
//     navigationOptions: {
//       drawerIcon: (drawerConfig) => (
//         <Ionicons
//           name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
//           size={23}
//           color={drawerConfig.tintColor}
//         />
//       ),
//     },
//     defaultNavigationOptions: defaultNavOptions,
//   },
// );

// const OrdersNavigator = createStackNavigator(
//   {
//     Orders: OrdersScreen,
//   },
//   {
//     navigationOptions: {
//       drawerIcon: (drawerConfig) => (
//         <Ionicons
//           name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
//           size={23}
//           color={drawerConfig.tintColor}
//         />
//       ),
//     },
//     defaultNavigationOptions: defaultNavOptions,
//   },
// );

// const AdminNavigator = createStackNavigator(
//   {
//     UserProducts: UserProductsScreen,
//     EditProduct: EditProductScreen,
//   },
//   {
//     navigationOptions: {
//       drawerIcon: (drawerConfig) => (
//         <Ionicons
//           name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
//           size={23}
//           color={drawerConfig.tintColor}
//         />
//       ),
//     },
//     defaultNavigationOptions: defaultNavOptions,
//   },
// );

// const ShopNavigator = createDrawerNavigator(
//   {
//     Products: ProductsNavigator,
//     Orders: OrdersNavigator,
//     Admin: AdminNavigator,
//   },
//   {
//     contentOptions: {
//       activeTintColor: Colors.primary,
//     },
//   },
// );

// export default createAppContainer(ShopNavigator);
