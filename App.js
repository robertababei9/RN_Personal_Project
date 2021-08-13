import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import Routes from '@src/main/Routes'

export default function App() {


  return (
    <Provider store={store}>
        <Routes />
    </Provider>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
