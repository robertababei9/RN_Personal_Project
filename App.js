import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Routes from '@src/main/Routes'

export default function App() {


  return (
        <Routes />

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
