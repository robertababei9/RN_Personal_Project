import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function HomeInfo() {
    return (
        <View style={styles.container}>
            <Text>Second screen of "Home"</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
