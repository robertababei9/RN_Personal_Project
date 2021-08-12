import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'

export default function Splash() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#FF4C29"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})
