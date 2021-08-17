import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Profile() {
    return (
        <View style={styles.container}>
            <Text>Profile screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
