import React, {useState} from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import ShopNavigator from './src/navigation/ShopNavigator';

import Store from './src/store/index';

export default function App() {
  return (
    <Provider store={Store}>
      <ShopNavigator />
    </Provider>
  );
}
